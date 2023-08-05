import { SideBar, Header } from '../components'
import { useMediaQuery, Box } from '@mui/material'
import { purple } from '@mui/material/colors'

import { full, rowFlex } from '../styles/theme'
import { useEffect } from 'react'

const Auth = ({title, children}) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const isSmallScreen = useMediaQuery('(max-width: 600px)')

  useEffect(() => {
    if(typeof document !== 'undefined'){
      document.title = `Nebula UI - ${title}`
    }
  },[true])

  const AuthHTML = (<>
    <Box sx={st.dashboardTheme}>
      { !isSmallScreen && <SideBar dark={prefersDarkMode} color={purple}/> }
      <Box sx={st.dynamicContent}>
        <Header dark={prefersDarkMode} color={purple}>{title}</Header>
        <Box sx={st.innerContent}>
          {children}
        </Box>
      </Box>
    </Box>
  </>)
  
  return AuthHTML
}

const st = {
  dashboardTheme: {
    display: 'flex',
    ...full.w,
    ...full.vh
  },
  dynamicContent: {
    ...rowFlex,
    width: {xs: '100%', sm: 'calc(100% - 250px)'},
  },
  innerContent: {
    overflowX: 'hidden'
  }
}

export default Auth