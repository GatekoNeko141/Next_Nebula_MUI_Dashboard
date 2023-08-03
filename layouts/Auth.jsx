import { SideBar } from '../components/SideBar'
import { useMediaQuery, Box } from '@mui/material'
import { full, maq } from '../styles/theme'

const dashboardTheme = {
  display: 'flex',
  //...maq,
  ...full.w,
  ...full.vh
}

const Auth = ({children}) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const isSmallScreen = useMediaQuery('(max-width: 600px)')

  const AuthHTML = (<>
    <Box sx={{...dashboardTheme}}>
      { !isSmallScreen && <SideBar dark={prefersDarkMode}/> }
      <Box sx={{...maq, width: {xs: '100%', sm: 'calc(100% - 250px)'}}}>
        {children}
      </Box>
    </Box>
  </>)
  
  return AuthHTML
}

export default Auth