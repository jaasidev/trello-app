import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog'
import { FormTarea } from '../forms/FormTarea'
import { Button } from '../ui/button'

export function ModalTarea({ listaId }: { readonly listaId: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='w-full' variant='default'>
          Agregar Tarea
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Añadir una nueva Tarea</DialogTitle>
          <DialogDescription>
            Crea una nueva tarea para organizar tu lista.
          </DialogDescription>
        </DialogHeader>
        <FormTarea listaId={listaId} />
      </DialogContent>
    </Dialog>
  )
}
