"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import { useState } from "react"

export function Contato() {
  const [enviando, setEnviando] = useState(false)

  return (
    <section id="contato" className="py-16">
      <h2 className="text-3xl font-bold mb-8">Contato</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Informações de Contato</CardTitle>
            <CardDescription>Entre em contato comigo através dos canais abaixo</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary" />
              <a href="mailto:lucasxd1939@gmail.com" className="hover:text-primary transition-colors">
                lucasxd1939@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary" />
              <a href="tel:+5569992770940" className="hover:text-primary transition-colors">
                (69) 992770940
              </a>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Rondônia, RO - Brasil</span>
            </div>
            <div className="flex items-center gap-3">
              <Linkedin className="h-5 w-5 text-primary" />
              <a
                href="https://www.linkedin.com/in/lucasfduran/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                linkedin.com/in/lucasfduran
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Github className="h-5 w-5 text-primary" />
              <a
                href="https://github.com/lucasdurannn"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                github.com/lucasdurannn
              </a>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Envie uma Mensagem</CardTitle>
            <CardDescription>Preencha o formulário abaixo para entrar em contato</CardDescription>
          </CardHeader>
          <CardContent>
            <form 
              action="https://formsubmit.co/lucasxd1939@gmail.com" 
              method="POST"
              onSubmit={() => setEnviando(true)}
              className="space-y-4"
            >
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="nome" className="text-sm font-medium">
                    Nome
                  </label>
                  <Input required name="name" id="nome" placeholder="Seu nome" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input required name="email" id="email" type="email" placeholder="seu@email.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="assunto" className="text-sm font-medium">
                  Assunto
                </label>
                <Input required name="subject" id="assunto" placeholder="Assunto da mensagem" />
              </div>
              <div className="space-y-2">
                <label htmlFor="mensagem" className="text-sm font-medium">
                  Mensagem
                </label>
                <Textarea required name="message" id="mensagem" placeholder="Sua mensagem" rows={5} />
              </div>
              <Button type="submit" className="w-full" disabled={enviando}>
                {enviando ? "Enviando..." : "Enviar Mensagem"}
              </Button>
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://lucasduran-dev.vercel.app/" />
              <input type="hidden" name="_subject" value="Novo contato do portfólio" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_autoresponse" value="Recebi sua mensagem! Responderei em breve." />
              <input type="hidden" name="_url" value="https://lucasduran-dev.vercel.app/" />
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
