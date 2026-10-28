import { butterup } from 'butterup-toast'

type ToastType = 'success' | 'error' | 'warning' | 'info'

interface NotifyOptions {
  type: ToastType
  title: string
  message?: string
}

const LOCATION = 'bottom-center'

butterup.options.maxToasts = 2
butterup.options.toastLife = 5000

// butterup only builds its rack when #toaster is missing, so we create both up
// front: the live region has to exist before content lands to be announced.
function ensureToaster() {
  if (document.getElementById('toaster')) return
  const toaster = document.createElement('div')
  toaster.id = 'toaster'
  toaster.className = `toaster ${LOCATION}`
  toaster.setAttribute('role', 'status')
  toaster.setAttribute('aria-live', 'polite')
  const rack = document.createElement('ol')
  rack.id = 'butterupRack'
  rack.className = 'rack'
  toaster.appendChild(rack)
  document.body.appendChild(toaster)
}

ensureToaster()

// butterup renders title/message with innerHTML: only pass our own copy here,
// never user input such as file names.
export function notify({ type, title, message }: NotifyOptions) {
  ensureToaster()
  butterup.toast({ type, title, message, location: LOCATION, icon: true, theme: 'mclovin' })
}
