import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog'
import { Tooltip, TooltipContent, TooltipTrigger } from '..//ui/tooltip'
import { IconPlus } from '@tabler/icons-react'
import { FormLista } from '../forms/FormLista'
import { Button } from '../ui/button'

export function ModalLista() {
  return (
    <Dialog>
      <Tooltip>
        <TooltipTrigger asChild>
          <DialogTrigger asChild>
            <Button variant='ghost' className='rounded-full'>
              <IconPlus />
            </Button>
          </DialogTrigger>
        </TooltipTrigger>
        <TooltipContent>
          <p>Añadir Lista</p>
        </TooltipContent>
      </Tooltip>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Añadir una nueva Lista</DialogTitle>
          <DialogDescription>
            Crea una nueva lista para organizar tus tarjetas en tu tablero de
            Trello.
          </DialogDescription>
        </DialogHeader>
        <FormLista />
      </DialogContent>
    </Dialog>
  )
}
