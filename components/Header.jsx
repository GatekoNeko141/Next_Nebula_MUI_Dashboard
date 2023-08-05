import { Box, Typography } from "@mui/material"
import { full, maq } from "../styles/theme"

const Header = ({dark, color, children}) => {
  const HeaderHTML = (<>
    <Box sx={st.mainHeader}>
      <Box sx={st.innerHeader(dark, color)}>
        <Typography variant="h6" sx={st.headerTitle}>{children}</Typography>
      </Box>
    </Box>
  </>)
  
  return HeaderHTML
}

const st = {
  mainHeader: {
    ...full.w,
    p: .5
  },
  innerHeader: (dark, color) => ({
    ...full.w,
    backgroundColor: ( dark ? color[900] : color[300] ),
    borderRadius: 3
  }),
  headerTitle: {
    fontWeight: 200
  }
}

export default Header