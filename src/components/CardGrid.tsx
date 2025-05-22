import { Card, CardProps } from './Card';

export function CardGrid() {
  const cards: CardProps[] = [
    {
      title: "Git Basics",
      description: "Aprende los comandos esenciales de Git para comenzar a versionar tu código",
      author: "gitmaster",
      days: 4,
      likes: 378,
      isRunningOnZero: true,
      gradientColors: "bg-gradient-to-r from-orange-500 to-pink-500",
      icon: "📚"
    },
    {
      title: "GitHub Repositories",
      description: "Cómo crear y gestionar repositorios en GitHub para tus proyectos",
      author: "devhub",
      days: 10,
      likes: 184,
      isRunningOnZero: true,
      gradientColors: "bg-gradient-to-r from-purple-500 to-indigo-500",
      icon: "📁"
    },
    {
      title: "Pull Requests",
      description: "Aprende a colaborar con otros desarrolladores mediante Pull Requests",
      author: "webml-community",
      days: 8,
      likes: 113,
      isRunningOnZero: false,
      gradientColors: "bg-gradient-to-r from-blue-500 to-cyan-500",
      icon: "🔄"
    },
    {
      title: "GitHub Pages",
      description: "Publica tu sitio web directamente desde tu repositorio de GitHub",
      author: "ByteDance-Seed",
      days: 8,
      likes: 96,
      isRunningOnZero: false,
      gradientColors: "bg-gradient-to-r from-green-500 to-teal-500",
      icon: "🌐"
    },
    {
      title: "GitHub Actions",
      description: "Automatiza tu flujo de trabajo con GitHub Actions para CI/CD",
      author: "stepfun-ai",
      days: 9,
      likes: 168,
      isRunningOnZero: true,
      gradientColors: "bg-gradient-to-r from-violet-500 to-purple-500",
      icon: "⚙️"
    },
    {
      title: "GitHub Issues",
      description: "Gestiona tareas y errores de forma eficiente con GitHub Issues",
      author: "yoyolicoris",
      days: 2,
      likes: 36,
      isRunningOnZero: false,
      gradientColors: "bg-gradient-to-r from-pink-500 to-rose-500",
      icon: "🐛"
    },
    {
      title: "GitHub Discussions",
      description: "Crea comunidad alrededor de tu proyecto con GitHub Discussions",
      author: "fdaudens",
      days: 3,
      likes: 39,
      isRunningOnZero: true,
      gradientColors: "bg-gradient-to-r from-amber-500 to-orange-500",
      icon: "💬"
    },
    {
      title: "GitHub Copilot",
      description: "Aumenta tu productividad con la IA de GitHub Copilot",
      author: "mozilla-ai",
      days: 4,
      likes: 23,
      isRunningOnZero: false,
      gradientColors: "bg-gradient-to-r from-sky-500 to-blue-500",
      icon: "🤖"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
}
