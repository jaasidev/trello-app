import { useListaStore } from '../../context/useListaStore'
import { ListaCard } from '../card/ListaCard'
export function SectionCard() {
  const lista = useListaStore((state) => state.lista)
  return (
    <section className='flex flex-wrap grow py-4 container'>
      {lista.map((elemento) => (
        <ListaCard key={elemento.id} projectID={elemento.id} />
      ))}
    </section>
  )
}
