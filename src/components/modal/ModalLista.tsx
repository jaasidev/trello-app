import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog'
import { Tooltip, TooltipContent, TooltipTrigger } from '..//ui/tooltip'
import { Button } from '../ui/button'
import { IconPlus } from '@tabler/icons-react'

export function ModalLista() {
  return (
    <Dialog>
      <DialogTrigger>
        <Tooltip>
          <TooltipTrigger>
            <Button
              variant='ghost'
              aria-label='Añadir Lista'
              className='p-2 rounded-full'
            >
              <IconPlus />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Añadir Lista</p>
          </TooltipContent>
        </Tooltip>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
