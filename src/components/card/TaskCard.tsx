import { Checkbox } from '../ui/checkbox'
import { Badge } from '../ui/badge'
import { useListaStore } from '../../context/useListaStore'

interface TaskCardProps {
  readonly taskID: string
  readonly projectId: string
}

export function TaskCard({ taskID, projectId }: TaskCardProps) {
  const task = useListaStore((state) => {
    const project = state.lista.find((el) => el.id === projectId)
    return project?.task.find((val) => val.id === taskID)
  })
  const toogleTaskStatus = useListaStore((state) => state.toggleTaskStatus)

  const style = task?.status
    ? 'bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300'
    : 'bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300'

  if (!task) return null

  const handleChange = () => {
    toogleTaskStatus(projectId, taskID)
  }

  return (
    <div className='flex items-center gap-3 rounded-lg bg-card p-3 ring-1 ring-foreground/10 transition-all hover:bg-muted'>
      <Checkbox
        className='mt-0.5'
        onCheckedChange={handleChange}
        checked={task.status}
      />

      <span className='flex-1 truncate text-sm font-medium text-card-foreground'>
        {task.name}
      </span>

      <Badge className={`ml-auto shrink-0 ${style}`}>
        {task.status ? 'Completado' : 'Pendiente'}
      </Badge>
    </div>
  )
}
