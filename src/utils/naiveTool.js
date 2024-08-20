import { createDiscreteApi } from 'naive-ui'

export function setupNaiveDiscreteApi() {
  const { message, notification, dialog, loadingBar } = createDiscreteApi(
    ['message', 'dialog', 'notification', 'loadingBar'],
  )

  window.$message = message
  window.$notification = notification
  window.$dialog = dialog
  window.$loadingBar = loadingBar
  // Modal 应该不会有这种需求...
}
