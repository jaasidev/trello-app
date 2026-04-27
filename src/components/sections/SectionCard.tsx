import { useListaStore } from '../../context/useListaStore'
import { ListaCard } from '../card/ListaCard'
import { DragDropProvider } from '@dnd-kit/react'
import { move } from '@dnd-kit/helpers'

export function SectionCard() {
  const lista = useListaStore((state) => state.lista)
  const setLista = useListaStore((state) => state.setLista)
  return (
    <DragDropProvider
      onDragEnd={(event) => {
        setLista(move(lista, event))
      }}
    >
      <section className='flex flex-wrap grow py-4 container gap-3'>
        {lista.map((elemento, index) => (
          <ListaCard key={elemento.id} projectID={elemento.id} index={index} />
        ))}
      </section>
    </DragDropProvider>
  )
}
