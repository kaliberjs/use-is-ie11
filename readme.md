# useIsIe11

Detects if a browser is IE11.

## Motivation
In case you need to detect whether a browser is Internet Explorer 11. Doesn't use UA sniffing, but feature detection.

## Installation

```
yarn add @kaliber/use-is-ie11
```

## Usage
```jsx
import { useIsIe11 } from 'use-is-ie11'

function Component() {
  const isIe11 = useIsIe11()
  return isIe11 ? '😞' : '😎'
}
```

![](https://media.giphy.com/media/yqtpq8rqqXBh6/giphy.gif)

## Disclaimer
This library is intended for internal use, we provide __no__ support, use at your own risk.

This library is not transpiled.