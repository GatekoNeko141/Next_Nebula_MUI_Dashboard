import { Box, Container, Grid } from '@mui/material'
import { full } from '../styles/theme'

import bg1 from '../public/bgLogin/bg1.svg'

const NoneAuth = ({children}) => {
  const NoneAuthHTML = (<>
    <Box sx={st.bgLogin}>
      <Container maxWidth="md" sx={{...full.ph, p: 0}}>
        <Grid container sx={{...full.w, ...full.ph}}>
          <Grid item xs={12}>
            <Grid container sx={{...full.ph}} justifyContent="center" alignItems="center">
              {children}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>)
  
  return NoneAuthHTML
}

const st = {
  bgLogin: {
    ...full.w,
    ...full.vh,
    backgroundImage: `url(${bg1.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }
}

export default NoneAuth