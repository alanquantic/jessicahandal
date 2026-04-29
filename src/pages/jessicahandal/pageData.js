const asset = (path) => `/public_clean/jessicahandal${path}`

export const productPages = {
  '13-pensamientos-distorsionados': {
    title: 'Transformando los 13 pensamientos distorsionados',
    image: asset('/wp-content/uploads/2023/07/Captura-de-Pantalla-2023-07-26-a-las-16.21.23.png'),
    kicker: 'Conferencia',
    duration: '45 minutos',
    price: '$600.00 MXP',
    description:
      'Un espacio para observar patrones de pensamiento, cuestionarlos y abrir una lectura más amable de la experiencia emocional.',
  },
  'burn-out-desgaste-emocional': {
    title: 'Burn-out: Desgaste Emocional',
    image: asset('/wp-content/uploads/2023/04/tired-businessman-suffering-from-headache-scaled.jpg'),
    kicker: 'Curso',
    duration: '4 horas',
    price: 'Próximamente',
    description:
      'Contenido enfocado en reconocer señales de desgaste, organizar recursos internos y nombrar lo que se siente en el ámbito laboral.',
  },
  'consciencia-de-vida-en-amor': {
    title: 'Tanatología: consciencia de vida en amor',
    image: asset('/wp-content/uploads/2023/04/Tanatologia-Consciencia-de-vida-en-amor-scaled.jpg'),
    kicker: 'Conferencia',
    duration: '45 minutos',
    price: '$500.00 MXP',
    description:
      'Una mirada al duelo y a la experiencia humana desde el cuidado, la consciencia y el amor por la propia vida.',
  },
  'cultivando-corazones-en-bienestar': {
    title: 'Cultivando corazones en bienestar',
    image: asset('/wp-content/uploads/2023/04/Cultivando-corazones.jpeg'),
    kicker: 'Conferencia',
    duration: '1 hora',
    price: '$500.00 MXP',
    description:
      'Espacio para acompañar a niños y adolescentes en su camino de vida con herramientas claras y sensibles.',
  },
  'cultivando-el-sentido-de-ser-suficientes': {
    title: 'Cultivando el Sentido de ser Suficientes',
    image: asset('/wp-content/uploads/2023/04/Cultivando-el-Sentido-de-ser-suficientes-scaled.jpg'),
    kicker: 'Conferencia',
    duration: '1 hora y 30 min.',
    price: '$800.00 MXP',
    description:
      'Un recorrido para reconocer el valor propio, reforzar el cuidado emocional y volver a sentirse suficiente.',
  },
  'el-duelo-disfrazado-en-mis-hijos': {
    title: 'El duelo disfrazado en mis hijos',
    image: asset('/wp-content/uploads/2023/06/Captura-de-Pantalla-2023-06-28-a-las-17.20.04.png'),
    kicker: 'Conferencia',
    duration: '45 minutos',
    price: '$500.00 MXP',
    description:
      'Una pieza pensada para madres, padres y personas cuidadoras que necesitan leer el duelo detrás de la conducta.',
  },
  'escribir-con-consciencia-libera-y-sana': {
    title: 'Escribir con Consciencia, Libera y Sana',
    image: asset('/wp-content/uploads/2023/04/Escribir-con-sentido-libera-y-sana-scaled.jpg'),
    kicker: 'Curso',
    duration: '35 minutos',
    price: 'Gratuita',
    description:
      'Una experiencia breve para escribir desde el cuerpo, ordenar lo vivido y transformar la carga emocional en lenguaje.',
  },
  'manejo-del-duelo-en-ninos-adolescentes': {
    title: 'Manejo del duelo en niños/ adolescentes',
    image: asset('/wp-content/uploads/2023/04/Manejo-de-duelo-en-ninos-y-adol-scaled.jpg'),
    kicker: 'Conferencia',
    duration: '2 horas 30 minutos',
    price: '$1,300.00 MXP',
    description:
      'Herramientas para contener procesos de pérdida con lenguaje claro, acompañamiento sensible y estructura pedagógica.',
  },
  'mi-historia-tu-historia': {
    title: 'Mi historia, tu historia y la de todos los que somos tanátologos de corazón',
    image: asset('/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-19-at-16.48.21.jpeg'),
    kicker: 'Conferencia',
    duration: '35 minutos',
    price: 'Gratuita',
    description:
      'Una pieza íntima y cercana sobre la historia compartida, el oficio de acompañar y la memoria emocional.',
  },
  'consciencia-reflexiva': {
    title: 'Consciencia Reflexiva',
    image: asset('/wp-content/uploads/2023/04/Tanatologia-Consciencia-de-vida-en-amor-scaled.jpg'),
    kicker: 'Conferencia',
    duration: '1 hora 20 min',
    price: '',
    description:
      'Un espacio breve para observarse con más claridad, nombrar lo que ocurre y volver al centro con más consciencia.',
  },
  'mi-cuenta': {
    title: 'Mi cuenta',
    image: asset('/wp-content/uploads/2022/08/Jessica_3.jpg'),
    kicker: 'Acceso',
    duration: 'Privado',
    price: '',
    description:
      'Panel de acceso local para mantener el enlace del encabezado funcionando sin enviar al WordPress original.',
  },
}

export const routeAliases = {
  '/': 'home',
  '/consciencia-reflexiva/': 'consciencia-reflexiva',
  '/mi-cuenta/': 'mi-cuenta',
}

export function getRouteKey(pathname) {
  if (pathname.startsWith('/producto/')) {
    return pathname.replace('/producto/', '').replace(/\/$/, '')
  }

  return routeAliases[pathname] || 'home'
}
