import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import { Button } from './Components/button'
import { styles } from './global'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true,
}

const colors = {
  lime: '#D5F06A',
}

const theme = extendTheme({
  config,
  styles,
  colors,
  components: {
    Button,
  },
})

export default theme
