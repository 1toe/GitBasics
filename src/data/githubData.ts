export const githubBasicsData = [
  {
    id: 'git-basics',
    title: "Git Basics",
    description: "Aprende los comandos esenciales de Git para comenzar a versionar tu código",
    content: "Git es un sistema de control de versiones distribuido que te permite rastrear cambios en tu código a lo largo del tiempo. Es fundamental para colaborar con otros desarrolladores y mantener un historial de tu proyecto.",
    commands: [
      "git init",
      "git add .",
      "git commit -m \"Mensaje descriptivo\"",
      "git status",
      "git log"
    ],
    tips: [
      "Haz commits pequeños y frecuentes con mensajes descriptivos",
      "Usa .gitignore para excluir archivos que no deberían versionarse",
      "Revisa el estado de tu repositorio con git status antes de hacer commits"
    ],
    resources: [
      {
        title: "Documentación oficial de Git",
        url: "https://git-scm.com/doc"
      },
      {
        title: "Git Cheat Sheet",
        url: "https://education.github.com/git-cheat-sheet-education.pdf"
      }
    ]
  },
  {
    id: 'github-repositories',
    title: "GitHub Repositories",
    description: "Cómo crear y gestionar repositorios en GitHub para tus proyectos",
    content: "Los repositorios de GitHub son donde almacenas tu código en la nube. Puedes crear repositorios públicos o privados, y compartirlos con otros colaboradores.",
    commands: [
      "git remote add origin https://github.com/username/repo.git",
      "git push -u origin main",
      "git clone https://github.com/username/repo.git",
      "git pull"
    ],
    tips: [
      "Añade un README.md descriptivo a tu repositorio",
      "Usa un archivo LICENSE para especificar cómo se puede usar tu código",
      "Organiza tu código en carpetas lógicas para facilitar la navegación"
    ],
    resources: [
      {
        title: "Crear un repositorio en GitHub",
        url: "https://docs.github.com/es/repositories/creating-and-managing-repositories/creating-a-new-repository"
      },
      {
        title: "GitHub Flow",
        url: "https://docs.github.com/es/get-started/quickstart/github-flow"
      }
    ]
  },
  {
    id: 'pull-requests',
    title: "Pull Requests",
    description: "Aprende a colaborar con otros desarrolladores mediante Pull Requests",
    content: "Los Pull Requests (PR) son la forma de proponer cambios a un repositorio. Permiten a los colaboradores revisar tus cambios antes de fusionarlos con la rama principal.",
    commands: [
      "git checkout -b nueva-funcionalidad",
      "git push origin nueva-funcionalidad",
      "# Luego crea el PR en la interfaz de GitHub"
    ],
    tips: [
      "Describe claramente el propósito de tu PR",
      "Mantén los PR pequeños y enfocados en una sola funcionalidad",
      "Responde a los comentarios de revisión de manera oportuna"
    ],
    resources: [
      {
        title: "Crear un Pull Request",
        url: "https://docs.github.com/es/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request"
      },
      {
        title: "Revisar Pull Requests",
        url: "https://docs.github.com/es/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews"
      }
    ]
  },
  {
    id: 'github-pages',
    title: "GitHub Pages",
    description: "Publica tu sitio web directamente desde tu repositorio de GitHub",
    content: "GitHub Pages es un servicio de alojamiento que te permite publicar sitios web estáticos directamente desde tu repositorio de GitHub, sin necesidad de configurar servidores.",
    commands: [
      "# No requiere comandos especiales, solo configuración en GitHub"
    ],
    tips: [
      "Usa la rama gh-pages o configura la rama main para GitHub Pages",
      "Puedes usar dominios personalizados con GitHub Pages",
      "Es ideal para documentación, portfolios y sitios estáticos"
    ],
    resources: [
      {
        title: "Documentación de GitHub Pages",
        url: "https://docs.github.com/es/pages"
      },
      {
        title: "Temas de GitHub Pages",
        url: "https://pages.github.com/themes/"
      }
    ]
  },
  {
    id: 'github-actions',
    title: "GitHub Actions",
    description: "Automatiza tu flujo de trabajo con GitHub Actions para CI/CD",
    content: "GitHub Actions te permite automatizar tareas como pruebas, despliegues y otras operaciones directamente en tu repositorio de GitHub.",
    commands: [
      "# Se configura mediante archivos YAML en la carpeta .github/workflows/"
    ],
    tips: [
      "Usa acciones predefinidas de la comunidad para tareas comunes",
      "Configura notificaciones para saber cuándo fallan tus flujos de trabajo",
      "Aprovecha los secretos de GitHub para almacenar información sensible"
    ],
    resources: [
      {
        title: "Introducción a GitHub Actions",
        url: "https://docs.github.com/es/actions/learn-github-actions/introduction-to-github-actions"
      },
      {
        title: "GitHub Marketplace",
        url: "https://github.com/marketplace?type=actions"
      }
    ]
  },
  {
    id: 'github-issues',
    title: "GitHub Issues",
    description: "Gestiona tareas y errores de forma eficiente con GitHub Issues",
    content: "GitHub Issues es una herramienta de seguimiento integrada que te permite rastrear tareas, mejoras y errores para tus proyectos.",
    commands: [
      "# Se gestiona a través de la interfaz web de GitHub"
    ],
    tips: [
      "Usa etiquetas para categorizar tus issues",
      "Asigna issues a colaboradores específicos",
      "Vincula issues con Pull Requests usando palabras clave como 'closes #123'"
    ],
    resources: [
      {
        title: "Gestión de Issues",
        url: "https://docs.github.com/es/issues/tracking-your-work-with-issues/about-issues"
      },
      {
        title: "Plantillas de Issues",
        url: "https://docs.github.com/es/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository"
      }
    ]
  },
  {
    id: 'github-discussions',
    title: "GitHub Discussions",
    description: "Crea comunidad alrededor de tu proyecto con GitHub Discussions",
    content: "GitHub Discussions proporciona un espacio para que tu comunidad tenga conversaciones, haga preguntas y comparta ideas sin necesidad de crear issues formales.",
    commands: [
      "# Se gestiona a través de la interfaz web de GitHub"
    ],
    tips: [
      "Usa categorías para organizar diferentes tipos de discusiones",
      "Marca respuestas como soluciones para ayudar a otros usuarios",
      "Fomenta un ambiente acogedor para nuevos colaboradores"
    ],
    resources: [
      {
        title: "Acerca de GitHub Discussions",
        url: "https://docs.github.com/es/discussions/collaborating-with-your-community-using-discussions/about-discussions"
      },
      {
        title: "Mejores prácticas para Discussions",
        url: "https://docs.github.com/es/discussions/guides/best-practices-for-community-conversations-on-github"
      }
    ]
  },
  {
    id: 'github-copilot',
    title: "GitHub Copilot",
    description: "Aumenta tu productividad con la IA de GitHub Copilot",
    content: "GitHub Copilot es una herramienta de IA que sugiere código mientras escribes, ayudándote a programar más rápido y con menos esfuerzo.",
    commands: [
      "# Se instala como extensión en tu editor de código"
    ],
    tips: [
      "Escribe comentarios descriptivos para obtener mejores sugerencias",
      "Usa Tab para aceptar sugerencias de Copilot",
      "Revisa siempre el código generado antes de usarlo"
    ],
    resources: [
      {
        title: "Sitio oficial de GitHub Copilot",
        url: "https://github.com/features/copilot"
      },
      {
        title: "Documentación de GitHub Copilot",
        url: "https://docs.github.com/es/copilot/overview-of-github-copilot/about-github-copilot"
      }
    ]
  }
];
