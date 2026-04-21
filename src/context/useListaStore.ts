import { create } from 'zustand'
import type { ListaItem } from '../types/store'

interface ListaStore {
  lista: ListaItem[]
  addLista: (value: ListaItem) => void
  removeLista: (value: number) => void
  toggleTaskStatus: (listaId: number, taskId: number) => void
}

export const useListaStore = create<ListaStore>((set) => ({
  lista: [
    {
      name: 'hola',
      createdDate: new Date(),
      task: [],
      id: 123,
    },
  ],
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
      lista: state.lista.map((lista) =>
        lista.id === listaId
          ? {
              ...lista,
              task: lista.task.map((task) =>
                task.id === taskId ? { ...task, status: !task.status } : task,
              ),
            }
          : lista,
      ),
    }))
  },
}))
