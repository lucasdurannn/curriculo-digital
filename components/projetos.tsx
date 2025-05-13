"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ExternalLink, Github, X } from "lucide-react"

export function Projetos() {
  const projetos = [
    {
      id: 1,
      titulo: "Sistema de Almoxarifado",
      descricao: "Sistema Web de almoxarifado para controle de estoque e produtos.",
      imagem: "/almox-system.png",
      tecnologias: ["Next.js", "Node.js", "Prsima", "TypeScript", "Tailwind CSS", "PostgreSQL"],
      demo: "https://exemplo.com",
      github: "https://github.com/seugithub/projeto1",
    },
    {
      id: 2,
      titulo: "Sistema de Frota de Veículos",
      descricao: "Sistema Web para controle de frota de veículos .",
      imagem: "/frota-system.png",
      tecnologias: ["Next.js", "Node.js", "Prisma", "TypeScript", "Tailwind CSS", "PostgreSQL",],
      demo: "https://exemplo.com",
      github: "https://github.com/seugithub/projeto2",
    },
    {
      id: 3,
      titulo: "Sistema de Reuniões Online",
      descricao: "Sistema Web para agendamento de reuniões online.",
      imagem: "/reuniao-system.png",
      tecnologias: ["Next.js", "Node.js", "Prisma", "TypeScript", "Tailwind CSS", "PostgreSQL",],
      demo: "https://exemplo.com",
      github: "https://github.com/seugithub/projeto3",
    },
  ]

  return (
    <section id="projetos" className="py-16">
      <h2 className="text-3xl font-bold mb-8">Projetos</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projetos.map((projeto) => (
          <Card key={projeto.id} className="flex flex-col h-full">
            <Dialog>
              <DialogTrigger asChild>
                <div className="aspect-video w-full overflow-hidden cursor-pointer">
                  <img
                    src={projeto.imagem || "/placeholder.svg"}
                    alt={projeto.titulo}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-5xl w-[95%] p-0 overflow-hidden">
                <div className="relative">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="absolute right-2 top-2 z-50 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90"
                    onClick={() => document.querySelector('button[aria-label="Close"]')?.click()}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                  <DialogTitle className="sr-only">
                    {projeto.titulo}
                  </DialogTitle>
                  <img
                    src={projeto.imagem}
                    alt={projeto.titulo}
                    className="w-full h-auto max-h-[85vh] object-contain"
                  />
                </div>
              </DialogContent>
            </Dialog>
            
            <CardHeader>
              <CardTitle>{projeto.titulo}</CardTitle>
              <CardDescription>{projeto.descricao}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2">
                {projeto.tecnologias.map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button variant="outline" size="sm" asChild>
                <a href={projeto.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </a>
              </Button>
              <Button size="sm" asChild>
                <a href={projeto.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" /> Demo
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
