import { Field, FieldGroup, FieldSet, FieldLabel } from '../ui/field'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { DialogClose, DialogFooter } from '../ui/dialog'
import { useListaStore } from '../../context/useListaStore'
import { generarIdUnico } from '../../scripts/helpers/random'
import { useRef } from 'react'
export function FormLista() {
  const addLista = useListaStore((state) => state.addLista)
  const nombreRef = useRef<HTMLInputElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const handlesubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (nombreRef.current?.value) {
      addLista({
        name: nombreRef.current.value,
        createdDate: new Date(),
        task: [],
        id: generarIdUnico(),
      })
      closeRef.current?.click()
    }
  }
  return (
    <form onSubmit={handlesubmit}>
      <FieldGroup className='pb-3'>
        <FieldSet>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor='nombre-lista'>Nombre</FieldLabel>
              <Input
                id='nombre-lista'
                placeholder='Ej. compras, tareas domésticas..etc'
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
