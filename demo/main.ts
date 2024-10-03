import './style.css'
import '../src/toast.css'
import { PalmToast, ToastPosition, ToastType } from '../src/toast'

document.querySelector('button')?.addEventListener('click', () => {
  const type = (document.querySelector('#toast-type') as HTMLSelectElement).value
  const position = (document.querySelector('#toast-position') as HTMLSelectElement).value
  const dissmissable = (document.querySelector('#dissmissable') as HTMLInputElement).checked
  const duration = (document.querySelector('#duration') as HTMLInputElement).value
  const pauseOnHover = (document.querySelector('#pauseOnHover') as HTMLInputElement).checked
  const heading = (document.querySelector('#toast-heading') as HTMLInputElement).value
  const text = (document.querySelector('#toast-text') as HTMLTextAreaElement).value

  const toast = new PalmToast({
    heading: heading,
    text: text,
    position: position as ToastPosition,
    type: type as ToastType,
    duration: Number(duration) * 1000,
    dissmissable: dissmissable,
    showTimer: true,
    pauseOnHover: pauseOnHover,
  })

  toast.showToast()
})
