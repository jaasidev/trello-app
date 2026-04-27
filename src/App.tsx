import { SectionCard } from "./components/sections/SectionCard";
import { Header } from "./components/navs/Header";
import { TooltipProvider } from "./components/ui/tooltip";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <>
      <TooltipProvider>
        <Header />ç
        <main className="flex items-center justify-center">
          <SectionCard />
        </main>
      </TooltipProvider>
      <Toaster />
    </>
  );
}

export default App;
