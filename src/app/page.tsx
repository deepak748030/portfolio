import { useEffect } from 'react'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Skills } from '@/components/skills'
import { Projects } from '@/components/projects'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Portfolio() {
  useEffect(() => {
    // Set dynamic metadata
    document.title = 'Deepak Kushwah - Full Stack Developer | MERN Stack Expert'

    const metaDescription = document.querySelector("meta[name='description']") as HTMLMetaElement
    if (metaDescription) {
      metaDescription.content = 'Portfolio of Deepak Kushwah, a Full Stack Developer specializing in MERN Stack, React, Node.js, Express.js, MongoDB, and web development. Explore my projects, skills, and contact details.'
    }

    const metaKeywords = document.querySelector("meta[name='keywords']") as HTMLMetaElement
    if (metaKeywords) {
      metaKeywords.content = 'Deepak Kushwah, Full Stack Developer, MERN Stack, React, Node.js, MongoDB, Express.js, Web Development, Portfolio, JavaScript, TypeScript, Frontend, Backend Development'
    }

    const metaImage = document.querySelector("meta[property='og:image']") as HTMLMetaElement
    if (metaImage) {
      metaImage.content = 'https://your-website.com/your-profile-image.jpg' // Update with your profile image URL
    }

    // Set Open Graph metadata for social media sharing
    const ogTitle = document.querySelector("meta[property='og:title']") as HTMLMetaElement
    if (ogTitle) {
      ogTitle.content = 'Deepak Kushwah - Full Stack Developer'
    }

    const ogDescription = document.querySelector("meta[property='og:description']") as HTMLMetaElement
    if (ogDescription) {
      ogDescription.content = 'Explore the portfolio of Deepak Kushwah, a skilled Full Stack Developer proficient in the MERN stack, web development, and innovative solutions.'
    }

    const ogUrl = document.querySelector("meta[property='og:url']") as HTMLMetaElement
    if (ogUrl) {
      ogUrl.content = window.location.href
    }

    // Twitter card metadata
    const twitterCard = document.querySelector("meta[name='twitter:card']") as HTMLMetaElement
    if (twitterCard) {
      twitterCard.content = 'summary_large_image'
    }

    const twitterTitle = document.querySelector("meta[name='twitter:title']") as HTMLMetaElement
    if (twitterTitle) {
      twitterTitle.content = 'Deepak Kushwah - Full Stack Developer'
    }

    const twitterDescription = document.querySelector("meta[name='twitter:description']") as HTMLMetaElement
    if (twitterDescription) {
      twitterDescription.content = 'Discover the work of Deepak Kushwah, a Full Stack Developer with expertise in MERN stack and web technologies.'
    }

    const twitterImage = document.querySelector("meta[name='twitter:image']") as HTMLMetaElement
    if (twitterImage) {
      twitterImage.content = 'https://your-website.com/your-profile-image.jpg' // Update with your profile image URL
    }
  }, [])

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
