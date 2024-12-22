import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Skills & Expertise</h2>
        <Tabs defaultValue="technical" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="technical">Technical Skills</TabsTrigger>
            <TabsTrigger value="soft">Soft Skills</TabsTrigger>
          </TabsList>
          <TabsContent value="technical">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: 'Frontend Development', level: 90 },
                { name: 'Backend Development', level: 85 },
                { name: 'Database Management', level: 80 },
                { name: 'API Development & Integration', level: 85 },
                { name: 'Full Stack Development', level: 90 },
                { name: 'JavaScript & TypeScript', level: 90 },
                { name: 'React.js', level: 90 },
                { name: 'Node.js & Express.js', level: 85 },
                { name: 'MongoDB', level: 85 },
                { name: 'Material UI & Tailwind CSS', level: 80 },
                { name: 'Bootstrap', level: 85 },
              ].map((skill) => (
                <Card key={skill.name} className="bg-gray-700">
                  <CardHeader>
                    <CardTitle className="text-lg text-blue-400">{skill.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Progress value={skill.level} className="w-full" />
                    <span className="text-sm text-gray-400 mt-2">{skill.level}%</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="soft">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: 'Problem Solving', level: 95 },
                { name: 'Time Management', level: 90 },
                { name: 'Team Collaboration', level: 85 },
                { name: 'Adaptability', level: 88 },
                { name: 'Leadership', level: 80 },
              ].map((skill) => (
                <Card key={skill.name} className="bg-gray-700">
                  <CardHeader>
                    <CardTitle className="text-lg text-blue-400">{skill.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Progress value={skill.level} className="w-full" />
                    <span className="text-sm text-gray-400 mt-2">{skill.level}%</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold mb-6 text-blue-400">Technologies & Tools</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {['React', 'Node.js', 'TypeScript', 'MongoDB', 'Express.js', 'JavaScript', 'Material UI', 'Tailwind CSS', 'Bootstrap', 'Next.js'].map((tech) => (
              <Badge key={tech} variant="secondary" className="text-sm bg-gray-700 text-blue-400">{tech}</Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
