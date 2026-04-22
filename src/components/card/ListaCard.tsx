import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardFooter,
  CardContent,
} from '../ui/card'
import { useListaStore } from '../../context/useListaStore'
import { Button } from '../ui/button'
import { TaskCard } from './TaskCard'
interface ListCardInterface {
  readonly projectID: string
}
export function ListaCard({ projectID }: ListCardInterface) {
  const project = useListaStore((state) =>
    state.lista.find((el) => el.id === projectID),
  )
  console.log(project)
  return (
    <Card size='sm' className=' w-full max-w-sm'>
      <CardHeader>
        <CardTitle className='text-xl capitalize'>{project?.name}</CardTitle>
        <CardDescription>
          <strong>Fecha de creacion: </strong>
          {`${project?.createdDate.toDateString()} - ${project?.createdDate.getHours()}:${project?.createdDate.getMinutes()}`}
        </CardDescription>
        <CardContent>
          {project?.task.map((val) => {
            return (
              <TaskCard key={val.id} projectId={projectID} taskID={val.id} />
            )
          })}
        </CardContent>
        <CardFooter>
          <Button className='w-full' variant='outline'>
            Agregar Tarea
          </Button>
        </CardFooter>
      </CardHeader>
    </Card>
  )
}
