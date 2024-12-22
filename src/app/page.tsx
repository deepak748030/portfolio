import { Metadata } from 'next'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Skills } from '@/components/skills'
import { Projects } from '@/components/projects'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Deepak Kushwah - Full Stack Developer',
  description: 'Portfolio of Deepak Kushwah, a Full Stack Developer specializing in MERN Stack, React, Node.js, and MongoDB.',
}

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Header />
      <main className="pt-16">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
