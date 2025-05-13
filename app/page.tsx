import { Navbar } from "@/components/navbar"
import { Sobre } from "@/components/sobre"
import { Projetos } from "@/components/projetos"
import { Habilidades } from "@/components/habilidades"
import { Experiencia } from "@/components/experiencia"
import { Contato } from "@/components/contato"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Sobre />
        <Habilidades />
        <Projetos />
        <Experiencia />
        <Contato />
      </main>
      <Footer />
    </div>
  )
}
