// theme/index.js
import { extendTheme } from '@chakra-ui/react'

// Global style overrides
import styles from './styles'
import colors from './colors'

const overrides = {
  styles,
  colors,
}

export default extendTheme(overrides)
