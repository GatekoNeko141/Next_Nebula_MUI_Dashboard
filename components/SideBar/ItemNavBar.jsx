import { Box, Typography } from "@mui/material"
import { maq } from "../../styles/theme"

const ItemNavBar = ({navOptions, children}) => {
  const ItemNavBarHTML = (<>
    <Box sx={{...maq}}>
      <Typography>{children}</Typography>
    </Box>
  </>)
  
  return ItemNavBarHTML
}

export default ItemNavBar