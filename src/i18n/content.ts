import type { Lang } from "./ui"

// Todo el contenido del CV en los dos idiomas.
// Para cambiar un texto, cámbialo aquí en "es" y en "en".

export interface TimelineItem {
  date: string
  title: string
  company: string
  bullets: string[]
  links?: { href: string; label: "more" | "docs" }[]
}

export type TagKey =
  | "ELIXIR"
  | "PHOENIX"
  | "TAILWIND"
  | "JAVA"
  | "JS"
  | "HTML"
  | "CSS"
  | "UNITY"
  | "DOCKER"
  | "LINUX"
  | "TRUENAS"
  | "TAILSCALE"
  | "POSTGRES"

export interface Project {
  title: string
  description: string
  image?: string
  tags: TagKey[]
  link?: string
  github?: string
  doc?: string
  play?: string
}

export interface Volunteer {
  title: string
  description: string
  image: string
  link?: string
  doc?: string
}

export interface Course {
  name: string
  detail: string
  cert?: string
  certificates?: { href: string; label: string }[]
}

export interface LanguageItem {
  key: "es" | "en" | "ja"
  name: string
  cert?: string
}

export interface Content {
  hero: { badge: string; greeting: string; intro: string; photoAlt: string; cv: string }
  experience: TimelineItem[]
  projects: Project[]
  education: TimelineItem[]
  courses: Course[]
  languages: LanguageItem[]
  volunteering: Volunteer[]
  about: string[]
  aboutPhotoAlt: string
}

const CERT_CAMBRIDGE = "/certs/Cambridge_English_Certificate_Nicola_Carambia_Corbella.pdf"
const CERT_JLPT = "/certs/JLPT-N5.pdf"
const CERT_UDEMY = "https://www.udemy.com/certificate/UC-492781d3-4b31-4b5d-ac30-924b75fb9ac4/"
const CERT_CCNA = [
  { href: "https://www.credly.com/badges/a67d067d-6492-40af-abec-04025c3fcb1e/linked_in_profile", label: "ITN" },
  { href: "https://www.credly.com/badges/da9a7087-41f1-4791-894a-46a186058c80/linked_in_profile", label: "SRWE" },
  { href: "https://www.credly.com/badges/1557a548-ffb6-40ff-8607-09f0a0b47dc2/linked_in_profile", label: "ENSA" },
]
const DELIVERIT_INFO = "https://calidad.upm.es/proyectos-ie/informacion?anyo=2022-2023&id=877"
const MARKYP_INFO = "https://markyp.com"
const TFG = "https://oa.upm.es/82497/"

export const content: Record<Lang, Content> = {
  es: {
    hero: {
      badge: "Disponible · 28 h/semana · jornada completa desde oct. 2027",
      greeting: "Hola, soy Nicola",
      intro:
        "<strong>Backend Engineer</strong> en Osaka. Java, Elixir/Phoenix y PostgreSQL.<br/>Terminando el <strong>doble máster en Computer Science</strong> en <strong>Doshisha University (同志社大学)</strong> y la Universidad Politécnica de Madrid.",
      photoAlt: "Foto de Nicola Carambia",
      cv: "/cv/Nicola_Carambia_CV_ES.pdf",
    },
    experience: [
      {
        date: "Noviembre 2024 – Junio 2025",
        title: "Fundador y desarrollador",
        company: "Markyp (producto propio)",
        bullets: [
          "Aplicación web de gestión de notas para institutos con Elixir, Phoenix LiveView y Tailwind.",
          "Arquitectura multi-tenant: cada centro se resuelve por subdominio a su propio esquema aislado de PostgreSQL.",
          "Control de acceso con cinco roles: administración, profesorado, tutoría, jefatura de departamento y alumnado.",
          "Alojada en mi propio servidor TrueNAS SCALE, con acceso remoto seguro mediante Tailscale.",
        ],
        links: [
          { href: MARKYP_INFO, label: "more" },
        ],
      },
      {
        date: "Agosto 2024 – Noviembre 2024",
        title: "Elixir Full-Stack Engineer",
        company: "Doofinder · media jornada, contrato temporal",
        bullets: [
          "Refactorización de estructuras de base de datos y lógica heredadas en un código Elixir/Phoenix en producción.",
          "Desarrollo y ejecución de migraciones de PostgreSQL en producción.",
          "Detección y corrección de un campo de base de datos sin límite de tamaño que podía agotar el almacenamiento.",
          "Entregas con revisión de código estricta: PRs pequeñas y tres revisores por cambio.",
        ],
      },
      {
        date: "Septiembre 2023 – Mayo 2024",
        title: "Software Engineering Intern",
        company: "Fabrick Solutions Spain · prácticas curriculares",
        bullets: [
          "Diseño y despliegue de la base de datos PostgreSQL de una aplicación de análisis en Power BI sobre transacciones con tarjeta internacionales.",
          "Desarrollo en equipo, en Python, del sistema de comunicaciones de un sensor de stop para la DGT que detecta vehículos que no se detienen.",
          "Documentación técnica de ambos proyectos. Trabajo en equipo con GitLab y Jira (Agile/Kanban).",
        ],
      },
      {
        date: "Marzo 2023 – Junio 2023",
        title: "Beca de investigación, ampliada a TFG",
        company: "Universidad Politécnica de Madrid · DeliverIt",
        bullets: [
          "Desarrollo con Elixir y Phoenix del módulo de corrección manual de DeliverIt, la plataforma de entregas de prácticas de programación de la UPM.",
          "En uso en asignaturas de programación de la UPM desde septiembre de 2025.",
        ],
        links: [
          { href: DELIVERIT_INFO, label: "more" },
          { href: TFG, label: "docs" },
        ],
      },
    ],
    projects: [
      {
        title: "Markyp · Gestión de notas para institutos",
        description:
          "Producto propio: aplicación web multi-tenant en la que cada centro tiene su propio esquema de PostgreSQL según el subdominio. Gestiona departamentos, profesorado, asignaturas y criterios de evaluación, alumnado, matrículas, evaluaciones, cursos académicos e informes en PDF, con cinco roles y la interfaz en varios idiomas.",
        image: "/projects/markyp.webp",
        tags: ["ELIXIR", "PHOENIX", "POSTGRES", "TAILWIND"],
      },
      {
        title: "DeliverIt · Corrector manual de código",
        description:
          "Realizado como beca y ampliado como Trabajo de Fin de Grado (TFG). Módulo de corrección manual de prácticas de programación para la plataforma DeliverIt de la Universidad Politécnica de Madrid.",
        doc: TFG,
        image: "/projects/deliverit.webp",
        tags: ["ELIXIR", "PHOENIX", "POSTGRES"],
      },
      {
        title: "Home lab: servidores TrueNAS y OpenMediaVault",
        description:
          "Servidor TrueNAS SCALE montado en un PC propio: discos conectados con controladoras SAS sin RAID por hardware y sistema de archivos ZFS, con copias de seguridad. Aloja Markyp y servicios en Docker, con acceso remoto seguro por Tailscale. Además, un segundo NAS con OpenMediaVault y RAID en una Raspberry Pi.",
        image: "/projects/truenas.webp",
        tags: ["TRUENAS", "DOCKER", "TAILSCALE", "LINUX"],
      },
      {
        title: "Wii portátil",
        description:
          "Portabilización de una consola Wii con su hardware original, usando PCBs de la comunidad y diseños propios, carcasa impresa en 3D y gestión de baterías (balanceadores de carga, módulos, etc.).",
        image: "/projects/wii.webp",
        tags: [],
        doc: "https://www.linkedin.com/posts/nekaso_proyecto-completado-despu%C3%A9s-de-share-7307074688822710272-y28u/?skipRedirect=true",
      },
      {
        title: "Máquina arcade",
        description:
          "Proyecto de instituto en el IES Gerardo Diego para el congreso Cientifícate 2019. Construida desde cero y de forma artesanal por un equipo de 5 personas: diseño de la estructura, cortado y montaje. Funciona con monedas.",
        image: "/projects/arcade.webp",
        tags: [],
      },
      {
        title: "The Flying Chicken",
        description: "Minivideojuego desarrollado en Unity por un equipo de 6 personas.",
        image: "/projects/flying_chicken.webp",
        tags: ["UNITY"],
        play: "https://play.unity.com/es/games/7513214a-1abb-4982-811d-d58f853a3796/the-flying-chicken-v024",
        github: "https://github.com/ItsNekoRx28/Flying-Chicken",
      },
      {
        title: "Asteroids",
        description: "Versión del clásico Asteroids desarrollada en Unity por un equipo de 2 personas.",
        image: "/projects/asteroids.webp",
        tags: ["UNITY"],
        github: "https://github.com/ItsNekoRx28/Asteroids-UPM",
      },
    ],
    education: [
      {
        date: "Septiembre 2025 – Septiembre 2027 (prevista)",
        title: "Doble Máster",
        company: "Doshisha University (同志社大学) + Universidad Politécnica de Madrid",
        bullets: [
          "Master in Computer Science, Doshisha University (Japón).",
          "Máster Universitario en Ingeniería Informática, Universidad Politécnica de Madrid.",
          "TFM (NISLab): planificación de rutas para vehículos automatizados con predicción de trayectorias de peatones y V2X.",
        ],
      },
      {
        date: "Septiembre 2020 – Junio 2024",
        title: "Grado en Ingeniería Informática",
        company: "Universidad Politécnica de Madrid",
        bullets: [
          "Nota media: 7,9/10 (top 13 % de la promoción).",
          "Lenguajes principales: Java y C (diseño orientado a objetos, estructuras de datos, proyectos de software en equipo).",
        ],
        links: [{ href: TFG, label: "docs" }],
      },
    ],
    courses: [
      { name: "Spring Framework 6 & Spring Boot 3", detail: "Udemy · 81 h · 2024", cert: CERT_UDEMY },
      { name: "CCNA 1–3 (ITN, SRWE, ENSA)", detail: "Cisco Networking Academy", certificates: CERT_CCNA },
    ],
    languages: [
      { key: "es", name: "Español · Nativo" },
      { key: "en", name: "Inglés · B2 (Cambridge)", cert: CERT_CAMBRIDGE },
      { key: "ja", name: "Japonés · N4 aprox. (JLPT N5)", cert: CERT_JLPT },
    ],
    volunteering: [
      {
        title: "Reordonar",
        description:
          "Proyecto del IES Gerardo Diego con 4 personas: recogimos material electrónico que iba a desecharse, lo reacondicionamos y lo donamos. Con él montamos un aula de informática en el CEIP Perú.",
        image: "/projects/reordonar.webp",
        link: "https://x.com/reordonar",
      },
      {
        title: "Viseras en tiempos de COVID",
        description:
          "Durante el confinamiento, un equipo de 5 personas diseñamos e imprimimos en 3D viseras para entregar 500 al Hospital 12 de Octubre.",
        image: "/projects/viseras.webp",
        link: "https://www.20minutos.es/noticia/4228320/0/alumnos-padres-y-profesorado-de-un-instituto-de-pozuelo-imprimen-600-viseras-y-las-donan-para-uso-sanitario/",
      },
      {
        title: "De la impresión 3D al ahorro total",
        description:
          "Proyecto de investigación de 3 personas sobre cómo ahorrar material fungible al imprimir en 3D en centros de secundaria.",
        image: "/projects/iot3d.webp",
        doc: "/projects/Caixa IOT DE LA IMPRESIÓN 3D AL AHORRO TOTAL.pdf",
      },
    ],
    about: [
      "Me llamo Nicola Carambia, aunque me suelen llamar Nico. Soy ingeniero informático y me centro en el <strong>backend</strong>: bases de datos, arquitectura y servidores.",
      "Fuera del trabajo sigo trasteando: monto mis propios servidores, hago proyectos de <strong>electrónica</strong> y me gusta entender cómo funcionan las cosas por dentro.",
      "Vivo en <strong>Osaka</strong>, donde termino el doble máster en Doshisha University, y sigo aprendiendo <strong>japonés (日本語)</strong>.",
      "Mi objetivo es mejorar en todos los ámbitos de mi vida. Eso solo se consigue con <strong>esfuerzo, pasión y dedicación</strong>.",
    ],
    aboutPhotoAlt: "Nicola Carambia",
  },

  en: {
    hero: {
      badge: "Available · 28 h/week · full-time from Oct 2027",
      greeting: "Hi, I'm Nicola",
      intro:
        "<strong>Backend Engineer</strong> based in Osaka. Java, Elixir/Phoenix and PostgreSQL.<br/>Finishing a <strong>double master's degree in Computer Science</strong> at <strong>Doshisha University (同志社大学)</strong> and Universidad Politécnica de Madrid.",
      photoAlt: "Photo of Nicola Carambia",
      cv: "/cv/Nicola_Carambia_CV_EN.pdf",
    },
    experience: [
      {
        date: "November 2024 – June 2025",
        title: "Founder & Developer",
        company: "Markyp (own product)",
        bullets: [
          "Grade-management web app for secondary schools built with Elixir, Phoenix LiveView and Tailwind.",
          "Multi-tenant architecture: each school resolves by subdomain to its own isolated PostgreSQL schema.",
          "Role-based access for five roles: administrator, teacher, form tutor, head of department and student.",
          "Self-hosted on my own TrueNAS SCALE server, with secure remote access via Tailscale.",
        ],
        links: [
          { href: MARKYP_INFO, label: "more" },
        ],
      },
      {
        date: "August 2024 – November 2024",
        title: "Elixir Full-Stack Engineer",
        company: "Doofinder · part-time, fixed-term",
        bullets: [
          "Refactored legacy database structures and application logic in a production Elixir/Phoenix codebase.",
          "Wrote and ran PostgreSQL migrations in production.",
          "Found and fixed an unbounded database field that risked exhausting storage.",
          "Shipped through strict code review: small PRs, three reviewers each.",
        ],
      },
      {
        date: "September 2023 – May 2024",
        title: "Software Engineering Intern",
        company: "Fabrick Solutions Spain · final-year internship",
        bullets: [
          "Designed and deployed the PostgreSQL database behind a Power BI analytics app for international card transactions.",
          "Co-developed in Python the communication system for a DGT (Spanish traffic authority) stop-sign sensor that detects vehicles failing to stop.",
          "Wrote the technical documentation for both projects. Team workflow with GitLab and Jira (Agile/Kanban).",
        ],
      },
      {
        date: "March 2023 – June 2023",
        title: "Research grant, extended into Bachelor's thesis",
        company: "Universidad Politécnica de Madrid · DeliverIt",
        bullets: [
          "Built with Elixir and Phoenix the manual grading module of DeliverIt, UPM's programming-assignment platform.",
          "In use in UPM programming courses since September 2025.",
        ],
        links: [
          { href: DELIVERIT_INFO, label: "more" },
          { href: TFG, label: "docs" },
        ],
      },
    ],
    projects: [
      {
        title: "Markyp · Grade management for schools",
        description:
          "My own product: a multi-tenant web app where each school gets its own PostgreSQL schema, resolved by subdomain. It manages departments, teachers, subjects and assessment criteria, students, enrolments, evaluations, academic years and PDF reports, with five roles and a multilingual interface.",
        image: "/projects/markyp.webp",
        tags: ["ELIXIR", "PHOENIX", "POSTGRES", "TAILWIND"],
      },
      {
        title: "DeliverIt · Manual code grader",
        description:
          "Research grant extended into my Bachelor's thesis. Manual grading module for programming assignments on DeliverIt, the platform used by Universidad Politécnica de Madrid.",
        doc: TFG,
        image: "/projects/deliverit.webp",
        tags: ["ELIXIR", "PHOENIX", "POSTGRES"],
      },
      {
        title: "Home lab: TrueNAS and OpenMediaVault servers",
        description:
          "TrueNAS SCALE server built on a custom PC: drives connected through SAS controllers without hardware RAID, ZFS file system and backups. It hosts Markyp and Docker services, with secure remote access via Tailscale. Plus a second NAS with OpenMediaVault and RAID on a Raspberry Pi.",
        image: "/projects/truenas.webp",
        tags: ["TRUENAS", "DOCKER", "TAILSCALE", "LINUX"],
      },
      {
        title: "Portable Wii",
        description:
          "A Wii console made portable with its original hardware, using community and custom PCBs, a 3D-printed case and battery management (balancers, modules, etc.).",
        image: "/projects/wii.webp",
        tags: [],
        doc: "https://www.linkedin.com/posts/nekaso_proyecto-completado-despu%C3%A9s-de-share-7307074688822710272-y28u/?skipRedirect=true",
      },
      {
        title: "Arcade machine",
        description:
          "High-school project at IES Gerardo Diego for the Cientifícate 2019 congress. Built from scratch by hand with a team of 5: structure design, cutting and assembly. It runs on coins.",
        image: "/projects/arcade.webp",
        tags: [],
      },
      {
        title: "The Flying Chicken",
        description: "Small game built in Unity by a team of 6.",
        image: "/projects/flying_chicken.webp",
        tags: ["UNITY"],
        play: "https://play.unity.com/es/games/7513214a-1abb-4982-811d-d58f853a3796/the-flying-chicken-v024",
        github: "https://github.com/ItsNekoRx28/Flying-Chicken",
      },
      {
        title: "Asteroids",
        description: "A take on the classic Asteroids, built in Unity by a team of 2.",
        image: "/projects/asteroids.webp",
        tags: ["UNITY"],
        github: "https://github.com/ItsNekoRx28/Asteroids-UPM",
      },
    ],
    education: [
      {
        date: "September 2025 – September 2027 (expected)",
        title: "Double Master's Degree",
        company: "Doshisha University (同志社大学) + Universidad Politécnica de Madrid",
        bullets: [
          "MSc Computer Science, Doshisha University (Japan).",
          "MSc Informatics Engineering, Universidad Politécnica de Madrid.",
          "Thesis (NISLab): route planning for automated vehicles with pedestrian trajectory prediction and V2X.",
        ],
      },
      {
        date: "September 2020 – June 2024",
        title: "BEng Computer Engineering",
        company: "Universidad Politécnica de Madrid",
        bullets: [
          "GPA: 7.9/10 (top 13% of cohort).",
          "Main languages: Java and C (object-oriented design, data structures, team software projects).",
        ],
        links: [{ href: TFG, label: "docs" }],
      },
    ],
    courses: [
      { name: "Spring Framework 6 & Spring Boot 3", detail: "Udemy · 81 h · 2024", cert: CERT_UDEMY },
      { name: "CCNA 1–3 (ITN, SRWE, ENSA)", detail: "Cisco Networking Academy", certificates: CERT_CCNA },
    ],
    languages: [
      { key: "es", name: "Spanish · Native" },
      { key: "en", name: "English · B2 (Cambridge)", cert: CERT_CAMBRIDGE },
      { key: "ja", name: "Japanese · approx. N4 (JLPT N5)", cert: CERT_JLPT },
    ],
    volunteering: [
      {
        title: "Reordonar",
        description:
          "High-school project with a team of 4: we collected electronics that were going to be thrown away, refurbished them and donated them to set up a computer lab at CEIP Perú.",
        image: "/projects/reordonar.webp",
        link: "https://x.com/reordonar",
      },
      {
        title: "Face shields during COVID-19",
        description:
          "During lockdown, a remote team of 5 designed and 3D-printed face shields, aiming to deliver 500 to Hospital 12 de Octubre in Madrid.",
        image: "/projects/viseras.webp",
        link: "https://www.20minutos.es/noticia/4228320/0/alumnos-padres-y-profesorado-de-un-instituto-de-pozuelo-imprimen-600-viseras-y-las-donan-para-uso-sanitario/",
      },
      {
        title: "From 3D printing to total savings",
        description:
          "Research project with a team of 3 on reducing consumables when 3D printing in secondary schools.",
        image: "/projects/iot3d.webp",
        doc: "/projects/Caixa IOT DE LA IMPRESIÓN 3D AL AHORRO TOTAL.pdf",
      },
    ],
    about: [
      "I'm Nicola Carambia, though most people call me Nico. I'm a computer engineer focused on the <strong>backend</strong>: databases, architecture and servers.",
      "Outside work I keep tinkering: I build my own servers, do <strong>electronics</strong> projects and like understanding how things work under the hood.",
      "I live in <strong>Osaka</strong>, where I'm finishing my double master's degree at Doshisha University, and I keep learning <strong>Japanese (日本語)</strong>.",
      "My goal is to keep improving in every area of my life, and that only comes with <strong>effort, passion and dedication</strong>.",
    ],
    aboutPhotoAlt: "Nicola Carambia",
  },
}
