import Head from 'next/head'
import { useMemo } from 'react'

import { ThemeProvider, createTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import CssBaseline from '@mui/material/CssBaseline'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import '@fontsource/pacifico'
import '@fontsource/pacifico/400.css'

import '../styles/globals.css'

const App = ({ Component, pageProps }) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  )

  const AppHTML = (<>
    <Head>
      <title>Nebula UI</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content="Descripcion del portal Web"/>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  </>)

  return AppHTML
}

export default App