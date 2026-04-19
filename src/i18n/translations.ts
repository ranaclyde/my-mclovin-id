export interface PhotoTranslations {
  label: string
  placeholder: string
  cropTitle: string
  cropSubtitle: string
  cropHint: string
  confirmQuestion: string
  cropBtn: string
  recropBtn: string
  useBtn: string
  confirmTitle: string
  confirmSubtitle: string
  close: string
}

export interface SignTranslations {
  label: string
  placeholder: string
}

export interface GenreOption {
  value: string
  text: string
}

export interface CreateIdTranslations {
  badge: string
  title: string
  subtitle: string
  flipFront: string
  flipBack: string
  export: string
  name: string
  dob: string
  genre: string
  genres: GenreOption[]
  photo: PhotoTranslations
  sign: SignTranslations
}

export interface HeroTranslations {
  badge: string
  title: string
  description: string
  cta: string
  scene: string
}

export interface AboutTranslations {
  badge: string
  title: string
  paragraph1: string
  paragraph2: string
  year: string
  actor: string
  videoUrl: string
  videoTitle: string
}

export interface NavbarTranslations {
  start: string
}

export interface FullTranslations {
  lang: string
  title: string
  description: string
  navbar: NavbarTranslations
  hero: HeroTranslations
  createId: CreateIdTranslations
  about: AboutTranslations
}

export const translations: Record<string, FullTranslations> = {
  es: {
    lang: 'es',
    title: 'My McLovin ID — Crea tu ID de Superbad',
    description:
      'Crea tu propio ID falso de McLovin de la película Superbad. Personaliza nombre, fecha de nacimiento, foto y firma.',
    navbar: {
      start: 'Comenzar',
    },
    hero: {
      badge: 'Estado de Hawaii',
      title: 'El ID más famoso del cine',
      description:
        'Crea tu propia versión del icónico documento de identidad de Fogell, el personaje más memorable de Superbad.',
      cta: 'Crear mi ID',
      scene: 'Ver la escena',
    },
    createId: {
      badge: 'Crea tu ID',
      title: 'Personaliza tu documento',
      subtitle: 'Completá los datos y descargá tu versión del ID de McLovin',
      flipFront: 'Ver frente',
      flipBack: 'Ver reverso',
      export: 'Exportar ID',
      name: 'Nombre',
      dob: 'Fecha de nacimiento',
      genre: 'Género',
      genres: [
        { value: 'F', text: 'Femenino' },
        { value: 'M', text: 'Masculino' },
        { value: 'O', text: 'Otro' },
      ],
      photo: {
        label: 'Subí tu foto',
        placeholder: 'Seleccioná una imagen para tu ID',
        cropTitle: 'Recortá tu foto',
        cropSubtitle: 'Ajustá el encuadre para tu ID',
        cropHint: 'Arrastrá y hacé zoom para ajustar',
        confirmQuestion: '¿Quedó bien? Usá esta foto o recortá de nuevo',
        cropBtn: 'Recortar foto',
        recropBtn: 'Recortar de nuevo',
        useBtn: 'Usar esta foto',
        confirmTitle: 'Confirmá tu foto',
        confirmSubtitle: 'Así va a aparecer en tu ID',
        close: 'Cerrar',
      },
      sign: {
        label: 'Firma',
        placeholder: 'Firmá aquí',
      },
    },
    about: {
      badge: 'Sobre el personaje',
      title: '¿Quién es McLovin?',
      paragraph1:
        'McLovin es el alter ego de Fogell en la película <strong class="text-white">Superbad (conocida como Supercool en Latinoamérica)</strong> (2007), dirigida por Greg Mottola y producida por Judd Apatow. Fogell decide obtener una identificación falsa del estado de Hawaii, y cuando sus amigos le preguntan su nombre, él revela orgulloso que se llama simplemente "McLovin".',
      paragraph2:
        'Con solo un nombre en su documento —sin apellido, sin dirección, sin nada más—, McLovin se convirtió en uno de los momentos más icónicos de la comedia juvenil de los 2000s. La escena del ID es considerada una de las más memorables de la película.',
      year: 'Año de estreno',
      actor: 'Interpretado por',
      videoUrl: 'https://www.youtube.com/embed/kLM3GLhkjdk',
      videoTitle: 'Escena del ID de McLovin - Superbad',
    },
  },
  en: {
    lang: 'en',
    title: 'My McLovin ID — Create your Superbad ID',
    description:
      'Create your own fake McLovin ID from the movie Superbad. Customize name, date of birth, photo and signature.',
    navbar: {
      start: 'Get Started',
    },
    hero: {
      badge: 'State of Hawaii',
      title: 'The most famous ID in cinema',
      description:
        "Create your own version of Fogell's iconic fake ID, the most memorable character from Superbad.",
      cta: 'Create my ID',
      scene: 'Watch the scene',
    },
    createId: {
      badge: 'Create your ID',
      title: 'Customize your document',
      subtitle: 'Fill in the details and download your version of the McLovin ID',
      flipFront: 'See front',
      flipBack: 'See back',
      export: 'Export ID',
      name: 'Name',
      dob: 'Date of birth',
      genre: 'Gender',
      genres: [
        { value: 'F', text: 'Female' },
        { value: 'M', text: 'Male' },
        { value: 'O', text: 'Other' },
      ],
      photo: {
        label: 'Upload your photo',
        placeholder: 'Select an image for your ID',
        cropTitle: 'Crop your photo',
        cropSubtitle: 'Adjust the frame for your ID',
        cropHint: 'Drag and zoom to adjust',
        confirmQuestion: 'Looking good? Use this photo or crop again',
        cropBtn: 'Crop photo',
        recropBtn: 'Crop again',
        useBtn: 'Use this photo',
        confirmTitle: 'Confirm your photo',
        confirmSubtitle: 'This is how it will appear on your ID',
        close: 'Close',
      },
      sign: {
        label: 'Signature',
        placeholder: 'Sign here',
      },
    },
    about: {
      badge: 'About the character',
      title: 'Who is McLovin?',
      paragraph1:
        'McLovin is Fogell\'s alter ego in the movie <strong class="text-white">Superbad</strong> (2007), directed by Greg Mottola and produced by Judd Apatow. Fogell decides to get a fake ID from the state of Hawaii, and when his friends ask his name, he proudly reveals he goes by simply "McLovin".',
      paragraph2:
        'With just one name on his document —no last name, no address, nothing else—, McLovin became one of the most iconic moments in 2000s teen comedy. The ID scene is considered one of the most memorable in the film.',
      year: 'Release year',
      actor: 'Played by',
      videoUrl: 'https://www.youtube.com/embed/vqQmTyOHTsw',
      videoTitle: 'McLovin ID scene - Superbad',
    },
  },
}
