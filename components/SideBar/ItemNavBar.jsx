import { Box, Button, Typography } from "@mui/material"
import Link from "next/link"
import { full, maq } from "../../styles/theme"

const ItemNavBar = ({navOptions, children}) => {
  const st = {
    mainBox: {
      borderRadius: 2,
      px: 1,
      py: .5,
      ...full.w,
      justifyContent: 'start',
      textDecoration: 'none'
    },
    headerBox: {
      display: 'flex',
      alignItems: 'center'
    },
    icon: icon => ({
      width: '20px',
      height: '20px',
      backgroundImage: `url(${icon})`,
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      mr: 1
    }),
    mainText: {
      mt: .2,
      opacity: .8,
      fontWeight: 200,
      fontSize: 14,
      textTransform: 'capitalize',
      color: 'white'
    }
  }
  
  const ItemNavBarHTML = (<>
    <Button href={navOptions.path} sx={st.mainBox} component={Link}>
      <Box sx={st.headerBox}>
        <Box sx={st.icon(navOptions.icon)}></Box>
        <Typography sx={st.mainText} variant="p">{children}</Typography>
      </Box>
    </Button>
  </>)
  
  return ItemNavBarHTML
}

export default ItemNavBar