import { red } from '@mui/material/colors';
import { makeStyles  } from '@mui/styles';
import styled from "styled-components";
import { isAfter } from 'date-fns';
import Theme from "../../../../styles/Theme";
import { TextField } from "@mui/material";

export const mButton = makeStyles({

    modalTitleSettingButton: {
        marginTop : -5,
        display : 'flex',
        flexDirection : 'row',
        '&:hover #modalTitleSettingSpan' : {
            display : 'flex',
        },
        },

    buttonBlue: {
        fontSize:'0.95rem',
        fontWeight:'normal',
        height:'30px',
        // margin:'0 10px 0 0 ',
        padding:'0 20px',
        alignSelf:'center',
        boxShadow:"none",
        color:Theme.basic_white,
        borderRadius:5,
        backgroundColor: Theme.light_blue,
        '&:hover' : {
            backgroundColor: Theme.basic_blue,
            boxShadow:"none",
        },
        '& .MuiTouchRipple-root':{
            boxShadow:'none'
        },
    },
    buttonRed: {
        fontSize:'0.95rem',
        fontWeight:'normal',
        height:'30px',
        padding:'0 20px',
        alignSelf:'center',
        color:Theme.basic_white,
        borderRadius:5,
        backgroundColor: Theme.basic_Red,
        '&:hover' : {
            backgroundColor: Theme.light_Red,
        },
        '& .MuiTouchRipple-root':{
            boxShadow:'none'
        },
    },
    buttonBlueDisabled: {
        fontSize:'0.95rem',
        fontWeight:'normal',
        height:'30px',
        padding:'0 20px',
        alignSelf:'center',
        boxShadow:"none",
        color:Theme.grey_v3,
        borderRadius:5,
        // border:'1px solid' + Theme.grey_v3,
        backgroundColor: Theme.grey_v2,
        '&:hover' : {
            backgroundColor: Theme.grey_v5,
            boxShadow:"none",
        },
        '& .MuiTouchRipple-root':{
            boxShadow:'none'
        },
    },
    buttonGrey: {
        fontSize:'0.95rem',
        fontWeight:'normal',
        height:'30px',
        padding:'0 20px',
        alignSelf:'center',
        borderRadius:0,
        color:Theme.grey_v4,
        border:'1px solid' + Theme.grey_v5,
        backgroundColor: Theme.grey_v2,
        boxShadow:"none",
        '&:hover' : {
            backgroundColor: Theme.grey_v5,
            boxShadow:"none",
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
        position:'absolute',
        padding:0,
        right:20,
        top:20,
        borderRadius:0,
        color:Theme.grey_v4,
        border:'1px solid' + Theme.grey_v5,
        backgroundColor: Theme.grey_v2,
        boxShadow:"none",
        '&:hover' : {
            backgroundColor: Theme.grey_v5,
            boxShadow:"none",
        },
        '& .MuiTouchRipple-root':{
            boxShadow:'none'
        },
    },
    outlinedButtonBlue: {
        fontSize:'0.95rem',
        fontWeight:'normal',
        height:'30px',
        // margin:'20px 5px',
        marginRight:'10px',
        padding:'0 20px',
        alignSelf:'center',
        color:Theme.light_blue,
        borderRadius:5,
        border:'1px solid' + Theme.light_blue,
        backgroundColor: 'inherit',
        boxShadow:"none",

    },
    buttonUpload: {
        fontSize:'0.95rem',
        fontWeight:'normal',
        height:'100%',
        // margin:'0 10px 0 0 ',
        padding:0,
        alignSelf:'center',
        boxShadow:"none",
        color:Theme.light_blue,
        borderRadius:5,
        border:'1px solid' + Theme.light_blue,
        backgroundColor: Theme.basic_white,
        '&:hover' : {
            backgroundColor: Theme.grey_v1,
            boxShadow:"none",
        },
        '& .MuiTouchRipple-root':{
            boxShadow:'none'
        },
    },
    IconButtonStyle: {
    marginLeft:10,
    width:40,
    height:40,
    },
    RadioButtonStyle: {
        '& .MuiRadio-root' :{
            padding:5
        },
    },
    helpModal: {
        alignItems:'center',
        width:'100%',
        height:'auto',
    },
});