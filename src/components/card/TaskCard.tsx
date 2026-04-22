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

  if (!task) return null

  return (
    <div className='flex items-center gap-3 rounded-lg bg-card p-3 ring-1 ring-foreground/10 transition-all hover:bg-muted'>
      <Checkbox checked={task.status} className='mt-0.5' />

      <span className='flex-1 truncate text-sm font-medium text-card-foreground'>
        {task.name}
      </span>

      <Badge
        variant={task.status ? 'default' : 'destructive'}
        className='ml-auto shrink-0'
      >
        {task.status ? 'Completado' : 'Error'}
      </Badge>
    </div>
  )
}
