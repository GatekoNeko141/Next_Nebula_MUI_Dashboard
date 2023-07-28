import { Box, Grid, Paper, Typography, TextField, FormControl, InputLabel, InputAdornment, OutlinedInput, IconButton, Button } from '@mui/material'
import { full, maq } from '../styles/theme'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

import constellation from '../public/bgCard/constellation.svg'
import profile from '../public/profile/pp.png'

import NoneAuth from '../layouts/noneAuth'

import { useForm } from 'react-hook-form'
import { useState } from 'react'

import { motion } from "framer-motion"

const sizeOffset = 80

const formCard = {
  position: 'relative',
  width: {xs: '100%', md: `calc(100% + ${sizeOffset}px)`},
  left: {xs: '0', md: `-${sizeOffset}px`},
  height: {xs: `calc(100% + ${sizeOffset}px)`, md: '100%'},
  top: {xs: `-${sizeOffset}px`, md: '0'},
  borderRadius: `${sizeOffset}px 0 0 0`,
}

const formContainerCard = {
  borderRadius: {xs: 0, md: 3},
  overflow: 'hidden',
  boxShadow: '0 0 20px 4px rgb(0 0 0 / 30%)'
}

const bgConstellation = {
  backgroundImage: `url(${constellation.src})`,
  backgroundSize: 'auto',
  backgroundPosition: 'center',
  backgroundRepeat: 'repeat'
}

const profileImage = {
  width: {xs: '130px', md: '100%'},
  height: {xs: '100%', md: '130px'},
  backgroundImage: `url(${profile.src})`,
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat'
}

const Home = () => {
  const { register, handleSubmit } = useForm()

  const [showPassword, setShowPassword] = useState(false)
  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  const login = (data) => {
    console.log(data)
  }

  const HomeHTML = (<>
    <NoneAuth>
      <Box
        component={motion.div}
        sx={{...full.w, height: {xs: '100%', md: '500px'}}}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}
      >
        <Grid container sx={{...full.ph, ...formContainerCard}}>

          <Grid item xs={12} md={6} sx={{height: {xs: '40%', md: '100%'}, ...bgConstellation, paddingRight: {xs: 0, md: sizeOffset+'px'}, paddingBottom: {xs: sizeOffset+'px', md: 0}}}>
            <Grid sx={{...full.w, ...full.ph}} container justifyContent="center" alignItems="center">
              <Box sx={{p: 2, width: {xs: 'auto', md: '100%'}, height: {xs: '100%', md: 'auto'}}}>
                <Box sx={{...profileImage}}></Box>
              </Box>
            </Grid>
          </Grid>

          <Grid item xs={12} md={6} sx={{height: {xs: '60%', md: '100%'}}}>
            <Paper elevation={2} sx={{...formCard, paddingLeft: {xs: 0, md: sizeOffset+'px'}}}>
              <Grid sx={{...full.w, ...full.ph, paddingRight: {xs: 0, md: sizeOffset+'px'}, paddingTop: {xs: sizeOffset+'px', md: 0}}} container justifyContent="center" alignItems={{xs: 'top', md: 'center'}}>
                <Box sx={{...full.w, px: 2}}>
                  <Typography className='pacific' variant="h4" sx={{mb: 4}} textAlign={'center'}>Login</Typography>

                  <form onSubmit={handleSubmit(login)} style={{width: '100%'}}>

                    <TextField required id="user" label="Usuario" variant="outlined" sx={{...full.w, mb: 2}} {...register("user")}/>

                    <FormControl sx={{...full.w, mb: 2}} variant="outlined">
                      <InputLabel htmlFor="outlined-adornment-password">Contraseña</InputLabel>
                      <OutlinedInput
                        required
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        {...register("password")}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        }
                        label="Contraseña"
                      />
                    </FormControl>

                    <Grid container justifyContent="center">
                      <Button variant="outlined" color='primary' type='submit' size="large">Login</Button>
                    </Grid>
                  </form>
                </Box>
              </Grid>
            </Paper>
          </Grid>

        </Grid>
      </Box>
    </NoneAuth>
  </>)

  return HomeHTML
}

export default Home