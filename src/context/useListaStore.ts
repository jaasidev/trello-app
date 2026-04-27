import { create } from 'zustand'
import type { ListaItem, TaskItem } from '../types/store'

const toggleTaskInLists = (
  listas: ListaItem[],
  listaId: string,
  taskId: string,
): ListaItem[] => {
  return listas.map((lista) => {
    if (lista.id !== listaId) return lista

    return {
      ...lista,
      task: lista.task.map((task) =>
        task.id === taskId ? { ...task, status: !task.status } : task,
      ),
    }
  })
}
const addTareaInList = (
  listas: ListaItem[],
  listaID: string,
  newtask: TaskItem,
): ListaItem[] => {
  return listas.map((val) => {
    if (val.id !== listaID) return val

    return {
      ...val,
      task: [...val.task, newtask],
    }
  })
}

const removeTareaInList = (
  listas: ListaItem[],
  listaID: string,
  taskID: string,
): ListaItem[] => {
  return listas.map((val) => {
    if (val.id !== listaID) return val

    return {
      ...val,
      task: val.task.filter((el) => el.id !== taskID),
    }
  })
}

interface ListaStore {
  lista: ListaItem[]
  addLista: (value: ListaItem) => void
  removeLista: (value: string) => void
  toggleTaskStatus: (listaId: string, taskId: string) => void
  addTarea: (listaId: string, newTarea: TaskItem) => void
  removeTarea: (listaId: string, taskID: string) => void
  setLista: (value: ListaItem[]) => void
}

export const useListaStore = create<ListaStore>((set) => ({
  lista: [],
  addLista: (value) => {
    set((state) => ({ lista: [...state.lista, value] }))
  },
  removeLista: (value) => {
    set((state) => ({
      lista: state.lista.filter((el) => el.id !== value),
    }))
  },
  toggleTaskStatus: (listaId, taskId) => {
    set((state) => ({
      lista: toggleTaskInLists(state.lista, listaId, taskId),
    }))
  },
  addTarea: (listaId, newTarea) => {
    set((state) => ({
      lista: addTareaInList(state.lista, listaId, newTarea),
    }))
  },
  removeTarea: (listaId, taskID) => {
    set((state) => ({
      lista: removeTareaInList(state.lista, listaId, taskID),
    }))
  },
  setLista: (value) => {
    set({ lista: value })
  },
}))
