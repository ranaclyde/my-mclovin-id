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
  cameraBtn: string
  cameraTitle: string
  cameraSubtitle: string
  cameraCaptureBtn: string
  previewAlt: string
  errorTitle: string
  errorType: string
  errorRead: string
  errorCameraDenied: string
  errorCamera: string
}

export interface SignTranslations {
  label: string
  placeholder: string
  addBtn: string
  signedBtn: string
  modalTitle: string
  modalSubtitle: string
  confirmBtn: string
  clearBtn: string
  close: string
}

export interface ExportFeedbackTranslations {
  successTitle: string
  successMessage: string
  notReadyTitle: string
  notReadyMessage: string
  backSkippedTitle: string
  backSkippedMessage: string
  errorTitle: string
  errorMessage: string
}

export interface GenreOption {
  value: string
  text: string
}

export interface CreateIdTranslations {
  title: string
  subtitle: string
  flipFront: string
  flipBack: string
  export: string
  exportBothSides: string
  exportDisabledFlipped: string
  disclaimer: string
  canvasLabel: string
  feedback: ExportFeedbackTranslations
  name: string
  dob: string
  genre: string
  genrePlaceholder: string
  genres: GenreOption[]
  photo: PhotoTranslations
  sign: SignTranslations
}

export interface HeroTranslations {
  title: string
  description: string
  cta: string
  scene: string
}

export interface AboutTranslations {
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
    title: 'My McLovin ID — Creá tu ID de Superbad',
    description:
      'Creá tu propio ID falso de McLovin de la película Superbad. Personalizá nombre, fecha de nacimiento, foto y firma.',
    navbar: {
      start: 'Comenzar',
    },
    hero: {
      title: 'Hacé tu propio ID de McLovin',
      description:
        'Poné tu nombre, tu foto y tu firma en el ID falso más famoso del cine, el de Fogell en Superbad. Gratis y sin registrarte.',
      cta: 'Crear mi ID',
      scene: 'Ver la escena',
    },
    createId: {
      title: 'Completá tus datos y mirá tu ID en vivo',
      subtitle: 'Cuando te guste cómo quedó, descargalo como imagen.',
      flipFront: 'Ver frente',
      flipBack: 'Ver reverso',
      export: 'Exportar ID',
      exportBothSides: 'Exportar también el reverso del ID (ZIP)',
      exportDisabledFlipped: 'Volvé al frente para exportar',
      disclaimer:
        'Parodia de fans de Superbad. No es un documento real ni sirve como identificación. Tu foto, tu firma y tus datos nunca salen de tu navegador.',
      canvasLabel: 'Vista previa de tu ID de McLovin',
      feedback: {
        successTitle: 'Listo, McLovin',
        successMessage: 'Tu ID ya se está descargando.',
        notReadyTitle: 'Un segundo…',
        notReadyMessage: 'El ID todavía se está cargando. Probá de nuevo en un momento.',
        backSkippedTitle: 'Sin reverso',
        backSkippedMessage: 'No pudimos agregar el reverso, así que descargaste solo el frente.',
        errorTitle: 'No se pudo exportar',
        errorMessage: 'Algo falló al armar la imagen. Probá de nuevo.',
      },
      name: 'Nombre',
      dob: 'Fecha de nacimiento',
      genre: 'Género',
      genrePlaceholder: 'Elegí',
      genres: [
        { value: 'F', text: 'Femenino' },
        { value: 'M', text: 'Masculino' },
        { value: 'O', text: 'Otro' },
      ],
      photo: {
        label: 'Subí tu foto',
        placeholder: 'Elegir foto',
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
        cameraBtn: 'Usar cámara',
        cameraTitle: 'Tomá una foto',
        cameraSubtitle: 'Posicioná tu cara y capturá cuando estés listo',
        cameraCaptureBtn: 'Capturar foto',
        previewAlt: 'Tu foto recortada',
        errorTitle: 'No pudimos usar esa foto',
        errorType: 'Ese archivo no es una imagen compatible. Usá una foto JPG, PNG o WEBP.',
        errorRead: 'No pudimos abrir esa imagen. Probá con otra foto.',
        errorCameraDenied:
          'No tenemos permiso para usar la cámara. Habilitalo en tu navegador o subí una foto.',
        errorCamera: 'No pudimos abrir la cámara. Subí una foto desde tu galería.',
      },
      sign: {
        label: 'Firma',
        placeholder: 'Firmá aquí',
        addBtn: 'Agregar firma',
        signedBtn: 'Firma guardada · Toca para editar',
        modalTitle: 'Dibujá tu firma',
        modalSubtitle: 'Usá el dedo para firmar en el cuadro',
        confirmBtn: 'Guardar firma',
        clearBtn: 'Borrar',
        close: 'Cerrar',
      },
    },
    about: {
      title: 'McLovin: la historia detrás del ID',
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
      title: 'Make your own McLovin ID',
      description:
        "Put your name, photo and signature on the most famous fake ID in movie history: Fogell's, from Superbad. Free, no sign-up.",
      cta: 'Create my ID',
      scene: 'Watch the scene',
    },
    createId: {
      title: 'Fill in your details and watch your ID update live',
      subtitle: 'When you like how it looks, download it as an image.',
      flipFront: 'See front',
      flipBack: 'See back',
      export: 'Export ID',
      exportBothSides: 'Also export the back of the ID (ZIP)',
      exportDisabledFlipped: 'Flip back to the front to export',
      disclaimer:
        'A Superbad fan parody. Not a real document and not valid as identification. Your photo, signature and details never leave your browser.',
      canvasLabel: 'Preview of your McLovin ID',
      feedback: {
        successTitle: 'Done, McLovin',
        successMessage: 'Your ID is downloading.',
        notReadyTitle: 'One sec…',
        notReadyMessage: 'The ID is still loading. Try again in a moment.',
        backSkippedTitle: 'Back side skipped',
        backSkippedMessage: "We couldn't add the back, so you got the front only.",
        errorTitle: "Couldn't export",
        errorMessage: 'Something went wrong building the image. Please try again.',
      },
      name: 'Name',
      dob: 'Date of birth',
      genre: 'Gender',
      genrePlaceholder: 'Choose',
      genres: [
        { value: 'F', text: 'Female' },
        { value: 'M', text: 'Male' },
        { value: 'O', text: 'Other' },
      ],
      photo: {
        label: 'Upload your photo',
        placeholder: 'Choose photo',
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
        cameraBtn: 'Use camera',
        cameraTitle: 'Take a photo',
        cameraSubtitle: 'Position your face and capture when ready',
        cameraCaptureBtn: 'Capture photo',
        previewAlt: 'Your cropped photo',
        errorTitle: "Couldn't use that photo",
        errorType: "That file isn't a supported image. Use a JPG, PNG or WEBP photo.",
        errorRead: "We couldn't open that image. Try another photo.",
        errorCameraDenied:
          "We don't have permission to use the camera. Allow it in your browser or upload a photo.",
        errorCamera: "We couldn't open the camera. Upload a photo from your gallery instead.",
      },
      sign: {
        label: 'Signature',
        placeholder: 'Sign here',
        addBtn: 'Add signature',
        signedBtn: 'Signature saved · Tap to edit',
        modalTitle: 'Draw your signature',
        modalSubtitle: 'Use your finger to sign in the box',
        confirmBtn: 'Save signature',
        clearBtn: 'Clear',
        close: 'Close',
      },
    },
    about: {
      title: 'McLovin: the story behind the ID',
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
