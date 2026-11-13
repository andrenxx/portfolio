// Todo o conteúdo do site fica aqui. Edite este arquivo para atualizar o portfólio.
// Textos traduzidos ficam em TEXT, um bloco por idioma.

export const LOCALES = ["pt", "en", "es"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "pt";

export const DATA = {
  name: "André Natividade",
  firstName: "André",
  lastName: "Natividade",
  initials: "AN",
  // Endereço público do site (usado nas imagens de compartilhamento e no SEO).
  url: "https://andrenatividade.is-a.dev",
  // Coloque a foto em public/ e preencha, por exemplo: "/me.jpg"
  avatarUrl: "/me.jpg",
  contact: {
    email: "aandrenx@gmail.com",
    linkedin: "https://www.linkedin.com/in/andr%C3%A9-natividade-5074443b9",
    github: "https://github.com/andrenxx",
  },
  dumpitUrl: "https://github.com/andrenxx/dumpit-app",
  cloverUrl: "https://clover-mmo-online.clover-mmo-online.workers.dev",
};

type Job = { title: string; company: string; period: string; bullets: string[]; stack: string };
type Text = {
  langName: string;
  htmlLang: string;
  ogLocale: string;
  description: string;
  nav: { about: string; work: string; project: string; stack: string; contact: string };
  role: string;
  location: string;
  lead: string;
  ctaEmail: string;
  ctaLinkedin: string;
  photoAlt: string;
  aboutTitle: string;
  about: string[];
  workTitle: string;
  work: Job[];
  projectTitle: string;
  clover: { features: string[]; challenges: { title: string; body: string }[]; tools: string[]; short: string; tags: string; status: string; name: string; meta: string; summary: string; points: string[]; stack: string; link: string; disclaimer: string; diagram: { title: string; player: string; browser: string; worker: string; workerSub: string; room: string; roomSub: string; db: string; dbSub: string; p2p: string; ws: string } };
  projectsLead: string;
  open: string;
  back: string;
  details: { what: string; built: string; stack: string; links: string; features: string; challenges: string; tools: string };
  project: { short: string; tags: string; name: string; summary: string; points: string[]; stack: string; link: string; demoNote: string; replay: string; columns: [string, string, string]; cards: string[][]; input: string };
  stackTitle: string;
  stack: { group: string; items: string }[];
  languagesTitle: string;
  languages: string;
  contactTitle: string;
  contactText: string;
  footer: string;
};

export const TEXT: Record<Locale, Text> = {
  pt: {
    langName: "Português",
    htmlLang: "pt-BR",
    ogLocale: "pt_BR",
    description: "André Natividade, desenvolvedor full stack no Rio de Janeiro. Apps mobile, APIs e sistemas em produção.",
    nav: { about: "Sobre", work: "Experiência", project: "Projetos", stack: "Stack", contact: "Contato" },
    role: "Desenvolvedor full stack",
    location: "Rio de Janeiro",
    lead: "Faço o app, a API e a infraestrutura por trás, e mantenho tudo no ar. Hoje cuido de um app mobile com mais de 1.000 usuários reais.",
    ctaEmail: "Mandar e-mail",
    ctaLinkedin: "LinkedIn",
    photoAlt: "Foto de André Natividade",
    aboutTitle: "Sobre",
    about: [
      "Trabalho de ponta a ponta: o app em React Native, a API em Node.js ou Java, o banco em PostgreSQL e o deploy automatizado com GitHub Actions e Cloudflare.",
      "O que me interessa é software que roda em produção: pagamentos que não podem falhar, atualizações que chegam sem passar pela loja, deploys que não dependem de alguém lembrar de um passo.",
      "Uso agentes de IA e Spec-Driven Development no dia a dia, escrevendo a especificação antes do código.",
    ],
    workTitle: "Experiência",
    work: [
      {
        title: "Desenvolvedor Full Stack",
        company: "Produto mobile (empresa sob NDA)",
        period: "Nov 2024 – hoje",
        bullets: [
          "Sustento e evoluo o frontend de um app mobile em produção, com mais de 1.000 usuários reais.",
          "Integrei e mantenho os pagamentos com Mercado Pago e Stripe.",
          "Implementei atualizações OTA com Cloudflare R2: em vez de gerar, validar e distribuir um novo APK, a atualização chega aos usuários em segundos.",
          "Automatizei builds e deploys com GitHub Actions: o deploy do backend caiu de cerca de 30 minutos para 2. Também dou suporte à API em Java.",
          "Participo das decisões de arquitetura do produto.",
        ],
        stack: "React Native · Java · Cloudflare R2 · GitHub Actions · Stripe · Mercado Pago",
      },
      {
        title: "Desenvolvedor Full Stack",
        company: "WeSave",
        period: "Jun – Nov 2024",
        bullets: [
          "Desenvolvi um app mobile para encontrar pontos de coleta, com Google Maps, autenticação e cadastro.",
          "O projeto ficou em 2º lugar estadual na Olimpíada Nacional de Desenvolvimento de Aplicativos (ONDA) 2024.",
        ],
        stack: "React Native · Node.js · PostgreSQL · Google Maps",
      },
    ],
    projectTitle: "Projetos",
    projectsLead: "Dois projetos meus, do app com IA ao jogo online.",
    open: "Ver projeto",
    back: "Voltar",
    details: { what: "O que tem", built: "Como foi feito", stack: "Stack", links: "Links", features: "Funcionalidades", challenges: "Desafios técnicos", tools: "Ferramentas próprias" },
    project: {
      short: "Escreva o que está na cabeça. A IA vira tarefas num Kanban.",
      tags: "React · Supabase · IA",
      name: "DumpIt",
      summary: "Gerenciador de tarefas com IA. Você despeja o que está na cabeça em texto livre e a IA transforma em tarefas organizadas num Kanban.",
      points: ["Autenticação e CRUD completo", "Controle de acesso por RLS no Supabase", "Arquitetura documentada em ADRs", "Pipeline de CI/CD"],
      stack: "React · TypeScript · Supabase · Cloudflare Workers · Gemini API",
      link: "Ver código no GitHub",
      demoNote: "Ilustração do fluxo",
      replay: "Repetir",
      columns: ["A fazer", "Fazendo", "Feito"],
      cards: [["Revisar PR do checkout", "Responder suporte"], ["Ajustar deploy OTA"], ["Atualizar dependências"]],
      input: "preciso revisar o PR do checkout, responder o suporte e ajustar o deploy OTA",
    },
    clover: {
      features: ["Combate com katanas, espada grande, arco e magias de grimório", "Vila e Bosque do Leste em mundo isométrico, com dia, noite e clima", "Pesca, missões, lojas e inventário", "Inimigos, um chefe (o Lobo Alfa) e um pet que segue e ataca", "Multiplayer com chat e grupo", "Login com Discord ou Google, 2 personagens por conta e save na nuvem"],
      challenges: [{ title: "Economia à prova de trapaça", body: "O jogo só pede ações; o servidor confere e devolve o estado novo. Uma arrumação do inventário só é aceita se os itens e as quantidades continuarem os mesmos, e sorteios, distância e tempo de pesca, escavação e drops são conferidos no servidor." }, { title: "Ping baixo com servidor fora do Brasil", body: "A posição dos jogadores vai por WebRTC direto entre eles, o que derruba o ping e a carga do servidor. A sala no servidor fica de reserva." }, { title: "Custo mínimo na Cloudflare", body: "A sala (Durable Object) dorme quando ninguém está mexendo, as gravações no banco são agrupadas e o mesmo código monta o mapa no cliente e no servidor." }],
      tools: ["Editor de zonas", "Gerador de personagens LPC", "Geração de ícones e sprites em Python", "Montagem de sons com ffmpeg"],
      short: "RPG online em pixel art que roda no navegador, com multiplayer direto entre jogadores.",
      tags: "Phaser 4 · Cloudflare · WebRTC",
      status: "Em desenvolvimento",
      name: "Clover MMO",
      meta: "Projeto pessoal · em desenvolvimento · ~44 mil linhas · 139 commits",
      summary: "RPG de ação online em pixel art isométrico que roda no navegador. Mundo com vila e floresta, combate com armas e magias, pesca, missões, chefe e pet.",
      points: [
        "Online com conexão direta WebRTC entre jogadores e sala no servidor de reserva",
        "Economia validada no servidor: inventário, lojas, pesca, missões e drops à prova de trapaça",
        "Login com Discord e Google, dois personagens por conta e save na nuvem",
        "Ciclo de dia e noite, clima e editor de zonas próprio",
        "Sala que dorme sem jogadores e gravação agrupada para custo mínimo na Cloudflare",
      ],
      stack: "TypeScript · Phaser 4 · Vite · Cloudflare Workers · Durable Objects · D1 · Better Auth · GitHub Actions",
      link: "Jogar (requer login)",
      disclaimer: "Projeto de fã, sem fins comerciais, inspirado no universo de Black Clover.",
      diagram: { title: "Arquitetura do online", player: "Jogador", browser: "Phaser 4 no navegador", worker: "Cloudflare Worker", workerSub: "jogo · API · WebSocket", room: "Durable Object", roomSub: "sala e economia", db: "D1 (SQLite)", dbSub: "contas e saves", p2p: "WebRTC direto", ws: "WebSocket" },
    },
    stackTitle: "Stack",
    stack: [
      { group: "Front e mobile", items: "TypeScript, JavaScript, React, React Native, Next.js, Vite, Tailwind CSS, Zustand, HTML, CSS" },
      { group: "Back-end", items: "Node.js, NestJS, Java, Python, APIs REST, WebSocket, OAuth" },
      { group: "Dados", items: "PostgreSQL, Supabase, SQL, migrations, RLS, presigned URLs (S3/R2)" },
      { group: "IA", items: "Agentes de IA, MCP, skills, Spec-Driven Development" },
      { group: "Cloud e infra", items: "Cloudflare, Docker, GitHub Actions, Grafana" },
      { group: "Testes", items: "Jest, Vitest, Supertest" },
    ],
    languagesTitle: "Idiomas",
    languages: "Português nativo, inglês intermediário",
    contactTitle: "Vamos conversar",
    contactText: "Vagas, freelas ou uma ideia que precisa sair do papel. Respondo por e-mail ou LinkedIn.",
    footer: "Feito por André Natividade",
  },
  en: {
    langName: "English",
    htmlLang: "en",
    ogLocale: "en_US",
    description: "André Natividade, full-stack developer in Rio de Janeiro. Mobile apps, APIs and production systems.",
    nav: { about: "About", work: "Experience", project: "Projects", stack: "Stack", contact: "Contact" },
    role: "Full-stack developer",
    location: "Rio de Janeiro, Brazil",
    lead: "I build the app, the API and the infrastructure behind it, and keep it all running. Right now I maintain a mobile app with 1,000+ real users.",
    ctaEmail: "Send an e-mail",
    ctaLinkedin: "LinkedIn",
    photoAlt: "Photo of André Natividade",
    aboutTitle: "About",
    about: [
      "I work end to end: the React Native app, the API in Node.js or Java, the PostgreSQL database and automated deploys with GitHub Actions and Cloudflare.",
      "What I care about is software that runs in production: payments that can't fail, updates that ship without an app-store review, deploys that don't depend on someone remembering a step.",
      "I use AI agents and Spec-Driven Development every day, writing the spec before the code.",
    ],
    workTitle: "Experience",
    work: [
      {
        title: "Full-Stack Developer",
        company: "Mobile product (company under NDA)",
        period: "Nov 2024 – now",
        bullets: [
          "Maintain and evolve the front end of a production mobile app with 1,000+ real users.",
          "Integrated and maintain payments with Mercado Pago and Stripe.",
          "Shipped OTA updates with Cloudflare R2: instead of building, validating and distributing a new APK, updates reach users in seconds.",
          "Automated builds and deploys with GitHub Actions, cutting backend deploys from about 30 minutes to 2. I also support the Java API.",
          "Take part in the product's architecture decisions.",
        ],
        stack: "React Native · Java · Cloudflare R2 · GitHub Actions · Stripe · Mercado Pago",
      },
      {
        title: "Full-Stack Developer",
        company: "WeSave",
        period: "Jun – Nov 2024",
        bullets: [
          "Built a mobile app to find recycling drop-off points, with Google Maps, authentication and sign-up.",
          "The project took 2nd place in the state round of Brazil's National App Development Olympiad (ONDA) 2024.",
        ],
        stack: "React Native · Node.js · PostgreSQL · Google Maps",
      },
    ],
    projectTitle: "Projects",
    projectsLead: "Two of my own projects, from an AI app to an online game.",
    open: "View project",
    back: "Back",
    details: { what: "What it does", built: "How it's built", stack: "Stack", links: "Links", features: "Features", challenges: "Technical challenges", tools: "Custom tools" },
    project: {
      short: "Type what's on your mind. AI turns it into a Kanban board.",
      tags: "React · Supabase · AI",
      name: "DumpIt",
      summary: "AI task manager. You dump whatever is on your mind as free text and the AI turns it into organized tasks on a Kanban board.",
      points: ["Authentication and full CRUD", "Row Level Security access control in Supabase", "Architecture documented in ADRs", "CI/CD pipeline"],
      stack: "React · TypeScript · Supabase · Cloudflare Workers · Gemini API",
      link: "View code on GitHub",
      demoNote: "Flow illustration",
      replay: "Replay",
      columns: ["To do", "Doing", "Done"],
      cards: [["Review checkout PR", "Reply to support"], ["Fix OTA deploy"], ["Update dependencies"]],
      input: "need to review the checkout PR, reply to support and fix the OTA deploy",
    },
    clover: {
      features: ["Combat with katanas, a greatsword, a bow and grimoire spells", "Village and East Woods in an isometric world, with day, night and weather", "Fishing, quests, shops and inventory", "Enemies, a boss (the Alpha Wolf) and a pet that follows and attacks", "Multiplayer with chat and parties", "Discord or Google sign-in, 2 characters per account and cloud saves"],
      challenges: [{ title: "Cheat-proof economy", body: "The game only requests actions; the server validates them and returns the new state. An inventory rearrangement is accepted only if items and quantities stay the same, and rolls, distance and timing for fishing, digging and drops are checked on the server." }, { title: "Low ping with a server outside Brazil", body: "Player positions travel over direct WebRTC between players, cutting ping and server load. The server room is the fallback." }, { title: "Minimal Cloudflare cost", body: "The room (a Durable Object) sleeps when nobody is active, database writes are batched and the same code builds the map on client and server." }],
      tools: ["Zone editor", "LPC character generator", "Icon and sprite generation in Python", "Sound assembly with ffmpeg"],
      short: "Online pixel-art RPG that runs in the browser, with direct player-to-player multiplayer.",
      tags: "Phaser 4 · Cloudflare · WebRTC",
      status: "In development",
      name: "Clover MMO",
      meta: "Personal project · in development · ~44k lines · 139 commits",
      summary: "Online isometric pixel-art action RPG that runs in the browser. A village and a forest to explore, combat with weapons and spells, fishing, quests, a boss and a pet.",
      points: [
        "Online play over direct WebRTC between players, with a server room as fallback",
        "Server-validated economy: inventory, shops, fishing, quests and drops that can't be cheated",
        "Discord and Google sign-in, two characters per account and cloud saves",
        "Day-night cycle, weather and a custom zone editor",
        "Room that sleeps when empty and batched writes to keep Cloudflare costs minimal",
      ],
      stack: "TypeScript · Phaser 4 · Vite · Cloudflare Workers · Durable Objects · D1 · Better Auth · GitHub Actions",
      link: "Play (login required)",
      disclaimer: "Non-commercial fan project inspired by the Black Clover universe.",
      diagram: { title: "Online architecture", player: "Player", browser: "Phaser 4 in the browser", worker: "Cloudflare Worker", workerSub: "game · API · WebSocket", room: "Durable Object", roomSub: "room and economy", db: "D1 (SQLite)", dbSub: "accounts and saves", p2p: "Direct WebRTC", ws: "WebSocket" },
    },
    stackTitle: "Stack",
    stack: [
      { group: "Front end & mobile", items: "TypeScript, JavaScript, React, React Native, Next.js, Vite, Tailwind CSS, Zustand, HTML, CSS" },
      { group: "Back end", items: "Node.js, NestJS, Java, Python, REST APIs, WebSocket, OAuth" },
      { group: "Data", items: "PostgreSQL, Supabase, SQL, migrations, RLS, presigned URLs (S3/R2)" },
      { group: "AI", items: "AI agents, MCP, skills, Spec-Driven Development" },
      { group: "Cloud & infra", items: "Cloudflare, Docker, GitHub Actions, Grafana" },
      { group: "Testing", items: "Jest, Vitest, Supertest" },
    ],
    languagesTitle: "Languages",
    languages: "Portuguese (native), English (intermediate)",
    contactTitle: "Let's talk",
    contactText: "Jobs, freelance work or an idea that needs to ship. I reply by e-mail or LinkedIn.",
    footer: "Built by André Natividade",
  },
  es: {
    langName: "Español",
    htmlLang: "es",
    ogLocale: "es_ES",
    description: "André Natividade, desarrollador full stack en Río de Janeiro. Apps móviles, APIs y sistemas en producción.",
    nav: { about: "Sobre mí", work: "Experiencia", project: "Proyectos", stack: "Stack", contact: "Contacto" },
    role: "Desarrollador full stack",
    location: "Río de Janeiro, Brasil",
    lead: "Hago la app, la API y la infraestructura detrás, y lo mantengo todo funcionando. Hoy cuido una app móvil con más de 1.000 usuarios reales.",
    ctaEmail: "Enviar e-mail",
    ctaLinkedin: "LinkedIn",
    photoAlt: "Foto de André Natividade",
    aboutTitle: "Sobre mí",
    about: [
      "Trabajo de punta a punta: la app en React Native, la API en Node.js o Java, la base de datos en PostgreSQL y el deploy automatizado con GitHub Actions y Cloudflare.",
      "Me interesa el software que corre en producción: pagos que no pueden fallar, actualizaciones que llegan sin pasar por la tienda, deploys que no dependen de que alguien recuerde un paso.",
      "Uso agentes de IA y Spec-Driven Development a diario, escribiendo la especificación antes del código.",
    ],
    workTitle: "Experiencia",
    work: [
      {
        title: "Desarrollador Full Stack",
        company: "Producto móvil (empresa bajo NDA)",
        period: "Nov 2024 – hoy",
        bullets: [
          "Mantengo y evoluciono el frontend de una app móvil en producción con más de 1.000 usuarios reales.",
          "Integré y mantengo los pagos con Mercado Pago y Stripe.",
          "Implementé actualizaciones OTA con Cloudflare R2: en lugar de generar, validar y distribuir un nuevo APK, la actualización llega a los usuarios en segundos.",
          "Automaticé builds y deploys con GitHub Actions: el deploy del backend bajó de unos 30 minutos a 2. También doy soporte a la API en Java.",
          "Participo en las decisiones de arquitectura del producto.",
        ],
        stack: "React Native · Java · Cloudflare R2 · GitHub Actions · Stripe · Mercado Pago",
      },
      {
        title: "Desarrollador Full Stack",
        company: "WeSave",
        period: "Jun – Nov 2024",
        bullets: [
          "Desarrollé una app móvil para encontrar puntos de reciclaje, con Google Maps, autenticación y registro.",
          "El proyecto obtuvo el 2º lugar estatal en la Olimpiada Nacional de Desarrollo de Aplicaciones (ONDA) 2024 de Brasil.",
        ],
        stack: "React Native · Node.js · PostgreSQL · Google Maps",
      },
    ],
    projectTitle: "Proyectos",
    projectsLead: "Dos proyectos míos, de una app con IA a un juego online.",
    open: "Ver proyecto",
    back: "Volver",
    details: { what: "Qué hace", built: "Cómo está hecho", stack: "Stack", links: "Enlaces", features: "Funcionalidades", challenges: "Desafíos técnicos", tools: "Herramientas propias" },
    project: {
      short: "Escribe lo que tienes en la cabeza. La IA lo convierte en un Kanban.",
      tags: "React · Supabase · IA",
      name: "DumpIt",
      summary: "Gestor de tareas con IA. Escribes en texto libre todo lo que tienes en la cabeza y la IA lo convierte en tareas organizadas en un Kanban.",
      points: ["Autenticación y CRUD completo", "Control de acceso con RLS en Supabase", "Arquitectura documentada en ADRs", "Pipeline de CI/CD"],
      stack: "React · TypeScript · Supabase · Cloudflare Workers · Gemini API",
      link: "Ver código en GitHub",
      demoNote: "Ilustración del flujo",
      replay: "Repetir",
      columns: ["Por hacer", "En curso", "Hecho"],
      cards: [["Revisar PR del checkout", "Responder a soporte"], ["Ajustar deploy OTA"], ["Actualizar dependencias"]],
      input: "tengo que revisar el PR del checkout, responder a soporte y ajustar el deploy OTA",
    },
    clover: {
      features: ["Combate con katanas, espadón, arco y magias de grimorio", "Aldea y Bosque del Este en un mundo isométrico, con día, noche y clima", "Pesca, misiones, tiendas e inventario", "Enemigos, un jefe (el Lobo Alfa) y una mascota que sigue y ataca", "Multijugador con chat y grupo", "Login con Discord o Google, 2 personajes por cuenta y guardado en la nube"],
      challenges: [{ title: "Economía a prueba de trampas", body: "El juego solo pide acciones; el servidor las valida y devuelve el nuevo estado. Un reordenamiento del inventario solo se acepta si los objetos y las cantidades siguen iguales, y los sorteos, la distancia y el tiempo de pesca, excavación y drops se validan en el servidor." }, { title: "Ping bajo con servidor fuera de Brasil", body: "La posición de los jugadores va por WebRTC directo entre ellos, lo que reduce el ping y la carga del servidor. La sala del servidor queda de respaldo." }, { title: "Costo mínimo en Cloudflare", body: "La sala (un Durable Object) duerme cuando nadie está activo, las escrituras en la base se agrupan y el mismo código arma el mapa en el cliente y en el servidor." }],
      tools: ["Editor de zonas", "Generador de personajes LPC", "Generación de íconos y sprites en Python", "Montaje de sonidos con ffmpeg"],
      short: "RPG online en pixel art que corre en el navegador, con multijugador directo entre jugadores.",
      tags: "Phaser 4 · Cloudflare · WebRTC",
      status: "En desarrollo",
      name: "Clover MMO",
      meta: "Proyecto personal · en desarrollo · ~44 mil líneas · 139 commits",
      summary: "RPG de acción online en pixel art isométrico que corre en el navegador. Una aldea y un bosque para explorar, combate con armas y magias, pesca, misiones, un jefe y una mascota.",
      points: [
        "Online con conexión WebRTC directa entre jugadores y una sala en el servidor como respaldo",
        "Economía validada en el servidor: inventario, tiendas, pesca, misiones y drops a prueba de trampas",
        "Login con Discord y Google, dos personajes por cuenta y guardado en la nube",
        "Ciclo de día y noche, clima y un editor de zonas propio",
        "Sala que duerme sin jugadores y escrituras agrupadas para un costo mínimo en Cloudflare",
      ],
      stack: "TypeScript · Phaser 4 · Vite · Cloudflare Workers · Durable Objects · D1 · Better Auth · GitHub Actions",
      link: "Jugar (requiere login)",
      disclaimer: "Proyecto de fan, sin fines comerciales, inspirado en el universo de Black Clover.",
      diagram: { title: "Arquitectura del online", player: "Jugador", browser: "Phaser 4 en el navegador", worker: "Cloudflare Worker", workerSub: "juego · API · WebSocket", room: "Durable Object", roomSub: "sala y economía", db: "D1 (SQLite)", dbSub: "cuentas y guardados", p2p: "WebRTC directo", ws: "WebSocket" },
    },
    stackTitle: "Stack",
    stack: [
      { group: "Front y móvil", items: "TypeScript, JavaScript, React, React Native, Next.js, Vite, Tailwind CSS, Zustand, HTML, CSS" },
      { group: "Back-end", items: "Node.js, NestJS, Java, Python, APIs REST, WebSocket, OAuth" },
      { group: "Datos", items: "PostgreSQL, Supabase, SQL, migraciones, RLS, presigned URLs (S3/R2)" },
      { group: "IA", items: "Agentes de IA, MCP, skills, Spec-Driven Development" },
      { group: "Cloud e infra", items: "Cloudflare, Docker, GitHub Actions, Grafana" },
      { group: "Testing", items: "Jest, Vitest, Supertest" },
    ],
    languagesTitle: "Idiomas",
    languages: "Portugués nativo, inglés intermedio",
    contactTitle: "Hablemos",
    contactText: "Vacantes, freelance o una idea que necesita salir adelante. Respondo por e-mail o LinkedIn.",
    footer: "Hecho por André Natividade",
  },
};
