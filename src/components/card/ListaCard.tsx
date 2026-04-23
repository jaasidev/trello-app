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
import { IconTrash } from '@tabler/icons-react'
import { toast } from 'sonner'
interface ListCardInterface {
  readonly projectID: string
}
export function ListaCard({ projectID }: ListCardInterface) {
  const project = useListaStore((state) =>
    state.lista.find((el) => el.id === projectID),
  )
  const removeLista = useListaStore((state) => state.removeLista)
  console.log(project)
  const handleDelete = () => {
    removeLista(projectID)
    toast.error('Lista eliminada')
  }
  return (
    <Card size='sm' className=' w-full max-w-sm relative'>
      <CardHeader>
        <CardTitle className='text-xl capitalize'>{project?.name}</CardTitle>
        <CardDescription>
          <strong>Fecha de creacion: </strong>
          {`${project?.createdDate.toDateString()} - ${project?.createdDate.getHours()}:${project?.createdDate.getMinutes()}`}
        </CardDescription>
        <CardAction>
          <Button variant='ghost' onClick={handleDelete}>
            <IconTrash />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        {project?.task.map((val) => {
          return <TaskCard key={val.id} projectId={projectID} taskID={val.id} />
        })}
      </CardContent>
      <CardFooter>
        <Button className='w-full' variant='outline'>
          Agregar Tarea
        </Button>
      </CardFooter>
    </Card>
  )
}
