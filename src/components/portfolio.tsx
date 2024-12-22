import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-90 backdrop-blur-sm border-b border-gray-700">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-2xl font-bold text-blue-400">Deepak</span>
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <Button
                  key={item}
                  variant="ghost"
                  className={`text-sm font-medium ${activeSection === item.toLowerCase() ? 'text-blue-400' : 'text-gray-300 hover:text-blue-400'}`}
                  onClick={() => scrollTo(item.toLowerCase())}
                >
                  {item}
                </Button>
              ))}
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-gray-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </Button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-gray-900 bg-opacity-95 md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <Button
                  key={item}
                  variant="ghost"
                  className={`text-lg font-medium my-2 ${activeSection === item.toLowerCase() ? 'text-blue-400' : 'text-gray-300 hover:text-blue-400'}`}
                  onClick={() => scrollTo(item.toLowerCase())}
                >
                  {item}
                </Button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-16">
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
            <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
          </div>
          <div className="container mx-auto px-6 z-10">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <motion.h1
                  className="text-5xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Deepak Kushwah
                </motion.h1>
                <motion.p
                  className="text-xl mb-6 text-gray-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Full Stack Developer
                </motion.p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex space-x-4"
                >
                  <Button onClick={() => scrollTo('contact')} className="bg-blue-500 hover:bg-blue-600 text-white">
                    Get in Touch
                  </Button>
                  <Button variant="outline" className="text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-gray-900">
                    Download CV
                  </Button>
                </motion.div>
              </div>
              <motion.div
                className="md:w-1/2 flex justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Avatar className="w-64 h-64 border-4 border-blue-400 shadow-lg shadow-blue-500/50">
                  <AvatarImage src="/placeholder.svg?height=256&width=256" alt="Deepak Kushwah" />
                  <AvatarFallback>DK</AvatarFallback>
                </Avatar>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">About Me</h2>
            <div className="max-w-3xl mx-auto bg-gray-800 rounded-lg p-8 shadow-lg">
              <p className="text-lg mb-6 leading-relaxed text-gray-300">
                I'm a passionate full stack developer with a strong background in creating dynamic and scalable web applications. I specialize in working with the MERN stack and have experience with various frontend and backend technologies.
              </p>
              <p className="text-lg leading-relaxed text-gray-300">
                When not coding, I enjoy contributing to open-source projects, learning new technologies, and exploring tech blogs. I'm always ready to take on new challenges and continuously improve my skills.
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="py-20 bg-gray-800">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Skills & Expertise</h2>
            <Tabs defaultValue="technical" className="space-y-8">
              <TabsList className="flex justify-center space-x-8">
                <TabsTrigger value="technical" className="text-xl text-blue-400">Technical Skills</TabsTrigger>
                <TabsTrigger value="soft" className="text-xl text-blue-400">Soft Skills</TabsTrigger>
              </TabsList>
              <TabsContent value="technical">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {/* Technical skills */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Frontend</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Progress value={90} max={100} className="mb-2" />
                      <Badge>React</Badge>
                      <Badge>HTML</Badge>
                      <Badge>CSS</Badge>
                      <Badge>JavaScript</Badge>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Backend</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Progress value={85} max={100} className="mb-2" />
                      <Badge>Node.js</Badge>
                      <Badge>Express</Badge>
                      <Badge>MongoDB</Badge>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Tools</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Progress value={80} max={100} className="mb-2" />
                      <Badge>Docker</Badge>
                      <Badge>NGINX</Badge>
                      <Badge>Redis</Badge>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="soft">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {/* Soft skills */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Communication</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Progress value={85} max={100} className="mb-2" />
                      <Badge>Teamwork</Badge>
                      <Badge>Presentations</Badge>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Problem Solving</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Progress value={90} max={100} className="mb-2" />
                      <Badge>Critical Thinking</Badge>
                      <Badge>Creativity</Badge>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Time Management</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Progress value={80} max={100} className="mb-2" />
                      <Badge>Prioritization</Badge>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section id="projects" className="py-20 bg-gray-900">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Featured Projects</h2>
            {/* Projects list */}
          </div>
        </section>

        <section id="contact" className="py-20 bg-gray-800">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Contact Me</h2>
            <form className="space-y-6">
              <div>
                <Input placeholder="Your Name" className="w-full" />
              </div>
              <div>
                <Input placeholder="Your Email" type="email" className="w-full" />
              </div>
              <div>
                <Textarea placeholder="Your Message" className="w-full" rows={6} />
              </div>
              <Button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white">
                Send Message
              </Button>
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}
