"use client"

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
          <p className="text-muted-foreground">
            Formado em Sistemas de informação em Junho de 2024 e estou na área de desenvolvimento há mais de 8 anos, e tenho experiência com desenvolvimento
            de aplicações web, banco de dados, e infra.
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
                <Mail className="mr-2 h-4 w-4" /> Email
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://wa.me/5569992770940" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" className="mr-2 h-4 w-4" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
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
