import { PalmToast } from '../dist/toast.mjs'

document.querySelector('button')?.addEventListener('click', () => {
  const type = document.querySelector('#toast-type').value
  const position = document.querySelector('#toast-position').value
  const dissmissable = document.querySelector('#dissmissable').checked
  const duration = document.querySelector('#duration').value
  const pauseOnHover = document.querySelector('#pauseOnHover').checked
  const heading = document.querySelector('#toast-heading').value
  const text = document.querySelector('#toast-text').value

  const toast = new PalmToast({
    heading: heading,
    text: text,
    position: position,
    type: type,
    duration: Number(duration) * 1000,
    dissmissable: dissmissable,
    showTimer: true,
    pauseOnHover: pauseOnHover,
  })

  toast.showToast()
})
