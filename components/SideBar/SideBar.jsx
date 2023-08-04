import { Box, Typography } from "@mui/material"
import { full, rowFlex, maq } from '../../styles/theme'

import { purple } from '@mui/material/colors'
import profile from '../../public/profile/pp.png'

import { sideNavBar } from "../../constants/sideNavBar"
import ItemNavBar from "./ItemNavBar"

const SideBar = ({dark}) => {
  const SideBarHTML = (<>
    <Box sx={st.mainBox}>
      <Box sx={st.innerBox(dark)}>
        <Box sx={st.headerBox}>
          <Box sx={st.mainLogo}></Box>
        </Box>
        <Box sx={st.navContainer}>
          <Box>
            {
              sideNavBar.map(navItem =>
                navItem.tag === 'divisor' ?
                <Typography
                  variant="subtitle2"
                  key={navItem.title}
                  sx={{mt: 1}}
                >
                  {navItem.title}
                </Typography>:
                <ItemNavBar
                  key={navItem.title}
                  navOptions={navItem}
                >
                  {navItem.title}
                </ItemNavBar>
              )
            }
          </Box>
        </Box>
      </Box>
    </Box>
  </>)
  
  return SideBarHTML
}

const st = {
  mainBox: {
    ...full.ph,
    width: {xs: '100%', sm: 250},
    p: .5
  },
  innerBox: dark => ({
    ...full.ph,
    ...full.w,
    backgroundColor: ( dark ? purple[900] : purple[300] ),
    borderRadius: 3,
    ...rowFlex
  }),
  headerBox: {
    width: '100%',
    py: 3,
  },
  mainLogo: {
    ...full.w,
    height: '80px',
    backgroundImage: `url(${profile.src})`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  },
  navContainer:{
    ...full.ph,
    overflowX: 'hidden',
    px: 1
  }
}

export default SideBar