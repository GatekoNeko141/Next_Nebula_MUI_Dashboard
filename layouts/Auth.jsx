import { SideBar, Header } from '../components'
import { useMediaQuery, Box } from '@mui/material'
import { full, maq } from '../styles/theme'

const Auth = ({children}) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const isSmallScreen = useMediaQuery('(max-width: 600px)')

  const AuthHTML = (<>
    <Box sx={st.dashboardTheme}>
      { !isSmallScreen && <SideBar dark={prefersDarkMode}/> }
      <Box sx={st.dynamicContent}>
        <Header />
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
    width: {xs: '100%', sm: 'calc(100% - 250px)'},
    overflowX: 'hidden'
  },
  innerContent: {
    ...maq,
  }
}

export default Auth