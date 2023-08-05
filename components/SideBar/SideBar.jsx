import { Box, Typography } from "@mui/material"
import { full, rowFlex, maq } from '../../styles/theme'

import profile from '../../public/profile/pp.png'

import { sideNavBar } from "../../constants/sideNavBar"
import ItemNavBar from "./ItemNavBar"

const SideBar = ({dark, color}) => {
  const SideBarHTML = (<>
    <Box sx={st.mainBox}>
      <Box sx={st.innerBox(dark, color)}>
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
  innerBox: (dark, color) => ({
    ...full.ph,
    ...full.w,
    backgroundColor: ( dark ? color[900] : color[300] ),
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