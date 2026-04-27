import { SectionCard } from './components/sections/SectionCard'
import { Header } from './components/navs/Header'
import { TooltipProvider } from './components/ui/tooltip'
import { Toaster } from './components/ui/sonner'
import { Footer } from './components/footer/Footer'

function App() {
  return (
    <div className='min-h-screen flex flex-col'>
      <TooltipProvider>
        <Header />
        <main className='flex justify-center grow'>
          <SectionCard />
        </main>
      </TooltipProvider>
      <Footer />
      <Toaster />
    </div>
  )
}

export default App
