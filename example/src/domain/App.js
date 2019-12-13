import { useIsIe11 }  from '@kaliber/use-is-ie11'

export default function App() {
  const isIe11 = useIsIe11()
  return <div style={{ fontSize: '5em' }}>{isIe11 ? '😞' : '😎'}</div>
}
