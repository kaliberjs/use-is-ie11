export function useIsIe11() {
  const [ie11, setIE11] = React.useState(checkForIe11())

  React.useEffect(
    () => { setIE11(checkForIe11()) },
    []
  )

  return ie11
}

function checkForIe11() {
  return typeof window !== 'undefined' && !!window.MSInputMethodContext && !!document.documentMode
}