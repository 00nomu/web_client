import { BoltRounded, ChromeReaderModeSharp } from '@mui/icons-material';
import { red,lightBlue,common, } from '@mui/material/colors';
import { makeStyles  } from '@mui/styles';
import { flexbox, textAlign } from '@mui/system';
import { isAfter } from 'date-fns';
import Theme from "../../../../styles/Theme";

export const  mWage = makeStyles({

  stepZeroCommonGridContainer: {
    width : '100%',
    height : '100%',
    justifyContent : 'center',
    marginTop : 50,

   },

   workTimeBox: {
    width : '360px',
    height:'100px',
    // padding:'30px 0',
    borderRadius:'5px',
    cursor:'pointer',
    border : '1px solid black',
    textAlign:'center',
    color:Theme.basic_black,
    '&:hover': {
      border : '2px solid ' + Theme.light_blue,
    },

   },

   stepZeroSelectedGridContainer: {
    width : '360px',
    justifyContent : 'center',
    marginTop : 170,
    padding: 20,
    border : '3px solid ' + Theme.light_blue,
    borderRadius:'5px'
   },
   stepZeroCommonButton: {
    width : '50%',
   },
   stepZeroCommonTypo: {
    textAlign : 'center',
    display : 'block',
    width : '100%',
    margin : 20,
    color : 'black',
   },
   stepZeroSelectedTypo: {
    textAlign : 'center',
    display : 'block',
    width : '100%',
    margin : 20,
    color : Theme.light_blue,
   },
   stepZeroCommonTextField: {
    width : '90%',
   },
   stepZeroCommonTextFieldInputLabel: {
      // color : Theme.light_blue,
      // fontWeight : 500,
   },


  stepOneCommonTableContainer: {
    // marginTop : 50,
    boxShadow:'none'
  },
  stepOneCommonTable: {
    height:'40px'
  },
  stepOneCommonTableBody: {
    height : '3vh',
  },
  stepOneCommonTableHead: {
    fontSize : '1rem',
    fontWeight:'normal',
    border:'1px solid',
    borderColor:Theme.grey_v5,
    height:40,
    padding:'0',
    textAlign : 'center',
    textOverflow : 'ellipsis',
    whiteSpace:'nowrap',
    overflow : 'hidden',
    backgroundColor : Theme.grey_v2,
  },
  stepOneCommonTableRow: {
    height:'40px',
    padding:'0'
  },
  stepOneCommonTableCell: {
    fontSize : '1rem',
    fontWeight:'normal',
    border:'1px solid',
    borderColor:Theme.grey_v2,
    height:40,
    padding:'0',
    textAlign : 'center',
    textOverflow : 'ellipsis',
    whiteSpace:'nowrap',
    overflow : 'hidden',
  },
  stepTwoCommonDateField: {
    width : '30ch',
    margin : 30,
   },
   stepTwoSelectedGridContainer: {
    width : '360px',
    justifyContent : 'center',
    marginTop : 150,
    padding: 20,
    border : '1px solid ' + Theme.basic_black,
    borderRadius:'5px',
    // marginTop : 50,
    // border : '2px solid ' + Theme.light_blue,
   },
   stepTwoSelectedTypo: {
    textAlign : 'center',
    display : 'block',
    width : '100%',
    margin : 20,
    color : Theme.light_blue,
   },
   stepTwoCommonDateFieldInputLabel: {
    color : Theme.light_blue,
    fontWeight : 500,
 },
  tab_style: {
    width : '33.3%',
    fontSize:'1rem',
    fontWeight:'bold',
    '&.Mui-selected': {
      color: Theme.light_blue,
    },
    '&.Mui-focusVisible': {
      backgroundColor: Theme.light_blue,
    },
  },

  tabsStyle:{
    width:500,
    zIndex:1,
    '& .MuiTabs-indicator' : {
      height:'5px',
      borderRadius:'5px',
      backgroundColor:Theme.light_blue,
    },
  },


  modalTitleContainer: {
    marginTop : 0,
    height:'60px',
   },

  modalTitleSettingSpan: {
    display : 'none',
    position : 'absolute',

    color : 'blue',
    fontWeight : 500,
   },

   modalTitleDateTextField: {
    width : '8ch',
   },
   modalTitleTextField: {
    width : '20ch',
 },
   modalTitleDateTextFieldInputLabel: {
    fontWeight : 500,
  },

  modalTitleSettingButton: {
    marginTop : -5,
    display : 'flex',
    flexDirection : 'row',
    '&:hover #modalTitleSettingSpan' : {
      display : 'flex',

    },
   },

   basicSettingModal: {
      '& .MuiPaper-root': {
        boxShadow: '0px 0px 16px rgba(0,0,0,0.5)',
        width:700,
        height:780
      },
      '& .MuiDialogContent-root': {
        padding:'20px 20px 0 20px'
      },
    },

    buttonBlue: {
      fontSize:'0.95rem',
      fontWeight:'normal',
      height:'30px',
      margin:'20px 5px',
      padding:'0 20px',
      alignSelf:'center',
      color:Theme.basic_white,
      borderRadius:5,
      backgroundColor: Theme.light_blue,
      '&:hover' : {
        backgroundColor: Theme.basic_blue,
      },
      '& .MuiTouchRipple-root':{
        boxShadow:'none'
      },
    },
    buttonClose: {
      fontSize:'0.95rem',
      fontWeight:'normal',
      height:'30px',
      minWidth:'30px',
      alignSelf:'center',
      borderRadius:0,
      color:Theme.grey_v4,
      // backgroundColor: Theme.grey_v2,
      '&:hover' : {
        backgroundColor: Theme.grey_v2,
      },
      '& .MuiTouchRipple-root':{
        boxShadow:'none'
      },
    },

    outlinedButtonBlue: {
      fontSize:'0.95rem',
      fontWeight:'normal',
      height:'30px',
      margin:'20px 5px',
      padding:'0 20px',
      alignSelf:'center',
      color:Theme.light_blue,
      borderRadius:5,
      borderColor:Theme.light_blue,
      backgroundColor: Theme.basic_white,
    },

   humanManageGridContainer: {
    marginTop : 10,
  },

  humanManageTypo: {
    marginTop : 27,
    fontWeight: 'bold'
  },

   humanManageTextField: {
     marginTop : 20,
     '& .MuiFormHelperText-root.Mui-error': {
       marginRight:0,
       marginBottom:0,
       marginTop:0,
     },
   },
   controllerCommonCard: {
    // display : 'flex',
    marginTop : 20,
    overflowX: "scroll",
    overflowY: "scroll",
    width : '100%',
    height : '100%',

  },
  controllerCommonCardTitle: {
   display : 'flex',

  //  position : 'relative',
   backgroundColor : Theme.light_blue,
   color : Theme.basic_white,
   height : '5vh',
   alignItems : 'center',

  },
  controllerCommonCardMainTitle: {
    color : Theme.light_blue,
   },
   controllerCommonCardSubTitle: {
    color : Theme.basic_black,
    fontSize : 12,
    fontWeight : 500,
   },
   controllerCommonCardSubValue: {
    color : Theme.basic_black,
    fontSize : 12,
   },
  controllerCommonCardContent: {
    marginTop : 20,
    // whiteSpace: "normal",
    // overflowX: "scroll",
    // overflowY: "scroll",

   },
   refreshCommonTextField: {
    margin:0,
  },
   refreshSelectedTextField: {
    margin:0,
    backgroundColor : Theme.light_sky,
    borderRadius:'5px',
    // cursor:'pointer'
  },
   refreshSelectedTextFieldInputLabelProps: {
    color : 'white',
    backgroundColor : 'lightBlue',
    // cursor:'pointer'
  },
  etcPayAddButton: {
    color : 'white',
    backgroundColor : Theme.light_blue,
    marginLeft : 10,
    marginRight : 10,
},
  etcPayDeleteButton: {
    color : 'white',
    backgroundColor : Theme.basic_Red,
    marginLeft : 10,
    marginRight : 10,
  },
  etcPayCommonTextFieldCheckBox: {
   marginTop : 15,
   width : '5%',

  },
  etcPayCommonTextFieldType: {
    width : '100%',
    marginLeft : 10,
    marginRight : 10,
    marginTop : 10,
    marginBottom : 10,

  },
  etcPayCommonTextField: {
    width : '100%',
    marginLeft : 10,
    marginRight : 10,
    marginTop : 10,
    marginBottom : 10,

  },
  etcPayTextFieldInputProps: {
    height : 40,
  },
  TotalCalcSubTitleTypo: {
    fontWeight : 500,
  },
  TotalCalcSubTitleUnitTypo: {
    fontWeight : 500,
    color : Theme.grey_v5,
  },
  TotalCalcCommonTitleTypo: {
    fontSize : 12,

  },
  TotalCalcCommonDataTypo: {
    fontWeight : 'bold',
    fontSize : 12,

  },
  TotalCalcMainTypo: {
    fontWeight : 600,
    fontSize : 14,
  },
  TotalCalcSubTypo: {
    fontWeight : 600,
    fontSize : 14,
    color : Theme.light_blue,
  },
  IconButtonStyle: {
    marginLeft:10,
    width:40,
    height:40,
  },
  TableCellNotDate: {
    textAlign:'center',
    border:'1px solid',
    borderColor:Theme.grey_v2,
  },
  RadioButtonStyle: {
    '& .MuiRadio-root' :{
      padding:5
    },
  },

  PrintCommonTableCellRow : {
    border:'1px solid '+Theme.basic_black,
    textAlign : 'center',
  },

  PrintCommonTableCell : {
    border:'1px solid '+Theme.grey_v2,
    textAlign : 'center',

  },
  PrintCalcMethodTableCell : {
    width : '40%',
    border:'1px solid '+Theme.grey_v2,

    textAlign : 'center',
  },

  PrintSlashTableCell : {
    border:'1px solid '+Theme.grey_v2,
    textAlign : 'center',

  }


  // printTableContainer: {
  //   // marginTop : 50,
  //   boxShadow:'none'
  // },
  // stepOneCommonTable: {
  //   height:'40px'
  // },
  // stepOneCommonTableBody: {
  //   height : '3vh',
  // },
  // stepOneCommonTableHead: {
  //   fontSize : '1rem',
  //   fontWeight:'normal',
  //   border:'1px solid',
  //   borderColor:Theme.grey_v5,
  //   height:40,
  //   padding:'0',
  //   textAlign : 'center',
  //   textOverflow : 'ellipsis',
  //   whiteSpace:'nowrap',
  //   overflow : 'hidden',
  //   backgroundColor : Theme.grey_v2,
  // },
  // stepOneCommonTableRow: {
  //   height:'40px',
  //   padding:'0'
  // },
  // stepOneCommonTableCell: {
  //   fontSize : '1rem',
  //   fontWeight:'normal',
  //   border:'1px solid',
  //   borderColor:Theme.grey_v2,
  //   height:40,
  //   padding:'0',
  //   textAlign : 'center',
  //   textOverflow : 'ellipsis',
  //   whiteSpace:'nowrap',
  //   overflow : 'hidden',
  // },



});
