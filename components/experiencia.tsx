import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Experiencia() {
  const experiencias = [
    {
      id: 1,
      cargo: "Analista de Sistemas",
      empresa: "SEBRAE RO",
      periodo: "2025 - Presente",
      descricao: "Desenvolvimento web com Angular, Python, Docker, Node.js, TypeScript, Next.js, utilizando banco de dados postgres e prisma para aplicações.",
      tecnologias: ["Angular", "Python", "Docker", "Node.js", "TypeScript", "Next.js", "Postgres", "Prisma", "Desenvolvimento Web"],
    },
    {
      id: 2,
      cargo: "Analista de Sistemas",
      empresa: "Companhia De Aguas E Esgotos De Rondonia - CAERD",
      periodo: "2024 - 2025",
      descricao: "Desenvolvimento web com Ruby, Node.js, TypeScript, Next.js, utilizando banco de dados postgres e prisma para aplicações externas e internas.",
      tecnologias: ["Ruby", "PostgreSQL", "Node.js", "TypeScript", "Next.js", "Postgres", "Prisma", "Desenvolvimento Web"],
    },
    {
      id: 3,
      cargo: "Estagiário",
      empresa: "Companhia De Aguas E Esgotos De Rondonia - CAERD",
      periodo: "2023 - 2024",
      descricao: "Desenvolvimento Web com Ruby e Javascript, assim como utilização de banco de dados com o postgresql. No tempo livre, atendimento no suporte ao usuário como reparamento de maquinas e equipamentos como: PC's e impressoras.",
      tecnologias: ["Ruby", "JavaScript", "PostgreSQL", "Suporte Técnico"],
    },
    {
      id: 4,
      cargo: "Auxiliar administrativo",
      empresa: "VIEIRA E SERRATI/SEBRAE RO",
      periodo: "2021 - 2022",
      descricao: "Pagamentos de suprimentos e contas em geral com Pacote Office, assim também como aplicações de desenvolvimento web no setor de TI dentro do SEBRAE/RO.",
      tecnologias: ["Pacote Office", "Desenvolvimento Web"],
    },
    {
      id: 5,
      cargo: "Estagiário",
      empresa: "Tribunal de Justiça do Estado de Rondônia",
      periodo: "2019 - 2021",
      descricao: "Auxilio ao usuário no ambiente windows, elaborações de documentações, auxiliamento a sistemas, auxiliamento ao suporte ao usuário, auxiliamento na manutenção do banco de dados em sistemas, manutenção de computadores e sistemas.",
      tecnologias: ["Windows", "Suporte Técnico", "Banco de Dados", "Documentação"],
    },
    {
      id: 6,
      cargo: "Estagiário",
      empresa: "SIPAM - Sistema de Proteção da Amazônia",
      periodo: "2018",
      descricao: "Desenvolvimento de uma plataforma web junto com banco de dados com MySQL e PHP para os Meteorologistas do SIPAM.",
      tecnologias: ["PHP", "MySQL", "Desenvolvimento Web"],
    },
  ]

  return (
    <section id="experiencia" className="py-16">
      <h2 className="text-3xl font-bold mb-8">Experiência Profissional</h2>

      <div className="space-y-6">
        {experiencias.map((exp) => (
          <Card key={exp.id}>
            <CardHeader>
              <div className="flex flex-wrap justify-between items-start gap-2">
                <div>
                  <CardTitle>{exp.cargo}</CardTitle>
                  <CardDescription className="text-lg">{exp.empresa}</CardDescription>
                </div>
                <Badge variant="outline" className="text-sm font-normal">
                  {exp.periodo}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">{exp.descricao}</p>
              <div className="flex flex-wrap gap-2">
                {exp.tecnologias.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
