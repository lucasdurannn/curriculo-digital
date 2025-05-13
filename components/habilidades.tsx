import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Habilidades() {
  const habilidades = {
    frontend: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap"
    ],
    backend: ["Node.js", "Python", "NestJS", "Ruby", "Ruby on Rails"],
    database: ["MySQL", "PostgreSQL", "Redis", "Prisma"],
    devops: ["Git", "GitHub", "GitLab", "Docker", "Vercel"],
    outros: ["Metodologias Ágeis", "Scrum", "Kanban", "Figma", "Discord", "Trello"],
  }

  return (
    <section id="habilidades" className="py-16">
      <h2 className="text-3xl font-bold mb-8">Habilidades</h2>

      <div className="grid gap-6">
        {Object.entries(habilidades).map(([categoria, lista]) => (
          <Card key={categoria}>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold capitalize mb-4">{categoria}</h3>
              <div className="flex flex-wrap gap-2">
                {lista.map((habilidade) => (
                  <Badge key={habilidade} variant="secondary" className="px-3 py-1 text-sm">
                    {habilidade}
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
