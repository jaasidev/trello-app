import { SectionCard } from './components/sections/SectionCard'
import { Header } from './components/navs/Header'
import { TooltipProvider } from './components/ui/tooltip'

function App() {
  return (
    <TooltipProvider>
      <Header />
      <main className='flex items-center justify-center'>
        <SectionCard />
      </main>
    </TooltipProvider>
  )
}

export default App
