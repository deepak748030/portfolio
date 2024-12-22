'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, Send } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Get in Touch</h2>
        <div className="max-w-md mx-auto">
          <form className="space-y-6">
            <Input type="text" placeholder="Your Name" className="bg-gray-700 border-gray-600 text-white placeholder-gray-400" />
            <Input type="email" placeholder="Your Email" className="bg-gray-700 border-gray-600 text-white placeholder-gray-400" />
            <Textarea placeholder="Your Message" className="bg-gray-700 border-gray-600 text-white placeholder-gray-400" />
            <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white">
              Send Message
              <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>
        <div className="mt-12 flex justify-center space-x-6">
          {/* External links with anchor tags */}
          <a href="https://github.com/deepak748030" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="text-blue-400 hover:text-blue-300 hover:bg-gray-700">
              <Github className="h-6 w-6" />
            </Button>
          </a>
          <a href="https://www.linkedin.com/in/deepak-kushwah-43b23a259/" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="text-blue-400 hover:text-blue-300 hover:bg-gray-700">
              <Linkedin className="h-6 w-6" />
            </Button>
          </a>
          <a href="mailto:deepakkushwah748930@gmail.com">
            <Button variant="ghost" size="icon" className="text-blue-400 hover:text-blue-300 hover:bg-gray-700">
              <Mail className="h-6 w-6" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
