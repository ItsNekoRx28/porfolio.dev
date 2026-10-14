export const languages = {
  es: "Español",
  en: "English",
} as const

export type Lang = keyof typeof languages

export const defaultLang: Lang = "es"

// Ruta de la página principal de cada idioma
export const homePath: Record<Lang, string> = {
  es: "/",
  en: "/en/",
}

export const otherLang = (lang: Lang): Lang => (lang === "es" ? "en" : "es")

// Textos fijos de la interfaz (botones, títulos, menú)
export const ui = {
  es: {
    "meta.title": "Nicola Carambia · Backend Engineer (Java, Elixir, PostgreSQL)",
    "meta.description":
      "Portfolio de Nicola Carambia, ingeniero backend en Osaka: Java, Elixir/Phoenix y PostgreSQL. Doble máster en Doshisha University y la Universidad Politécnica de Madrid.",
    "nav.experience": "Experiencia",
    "nav.projects": "Proyectos",
    "nav.education": "Formación",
    "nav.about": "Sobre mí",
    "nav.contact": "Contacto",
    "lang.switch": "EN",
    "lang.switchLabel": "Ver la página en inglés",
    "theme.choose": "Elige el tema",
    "hero.contact": "Contáctame",
    "hero.cv": "Descargar CV",
    "section.experience": "Experiencia laboral",
    "section.projects": "Proyectos",
    "section.education": "Formación",
    "section.courses": "Cursos",
    "section.technologies": "Tecnologías",
    "section.languages": "Idiomas",
    "section.volunteering": "Voluntariado",
    "section.about": "Sobre mí",
    "btn.code": "Código",
    "btn.link": "Ver proyecto",
    "btn.docs": "Documentación",
    "btn.play": "Jugar",
    "btn.more": "Saber más",
    "btn.cert": "Ver certificado",
    "footer.based": "Diseño basado en porfolio.dev de midudev (CC BY-NC 4.0)",
  },
  en: {
    "meta.title": "Nicola Carambia · Backend Engineer (Java, Elixir, PostgreSQL)",
    "meta.description":
      "Portfolio of Nicola Carambia, backend engineer based in Osaka: Java, Elixir/Phoenix and PostgreSQL. Double master's degree at Doshisha University and Universidad Politécnica de Madrid.",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.education": "Education",
    "nav.about": "About",
    "nav.contact": "Contact",
    "lang.switch": "ES",
    "lang.switchLabel": "Ver la página en español",
    "theme.choose": "Choose theme",
    "hero.contact": "Contact me",
    "hero.cv": "Download CV",
    "section.experience": "Work experience",
    "section.projects": "Projects",
    "section.education": "Education",
    "section.courses": "Courses",
    "section.technologies": "Technologies",
    "section.languages": "Languages",
    "section.volunteering": "Volunteering",
    "section.about": "About me",
    "btn.code": "Code",
    "btn.link": "View project",
    "btn.docs": "Documentation",
    "btn.play": "Play",
    "btn.more": "Learn more",
    "btn.cert": "View certificate",
    "footer.based": "Design based on porfolio.dev by midudev (CC BY-NC 4.0)",
  },
} as const

export type UIKey = keyof (typeof ui)["es"]

export function useTranslations(lang: Lang) {
  return (key: UIKey): string => ui[lang][key] ?? ui[defaultLang][key]
}
