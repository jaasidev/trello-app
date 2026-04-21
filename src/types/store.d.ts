export interface TaskItem {
  name: string
  status: boolean
  id:number
}
export interface ListaItem {
  name: string
  id: number
  createdDate: Date
  task: TaskItem[]
}
