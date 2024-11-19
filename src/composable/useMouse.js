import { onBeforeUnmount, onMounted } from 'vue'

export function useMouse() {
  const x = ref(0)
  const y = ref(0)

  const handleMouse = (mouse) => {
    x.value = mouse.pageX
    y.value = mouse.pageY
  }

  onMounted(() => {
    window.addEventListener('mousemove', handleMouse)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('mousemove', handleMouse)
  })

  return {
    x,
    y,
  }
}
