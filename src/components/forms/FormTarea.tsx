import { Field, FieldGroup, FieldSet, FieldLabel } from '../ui/field'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { DialogClose, DialogFooter } from '../ui/dialog'
import { useListaStore } from '../../context/useListaStore'
import { generarIdUnico } from '../../scripts/helpers/random'
import { useRef } from 'react'
import { toast } from 'sonner'

export function FormTarea({ listaId }: { readonly listaId: string }) {
  const addTarea = useListaStore((state) => state.addTarea)
  const nombreRef = useRef<HTMLInputElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const handlesubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (nombreRef.current?.value) {
      addTarea(listaId, {
        name: nombreRef.current.value,
        status: false,
        id: generarIdUnico(),
      })
      closeRef.current?.click()
      toast.success('Se ha agregado una tarea.')
    }
  }
  return (
    <form onSubmit={handlesubmit}>
      <FieldGroup className='pb-3'>
        <FieldSet>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor='nombre-tarea'>Nombre</FieldLabel>
              <Input
                id='nombre-tarea'
                placeholder='Ej. hacer la compra, lavar la ropa..etc'
                required
                ref={nombreRef}
              />
            </Field>
          </FieldGroup>
        </FieldSet>
      </FieldGroup>
      <DialogFooter>
        <Field orientation='horizontal' className='justify-end'>
          <DialogClose asChild>
            <Button variant='outline' type='button' ref={closeRef}>
              Cancel
            </Button>
          </DialogClose>
          <Button type='submit'>Agregar</Button>
        </Field>
      </DialogFooter>
    </form>
  )
}
