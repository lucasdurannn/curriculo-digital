import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin, Mail } from "lucide-react"

export function Sobre() {
  return (
    <section id="sobre" className="py-16">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">
            Olá, eu sou <span className="text-primary">Lucas Fontinele Duran</span>
          </h1>
          <h2 className="text-2xl font-medium text-muted-foreground">Desenvolvedor Full Stack</h2>
          <p className="text-muted-foreground">
            Desenvolvedor apaixonado por criar soluções web inovadoras. Com experiência em desenvolvimento
            front-end e back-end, busco constantemente aprender novas tecnologias e aprimorar minhas habilidades.
          </p>

          <div className="flex flex-wrap gap-3 pt-4">
            <Button asChild>
              <a href="/lucas_duran.pdf" download>
                <Download className="mr-2 h-4 w-4" /> Baixar CV
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://github.com/lucasdurannn" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://linkedin.com/in/lucasfduran" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="mailto:lucasxd1939@gmail.com">
                <Mail className="mr-2 h-4 w-4" /> Contato
              </a>
            </Button>
          </div>
        </div>

        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="aspect-square bg-muted flex items-center justify-center">
              <img
                src="/perfil-lucas.jpg"
                alt="Foto de perfil"
                className="w-full h-full object-cover"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
