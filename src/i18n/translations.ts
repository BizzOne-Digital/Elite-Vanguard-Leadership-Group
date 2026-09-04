/**
 * Centralized Spanish (ES) translation dictionary.
 *
 * Keys are the exact English source strings used in the components/data layer,
 * so English remains the default and any key that is missing here simply falls
 * back to the original English text.
 *
 * Brand name, company name, proper names, phone/email placeholders, URLs and
 * numeric metrics are intentionally left untranslated.
 */
export const ES_TRANSLATIONS: Record<string, string> = {
  /* ------------------------------------------------------------------
   * Navigation & header
   * ------------------------------------------------------------------ */
  'Home': 'Inicio',
  'About Us': 'Nosotros',
  'Services': 'Servicios',
  'Our Team': 'Nuestro Equipo',
  'Booking': 'Reservas',
  'Contact': 'Contacto',
  'Book a Consultation': 'Reserve una Consulta',
  'Consultation': 'Consulta',
  'Toggle navigation menu': 'Abrir menú de navegación',
  'Switch language': 'Cambiar idioma',

  /* ------------------------------------------------------------------
   * Splash screen
   * ------------------------------------------------------------------ */
  'Initializing Leadership Excellence': 'Iniciando la Excelencia en Liderazgo',
  'Click anywhere to continue': 'Haga clic en cualquier lugar para continuar',
  'Elite Vanguard Leadership Group Initializing': 'Elite Vanguard Leadership Group está iniciando',

  /* ------------------------------------------------------------------
   * Company info (data/content.ts)
   * ------------------------------------------------------------------ */
  'Translating Military Principles into High-Performance Operational Excellence':
    'Traducimos los Principios Militares en Excelencia Operativa de Alto Rendimiento',
  'Luxury Executive Consulting × Veteran Leadership × Operational Excellence × Institutional Authority':
    'Consultoría Ejecutiva de Alto Nivel × Liderazgo Veterano × Excelencia Operativa × Autoridad Institucional',
  'Elite Vanguard Leadership Group LLC is a veteran-led management consulting and leadership development firm dedicated to translating time-tested military principles into high-performance commercial and operational excellence. The firm specializes in bridging the critical gap between executive strategy and frontline execution, equipping organizations with the discipline, accountability, and operational precision needed to navigate complex, high-stakes environments.':
    'Elite Vanguard Leadership Group LLC es una firma de consultoría de gestión y desarrollo de liderazgo dirigida por veteranos, dedicada a traducir principios militares probados en el tiempo en excelencia comercial y operativa de alto rendimiento. La firma se especializa en cerrar la brecha crítica entre la estrategia ejecutiva y la ejecución en primera línea, dotando a las organizaciones de la disciplina, la responsabilidad y la precisión operativa necesarias para desenvolverse en entornos complejos y de alto riesgo.',
  'To equip organizations and frontline leaders with the discipline, operational rigor, and decisive execution of battle-tested military leadership, bridging the gap between executive strategy and field performance to achieve uncompromising mission success.':
    'Dotar a las organizaciones y a los líderes de primera línea de la disciplina, el rigor operativo y la ejecución decisiva del liderazgo militar probado en combate, cerrando la brecha entre la estrategia ejecutiva y el desempeño en el campo para lograr un éxito de misión sin concesiones.',
  'To be the premier veteran-led leadership development and operational consulting partner, recognized nationwide for transforming workplace cultures, building resilient supervisors, and driving excellence across high-consequence industries and public infrastructure.':
    'Ser el principal socio de desarrollo de liderazgo y consultoría operativa dirigido por veteranos, reconocido en todo el país por transformar culturas de trabajo, formar supervisores resilientes e impulsar la excelencia en industrias de alta consecuencia e infraestructura pública.',

  /* ------------------------------------------------------------------
   * Core values (data/content.ts)
   * ------------------------------------------------------------------ */
  'Uncompromising Integrity': 'Integridad Sin Concesiones',
  'Do what is right, especially when no one is watching. We build enduring trust through total transparency, ethical conduct, and keeping our word in every engagement.':
    'Hacer lo correcto, especialmente cuando nadie está mirando. Construimos confianza duradera mediante transparencia total, conducta ética y el cumplimiento de nuestra palabra en cada proyecto.',
  'Accountability & Execution (Own the Outcome)': 'Responsabilidad y Ejecución (Asuma el Resultado)',
  'Leadership begins with personal responsibility. We believe in setting clear standards, taking absolute ownership of results, and eliminating excuses at every level of operation.':
    'El liderazgo comienza con la responsabilidad personal. Creemos en establecer estándares claros, asumir la propiedad absoluta de los resultados y eliminar las excusas en todos los niveles de la operación.',
  'Lead from the Front': 'Liderar desde el Frente',
  'Authentic authority is earned through presence, competence, and service. We train leaders who set the pace, share the burdens of their teams, and inspire by direct example rather than distant oversight.':
    'La autoridad auténtica se gana con presencia, competencia y servicio. Formamos líderes que marcan el ritmo, comparten las cargas de sus equipos e inspiran con el ejemplo directo en lugar de la supervisión a distancia.',
  'Mission First, People Always': 'La Misión Primero, las Personas Siempre',
  'Achieving operational objectives and taking care of personnel are not competing priorities. High-performing teams thrive when standards remain uncompromising while people are valued, mentored, and supported.':
    'Alcanzar los objetivos operativos y cuidar al personal no son prioridades opuestas. Los equipos de alto rendimiento prosperan cuando los estándares se mantienen sin concesiones y, al mismo tiempo, las personas son valoradas, orientadas y apoyadas.',
  'Decisive Adaptability': 'Adaptabilidad Decisiva',
  'In dynamic and high-pressure environments, clarity and composure are essential. We cultivate the discipline to assess risk quickly, make sound decisions with incomplete information, and execute with confidence.':
    'En entornos dinámicos y de alta presión, la claridad y la serenidad son esenciales. Cultivamos la disciplina para evaluar el riesgo con rapidez, tomar decisiones acertadas con información incompleta y ejecutar con confianza.',

  /* ------------------------------------------------------------------
   * Target industries (data/content.ts)
   * ------------------------------------------------------------------ */
  'Mid-Market & Enterprise Operations & Logistics': 'Operaciones y Logística de Mediana y Gran Empresa',
  'Operations & Logistics': 'Operaciones y Logística',
  'Bridging the strategy-execution divide across supply chains, distribution centers, fleet management, and complex multi-facility operations where timing and coordination are mission-critical.':
    'Cerramos la brecha entre estrategia y ejecución en cadenas de suministro, centros de distribución, gestión de flotas y operaciones complejas en múltiples instalaciones, donde los tiempos y la coordinación son críticos para la misión.',
  'Supply Chain & Fleet Coordination': 'Coordinación de Cadena de Suministro y Flotas',
  'Multi-Facility Operational Rigor': 'Rigor Operativo en Múltiples Instalaciones',
  'Shift-Level Accountability Systems': 'Sistemas de Responsabilidad a Nivel de Turno',
  'Crisis Response & Bottleneck Mitigation': 'Respuesta a Crisis y Mitigación de Cuellos de Botella',

  'Municipal, Utilities & Public Sector Agencies': 'Municipios, Servicios Públicos y Organismos del Sector Público',
  'Municipal & Public Sector': 'Municipal y Sector Público',
  'Equipping public sector administrators, water/power utility supervisors, and transit directors with structured command discipline to manage vital civic infrastructure with zero margin for error.':
    'Dotamos a administradores del sector público, supervisores de servicios de agua y energía y directores de transporte de una disciplina de mando estructurada para gestionar infraestructura civil vital sin margen de error.',
  'Public Works & Utility Supervision': 'Supervisión de Obras y Servicios Públicos',
  'Inter-Agency Communication Protocols': 'Protocolos de Comunicación Interinstitucional',
  'Frontline Supervisor Empowerment': 'Empoderamiento del Supervisor de Primera Línea',
  'Public Infrastructure Reliability': 'Fiabilidad de la Infraestructura Pública',

  'Defense Contractors & Veteran-Owned Businesses (SDVOSBs)':
    'Contratistas de Defensa y Empresas de Propiedad de Veteranos (SDVOSB)',
  'Defense Contractors & SDVOSBs': 'Contratistas de Defensa y SDVOSB',
  'Aligning mission parameters, contract execution discipline, and executive-level governance for aerospace, defense suppliers, and Service-Disabled Veteran-Owned Small Businesses operating in regulated domains.':
    'Alineamos los parámetros de misión, la disciplina de ejecución contractual y la gobernanza a nivel ejecutivo para proveedores aeroespaciales y de defensa y para pequeñas empresas propiedad de veteranos con discapacidad de servicio que operan en ámbitos regulados.',
  'Mission-Centric Program Governance': 'Gobernanza de Programas Centrada en la Misión',
  'High-Consequence Compliance & Safety': 'Cumplimiento y Seguridad de Alta Consecuencia',
  'Veteran Leadership Talent Integration': 'Integración de Talento de Liderazgo Veterano',
  'Cross-Functional Squad Accountability': 'Responsabilidad de Equipos Multifuncionales',

  'Commercial Construction, Engineering & Field Services':
    'Construcción Comercial, Ingeniería y Servicios de Campo',
  'Construction & Engineering': 'Construcción e Ingeniería',
  'Translating field leadership, jobsite safety accountability, and trade coordination into on-time, on-budget delivery for general contractors, MEP trades, and civil engineering teams.':
    'Traducimos el liderazgo en el campo, la responsabilidad por la seguridad en obra y la coordinación de oficios en entregas a tiempo y dentro del presupuesto para contratistas generales, oficios MEP y equipos de ingeniería civil.',
  'Jobsite Foremen Leadership Academies': 'Academias de Liderazgo para Capataces de Obra',
  'Subcontractor Coordination & Standards': 'Coordinación y Estándares de Subcontratistas',
  'Field Safety Culture & Zero-Defect Habits': 'Cultura de Seguridad en Campo y Hábitos de Cero Defectos',
  'Project Recovery & High-Pressure Execution': 'Recuperación de Proyectos y Ejecución bajo Alta Presión',

  'First-Time & Mid-Level Management Cohorts (Corporate Leadership Academies)':
    'Cohortes de Gerencia Inicial e Intermedia (Academias Corporativas de Liderazgo)',
  'Corporate Leadership Academies': 'Academias Corporativas de Liderazgo',
  'Instilling foundational command presence, active mentorship, and decisive decision-making into rising supervisors and new managers stepping up from individual contributor roles.':
    'Inculcamos presencia de mando fundamental, mentoría activa y toma de decisiones decisiva en supervisores emergentes y nuevos gerentes que ascienden desde roles de contribuidor individual.',
  'Transition from Contributor to Leader': 'Transición de Colaborador a Líder',
  'Decisive Decision-Making Frameworks': 'Marcos para la Toma de Decisiones Decisiva',
  'Constructive Accountability & Feedback': 'Responsabilidad Constructiva y Retroalimentación',
  'Frontline Team Morale & Cohesion': 'Moral y Cohesión del Equipo de Primera Línea',

  /* ------------------------------------------------------------------
   * Founder profiles (data/content.ts)
   * ------------------------------------------------------------------ */
  'Co-Founder & US Army veteran': 'Cofundador y veterano del Ejército de EE. UU.',
  'Leadership is foundational for Walter Horton, born from early mentorship under his father—a master’s in physical education holder—and honed across military, corporate, municipal, and entrepreneurial sectors. A decorated U.S. Army veteran, Walter earned his leadership certification in 1986 in Baumholder, West Germany, before serving as cadre in Bad Kreuznach, where he directed daily operations for 35 to 80 newly arrived troops under the command of Lt. Gen. Calvin Waller and Gen. Colin Powell. He was personally selected by Command Sergeant Major Maurice Zepeda for assignment to the prestigious 3rd U.S. Infantry Regiment (The Old Guard) at Fort Myer, serving as an escort to the President of the United States. CSM Zepeda served as the Command Sergeant Major of Fort Myer, Arlington, Virginia (part of the U.S. Army Military District of Washington). During the summer 1987 Twilight Tattoo on The Ellipse, Walter was recognized in formation when Secretary of State George P. Shultz—serving as Honorary Reviewing Officer on behalf of President Reagan—walked the ranks to present him with the regimental crest pin. Walter seamlessly transitioned this operational discipline into the private sector, driving key initiatives for private equity firms in Washington, D.C. and New York, before serving as Supervisor of Transportation at NYC’s Jacobi Hospital, managing a 38-person team. After relocating to Maryland, he launched his own successful business enterprise and was inducted into the Rotary Club of Midtown Baltimore by his mentor, real estate mogul J.R. Owens—continuing a lifelong legacy of driving team success, accountability, and community leadership.':
    'El liderazgo es fundamental para Walter Horton, nacido de la mentoría temprana de su padre —titulado con una maestría en educación física— y perfeccionado en los sectores militar, corporativo, municipal y empresarial. Veterano condecorado del Ejército de EE. UU., Walter obtuvo su certificación en liderazgo en 1986 en Baumholder, Alemania Occidental, antes de servir como cuadro de mando en Bad Kreuznach, donde dirigió las operaciones diarias de 35 a 80 soldados recién llegados bajo el mando del Tte. Gral. Calvin Waller y el Gral. Colin Powell. Fue seleccionado personalmente por el Sargento Mayor de Comando Maurice Zepeda para incorporarse al prestigioso 3.er Regimiento de Infantería de EE. UU. (The Old Guard) en Fort Myer, donde sirvió como escolta del Presidente de los Estados Unidos. El Sargento Mayor de Comando Zepeda se desempeñó como Sargento Mayor de Comando de Fort Myer, Arlington, Virginia (parte del Distrito Militar de Washington del Ejército de EE. UU.). Durante el Twilight Tattoo del verano de 1987 en The Ellipse, Walter fue reconocido en formación cuando el Secretario de Estado George P. Shultz —actuando como Oficial Revisor Honorario en representación del Presidente Reagan— recorrió las filas para entregarle el distintivo con el escudo del regimiento. Walter trasladó esta disciplina operativa al sector privado sin dificultad, impulsando iniciativas clave para firmas de capital privado en Washington, D.C. y Nueva York, antes de desempeñarse como Supervisor de Transporte en el Jacobi Hospital de Nueva York, donde gestionó un equipo de 38 personas. Tras trasladarse a Maryland, fundó su propia empresa exitosa y fue incorporado al Rotary Club de Midtown Baltimore por su mentor, el magnate inmobiliario J.R. Owens, continuando así un legado de toda una vida dedicado a impulsar el éxito de los equipos, la responsabilidad y el liderazgo comunitario.',
  '3rd U.S. Infantry Regiment (The Old Guard) Presidential Escort':
    'Escolta Presidencial del 3.er Regimiento de Infantería de EE. UU. (The Old Guard)',
  'Cadre Leader under Gen. Colin Powell & Lt. Gen. Calvin Waller Command':
    'Líder de cuadro de mando bajo el mando del Gral. Colin Powell y el Tte. Gral. Calvin Waller',
  'President Reagan Twilight Tattoo Crest Pin Recipient (Presented by Sec. George P. Shultz)':
    'Receptor del distintivo del escudo en el Twilight Tattoo del Presidente Reagan (entregado por el Secretario George P. Shultz)',
  'Former Supervisor of Transportation, Jacobi Hospital NYC (38-Person Team)':
    'Exsupervisor de Transporte, Jacobi Hospital de Nueva York (equipo de 38 personas)',
  'Private Equity Operations, Washington D.C. & New York':
    'Operaciones de capital privado, Washington D.C. y Nueva York',
  'Rotary Club of Midtown Baltimore Inductee': 'Miembro incorporado al Rotary Club de Midtown Baltimore',

  'Trevor McLeod is a U.S. Army veteran, retired Local Union #3 International Brotherhood of Electrical Workers Journeyperson, and dedicated community leader defined by his service, mentorship, and work ethic. Throughout a distinguished trade career, Trevor led complex infrastructure and transit initiatives across New York City—including major projects on the Second Avenue Subway line and post-9/11 restoration at the Freedom Tower—frequently stepping up wherever skilled leadership was required. A Prince Hall Mason holding key position as District Deputy Grand Patron, he consistently gives back by organizing annual NYC Kidney and Prostate Cancer walks, coaching championship Pop Warner youth football, and serving as a primary organizer for middle and high school job fairs. Even in retirement, Trevor leads by example within the electrical industry by proctoring journeyperson exams, interviewing apprentices, and actively guiding the next generation—including his son—toward excellence.':
    'Trevor McLeod es veterano del Ejército de EE. UU., oficial electricista jubilado del Local Union #3 de la International Brotherhood of Electrical Workers y un líder comunitario comprometido, definido por su servicio, su mentoría y su ética de trabajo. A lo largo de una destacada carrera en el oficio, Trevor dirigió complejas iniciativas de infraestructura y transporte en la ciudad de Nueva York —incluidos proyectos importantes en la línea de metro de la Segunda Avenida y la restauración posterior al 11-S en la Freedom Tower—, asumiendo con frecuencia la responsabilidad allí donde se requería un liderazgo experto. Masón de Prince Hall y titular del cargo clave de District Deputy Grand Patron, retribuye de manera constante organizando las caminatas anuales contra el cáncer de riñón y de próstata en Nueva York, entrenando equipos campeones de fútbol americano juvenil Pop Warner y actuando como organizador principal de ferias de empleo para escuelas intermedias y secundarias. Incluso jubilado, Trevor lidera con el ejemplo dentro de la industria eléctrica supervisando exámenes de oficiales, entrevistando aprendices y guiando activamente a la próxima generación —incluido su hijo— hacia la excelencia.',
  'U.S. Army Veteran': 'Veterano del Ejército de EE. UU.',
  'Retired Local Union #3 IBEW Journeyperson': 'Oficial electricista jubilado del Local Union #3 de la IBEW',
  'Infrastructure Leader: Second Avenue Subway & Freedom Tower Post-9/11 Restoration':
    'Líder de infraestructura: metro de la Segunda Avenida y restauración de la Freedom Tower posterior al 11-S',
  'Prince Hall Mason (District Deputy Grand Patron)': 'Masón de Prince Hall (District Deputy Grand Patron)',
  'Electrical Industry Exam Proctor & Apprentice Interviewer':
    'Supervisor de exámenes de la industria eléctrica y entrevistador de aprendices',
  'Community Organizer: Health Walks, Pop Warner Football & Career Fairs':
    'Organizador comunitario: caminatas por la salud, fútbol americano Pop Warner y ferias de empleo',

  'Henry King brings decades of military distinction and organizational strategy to Elite Vanguard Leadership Group. A decorated U.S. Army veteran and graduate of the Drill Sergeant School and Primary Leadership Development Course (PLDC), Henry’s military service includes the Global War on Terrorism Service Medal and the National Defense Service Medal. Holding a Bachelor of Science in Industrial-Organizational Psychology, he bridges military discipline with human behavior to build resilient teams, streamline operations, and cultivate high-performance leadership.':
    'Henry King aporta décadas de distinción militar y estrategia organizacional a Elite Vanguard Leadership Group. Veterano condecorado del Ejército de EE. UU. y graduado de la Drill Sergeant School y del Primary Leadership Development Course (PLDC), su servicio militar incluye la Medalla de Servicio de la Guerra Global contra el Terrorismo y la Medalla de Servicio de la Defensa Nacional. Licenciado en Psicología Industrial-Organizacional, combina la disciplina militar con el comportamiento humano para formar equipos resilientes, optimizar operaciones y cultivar un liderazgo de alto rendimiento.',
  'Executive Operational Leadership': 'Liderazgo Operativo Ejecutivo',
  'High-Consequence Sector Strategy': 'Estrategia para Sectores de Alta Consecuencia',
  'Frontline Program Deployment': 'Despliegue de Programas en Primera Línea',
  'Enterprise Capability Building': 'Desarrollo de Capacidades Empresariales',

  'Sean Norris is a distinguished leader with a career spanning over 30 years in the banking and finance industries. A graduate of St. John’s with a Master’s degree in Finance, he bridges deep financial acumen with practical operational leadership. He honed his command and tactical skills through rigorous military service and leadership development, graduating from the Primary Leadership Development Course (PLDC). Bilingual in Spanish, Sean excels in building global teams, optimizing financial performance, and driving market strategy. His military background provides him with a resilient approach to risk and organizational challenge, which he applies to create resilient operational frameworks and high-performance teams.':
    'Sean Norris es un líder destacado con una carrera de más de 30 años en los sectores bancario y financiero. Graduado de St. John’s con una maestría en Finanzas, combina un profundo criterio financiero con un liderazgo operativo práctico. Perfeccionó sus habilidades de mando y tácticas mediante un riguroso servicio militar y formación en liderazgo, graduándose del Primary Leadership Development Course (PLDC). Bilingüe en español, Sean sobresale en la formación de equipos globales, la optimización del desempeño financiero y la conducción de la estrategia de mercado. Su trayectoria militar le brinda un enfoque resiliente frente al riesgo y a los retos organizacionales, que aplica para crear marcos operativos sólidos y equipos de alto rendimiento.',
  'Organizational Governance & Strategy': 'Gobernanza y Estrategia Organizacional',
  'Cross-Functional Team Mentorship': 'Mentoría de Equipos Multifuncionales',
  'Field Accountability Systems': 'Sistemas de Responsabilidad en el Campo',
  'Operational Risk Mitigation': 'Mitigación del Riesgo Operativo',

  /* ------------------------------------------------------------------
   * Service categories (data/content.ts)
   * ------------------------------------------------------------------ */
  'Leadership Development': 'Desarrollo de Liderazgo',
  'Instilling Military-Tested Command Discipline & Executive Presence':
    'Inculcamos disciplina de mando probada en el ámbito militar y presencia ejecutiva',
  'We translate proven military leadership tenets into practical executive and managerial behaviors, developing leaders who communicate with clarity, lead by example, and maintain composure in high-pressure scenarios.':
    'Traducimos principios de liderazgo militar comprobados en comportamientos ejecutivos y gerenciales prácticos, formando líderes que comunican con claridad, lideran con el ejemplo y mantienen la serenidad en escenarios de alta presión.',
  'Executive Command Presence & Communication': 'Presencia de Mando Ejecutiva y Comunicación',
  'Decisive Decision-Making Under Ambiguity': 'Toma de Decisiones Decisiva ante la Ambigüedad',
  'Ethical Leadership & Culture Standardization': 'Liderazgo Ético y Estandarización de la Cultura',
  'Direct Example Leadership (Lead from the Front)': 'Liderazgo con el Ejemplo Directo (Liderar desde el Frente)',
  'Executive Directors, Division Heads, Senior Managers':
    'Directores ejecutivos, jefes de división y gerentes sénior',
  'Executive Leadership Assessments': 'Evaluaciones de Liderazgo Ejecutivo',
  'Interactive High-Stakes Simulation Modules': 'Módulos Interactivos de Simulación de Alto Riesgo',
  'Personalized Executive Coaching & Action Plans': 'Coaching Ejecutivo Personalizado y Planes de Acción',
  'Organizational Leadership Playbooks': 'Manuales de Liderazgo Organizacional',

  'Management Consulting': 'Consultoría de Gestión',
  'Bridging the Gap Between Executive Strategy and Frontline Reality':
    'Cerramos la brecha entre la estrategia ejecutiva y la realidad de la primera línea',
  'Strategic plans often falter at the point of frontline execution. Our consulting engagements diagnose structural friction, streamline command-and-control communication, and install repeatable operational discipline across all organizational layers.':
    'Los planes estratégicos suelen fallar en el punto de la ejecución en primera línea. Nuestros proyectos de consultoría diagnostican la fricción estructural, agilizan la comunicación de mando y control e instalan una disciplina operativa repetible en todos los niveles de la organización.',
  'Strategy-to-Execution Gap Analysis': 'Análisis de la Brecha entre Estrategia y Ejecución',
  'Operational Governance & Command Architecture': 'Gobernanza Operativa y Arquitectura de Mando',
  'Cross-Departmental Friction Removal': 'Eliminación de la Fricción entre Departamentos',
  'Performance Alignment & Accountability Systems': 'Alineación del Desempeño y Sistemas de Responsabilidad',
  'C-Suite Executives, Operations VPs, Board Members':
    'Altos ejecutivos, vicepresidentes de operaciones y miembros del consejo',
  'Operational Friction Diagnostics': 'Diagnóstico de Fricción Operativa',
  'Strategic Alignment Roadmaps': 'Hojas de Ruta de Alineación Estratégica',
  'Cross-Functional Communication Protocols': 'Protocolos de Comunicación Multifuncional',
  'Executive Governance Frameworks': 'Marcos de Gobernanza Ejecutiva',

  'Operational Excellence': 'Excelencia Operativa',
  'Standardizing Zero-Defect Habits & High-Consequence Execution':
    'Estandarizamos hábitos de cero defectos y ejecución de alta consecuencia',
  'Drawing upon deep military logistical rigor and high-stakes infrastructure management, we help organizations instill strict operational standards, risk management disciplines, and rigorous execution protocols.':
    'A partir de un profundo rigor logístico militar y de la gestión de infraestructura de alto riesgo, ayudamos a las organizaciones a instaurar estándares operativos estrictos, disciplinas de gestión de riesgos y protocolos rigurosos de ejecución.',
  'Standard Operating Procedure (SOP) Hardening': 'Fortalecimiento de los Procedimientos Operativos Estándar (POE)',
  'High-Consequence Safety & Quality Habit Formation':
    'Formación de Hábitos de Seguridad y Calidad de Alta Consecuencia',
  'Logistical Flow & Bottleneck Elimination': 'Flujo Logístico y Eliminación de Cuellos de Botella',
  'Accountability Systems & Outcome Ownership': 'Sistemas de Responsabilidad y Propiedad de los Resultados',
  'Operations Directors, Plant Managers, Fleet Supervisors':
    'Directores de operaciones, gerentes de planta y supervisores de flotas',
  'Standard Operating Procedure Audits': 'Auditorías de Procedimientos Operativos Estándar',
  'Field Execution Checklists & Toolkits': 'Listas de Verificación y Kits de Herramientas para el Campo',
  'Quality & Safety Standard Enforcement Systems':
    'Sistemas de Aplicación de Estándares de Calidad y Seguridad',
  'Operational Readiness KPI Dashboards': 'Paneles de KPI de Preparación Operativa',

  'Frontline Leadership Development': 'Desarrollo de Liderazgo de Primera Línea',
  'Empowering Supervisors, Foremen, and Squad-Level Leaders':
    'Empoderamos a supervisores, capataces y líderes de equipo',
  'Frontline supervisors are the linchpin of organizational execution. We provide practical squad-level leadership training that enables shift managers, foremen, and team leads to inspire their personnel while enforcing uncompromising standards.':
    'Los supervisores de primera línea son el eje de la ejecución organizacional. Ofrecemos formación práctica en liderazgo de equipo que permite a los jefes de turno, capataces y líderes de equipo inspirar a su personal mientras hacen cumplir estándares sin concesiones.',
  'First-Line Supervisory Authority & Respect': 'Autoridad y Respeto del Supervisor de Primera Línea',
  'Jobsite & Shift-Level Communication': 'Comunicación en Obra y a Nivel de Turno',
  'Constructive Conflict Resolution & Accountability': 'Resolución Constructiva de Conflictos y Responsabilidad',
  'Mission First, People Always Balance': 'Equilibrio entre la Misión Primero y las Personas Siempre',
  'Field Foremen, Shift Supervisors, Crew Leaders':
    'Capataces de campo, supervisores de turno y jefes de cuadrilla',
  'Frontline Field Leadership Toolkits': 'Kits de Herramientas de Liderazgo en Primera Línea',
  'Tactical Supervisor Workshops': 'Talleres Tácticos para Supervisores',
  'On-Site Mentorship & Direct Shadowing': 'Mentoría en Sitio y Acompañamiento Directo',
  'Team Cohesion & Retention Frameworks': 'Marcos de Cohesión y Retención de Equipos',

  'Scalable Cohort-Based Programs for Emerging & Mid-Level Talent':
    'Programas escalables por cohortes para talento emergente e intermedio',
  'Custom-tailored leadership academy curriculums designed to train cohorts of emerging managers, embedding institutional values, operational discipline, and decisive execution habits across the enterprise.':
    'Currículos de academia de liderazgo hechos a medida, diseñados para formar cohortes de gerentes emergentes e integrar valores institucionales, disciplina operativa y hábitos de ejecución decisiva en toda la empresa.',
  'Cohort-Based Leadership Progression': 'Progresión de Liderazgo por Cohortes',
  'Peer-to-Peer Accountability & Team Dynamics': 'Responsabilidad entre Pares y Dinámica de Equipos',
  'Scenario-Based Problem Solving & Simulations':
    'Resolución de Problemas y Simulaciones Basadas en Escenarios',
  'Mentorship Pipeline & Succession Preparation': 'Cadena de Mentoría y Preparación de la Sucesión',
  'Enterprise HR Leaders, Training Directors, Talent Managers':
    'Líderes de RR. HH. empresariales, directores de formación y gerentes de talento',
  'Custom Cohort Curriculum Design': 'Diseño de Currículo Personalizado por Cohorte',
  'Facilitated Academy Intensives & Seminars': 'Intensivos y Seminarios Facilitados de la Academia',
  'Participant Capstone Projects & Evaluations': 'Proyectos Finales y Evaluaciones de los Participantes',
  'Longitudinal Leadership Growth Tracking': 'Seguimiento Longitudinal del Crecimiento del Liderazgo',

  'Strategic Execution': 'Ejecución Estratégica',
  'Transforming High-Level Directives into Decisive Operational Results':
    'Transformamos directrices de alto nivel en resultados operativos decisivos',
  'Ensure your critical organizational initiatives achieve uncompromising mission success. We assist leadership teams in establishing clear operational objectives, assigning absolute ownership, and executing with military precision.':
    'Asegure que sus iniciativas organizacionales críticas alcancen un éxito de misión sin concesiones. Acompañamos a los equipos de liderazgo en la definición de objetivos operativos claros, la asignación de responsabilidad absoluta y la ejecución con precisión militar.',
  'Mission-Critical Objective Structuring': 'Estructuración de Objetivos Críticos para la Misión',
  'Rapid Operational Deployment Plans': 'Planes de Despliegue Operativo Rápido',
  'Real-Time Bottleneck & Risk Mitigation': 'Mitigación de Cuellos de Botella y Riesgos en Tiempo Real',
  'Continuous Review & Execution Cadence': 'Revisión Continua y Cadencia de Ejecución',
  'Program Directors, Transformation Officers, Agency Heads':
    'Directores de programa, responsables de transformación y jefes de organismos',
  'Strategic Execution Cadence Schedules': 'Calendarios de Cadencia de Ejecución Estratégica',
  'Mission Command Playbooks': 'Manuales de Mando de Misión',
  'Action Review (AAR) Protocols': 'Protocolos de Revisión Posterior a la Acción (AAR)',
  'Milestone Tracking & Governance Tooling': 'Seguimiento de Hitos y Herramientas de Gobernanza',

  /* ------------------------------------------------------------------
   * Home page
   * ------------------------------------------------------------------ */
  'Veteran-Led Executive & Operational Consulting':
    'Consultoría Ejecutiva y Operativa Liderada por Veteranos',
  'Translating Military Discipline Into Frontline Operational Excellence':
    'Traducimos la Disciplina Militar en Excelencia Operativa de Primera Línea',
  'Bridging the critical divide between executive strategy and field execution for enterprise operations, public sector agencies, defense contractors, and high-consequence industries.':
    'Cerramos la brecha crítica entre la estrategia ejecutiva y la ejecución en el campo para operaciones empresariales, organismos del sector público, contratistas de defensa e industrias de alta consecuencia.',
  'Explore Practice Areas': 'Explore las Áreas de Práctica',
  'Direct Engagement:': 'Contacto Directo:',
  'Institutional Focus & Key Industry Domains': 'Enfoque Institucional y Sectores Clave',
  '38+ Team': 'Equipo de 38+',
  'Supervisory Command Span': 'Alcance de Mando Supervisorio',
  'Zero-Defect': 'Cero Defectos',
  'Operational Standard': 'Estándar Operativo',
  'Outcome Ownership': 'Propiedad de los Resultados',
  'National': 'Nacional',
  'Consulting Capability': 'Capacidad de Consultoría',
  'Leadership Standard': 'Estándar de Liderazgo',
  'Authentic authority is earned through presence, competence, and service.':
    'La autoridad auténtica se gana con presencia, competencia y servicio.',
  'About Elite Vanguard': 'Acerca de Elite Vanguard',
  'Bridging the Critical Divide Between Strategy & Frontline Execution':
    'Cerrando la Brecha Crítica entre la Estrategia y la Ejecución en Primera Línea',
  'Military Rigor': 'Rigor Militar',
  'Time-tested command and squad-level accountability.':
    'Mando probado en el tiempo y responsabilidad a nivel de equipo.',
  'Frontline Precision': 'Precisión en Primera Línea',
  'Direct transition of directives to supervisor-level execution.':
    'Traslado directo de las directrices a la ejecución a nivel de supervisor.',
  'Decisive Outcomes': 'Resultados Decisivos',
  'Uncompromising mission success in high-risk domains.':
    'Éxito de misión sin concesiones en ámbitos de alto riesgo.',
  'Meet Our Leadership': 'Conozca a Nuestro Liderazgo',
  'Learn About Our Approach': 'Conozca Nuestro Enfoque',
  'Executive Self-Assessment': 'Autoevaluación Ejecutiva',
  'Operational Readiness & Leadership Gap Diagnostic':
    'Diagnóstico de Preparación Operativa y Brechas de Liderazgo',
  'Measure how effectively your C-suite directives are converted into frontline shift discipline and accountability.':
    'Mida con qué eficacia las directrices de su alta dirección se convierten en disciplina y responsabilidad en los turnos de primera línea.',
  'Strategic Architecture': 'Arquitectura Estratégica',
  'The Operational Bridge': 'El Puente Operativo',
  'Organizations rarely fail at formulating strategy. They fail at translating strategic intent into frontline daily execution.':
    'Las organizaciones rara vez fallan al formular la estrategia. Fallan al traducir la intención estratégica en la ejecución diaria de la primera línea.',
  'Phase 01': 'Fase 01',
  'Phase 02': 'Fase 02',
  'Phase 03': 'Fase 03',
  'Executive Strategy': 'Estrategia Ejecutiva',
  'High-level directives, organizational objectives, enterprise governance, and capital allocation formulated in boardrooms and executive suites.':
    'Directrices de alto nivel, objetivos organizacionales, gobernanza empresarial y asignación de capital formulados en los consejos y las direcciones ejecutivas.',
  'Strategic Intent Defined': 'Intención Estratégica Definida',
  'The Critical Bridge': 'El Puente Crítico',
  'Frontline Execution': 'Ejecución en Primera Línea',
  'Where strategy meets reality: supervisors, foremen, crew leaders, and field teams operating with clear standards, total accountability, and decisive leadership.':
    'Donde la estrategia se encuentra con la realidad: supervisores, capataces, jefes de cuadrilla y equipos de campo que operan con estándares claros, responsabilidad total y liderazgo decisivo.',
  'Elite Vanguard Engagement Zone': 'Zona de Intervención de Elite Vanguard',
  'Repeatable high performance, zero-defect culture, reliable safety metrics, and consistent mission accomplishment across high-consequence environments.':
    'Alto rendimiento repetible, cultura de cero defectos, indicadores de seguridad fiables y cumplimiento constante de la misión en entornos de alta consecuencia.',
  'Uncompromising Mission Success': 'Éxito de Misión Sin Concesiones',
  'Request Operational Diagnostics': 'Solicite un Diagnóstico Operativo',
  'Execution Blueprint': 'Plan de Ejecución',
  'How We Engage & Transform Organizations': 'Cómo Trabajamos y Transformamos Organizaciones',
  'A structured, battle-tested consulting engagement framework engineered for high-consequence enterprise and municipal operations.':
    'Un marco de consultoría estructurado y probado en el terreno, diseñado para operaciones empresariales y municipales de alta consecuencia.',
  'Target Sectors': 'Sectores Objetivo',
  'Institutional & Industry Focus': 'Enfoque Institucional y Sectorial',
  'We tailor battle-tested leadership principles to the operational realities of high-consequence domains.':
    'Adaptamos principios de liderazgo probados en el terreno a las realidades operativas de los ámbitos de alta consecuencia.',
  'Engage Consulting': 'Solicitar Consultoría',
  'Institutional Mission': 'Misión Institucional',
  'Foundational Principles': 'Principios Fundamentales',
  'Core Team Values': 'Valores Centrales del Equipo',
  'Our consulting and leadership philosophy is anchored in five non-negotiable operational principles.':
    'Nuestra filosofía de consultoría y liderazgo se sustenta en cinco principios operativos no negociables.',
  'Elite Vanguard Operational Standard': 'Estándar Operativo de Elite Vanguard',
  'Leadership Alignment': 'Alineación del Liderazgo',
  'Instill These Values Into Your Frontline': 'Inculque Estos Valores en su Primera Línea',
  'Transform organizational culture and equip supervisors with decisive execution capabilities.':
    'Transforme la cultura organizacional y dote a sus supervisores de capacidades de ejecución decisiva.',
  'Executive Leadership': 'Liderazgo Ejecutivo',
  'Veteran Leadership & Frontline Command': 'Liderazgo Veterano y Mando de Primera Línea',
  'Led by decorated military veterans with extensive track records across infrastructure, public transit, and commercial enterprises.':
    'Dirigida por veteranos militares condecorados con amplia trayectoria en infraestructura, transporte público y empresas comerciales.',
  'Decorated U.S. Army veteran, former Presidential Escort (3rd U.S. Infantry Regiment / The Old Guard), private equity operations veteran, and NYC Jacobi Hospital transportation supervisor.':
    'Veterano condecorado del Ejército de EE. UU., antiguo Escolta Presidencial (3.er Regimiento de Infantería de EE. UU. / The Old Guard), veterano de operaciones de capital privado y supervisor de transporte del Jacobi Hospital de Nueva York.',
  'U.S. Army veteran, retired Local Union #3 IBEW Journeyperson, transit infrastructure leader (Second Avenue Subway & Freedom Tower post-9/11 restoration), and dedicated community leader.':
    'Veterano del Ejército de EE. UU., oficial electricista jubilado del Local Union #3 de la IBEW, líder de infraestructura de transporte (metro de la Segunda Avenida y restauración de la Freedom Tower posterior al 11-S) y líder comunitario comprometido.',
  'Read Executive Biography': 'Leer la Biografía Ejecutiva',
  'View Full Leadership Team & 4 Co-Founders': 'Ver el Equipo de Liderazgo Completo y los 4 Cofundadores',
  'Confidential Executive Engagement': 'Contacto Ejecutivo Confidencial',
  'Ready to Align Executive Strategy With Frontline Precision?':
    '¿Listo para Alinear la Estrategia Ejecutiva con la Precisión de la Primera Línea?',
  "Schedule an initial consultation to discuss your organization's leadership development, operational rigor, and high-consequence performance goals.":
    'Programe una consulta inicial para tratar el desarrollo de liderazgo de su organización, el rigor operativo y sus objetivos de desempeño en entornos de alta consecuencia.',

  /* ------------------------------------------------------------------
   * About page
   * ------------------------------------------------------------------ */
  'Institutional Background & Philosophy': 'Trayectoria Institucional y Filosofía',
  'About Elite Vanguard Leadership Group': 'Acerca de Elite Vanguard Leadership Group',
  'Translating time-tested military principles into high-performance commercial, industrial, and institutional excellence.':
    'Traducimos principios militares probados en el tiempo en excelencia comercial, industrial e institucional de alto rendimiento.',
  'Firm Overview': 'Perfil de la Firma',
  'Official Charter & Positioning': 'Carta Constitutiva y Posicionamiento',
  'Veteran-Led:': 'Liderada por veteranos:',
  'Decades of elite military command and combat support discipline.':
    'Décadas de mando militar de élite y disciplina de apoyo en combate.',
  'Operational Focus:': 'Enfoque operativo:',
  'Bridging boardroom strategy to frontline supervisor execution.':
    'Conectamos la estrategia del consejo con la ejecución del supervisor de primera línea.',
  'High-Consequence Rigor:': 'Rigor de alta consecuencia:',
  'Zero-defect mentality for infrastructure, defense, and logistics.':
    'Mentalidad de cero defectos para infraestructura, defensa y logística.',
  'The Strategic Challenge': 'El Desafío Estratégico',
  'Closing the Strategy-Execution Chasm': 'Cerrando el Abismo entre Estrategia y Ejecución',
  'Why traditional executive consulting fails at the frontline level—and how military operational discipline resolves it.':
    'Por qué la consultoría ejecutiva tradicional falla en el nivel de la primera línea y cómo la disciplina operativa militar lo resuelve.',
  'The Industry Problem': 'El Problema del Sector',
  'Strategy Without Operational Grounding': 'Estrategia Sin Fundamento Operativo',
  'Enterprise organizations invest millions in strategic plans, only to see initiatives stall because frontline supervisors, shift leads, and field foremen lack the structured command tools, clear standards, and accountability frameworks required to execute.':
    'Las grandes organizaciones invierten millones en planes estratégicos, solo para ver cómo sus iniciativas se estancan porque los supervisores de primera línea, los jefes de turno y los capataces de campo carecen de las herramientas de mando estructuradas, los estándares claros y los marcos de responsabilidad necesarios para ejecutar.',
  '• Diluted executive messaging across management tiers':
    '• Mensajes ejecutivos diluidos entre los distintos niveles gerenciales',
  '• Frontline reluctance to enforce non-negotiable standards':
    '• Resistencia de la primera línea a hacer cumplir estándares no negociables',
  '• Lack of squad-level ownership and after-action review culture':
    '• Falta de responsabilidad a nivel de equipo y de cultura de revisión posterior a la acción',
  'The Elite Vanguard Solution': 'La Solución Elite Vanguard',
  'Military Precision Applied to Business': 'Precisión Militar Aplicada a los Negocios',
  'We embed time-tested military principles—direct example leadership, mission-type orders, rigorous standard operating procedures, and decentralized execution—into corporate teams, transforming supervisors into decisive, accountable leaders.':
    'Integramos en los equipos corporativos principios militares probados en el tiempo —liderazgo con el ejemplo directo, órdenes por misión, procedimientos operativos estándar rigurosos y ejecución descentralizada—, transformando a los supervisores en líderes decisivos y responsables.',
  "✓ Clear commander's intent translated to shift supervisors":
    '✓ Intención clara del mando trasladada a los supervisores de turno',
  '✓ Culture of personal responsibility: Own the Outcome':
    '✓ Cultura de responsabilidad personal: asuma el resultado',
  '✓ Decisive decision-making under high-pressure conditions':
    '✓ Toma de decisiones decisiva en condiciones de alta presión',
  'Mission Statement': 'Declaración de Misión',
  'Vision Statement': 'Declaración de Visión',
  'Nationwide Operational Leadership Benchmark':
    'Referencia Nacional en Liderazgo Operativo',
  'Guiding Principles': 'Principios Rectores',
  'Our five non-negotiable operational principles guiding every engagement.':
    'Nuestros cinco principios operativos no negociables que guían cada proyecto.',
  'Meet the Veterans Leading Elite Vanguard': 'Conozca a los Veteranos que Dirigen Elite Vanguard',
  'Discover the background and decorated service history of our co-founders across the military, infrastructure, and private equity sectors.':
    'Descubra la trayectoria y el condecorado historial de servicio de nuestros cofundadores en los sectores militar, de infraestructura y de capital privado.',
  'Explore Leadership Team': 'Explore el Equipo de Liderazgo',

  /* ------------------------------------------------------------------
   * Services page
   * ------------------------------------------------------------------ */
  'Executive Consulting Architecture': 'Arquitectura de Consultoría Ejecutiva',
  'Consulting & Leadership Practice Areas': 'Áreas de Práctica en Consultoría y Liderazgo',
  'A structured framework designed to translate battle-tested operational rigor into commercial and frontline excellence.':
    'Un marco estructurado diseñado para traducir el rigor operativo probado en el terreno en excelencia comercial y de primera línea.',
  'FRAMEWORK NOTICE:': 'AVISO SOBRE EL MARCO:',
  'Practice areas are structured based on firm positioning and target domains. Custom corporate scopes and tailored curriculums are finalized during the diagnostic engagement.':
    'Las áreas de práctica se estructuran según el posicionamiento de la firma y los ámbitos objetivo. Los alcances corporativos personalizados y los currículos a medida se definen durante el proyecto de diagnóstico.',
  'Custom Scope Request': 'Solicitud de Alcance Personalizado',
  'Practice Area Categories': 'Categorías de Áreas de Práctica',
  'Practice Architecture': 'Arquitectura de la Práctica',
  'Target:': 'Público objetivo:',
  'Core Focus Areas': 'Áreas de Enfoque Principales',
  'Key Engagement Outputs': 'Entregables Clave del Proyecto',
  'Elite Vanguard Engagement Standard': 'Estándar de Intervención de Elite Vanguard',
  'Inquire About': 'Consultar sobre',
  'Sector Integration': 'Integración Sectorial',
  'Tailored Application Across Key Domains': 'Aplicación Adaptada a los Ámbitos Clave',
  'How our consulting services integrate into your specific industry requirements.':
    'Cómo nuestros servicios de consultoría se integran en los requisitos específicos de su sector.',
  'Request Sector Proposal': 'Solicitar Propuesta Sectorial',
  'Initiate an Executive Practice Consultation': 'Inicie una Consulta con Nuestra Práctica Ejecutiva',
  'Discuss your organization’s operational challenges, supervisory development needs, and customized leadership academy formats.':
    'Converse sobre los desafíos operativos de su organización, sus necesidades de desarrollo de supervisores y los formatos personalizados de academia de liderazgo.',

  /* ------------------------------------------------------------------
   * Team page
   * ------------------------------------------------------------------ */
  'Executive Leadership & Co-Founders': 'Liderazgo Ejecutivo y Cofundadores',
  'Our Leadership Team': 'Nuestro Equipo de Liderazgo',
  'Battle-tested leadership grounded in elite military service, presidential protection, heavy transit infrastructure, and commercial operational management.':
    'Liderazgo probado en el terreno, cimentado en el servicio militar de élite, la protección presidencial, la infraestructura de transporte pesado y la gestión operativa comercial.',
  'Asset Path': 'Ruta del Archivo',
  'Key Leadership Highlights': 'Logros Clave de Liderazgo',
  'Request Consultation with Leadership': 'Solicitar Consulta con el Liderazgo',
  'Core Value: Lead from the Front': 'Valor Central: Liderar desde el Frente',
  'Book A Consultation': 'Reserve una Consulta',
  'Reach out to discuss high-level strategic alignment, operational consulting engagements, or leadership development cohorts.':
    'Contáctenos para tratar la alineación estratégica de alto nivel, proyectos de consultoría operativa o cohortes de desarrollo de liderazgo.',

  /* ------------------------------------------------------------------
   * Booking page
   * ------------------------------------------------------------------ */
  'Executive Engagement': 'Contacto Ejecutivo',
  "Schedule a confidential consultation with Walter Horton and our leadership team to evaluate your organization's operational challenges, supervisory capabilities, and high-consequence performance goals.":
    'Programe una consulta confidencial con Walter Horton y nuestro equipo de liderazgo para evaluar los desafíos operativos de su organización, las capacidades de sus supervisores y sus objetivos de desempeño en entornos de alta consecuencia.',
  'Direct Coordination': 'Coordinación Directa',
  'Lead Executive': 'Ejecutivo Principal',
  'Confidential Email': 'Correo Electrónico Confidencial',
  'All consultations and organizational inquiries are handled with strict executive confidentiality.':
    'Todas las consultas y solicitudes de las organizaciones se atienden con estricta confidencialidad ejecutiva.',
  'Initial assessment reviews strategy-to-execution gaps and potential cohort academy scopes.':
    'La evaluación inicial analiza las brechas entre estrategia y ejecución y los posibles alcances de la academia por cohortes.',
  'Primary Consulting Audiences': 'Principales Públicos de Consultoría',
  'Consultation Request Received': 'Solicitud de Consulta Recibida',
  'Thank You': 'Gracias',
  'Your consultation request for': 'Su solicitud de consulta para',
  'your organization': 'su organización',
  'has been routed directly to Walter Horton. We will review your operational requirements and contact you at':
    'ha sido enviada directamente a Walter Horton. Revisaremos sus requisitos operativos y nos pondremos en contacto con usted en',
  'or': 'o',
  'promptly.': 'a la mayor brevedad.',
  'Sector:': 'Sector:',
  'Preferred Window:': 'Franja preferida:',
  'Requested Date:': 'Fecha solicitada:',
  'Submit Another Request': 'Enviar Otra Solicitud',
  'Return to Home': 'Volver al Inicio',
  'Executive Consultation Request': 'Solicitud de Consulta Ejecutiva',
  'Please provide details regarding your organization, sector, and core operational focus.':
    'Indique los datos de su organización, su sector y su enfoque operativo principal.',
  'Please complete all required fields (Full Name, Work Email, and Direct Phone).':
    'Complete todos los campos obligatorios (nombre completo, correo corporativo y teléfono directo).',
  'Full Name *': 'Nombre Completo *',
  'e.g. Marcus Vance': 'p. ej. Marcus Vance',
  'Title / Role': 'Cargo / Función',
  'e.g. VP of Operations / Plant Manager': 'p. ej. VP de Operaciones / Gerente de Planta',
  'Organization / Agency *': 'Organización / Organismo *',
  'e.g. Apex Logistics Corp / City Water Dept': 'p. ej. Apex Logistics Corp / Departamento Municipal de Aguas',
  'Target Sector *': 'Sector Objetivo *',
  'Other Commercial / Industrial Enterprise': 'Otra Empresa Comercial / Industrial',
  'Work Email *': 'Correo Corporativo *',
  'Direct Telephone *': 'Teléfono Directo *',
  'Core Leadership or Operational Challenge': 'Principal Desafío de Liderazgo u Operativo',
  'Describe the primary friction points between executive strategy and field performance, supervisory cohort needs, or operational rigor objectives...':
    'Describa los principales puntos de fricción entre la estrategia ejecutiva y el desempeño en el campo, las necesidades de formación de supervisores o los objetivos de rigor operativo...',
  'Preferred Date Window': 'Franja de Fecha Preferida',
  'Preferred Time Window': 'Franja Horaria Preferida',
  'Morning (08:00 - 12:00 EST)': 'Mañana (08:00 - 12:00 EST)',
  'Afternoon (12:00 - 17:00 EST)': 'Tarde (12:00 - 17:00 EST)',
  'Late Afternoon (17:00 - 19:00 EST)': 'Última hora de la tarde (17:00 - 19:00 EST)',
  'Additional Context / Notes': 'Contexto Adicional / Notas',
  'Any additional background, cohort size, or specific timeline constraints...':
    'Cualquier antecedente adicional, tamaño de la cohorte o restricciones específicas de plazos...',
  'Confidentiality & Executive Discretion Guaranteed':
    'Confidencialidad y Discreción Ejecutiva Garantizadas',
  'Transmitting Request...': 'Enviando solicitud...',
  'Submit Consultation Request': 'Enviar Solicitud de Consulta',

  /* ------------------------------------------------------------------
   * Contact page
   * ------------------------------------------------------------------ */
  'Executive Inquiries': 'Consultas Ejecutivas',
  'Contact Elite Vanguard Leadership Group': 'Contacte a Elite Vanguard Leadership Group',
  'Connect directly with our executive team to explore management consulting partnerships, leadership academies, and operational diagnostics.':
    'Comuníquese directamente con nuestro equipo ejecutivo para explorar alianzas de consultoría de gestión, academias de liderazgo y diagnósticos operativos.',
  'Firm Information': 'Información de la Firma',
  'Contact Person': 'Persona de Contacto',
  'Executive Leadership & Consulting': 'Liderazgo Ejecutivo y Consultoría',
  'Direct Telephone': 'Teléfono Directo',
  'Direct Line • Prompt Executive Response': 'Línea directa • Respuesta ejecutiva ágil',
  'Executive Email': 'Correo Electrónico Ejecutivo',
  'Confidential Strategic Communications': 'Comunicaciones estratégicas confidenciales',
  'National Consulting Capability': 'Capacidad de Consultoría Nacional',
  'Serving enterprise organizations, municipal utilities, defense contractors, and infrastructure teams nationwide with on-site diagnostics, academies, and remote executive advisory.':
    'Atendemos a grandes organizaciones, servicios públicos municipales, contratistas de defensa y equipos de infraestructura en todo el país con diagnósticos en sitio, academias y asesoría ejecutiva remota.',
  'Schedule Formal Consultation': 'Programar Consulta Formal',
  'Message Dispatched': 'Mensaje Enviado',
  'Your inquiry has been sent directly to Walter Horton. We will review your correspondence and respond via':
    'Su consulta ha sido enviada directamente a Walter Horton. Revisaremos su mensaje y le responderemos a través de',
  'shortly.': 'en breve.',
  'Send Another Message': 'Enviar Otro Mensaje',
  'Send Direct Message': 'Enviar Mensaje Directo',
  'For general inquiries, strategic partnership discussions, or confidential executive questions.':
    'Para consultas generales, conversaciones sobre alianzas estratégicas o preguntas ejecutivas confidenciales.',
  'Please fill in all required fields.': 'Complete todos los campos obligatorios.',
  'Your Name *': 'Su Nombre *',
  'Your Email *': 'Su Correo Electrónico *',
  'Telephone Number': 'Número de Teléfono',
  'Inquiry Subject': 'Asunto de la Consulta',
  'Leadership Development / Consulting Inquiry': 'Desarrollo de liderazgo / Consulta de consultoría',
  'Your Message *': 'Su Mensaje *',
  'Please outline your message, organization details, or consulting inquiry...':
    'Describa su mensaje, los datos de su organización o su consulta de consultoría...',
  '* Required Fields': '* Campos obligatorios',
  'Transmitting...': 'Enviando...',
  'Send Message': 'Enviar Mensaje',

  /* ------------------------------------------------------------------
   * Footer
   * ------------------------------------------------------------------ */
  'Bridge the Critical Gap Between Strategy and Frontline Execution':
    'Cierre la Brecha Crítica entre la Estrategia y la Ejecución en Primera Línea',
  'Equip your organization with the discipline, accountability, and operational precision needed to navigate complex, high-consequence environments.':
    'Dote a su organización de la disciplina, la responsabilidad y la precisión operativa necesarias para desenvolverse en entornos complejos y de alta consecuencia.',
  'A veteran-led management consulting and leadership development firm translating time-tested military principles into high-performance commercial and operational excellence.':
    'Una firma de consultoría de gestión y desarrollo de liderazgo dirigida por veteranos que traduce principios militares probados en el tiempo en excelencia comercial y operativa de alto rendimiento.',
  'Our Mission': 'Nuestra Misión',
  'Navigation': 'Navegación',
  'Direct Contact': 'Contacto Directo',
  'Confidential Inquiries': 'Consultas Confidenciales',
  'Request Consultation': 'Solicitar Consulta',
  'All rights reserved.': 'Todos los derechos reservados.',
  'Replay Intro': 'Repetir Intro',
  'Replay Brand Intro Sequence': 'Repetir la secuencia de introducción de la marca',
  'Executive Consulting': 'Consultoría Ejecutiva',
  'Operational Rigor': 'Rigor Operativo',

  /* ------------------------------------------------------------------
   * Operational readiness diagnostic
   * ------------------------------------------------------------------ */
  'Interactive Assessment Tool': 'Herramienta de Evaluación Interactiva',
  'Operational Readiness & Execution Diagnostic': 'Diagnóstico de Preparación Operativa y Ejecución',
  "Evaluate your organization's frontline command alignment across 4 high-consequence pillars to calculate your Execution Index.":
    'Evalúe la alineación del mando de primera línea de su organización en 4 pilares de alta consecuencia para calcular su Índice de Ejecución.',
  'Reset Diagnostic': 'Reiniciar Diagnóstico',
  'Pillar': 'Pilar',
  'Selected:': 'Seleccionado:',
  'pts': 'pts',
  'Strategy-to-Field Translation': 'Traslado de la Estrategia al Campo',
  'How effectively do frontline supervisors understand and execute executive strategic directives?':
    '¿Con qué eficacia comprenden y ejecutan los supervisores de primera línea las directrices estratégicas de la dirección?',
  'Diluted or Misaligned': 'Diluida o desalineada',
  'Strategic intent gets lost between C-suite directives and frontline shift reality.':
    'La intención estratégica se pierde entre las directrices de la alta dirección y la realidad del turno en primera línea.',
  'Inconsistent Execution': 'Ejecución inconsistente',
  'Some shifts execute well, but quality and speed fluctuate across different crews.':
    'Algunos turnos ejecutan bien, pero la calidad y la rapidez varían entre las distintas cuadrillas.',
  'Decisive Alignment': 'Alineación decisiva',
  'Supervisors clearly communicate mission objectives and execute with minimal drift.':
    'Los supervisores comunican con claridad los objetivos de la misión y ejecutan con una desviación mínima.',
  'Supervisory Accountability & Ownership': 'Responsabilidad y Propiedad del Supervisor',
  'What is the dominant reaction when operational bottlenecks or performance deficits occur?':
    '¿Cuál es la reacción predominante cuando surgen cuellos de botella operativos o déficits de desempeño?',
  'Finger-Pointing & Excuses': 'Señalamientos y excusas',
  'Deficits are attributed to supply chain delays, staff shortages, or upper management.':
    'Los déficits se atribuyen a retrasos en la cadena de suministro, falta de personal o a la alta dirección.',
  'Reactive Problem Solving': 'Resolución reactiva de problemas',
  'Supervisors fix immediate fires but fail to install preventative root-cause discipline.':
    'Los supervisores apagan incendios inmediatos, pero no instauran una disciplina preventiva de causa raíz.',
  '100% Outcome Ownership': '100% de propiedad del resultado',
  'Leaders embody "Own the Outcome", conduct after-action reviews, and hold teams accountable.':
    'Los líderes encarnan el principio de «asumir el resultado», realizan revisiones posteriores a la acción y exigen responsabilidad a sus equipos.',
  'Operational Rigor & SOP Adherence': 'Rigor Operativo y Cumplimiento de los POE',
  'How strictly are Standard Operating Procedures (SOPs), safety protocols, and quality standards enforced on the frontline?':
    '¿Con qué rigor se aplican en la primera línea los procedimientos operativos estándar (POE), los protocolos de seguridad y los estándares de calidad?',
  'Informal / Shortcuts Taken': 'Informal / se toman atajos',
  'SOPs exist in manuals but are frequently bypassed under time pressure.':
    'Los POE existen en los manuales, pero con frecuencia se omiten por presión de tiempo.',
  'Compliance Without Passion': 'Cumplimiento sin convicción',
  'Checklists are completed mechanically without true zero-defect pride.':
    'Las listas de verificación se completan de forma mecánica, sin un verdadero orgullo por el cero defectos.',
  'Zero-Defect Culture': 'Cultura de cero defectos',
  'Standards are non-negotiable; supervisors actively coach and inspect for perfection.':
    'Los estándares son no negociables; los supervisores forman e inspeccionan activamente en busca de la perfección.',
  'Decisive Adaptability Under Pressure': 'Adaptabilidad Decisiva bajo Presión',
  'How do your mid-level and frontline leaders perform in high-consequence, unexpected operational disruptions?':
    '¿Cómo se desempeñan sus líderes intermedios y de primera línea ante interrupciones operativas inesperadas y de alta consecuencia?',
  'Paralysis or Panic': 'Parálisis o pánico',
  'Teams stall waiting for higher-level guidance or react chaotically.':
    'Los equipos se detienen a esperar instrucciones de niveles superiores o reaccionan de forma caótica.',
  'Slow Escalation': 'Escalamiento lento',
  'Decisions are deferred up the chain of command, creating costly operational downtime.':
    'Las decisiones se derivan hacia arriba en la cadena de mando, generando costosos tiempos de inactividad.',
  'Calm, Decisive Action': 'Acción serena y decisiva',
  'Leaders assess risk rapidly, communicate with composure, and execute tactical contingencies.':
    'Los líderes evalúan el riesgo con rapidez, comunican con serenidad y ejecutan contingencias tácticas.',
  'Frontline Execution Index': 'Índice de Ejecución en Primera Línea',
  '/ 100 Total': '/ 100 Total',
  'High-Performance Command Posture': 'Postura de Mando de Alto Rendimiento',
  'Your organization possesses strong frontline leadership fundamentals. The primary opportunity is institutionalizing longitudinal academies and scaling command presence across new facilities.':
    'Su organización cuenta con sólidos fundamentos de liderazgo en primera línea. La principal oportunidad es institucionalizar academias de largo plazo y escalar la presencia de mando a nuevas instalaciones.',
  'Executive Advisory & Advanced Cohort Scaling':
    'Asesoría ejecutiva y escalamiento avanzado de cohortes',
  'Moderate Strategy-Execution Friction': 'Fricción Moderada entre Estrategia y Ejecución',
  'A measurable gap exists between executive intent and daily field operations. Frontline supervisors require squad-level command training, structured feedback habits, and after-action review disciplines.':
    'Existe una brecha medible entre la intención de la dirección y las operaciones diarias en el campo. Los supervisores de primera línea requieren formación en mando de equipos, hábitos estructurados de retroalimentación y disciplinas de revisión posterior a la acción.',
  'Targeted Supervisory Academies & SOP Hardening':
    'Academias específicas para supervisores y fortalecimiento de los POE',
  'High-Risk Operational Vulnerability': 'Vulnerabilidad Operativa de Alto Riesgo',
  'Critical friction in supervisory accountability, standard adherence, and tactical communication is eroding margin, safety, and mission consistency.':
    'La fricción crítica en la responsabilidad de los supervisores, el cumplimiento de estándares y la comunicación táctica está erosionando el margen, la seguridad y la consistencia de la misión.',
  'Comprehensive Operational & Leadership Diagnostic':
    'Diagnóstico integral operativo y de liderazgo',
  'Executive Diagnostic Findings:': 'Hallazgos del diagnóstico ejecutivo:',
  'Recommended Strategic Action': 'Acción estratégica recomendada',
  'Discuss Findings With Walter': 'Analizar los Resultados con Walter',
  'Confidential executive review with lead consultant.':
    'Revisión ejecutiva confidencial con el consultor principal.',

  /* ------------------------------------------------------------------
   * Deployment roadmap
   * ------------------------------------------------------------------ */
  'Methodology & Deployment': 'Metodología y Despliegue',
  'The 5-Phase Battle-Tested Consulting Blueprint':
    'El Plan de Consultoría de 5 Fases Probado en el Terreno',
  'How Elite Vanguard systematically bridges executive strategy to frontline execution across enterprise and municipal operations.':
    'Cómo Elite Vanguard conecta de forma sistemática la estrategia ejecutiva con la ejecución en primera línea en operaciones empresariales y municipales.',
  'Structured Deployment Model': 'Modelo de Despliegue Estructurado',
  'Phase 04': 'Fase 04',
  'Phase 05': 'Fase 05',
  'Operational & Supervisory Diagnostic': 'Diagnóstico Operativo y de Supervisión',
  'Uncovering the Friction Points in Field Execution':
    'Identificamos los puntos de fricción en la ejecución de campo',
  'Weeks 1 – 3': 'Semanas 1 – 3',
  'We conduct on-the-ground field observations, shadow shift supervisors, evaluate SOP adherence, and interview executive leaders to pinpoint exactly where strategic intent is lost in translation.':
    'Realizamos observaciones directas en el campo, acompañamos a los supervisores de turno, evaluamos el cumplimiento de los POE y entrevistamos a los directivos para determinar con precisión dónde se pierde la intención estratégica.',
  'Frontline shift shadowing & supervisor interaction audits':
    'Acompañamiento de turnos en primera línea y auditoría de la interacción de los supervisores',
  'Standard Operating Procedure (SOP) friction analysis':
    'Análisis de fricción de los procedimientos operativos estándar (POE)',
  'Executive-to-field communication channel diagnostics':
    'Diagnóstico de los canales de comunicación entre la dirección y el campo',
  'Supervisory accountability baseline scoring':
    'Puntuación de referencia de la responsabilidad de los supervisores',
  'Comprehensive Operational Friction Report': 'Informe Integral de Fricción Operativa',
  'Strategy-to-Execution Gap Matrix': 'Matriz de Brechas entre Estrategia y Ejecución',
  'Tailored Consulting Roadmap & Target KPIs': 'Hoja de Ruta de Consultoría a Medida y KPI Objetivo',

  'Command Alignment & Standard Hardening': 'Alineación del Mando y Fortalecimiento de Estándares',
  'Bridging Executive Intent to Squad-Level Goals':
    'Conectamos la intención de la dirección con los objetivos de cada equipo',
  'Weeks 4 – 6': 'Semanas 4 – 6',
  'We align executive leadership, division directors, and frontline managers around non-negotiable operational standards, establishing absolute role ownership and eliminating structural ambiguity.':
    'Alineamos a la alta dirección, los directores de división y los mandos de primera línea en torno a estándares operativos no negociables, estableciendo una propiedad absoluta de los roles y eliminando la ambigüedad estructural.',
  'Executive governance & command intent workshops':
    'Talleres de gobernanza ejecutiva e intención de mando',
  'Standardization of core operating procedures & safety protocols':
    'Estandarización de los procedimientos operativos centrales y los protocolos de seguridad',
  'Definition of frontline accountability metrics (Own the Outcome)':
    'Definición de métricas de responsabilidad en primera línea (asumir el resultado)',
  'Establishment of cross-shift communication rhythms':
    'Establecimiento de ritmos de comunicación entre turnos',
  'Standardized Command Intent Playbook': 'Manual Estandarizado de Intención de Mando',
  'Shift-Level KPI & Accountability Dashboard': 'Panel de KPI y Responsabilidad a Nivel de Turno',
  'Revised Frontline Standard Operating Guidelines':
    'Directrices Operativas Estándar Revisadas para la Primera Línea',

  'Tactical Leadership Academies': 'Academias de Liderazgo Táctico',
  'Instilling Combat-Proven Command Presence in Shift Supervisors':
    'Inculcamos en los supervisores de turno una presencia de mando probada en combate',
  'Weeks 7 – 12': 'Semanas 7 – 12',
  'We deploy intensive, cohort-based leadership development for foremen, crew leaders, and emerging managers—teaching decisive decision-making, active mentorship, and composure under pressure.':
    'Desplegamos un desarrollo de liderazgo intensivo por cohortes para capataces, jefes de cuadrilla y gerentes emergentes, enseñando toma de decisiones decisiva, mentoría activa y serenidad bajo presión.',
  'Interactive squad-level command presence intensives':
    'Intensivos interactivos de presencia de mando a nivel de equipo',
  'High-pressure simulation exercises & conflict resolution drills':
    'Ejercicios de simulación de alta presión y prácticas de resolución de conflictos',
  'Constructive feedback and peer-to-peer accountability training':
    'Formación en retroalimentación constructiva y responsabilidad entre pares',
  'Mission First, People Always operational balancing':
    'Equilibrio operativo entre la misión primero y las personas siempre',
  'Frontline Supervisor Leadership Certification':
    'Certificación de Liderazgo para Supervisores de Primera Línea',
  'Tactical Field Leader Toolkit': 'Kit de Herramientas del Líder Táctico de Campo',
  'Individual Leadership Growth Plans': 'Planes Individuales de Crecimiento en Liderazgo',

  'Field Execution & After-Action Hardening':
    'Ejecución en Campo y Consolidación Posterior a la Acción',
  'Embedding Zero-Defect Habits on the Jobsite':
    'Integramos hábitos de cero defectos en la obra',
  'Weeks 13 – 18': 'Semanas 13 – 18',
  'We return to the field alongside trained supervisors, conducting structured After-Action Reviews (AARs) to ensure new leadership disciplines translate directly into daily operational performance.':
    'Regresamos al campo junto a los supervisores formados y realizamos revisiones estructuradas posteriores a la acción (AAR) para asegurar que las nuevas disciplinas de liderazgo se traduzcan directamente en el desempeño operativo diario.',
  'Direct on-site coaching during live operational shifts':
    'Acompañamiento directo en sitio durante turnos operativos reales',
  'Implementation of disciplined After-Action Reviews (AARs)':
    'Implementación disciplinada de revisiones posteriores a la acción (AAR)',
  'Real-time bottleneck identification and tactical remediation':
    'Identificación de cuellos de botella en tiempo real y corrección táctica',
  'Verification of quality and safety standard adherence':
    'Verificación del cumplimiento de los estándares de calidad y seguridad',
  'Standardized After-Action Review (AAR) Protocol':
    'Protocolo Estandarizado de Revisión Posterior a la Acción (AAR)',
  'Field Execution Compliance Audits': 'Auditorías de Cumplimiento de la Ejecución en Campo',
  'Mid-Point Operational Impact Assessment': 'Evaluación de Impacto Operativo Intermedia',

  'Longitudinal Governance & Cultural Mastery': 'Gobernanza a Largo Plazo y Dominio Cultural',
  'Sustaining High-Performance Excellence Over Time':
    'Sostenemos la excelencia de alto rendimiento en el tiempo',
  'Ongoing Quarterly Cadence': 'Cadencia trimestral continua',
  'We institutionalize continuous operational rigor, building internal leadership pipelines, quarterly executive reviews, and succession frameworks to ensure long-term mission success.':
    'Institucionalizamos el rigor operativo continuo, construyendo canales internos de liderazgo, revisiones ejecutivas trimestrales y marcos de sucesión para asegurar el éxito de la misión a largo plazo.',
  'Quarterly executive governance and performance reviews':
    'Revisiones trimestrales de gobernanza ejecutiva y desempeño',
  'Supervisor cohort alumni mentorship and refresher clinics':
    'Mentoría de egresados de las cohortes de supervisores y clínicas de actualización',
  'Talent succession planning and internal cadre development':
    'Planificación de la sucesión del talento y desarrollo de cuadros internos',
  'Enterprise-wide operational standard benchmarking':
    'Comparativa de estándares operativos en toda la empresa',
  'Longitudinal Operational Excellence Scorecard':
    'Cuadro de Mando Longitudinal de Excelencia Operativa',
  'Annual Leadership Succession Blueprint': 'Plan Anual de Sucesión del Liderazgo',
  'Executive Leadership Advisory Access': 'Acceso a Asesoría de Liderazgo Ejecutivo',

  'Schedule Phase 01 Diagnostic': 'Programar el Diagnóstico de la Fase 01',
  'Core Strategic Activities': 'Actividades Estratégicas Principales',
  'Documented Deliverables & Tooling': 'Entregables Documentados y Herramientas',

  /* ------------------------------------------------------------------
   * Methodology comparison
   * ------------------------------------------------------------------ */
  'Strategic Differentiation': 'Diferenciación Estratégica',
  'Why Conventional Corporate Training Fails': 'Por qué Falla la Formación Corporativa Convencional',
  "Compare traditional seminar models against Elite Vanguard's battle-tested operational discipline.":
    'Compare los modelos de seminario tradicionales con la disciplina operativa probada en el terreno de Elite Vanguard.',
  'Operational Dimension': 'Dimensión Operativa',
  'Traditional Corporate Seminars': 'Seminarios Corporativos Tradicionales',
  'The Elite Vanguard Standard': 'El Estándar Elite Vanguard',
  'Conventional Approach': 'Enfoque Convencional',
  'Elite Vanguard Execution': 'Ejecución Elite Vanguard',
  'Core Methodology': 'Metodología Central',
  'Theoretical classroom lectures, abstract personality tests, and generic PowerPoint slides.':
    'Clases teóricas en aula, pruebas de personalidad abstractas y diapositivas genéricas de PowerPoint.',
  'Battle-tested military command discipline, squad-level accountability, and scenario simulations.':
    'Disciplina de mando militar probada en el terreno, responsabilidad a nivel de equipo y simulaciones de escenarios.',
  'Frontline Engagement': 'Vinculación con la Primera Línea',
  'Disconnected from jobsite, shop floor, or utility field realities; delivered by career academics.':
    'Desconectada de la realidad de la obra, la planta o el campo de los servicios públicos; impartida por académicos de carrera.',
  'Delivered by combat veterans and frontline operational veterans who have commanded in high-stakes environments.':
    'Impartida por veteranos de combate y veteranos operativos de primera línea que han ejercido el mando en entornos de alto riesgo.',
  'Accountability Framework': 'Marco de Responsabilidad',
  'Passive attendance metrics; vague "behavioral shift" goals with zero field verification.':
    'Métricas pasivas de asistencia; objetivos vagos de «cambio de comportamiento» sin ninguna verificación en el campo.',
  '"Own the Outcome" non-negotiables, real-time After-Action Reviews (AARs), and documented shift KPIs.':
    'Principios no negociables de «asumir el resultado», revisiones posteriores a la acción (AAR) en tiempo real y KPI de turno documentados.',
  'Standard Enforcement': 'Aplicación de Estándares',
  'Tolerates loose interpretations of procedures; focuses on consensus over operational rigor.':
    'Tolera interpretaciones laxas de los procedimientos; prioriza el consenso por encima del rigor operativo.',
  'Zero-defect habit formation; trains supervisors to "Lead from the Front" and inspect what they expect.':
    'Formación de hábitos de cero defectos; entrena a los supervisores para «liderar desde el frente» e inspeccionar lo que exigen.',
  'Crisis & High-Pressure Execution': 'Crisis y Ejecución bajo Alta Presión',
  'Struggles when unexpected friction occurs; relies on slow escalation up the organizational chart.':
    'Se tambalea ante una fricción inesperada; depende de un escalamiento lento por el organigrama.',
  'Instills decisive adaptability; empowers supervisors to assess risk rapidly and act with composure.':
    'Inculca adaptabilidad decisiva; faculta a los supervisores para evaluar el riesgo con rapidez y actuar con serenidad.',
  'Longitudinal Impact': 'Impacto a Largo Plazo',
  'Fades within 30 days of the seminar; no structural bridge between C-suite and shift leads.':
    'Se desvanece en los 30 días posteriores al seminario; no hay puente estructural entre la alta dirección y los jefes de turno.',
  'Builds permanent supervisory cohorts, internal mentor pipelines, and quarterly governance reviews.':
    'Construye cohortes permanentes de supervisores, canales internos de mentoría y revisiones trimestrales de gobernanza.',
  'Proven leadership principles engineered for commercial and frontline excellence.':
    'Principios de liderazgo comprobados, diseñados para la excelencia comercial y de primera línea.',
  'Request Operational Consultation': 'Solicitar Consultoría Operativa',

  /* ------------------------------------------------------------------
   * Case scenarios
   * ------------------------------------------------------------------ */
  'Proven Field Impact': 'Impacto Comprobado en el Campo',
  'High-Consequence Operational Transformations': 'Transformaciones Operativas de Alta Consecuencia',
  'Real-world operational challenges solved through military-tested command rigor and frontline supervisor empowerment.':
    'Desafíos operativos reales resueltos mediante el rigor de mando probado en el ámbito militar y el empoderamiento de los supervisores de primera línea.',
  'Initial Operational Friction': 'Fricción Operativa Inicial',
  'Elite Vanguard Deployment': 'Despliegue de Elite Vanguard',
  'Measured Operational ROI': 'Retorno Operativo Medido',
  'Request Custom Case Analysis': 'Solicitar Análisis de Caso Personalizado',
  'Enterprise Operations': 'Operaciones Empresariales',
  'Multi-Facility Distribution & Fleet Shift Synchronization':
    'Distribución en Múltiples Instalaciones y Sincronización de Turnos de Flota',
  'Mid-Atlantic Freight & Cold-Chain Logistics Hub (450+ Personnel)':
    'Centro logístico de carga y cadena de frío del Atlántico Medio (más de 450 empleados)',
  'Severe strategy-execution disconnect between regional logistics VP directives and night-shift dock supervisors, resulting in dispatch delays, high turnover, and unaddressed safety violations.':
    'Grave desconexión entre las directrices del vicepresidente regional de logística y los supervisores de muelle del turno nocturno, lo que provocaba retrasos en los despachos, alta rotación e infracciones de seguridad sin atender.',
  'Installed squad-level "Own the Outcome" accountability protocols, trained 28 shift foremen in high-pressure communication, and instituted daily 7-minute shift change After-Action Reviews.':
    'Instalamos protocolos de responsabilidad de «asumir el resultado» a nivel de equipo, formamos a 28 capataces de turno en comunicación bajo alta presión e instauramos revisiones diarias posteriores a la acción de 7 minutos en el cambio de turno.',
  'On-Time Fleet Departure': 'Salidas de flota a tiempo',
  'Supervisor Retention Rate': 'Tasa de retención de supervisores',
  'OSHA Recordable Incidents': 'Incidentes registrables ante OSHA',
  'Municipal Infrastructure': 'Infraestructura Municipal',
  'Public Utility & Water Treatment Supervisory Academy':
    'Academia de Supervisión para Servicios Públicos y Tratamiento de Aguas',
  'Metropolitan Public Works & Water Authority (180+ Field Techs)':
    'Autoridad metropolitana de obras públicas y aguas (más de 180 técnicos de campo)',
  'First-time supervisors promoted from individual craft roles struggled to establish command authority, enforce SOP compliance, and communicate cross-agency critical maintenance schedules.':
    'Los supervisores primerizos ascendidos desde roles técnicos individuales tenían dificultades para establecer su autoridad de mando, hacer cumplir los POE y comunicar los calendarios críticos de mantenimiento entre organismos.',
  'Deployed a custom 12-week Frontline Leadership Academy curriculum focusing on transition from peer to supervisor, proactive crisis composure, and constructive accountability standards.':
    'Desplegamos un currículo personalizado de 12 semanas de Academia de Liderazgo de Primera Línea centrado en la transición de par a supervisor, la serenidad proactiva ante crisis y estándares de responsabilidad constructiva.',
  'SOP Compliance Score': 'Índice de cumplimiento de los POE',
  'Work-Order Cycle Time': 'Tiempo de ciclo de las órdenes de trabajo',
  'Inter-Agency Grievances': 'Quejas entre organismos',
  'Defense Supply Chain': 'Cadena de Suministro de Defensa',
  'Mission-Critical Aerospace Supplier Zero-Defect Hardening':
    'Consolidación de Cero Defectos en un Proveedor Aeroespacial Crítico para la Misión',
  'Tier-1 Defense Subcontractor & SDVOSB Precision Machining Facility':
    'Subcontratista de defensa de nivel 1 y planta de mecanizado de precisión SDVOSB',
  'Stringent DoD contract compliance requirements clashed with loose shop-floor quality inspection habits, threatening million-dollar delivery milestones and vendor audit standing.':
    'Los estrictos requisitos de cumplimiento de los contratos del Departamento de Defensa chocaban con hábitos laxos de inspección de calidad en planta, poniendo en riesgo hitos de entrega millonarios y la posición en las auditorías de proveedores.',
  'Conducted comprehensive operational friction diagnostic, embedded military inspection rigor into daily shift routines, and coached senior management on command intent alignment.':
    'Realizamos un diagnóstico integral de fricción operativa, integramos el rigor de inspección militar en las rutinas diarias de turno y asesoramos a la alta dirección en la alineación de la intención de mando.',
  'First-Pass Yield Rate': 'Tasa de aprobación en primera pasada',
  'DoD Audit Compliance': 'Cumplimiento en auditorías del DoD',
  'On-Time Milestone Delivery': 'Entrega de hitos a tiempo',

  /* ------------------------------------------------------------------
   * SEO (document titles & meta descriptions)
   * ------------------------------------------------------------------ */
  'Executive Consulting & Operational Excellence': 'Consultoría Ejecutiva y Excelencia Operativa',
  'Veteran-Led Leadership Development': 'Desarrollo de Liderazgo Liderado por Veteranos',
  'Services & Practice Areas': 'Servicios y Áreas de Práctica',
  'Executive Leadership Team': 'Equipo de Liderazgo Ejecutivo',
  'Contact Us': 'Contáctenos',
  'Learn about': 'Conozca a',
  '— a veteran-led management consulting and leadership development firm dedicated to translating time-tested military principles into high-performance operational excellence.':
    ', una firma de consultoría de gestión y desarrollo de liderazgo dirigida por veteranos, dedicada a traducir principios militares probados en el tiempo en excelencia operativa de alto rendimiento.',
  'Explore practice areas: Leadership Development, Management Consulting, Operational Excellence, Frontline Leadership, Corporate Leadership Academies, and Strategic Execution.':
    'Explore nuestras áreas de práctica: desarrollo de liderazgo, consultoría de gestión, excelencia operativa, liderazgo de primera línea, academias corporativas de liderazgo y ejecución estratégica.',
  'Meet the leadership of': 'Conozca al liderazgo de',
  ', including Walter Horton (3rd U.S. Infantry Regiment / The Old Guard veteran) and Trevor McLeod (U.S. Army veteran & IBEW Local #3 Journeyperson).':
    ', incluidos Walter Horton (veterano del 3.er Regimiento de Infantería de EE. UU. / The Old Guard) y Trevor McLeod (veterano del Ejército de EE. UU. y oficial electricista del Local #3 de la IBEW).',
  'Schedule a confidential executive consultation with': 'Programe una consulta ejecutiva confidencial con',
  'to diagnose operational bottlenecks and bridge the strategy-to-execution gap.':
    'para diagnosticar cuellos de botella operativos y cerrar la brecha entre estrategia y ejecución.',
  'Direct executive contact coordinates for': 'Datos de contacto ejecutivo directo de',
  'Connect with Walter via email.': 'Comuníquese con Walter por correo electrónico.',
  // About Page — Company Mantra
  'Our Mantra': 'Nuestro Lema',
  'Never Have So Few Done So Much For So Many!':
    '¡Nunca Tan Pocos Hicieron Tanto Por Tantos!',

  // Events Page — Community & Non-Profit Involvement
  'Events': 'Eventos',
  'Community & Non-Profit Involvement': 'Participación Comunitaria y con Organizaciones sin Fines de Lucro',
  'Community Events & Non-Profit Involvement': 'Eventos Comunitarios y Participación sin Fines de Lucro',
  'Every member of our leadership works with or partners alongside non-profit organizations. Service does not stop at the boardroom — we stay actively involved in the communities we serve.':
    'Cada miembro de nuestro liderazgo trabaja con organizaciones sin fines de lucro o se asocia con ellas. El servicio no termina en la sala de juntas: seguimos participando activamente en las comunidades a las que servimos.',
  'Upcoming Event': 'Próximo Evento',
  'Past Event': 'Evento Pasado',
  'Community Partner & Walk Participant': 'Socio Comunitario y Participante de la Caminata',
  'Community Partner & Attendee': 'Socio Comunitario y Asistente',
  'Date': 'Fecha',
  'Time': 'Hora',
  'Location': 'Ubicación',
  'Cause': 'Causa',
  'Event Details': 'Detalles del Evento',
  'Get Involved': 'Participe',
  'Community Standard': 'Estándar Comunitario',
  'Leadership is measured by service. We show up for the communities that raised us — not for recognition, but because presence is the standard we teach.':
    'El liderazgo se mide por el servicio. Estamos presentes para las comunidades que nos formaron, no por reconocimiento, sino porque la presencia es el estándar que enseñamos.',
  'Core Value: Service Before Self': 'Valor Fundamental: Servicio Antes que Uno Mismo',
  'Non-Profit Partnerships': 'Alianzas con Organizaciones sin Fines de Lucro',
  'Partner With Us On Your Next Event': 'Asóciese con Nosotros en su Próximo Evento',
  'If your organization is planning a community initiative, fundraiser, or leadership event, reach out — we welcome the opportunity to serve alongside you.':
    'Si su organización está planificando una iniciativa comunitaria, una recaudación de fondos o un evento de liderazgo, comuníquese con nosotros: agradecemos la oportunidad de servir a su lado.',
  'Community events and non-profit initiatives supported by Elite Vanguard Leadership Group, including the Kings Men For Kidney Disease walk benefiting the National Kidney Foundation and the DMV Prince Hall Takeover.':
    'Eventos comunitarios e iniciativas sin fines de lucro respaldados por Elite Vanguard Leadership Group, incluida la caminata Kings Men For Kidney Disease en beneficio de la National Kidney Foundation y el DMV Prince Hall Takeover.',

  // Events Page — Event Content
  'Kings Men For Kidney Disease': 'Kings Men For Kidney Disease',
  'November 08, 2026': '08 de noviembre de 2026',
  'NYC Kidney Walk — New York, NY': 'NYC Kidney Walk — Nueva York, NY',
  'Supporting the National Kidney Foundation': 'En apoyo a la National Kidney Foundation',
  'A Sons of Kings Lodge #123 initiative in support of the incredible work of the National Kidney Foundation. We walk to honor those living with kidney disease, support their families, and remember those we have lost — walking together for hope, healing, and a cure.':
    'Una iniciativa de Sons of Kings Lodge #123 en apoyo al extraordinario trabajo de la National Kidney Foundation. Caminamos para honrar a quienes viven con enfermedad renal, apoyar a sus familias y recordar a quienes hemos perdido, caminando juntos por la esperanza, la sanación y una cura.',
  'Presented by Sons of Kings Lodge #123': 'Presentado por Sons of Kings Lodge #123',
  'Benefiting the National Kidney Foundation': 'En beneficio de la National Kidney Foundation',
  'Bro. Roland Duroseau, Worshipful Master': 'Bro. Roland Duroseau, Worshipful Master',
  'MW Darren M. Morton, Grand Master': 'MW Darren M. Morton, Grand Master',
  'DMV Prince Hall Takeover 6': 'DMV Prince Hall Takeover 6',
  'Wednesday, September 23, 2026': 'Miércoles, 23 de septiembre de 2026',
  'Invictus II Cigars — 2068 Crain Hwy, Waldorf, MD 20601': 'Invictus II Cigars — 2068 Crain Hwy, Waldorf, MD 20601',
  'Fellowship, Networking & Community Building': 'Confraternidad, Networking y Construcción Comunitaria',
  'One family. Great vibes. An evening of fellowship, networking, and community connection bringing brothers and partner organizations across the DMV together. Indoor and outdoor seating, DJ, and food on site. $10 purchase fee.':
    'Una sola familia. Excelente ambiente. Una velada de confraternidad, networking y conexión comunitaria que reúne a hermanos y organizaciones aliadas de toda la región DMV. Espacios interiores y exteriores, DJ y comida en el lugar. Cuota de compra de $10.',
  'Indoors & outdoors seating': 'Espacios interiores y exteriores',
  'DJ and live music': 'DJ y música en vivo',
  'Food served on site': 'Comida servida en el lugar',
  '$10 purchase fee': 'Cuota de compra de $10',
};
