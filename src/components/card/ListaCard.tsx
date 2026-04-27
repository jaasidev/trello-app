import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardFooter,
  CardContent,
  CardAction,
} from '../ui/card'
import { useListaStore } from '../../context/useListaStore'
import { Button } from '../ui/button'
import { TaskCard } from './TaskCard'
import { IconArrowsMove, IconTrash } from '@tabler/icons-react'
import { toast } from 'sonner'
import { ModalTarea } from '../modal/ModalTarea'
import { useSortable } from '@dnd-kit/react/sortable'
import { useRef } from 'react'

interface ListCardInterface {
  readonly projectID: string
  readonly index: number
}
export function ListaCard({ projectID, index }: ListCardInterface) {
  const project = useListaStore((state) =>
    state.lista.find((el) => el.id === projectID),
  )
  const handleMove = useRef<HTMLButtonElement>(null)
  const { ref } = useSortable({
    id: projectID,
    index: index,
    handle: handleMove,
  })
  const removeLista = useListaStore((state) => state.removeLista)
  const handleDelete = () => {
    removeLista(projectID)
    toast.error('Lista eliminada')
  }
  if (!project) return null
  return (
    <Card size='sm' className=' w-full max-w-sm relative h-max' ref={ref}>
      <CardHeader>
        <CardTitle className='text-xl capitalize'>
          Lista: {project?.name}
        </CardTitle>
        <CardDescription>
          <strong>Fecha de creacion: </strong>
          {`${project.createdDate.toDateString()} - ${project.createdDate.getHours()}:${project.createdDate.getMinutes()}`}
        </CardDescription>
        <CardAction>
          <Button variant='ghost' onClick={handleDelete}>
            <IconTrash />
          </Button>
          <Button ref={handleMove} variant='ghost' className='cursor-grab'>
            <IconArrowsMove />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <h3 className='text-lg mb-2'>Tareas:</h3>
        <div className='flex flex-col gap-2'>
          {project.task.length > 0 ? (
            project.task.map((val) => {
              return (
                <TaskCard key={val.id} projectId={projectID} taskID={val.id} />
              )
            })
          ) : (
            <div className='flex items-center justify-center bg-gray-100 py-2 dark:bg-card border rounded-lg'>
              No hay tareas aun
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <ModalTarea listaId={project.id} />
      </CardFooter>
    </Card>
  )
}
