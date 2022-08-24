import { Button, useColorMode } from '@chakra-ui/react'

interface ThemeButtonProps {
  text: string
}

export function ThemeButton({ text }: ThemeButtonProps) {
  const { toggleColorMode } = useColorMode()
  return (
    <Button variant="solid" onClick={toggleColorMode} /* bgColor="lime" */>
      {text}
    </Button>
  )
}
