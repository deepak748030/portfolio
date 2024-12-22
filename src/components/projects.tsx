import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'SportMate',
      desc: 'A platform for sports enthusiasts to connect and manage events',
      tags: ['NodeJs', 'Express', 'React', 'MongoDB'],
      link: 'https://github.com/deepak748030/SportMate.git'
    },
    {
      title: 'BattleChamp',
      desc: 'An online game platform where users can compete in various challenges',
      tags: ['NodeJs', 'Express', 'Axios', 'MongoDB', 'Cors', 'Multer'],
      link: 'https://github.com/deepak748030/BattleChamp.git'
    },
    {
      title: 'Full-Stack E-Commerce',
      desc: 'A complete e-commerce platform with payment integration and user management',
      tags: ['NodeJs', 'Express', 'React', 'MongoDB'],
      link: 'https://github.com/deepak748030/full-stack-e-commerce.git'
    },
    {
      title: 'Silkvory Marketing Agency Landing Page',
      desc: 'Landing page for a marketing agency with a modern design',
      tags: ['HTML', 'Bootstrap'],
      link: 'https://github.com/deepak748030/silkvory-marketing-agency-landing-page.git'
    },
    {
      title: 'TelegramFileStoreBot',
      desc: 'A Telegram bot for file storage and management',
      tags: ['NodeJs', 'Express', 'MongoDB', 'Telegraf'],
      link: 'https://github.com/deepak748030/telegramFileStoreBot.git'
    },
    {
      title: 'MX Dashboard',
      desc: 'A dashboard for monitoring metrics with real-time data visualization',
      tags: ['React', 'JavaScript', 'lucide-react', 'react-toastify'],
      link: 'https://github.com/deepak748030/mx-admin-dahsboard.git'
    }
  ];

  const handleProjectClick = (link: string) => {
    window.open(link, '_blank', 'noopener noreferrer');
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-gray-700 hover:shadow-lg hover:shadow-blue-500/20 transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-blue-400">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs bg-gray-600 text-blue-300">{tag}</Badge>
                  ))}
                </div>
                <Button
                  variant="outline"
                  className="text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-gray-900"
                  onClick={() => handleProjectClick(project.link)}
                >
                  View Project <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
