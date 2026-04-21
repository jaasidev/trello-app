import { ModalLista } from '../modal/ModalLista'
import { AlignBoxLeftBottomLogo } from '../svg/logo'
export function Header() {
  return (
    <header className='border-b w-full p-4 flex justify-center items-center'>
      <div className='container flex justify-between items-center'>
        <div className='logo flex items-center gap-2'>
          <AlignBoxLeftBottomLogo />
          <span className='text-2xl font-semibold'>J-Trello</span>
        </div>
        <div className='options'>
          <ModalLista />
        </div>
      </div>
    </header>
  )
}
