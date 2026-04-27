export const Footer = () => {
  return (
    <footer className='flex justify-center px-4 py-4 sm:px-6 border-t'>
      <p className='text-center font-medium text-balance'>
        {`©${new Date().getFullYear()}`} - Hecho con ❤️ por Jaasiel Beltrán.
      </p>
    </footer>
  )
}
