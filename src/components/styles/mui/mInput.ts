import { red } from '@mui/material/colors';
import { makeStyles  } from '@mui/styles';
import styled from "styled-components";
import { isAfter } from 'date-fns';
import Theme from "../../../../styles/Theme";
import { TextField } from "@mui/material";

export const ITEM_HEIGHT = 48;
export const ITEM_PADDING_TOP = 8;
export const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  export const CssTextField = styled(TextField)({
    '& .MuiInputLabel-root': {
      color:Theme.grey_v3,
    },
    '& label.Mui-focused': {
      color: Theme.grey_v4,
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: Theme.grey_v3,
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: Theme.grey_v5,
      },
      '&:hover fieldset': {
        // borderStyle: "hidden",
        // backgroundColor: Theme.light_sky_v2,
        transition:"0.3s",
        zIndex:0
      },
      '&.Mui-focused fieldset': {
        borderColor: Theme.grey_v4,
        border: '1px solid',
        // backgroundColor: Theme.light_sky_v2,
        transition:"0.3s",
        zIndex:0
      },
    },

  });
export const mInput = makeStyles({
  header: {
    border: "1px solid Theme.grey_v5",
  },
  inputLabelProps: {
    fontSize: "0.74rem",
    marginLeft:"14px",
    display:"inline-block",
  },
  inputProps: {
    margin : 0,
    width: 155,
    zIndex:0,
  },
  // inputImport: {
  //   margin : 0,
  //   width: 155,
  //   zIndex:0,
  //   '& label.Mui-focused': {
  //       color: Theme.light_Red,
  //     },
  //     '& .MuiInputLabel-root': {
  //       color: Theme.light_Red,
  //     },
  //     '& .MuiOutlinedInput-root': {
  //       '& fieldset': {
  //       borderColor: Theme.light_Red,
  //       },
  //       '&.Mui-focused fieldset': {
  //       borderColor: Theme.light_Red,
  //       },
  //     }
  // },
  inputImportFocus: {
    margin : 0,
    width: 155,
    zIndex:0,
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
        borderColor: Theme.light_Red,
        },
        '&.Mui-focused fieldset': {
        borderColor: Theme.light_Red,
        },
      }
  },
  inputDisabled: {
    backgroundColor:"#F4F4F4",
    margin : 0,
    width: 155,
  },
  inputFullWidth: {
    margin : 0,
    width: '100%',
  },

  timePickerProps: {
    margin : 0,
    zIndex:0,
  },
  timePickerDisabled: {
    margin : 0,
    backgroundColor:"#F4F4F4",
    zIndex:0,
  },
  etcPayProps: {
    margin : 0,
    marginTop: 0,
  },
  fildFontSmall:{
    fontSize: "13px"
  },
  FormControl:{

  },
  testLabel : {
      color: "darkred",
      fontWeight : "bold",
      fontSize : 14,
      "&.Mui-focused": {
        color: "darkred",
      },

  },
  testSelect : {

    height : 40,
    "&:after": {
      borderBottomColor: "darkred",
      color : "darkred"

    },
    "& .MuiSvgIcon-root": {
      color: "darkred",

    },

  },

});