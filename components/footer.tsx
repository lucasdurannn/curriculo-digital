import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const anoAtual = new Date().getFullYear()

  return (
    <footer className="border-t py-8 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h3 className="font-bold text-lg">Lucas Fontinele Duran</h3>
            <p className="text-sm text-muted-foreground">Desenvolvedor Full Stack</p>
          </div>

          <div className="flex items-center gap-4">
            <Link href="https://github.com/lucasdurannn" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 hover:text-primary transition-colors" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://linkedin.com/in/lucasfduran" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5 hover:text-primary transition-colors" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="mailto:lucasxd1939@gmail.com">
              <Mail className="h-5 w-5 hover:text-primary transition-colors" />
              <span className="sr-only">Email</span>
            </Link>
          </div>

          <div className="text-sm text-muted-foreground text-center md:text-right">
            &copy; {anoAtual} Lucas Fontinele Duran. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  )
}
