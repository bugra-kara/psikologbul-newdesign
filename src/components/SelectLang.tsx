import React from 'react'
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
function SelectLang() {
  const [lang, setLang] = React.useState("tr")
  const handleChange = (event: SelectChangeEvent) => {
    setLang(event.target.value as string);
  };
  return (
   <Select
     labelId="demo-simple-select-label"
     id="lang"
     value={lang}
     label="Dil"
     onChange={handleChange}
     sx={{
       "& .MuiSvgIcon-root": {
           color: "white"
       },
       "color": {
         color: "white"
       },
       "#lang": {
         padding: "9px 20px",
         paddingRight: "32px",
       },
       '& .MuiOutlinedInput-notchedOutline': {
         borderColor: '#8390FA'
       },
       '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
         borderColor: '#8390FA',
       },
       '&:hover .MuiOutlinedInput-notchedOutline': {
         borderColor: '#8390FA',
       },
   }}
   >
     <MenuItem value={"tr"}>Türkçe</MenuItem>
     <MenuItem value={"en"}>English</MenuItem>
     <MenuItem value={"ar"}>Arabic</MenuItem>
   </Select>
  )
}

export default SelectLang