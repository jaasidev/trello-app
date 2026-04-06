import { create } from 'zustand'
import type { ListaItem } from '../types/store'

interface ListaStore {
  lista: ListaItem[]
  addLista: (value: ListaItem) => void
  removeLista: (value: number) => void
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
  }
}))
