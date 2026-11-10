export const languages = { es: 'Español', en: 'English' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'es';

export const contact = {
  email: 'ibanezlourdes62@gmail.com',
  linkedin: 'https://www.linkedin.com/in/lourdes-iba%C3%B1ez-baa056284/',
  github: 'https://github.com/lourdesibanez',
};

/** URL helpers — Spanish lives at the root, English under /en/. */
export const routes = {
  home: (lang: Lang) => (lang === 'es' ? '/' : '/en/'),
  project: (lang: Lang, slug: string) => (lang === 'es' ? `/proyectos/${slug}/` : `/en/projects/${slug}/`),
};

export function getLangFromUrl(url: URL): Lang {
  return url.pathname.startsWith('/en') ? 'en' : 'es';
}

/** Same page in the other language. Project slugs are shared between languages. */
export function alternatePath(pathname: string, target: Lang): string {
  const es = pathname.match(/^\/proyectos\/([^/]+)/);
  const en = pathname.match(/^\/en\/projects\/([^/]+)/);
  const slug = es?.[1] ?? en?.[1];
  if (slug) return routes.project(target, slug);
  return routes.home(target);
}

export const ui = {
  es: {
    meta: {
      title: 'Lourdes Ibañez · Backend Developer',
      description:
        'Portfolio de Lourdes Ibañez: Backend Developer en Seeker Parking y estudiante de la Facultad de Ingeniería (UNLPam).',
    },
    skip: 'Saltar al contenido',
    nav: {
      inicio: 'Inicio',
      'sobre-mi': 'Sobre mí',
      experiencia: 'Experiencia',
      proyectos: 'Proyectos',
      contacto: 'Contacto',
    },
    menu: 'Abrir menú',
    langLabel: 'Idioma',
    hero: {
      meta: 'Portfolio · Buenos Aires, Argentina',
      badge: 'Abierta a propuestas',
      hello: 'Hola, soy Lourdes',
      roles: ['Backend Developer', 'Estudiante de Ingeniería', 'Data & IA'],
      tagline: 'Construyo sistemas y diseño experiencias.',
      lead: 'Trabajo en el backend de Seeker Parking, donde digitalizamos la gestión de estacionamiento urbano y de eventos. En paralelo estudio en la Facultad de Ingeniería y sumo proyectos propios y de la facultad a este portfolio.',
      ctaProjects: 'Ver proyectos',
      ctaContact: 'Hablemos',
    },
    credential: {
      pass: 'Dev pass',
      status: 'Online',
      back: 'Tocá para volver',
      flip: 'Dar vuelta la credencial',
      hint: 'Arrastrala · tocala',
    },
    about: {
      label: 'Sobre mí',
      title: 'De la base de datos <em>a la pantalla</em>.',
      body: [
        'Trabajo en el backend de Seeker Parking, una startup de Buenos Aires que digitaliza la gestión de estacionamiento en entornos urbanos y eventos. Diseño esquemas de base de datos, construyo APIs REST y migro módulos legacy hacia arquitecturas más modernas.',
        'En paralelo curso mis estudios en la Facultad de Ingeniería de la UNLPam, donde sumo proyectos propios y trabajos en equipo: desde sistemas de gestión en Java e investigación UX en Figma hasta modelos de machine learning en Python.',
        'Me gusta entender el problema completo antes de escribir código: quién lo usa, qué datos mueve y qué pasa cuando algo falla.',
      ],
      specTitle: 'Ficha técnica',
      spec: [
        ['Rol actual', 'Backend Developer'],
        ['Empresa', 'Seeker Parking'],
        ['Formación', 'Ingeniería · UNLPam'],
        ['Stack core', 'PHP · Laravel · MySQL'],
        ['Explorando', 'Python · Machine Learning'],
      ],
      cards: [
        { title: 'Backend', text: 'APIs REST en Laravel, migraciones y documentación con Swagger.' },
        { title: 'Datos', text: 'Modelado relacional y diseño de esquemas en MySQL.' },
        { title: 'Análisis', text: 'UML, casos de uso y diagramas de secuencia antes de programar.' },
        { title: 'UX / UI', text: 'Investigación con usuarios, journey maps y prototipos en Figma.' },
      ],
    },
    experience: {
      label: 'Experiencia',
      title: 'Donde <em>trabajo</em>.',
      items: [
        {
          company: 'Seeker Parking',
          period: 'Actualidad',
          role: 'Backend Developer',
          bullets: [
            'Diseño esquemas de base de datos y construyo APIs REST en Laravel.',
            'Migré el módulo de Control de Ingreso desde CodeIgniter a una API REST, sin cortes de servicio.',
            'Documento los endpoints con Swagger para el resto del equipo.',
          ],
          tags: ['PHP', 'Laravel', 'CodeIgniter', 'MySQL', 'Swagger'],
          project: 'control-ingreso',
        },
        {
          company: 'Los Caldenes',
          period: 'Desde agosto 2024',
          role: 'Full-stack · Sistema de liquidación de sueldos',
          bullets: [
            'Sistema en producción para liquidar haberes, desarrollado en un equipo de 3 personas.',
            'Motor de cálculo configurable por conceptos y fórmulas.',
            'Integración con AFIP y generación del Libro Sueldo Digital.',
          ],
          tags: ['Laravel', 'Vue', 'MySQL'],
          project: 'liquidacion-sueldos',
        },
      ],
      seeProject: 'Ver proyecto',
    },
    skills: {
      label: 'Tecnologías',
      title: 'Lo que manejo <em>día a día</em>.',
      groups: [
        { title: 'IA y datos', badge: 'En foco', items: ['Python · Pandas', 'Scikit-Learn', 'Análisis exploratorio (EDA)', 'Árboles de decisión', 'Validación cruzada'] },
        { title: 'Backend', items: ['PHP / Laravel', 'APIs REST', 'CodeIgniter (legacy)', 'Java', 'Documentación Swagger'] },
        { title: 'Datos', items: ['MySQL', 'Diseño de esquemas', 'Migraciones', 'Modelado relacional'] },
        { title: 'Análisis y diseño', items: ['Diagramas UML', 'Diagramas de clases', 'Casos de uso', 'Diagramas de secuencia'] },
        { title: 'UX / UI', items: ['Mapas de empatía', 'Customer journey maps', 'Wireframing en Figma', 'Benchmarking competitivo'] },
        { title: 'Herramientas', items: ['Git / GitHub', 'Jira / Confluence', 'Figma', 'Postman'] },
      ],
    },
    projects: {
      label: 'Proyectos',
      title: 'Cosas que <em>construí</em>.',
      intro: 'Una selección de lo que vengo trabajando en Seeker Parking, en la facultad y por mi cuenta.',
      filters: { todos: 'Todos', backend: 'Backend', diseno: 'Diseño UX/UI', analisis: 'Análisis funcional', ia: 'IA y datos' },
      empty: 'No hay proyectos en esta categoría todavía.',
      details: 'Ver detalle',
    },
    education: {
      label: 'Formación',
      title: 'Lo que <em>estudio</em>.',
      items: [
        { place: 'Facultad de Ingeniería · UNLPam', city: 'General Pico, La Pampa', period: 'En curso', text: 'Cursada de Análisis y Diseño de Sistemas, Diseño de Interfaces de Usuario, programación orientada a objetos, desarrollo mobile y ciencia de datos.' },
      ],
    },
    contact: {
      label: 'Contacto',
      title: '¿Hablamos?',
      body: '¿Tenés un proyecto, una oportunidad o simplemente una pregunta? Escribime y te respondo.',
      formTitle: 'Escribime',
      name: 'Nombre',
      emailField: 'Email',
      message: 'Mensaje',
      send: 'Enviar mensaje',
      formNote: 'Se abre tu cliente de correo con el mensaje listo.',
    },
    footer: {
      role: 'Backend Developer',
      signoff: 'Gracias por pasar.',
      rights: 'Todos los derechos reservados',
      place: 'Buenos Aires, Argentina',
      top: 'Volver arriba',
    },
    project: {
      back: 'Volver a proyectos',
      details: 'Detalle del proyecto',
      gallery: 'Galería',
      next: 'Siguiente proyecto',
      close: 'Cerrar',
    },
  },
  en: {
    meta: {
      title: 'Lourdes Ibañez · Backend Developer',
      description:
        'Portfolio of Lourdes Ibañez: Backend Developer at Seeker Parking and engineering student at UNLPam (Argentina).',
    },
    skip: 'Skip to content',
    nav: {
      inicio: 'Home',
      'sobre-mi': 'About',
      experiencia: 'Experience',
      proyectos: 'Projects',
      contacto: 'Contact',
    },
    menu: 'Open menu',
    langLabel: 'Language',
    hero: {
      meta: 'Portfolio · Buenos Aires, Argentina',
      badge: 'Open to opportunities',
      hello: "Hi, I'm Lourdes",
      roles: ['Backend Developer', 'Engineering Student', 'Data & AI'],
      tagline: 'I build systems and design experiences.',
      lead: "I work on the backend at Seeker Parking, where we digitize urban and event parking management. Alongside that I'm studying at the School of Engineering and adding my own and university projects to this portfolio.",
      ctaProjects: 'Explore projects',
      ctaContact: "Let's talk",
    },
    credential: {
      pass: 'Dev pass',
      status: 'Online',
      back: 'Tap to flip back',
      flip: 'Flip the badge',
      hint: 'Drag it · tap it',
    },
    about: {
      label: 'About me',
      title: 'From the database <em>to the screen</em>.',
      body: [
        'I work on the backend at Seeker Parking, a Buenos Aires startup that digitizes parking management for cities and events. I design database schemas, build REST APIs and migrate legacy modules to more modern architectures.',
        "At the same time I'm studying at the School of Engineering at UNLPam, where I build my own projects and team assignments: from management systems in Java and UX research in Figma to machine learning models in Python.",
        'I like to understand the whole problem before writing code: who uses it, what data it moves and what happens when something fails.',
      ],
      specTitle: 'Spec sheet',
      spec: [
        ['Current role', 'Backend Developer'],
        ['Company', 'Seeker Parking'],
        ['Education', 'Engineering · UNLPam'],
        ['Core stack', 'PHP · Laravel · MySQL'],
        ['Exploring', 'Python · Machine Learning'],
      ],
      cards: [
        { title: 'Backend', text: 'REST APIs in Laravel, migrations and Swagger documentation.' },
        { title: 'Data', text: 'Relational modeling and schema design in MySQL.' },
        { title: 'Analysis', text: 'UML, use cases and sequence diagrams before coding.' },
        { title: 'UX / UI', text: 'User research, journey maps and Figma prototypes.' },
      ],
    },
    experience: {
      label: 'Experience',
      title: 'Where I <em>work</em>.',
      items: [
        {
          company: 'Seeker Parking',
          period: 'Present',
          role: 'Backend Developer',
          bullets: [
            'I design database schemas and build REST APIs in Laravel.',
            'Migrated the Entry Control module from CodeIgniter to a REST API with no service downtime.',
            'I document endpoints with Swagger for the rest of the team.',
          ],
          tags: ['PHP', 'Laravel', 'CodeIgniter', 'MySQL', 'Swagger'],
          project: 'control-ingreso',
        },
        {
          company: 'Los Caldenes',
          period: 'Since August 2024',
          role: 'Full-stack · Payroll system',
          bullets: [
            'Production payroll system, built in a team of 3.',
            'Configurable calculation engine based on pay items and formulas.',
            "Integration with AFIP (Argentina's tax agency) and the digital payroll ledger.",
          ],
          tags: ['Laravel', 'Vue', 'MySQL'],
          project: 'liquidacion-sueldos',
        },
      ],
      seeProject: 'View project',
    },
    skills: {
      label: 'Technologies',
      title: 'What I use <em>every day</em>.',
      groups: [
        { title: 'AI & data', badge: 'In focus', items: ['Python · Pandas', 'Scikit-Learn', 'Exploratory analysis (EDA)', 'Decision trees', 'Cross-validation'] },
        { title: 'Backend', items: ['PHP / Laravel', 'REST APIs', 'CodeIgniter (legacy)', 'Java', 'Swagger documentation'] },
        { title: 'Data', items: ['MySQL', 'Schema design', 'Migrations', 'Relational modeling'] },
        { title: 'Analysis & design', items: ['UML diagrams', 'Class diagrams', 'Use cases', 'Sequence diagrams'] },
        { title: 'UX / UI', items: ['Empathy maps', 'Customer journey maps', 'Wireframing in Figma', 'Competitive benchmarking'] },
        { title: 'Tools', items: ['Git / GitHub', 'Jira / Confluence', 'Figma', 'Postman'] },
      ],
    },
    projects: {
      label: 'Projects',
      title: 'Things I <em>built</em>.',
      intro: "A selection of what I've been working on at Seeker Parking, at university and on my own.",
      filters: { todos: 'All', backend: 'Backend', diseno: 'UX/UI design', analisis: 'Functional analysis', ia: 'AI & data' },
      empty: 'No projects in this category yet.',
      details: 'View details',
    },
    education: {
      label: 'Education',
      title: 'What I <em>study</em>.',
      items: [
        { place: 'School of Engineering · UNLPam', city: 'General Pico, La Pampa', period: 'In progress', text: 'Coursework in Systems Analysis & Design, User Interface Design, object-oriented programming, mobile development and data science.' },
      ],
    },
    contact: {
      label: 'Contact',
      title: "Let's talk?",
      body: "Have a project, an opportunity or just a question? Write to me and I'll get back to you.",
      formTitle: 'Write to me',
      name: 'Name',
      emailField: 'Email',
      message: 'Message',
      send: 'Send message',
      formNote: 'Your email app opens with the message ready to send.',
    },
    footer: {
      role: 'Backend Developer',
      signoff: 'Thanks for stopping by.',
      rights: 'All rights reserved',
      place: 'Buenos Aires, Argentina',
      top: 'Back to top',
    },
    project: {
      back: 'Back to projects',
      details: 'Project details',
      gallery: 'Gallery',
      next: 'Next project',
      close: 'Close',
    },
  },
} as const;

export function useTranslations(lang: Lang) {
  return ui[lang];
}
