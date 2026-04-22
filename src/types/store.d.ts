export interface TaskItem {
  name: string
  status: boolean
  id: string
}
export interface ListaItem {
  name: string
  id: string
  createdDate: Date
  task: TaskItem[]
}
