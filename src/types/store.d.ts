interface TaskItem {
  name: string
  status: boolean
}
export interface ListaItem {
  name: string
  id: number
  createdDate: Date
  task: TaskItem[]
}
