import {
    WholeWrapperDiv,
    WrapperDiv,
    GridBoxDiv,
    TitleP,
    LineDiv,
} from "../../../styles/AllStyles";

import {
    Section,
    Article,
    InnerBox
} from "../../../styles/common/ModalComponents";
import { mInput } from "../../../styles/mui/mInput";
import { mButton } from "../../../styles/mui/mButton";
import { Button, FormControl, IconButton, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, TextField } from '@mui/material/';

import Modal from "react-modal";
import DaumPostcode from 'react-daum-postcode';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import React, { useRef, useState } from "react";
import Theme from '../../../../../styles/Theme'
import ReactToPrint from "react-to-print";
import WarrantPrint from "./WarrantPrint";
import { warrantMainTypeArray } from "../../../../Lib/array/warrant";
import CloseIcon from '@mui/icons-material/Close';
import DownloadIcon from '@mui/icons-material/Download';

import { Visibility, VisibilityOff } from "@mui/icons-material";
import { phoneNumber } from "../../../../modules/replace";
import { ClipLoader } from "react-spinners";
import { addressCompleteHandler } from "../../../../modules/addressComplete";
import { downloadImageHandler, downloadPdfHandler } from "../../../../modules/fileDownloadHandler";
import dataSubmitHandler from "../../../../modules/dataSubmitHandler";

const ModalPresenter = ({
    width,
    modalProps
}: any) => {

    const {
        commonState,
        commonDispatch,

        state,
        dispatch,

        fileState,
        fileDispatch,

    } = modalProps;

    const {
        componentTitle,
        isLoading
    } = commonState;

    const classes = mInput();
    const buttonStyles = mButton();

    const printRef = useRef<HTMLDivElement>(null);
    const [printData, setPrintData] = useState();

    const [addressOpen, setAddressOpen] = useState(false);

    const [pwdShow, setPwdShow] = useState(false);

    return (
        <>
            <WholeWrapperDiv
                kindOf={`modalBg`}
                position={`relative`}
            >
                <Button
                    variant={'contained'}
                    className={buttonStyles.buttonClose}
                    onClick={(e: any) => { commonDispatch({ name: "modalOpen", value: false }) }}
                >
                    <CloseIcon></CloseIcon>
                </Button>
                <WrapperDiv
                    dr={`column`}
                    ai={`center`}
                >
                    <WrapperDiv>
                        <TitleP
                            kindOf={`24px`}
                        >
                            경정청구
                        </TitleP>
                    </WrapperDiv>
                    <GridBoxDiv
                        gtc={`auto auto auto`}
                        gap={`10px`}
                    >
                        <Section
                            overflow={`hidden`}
                            height={`760px`}
                        >
                            {/* Header 추가일 땐 사용자 추가, 수정일 땐 사용자 수정 */}
                            <InnerBox
                                kindOf={`titleBox`}
                                ju={`space-between`}
                            >
                                <TitleP
                                    kindOf={`18px`}
                                >
                                    사업장 및 대표자 정보
                                </TitleP>
                                <ReactToPrint
                                    onBeforeGetContent={async () => {
                                        setPrintData(state);
                                    }}
                                    onBeforePrint={async () => {
                                        setPrintData(state);
                                    }}
                                    trigger={() =>
                                        <Button
                                            variant={'contained'}
                                            className={buttonStyles.buttonGrey}
                                        >
                                            위임장 출력
                                        </Button>
                                    }
                                    content={() => printRef.current}
                                />
                                {printData &&
                                    <WarrantPrint data={printData} printRef={printRef} />
                                }
                            </InnerBox>
                            <InnerBox>
                                <Article kindOf={`scroll`}>
                                    <Article kindOf={`padding-r15`}>
                                        <WrapperDiv kindOf={`margin30`}>
                                                                              <GridBoxDiv
                                                gtc={`repeat(1, 1fr)`}
                                                gap={`10px`}
                                                kindOf={`inputFirst`}
                                            // kindOf={`input`}
                                            >
                                                <TextField
                                                    InputLabelProps={{
                                                        shrink: true
                                                    }}
                                                    className={classes.inputFullWidth}
                                                    label='등록일'
                                                    size='small'
                                                    name='warrant_sign_date'
                                                    type='date'
                                                    value={state.warrant_sign_date}
                                                    onChange={(e: any) => { dispatch({ name: e.target.name, value: e.target.value }) }}
                                                />
                                            </GridBoxDiv>
                                            {/* <TitleP margin={`30px 0 0`}>사업장 정보</TitleP> */}
                                            <GridBoxDiv
                                                gtc={`repeat(2, 1fr)`}
                                                gap={`10px`}
                                                kindOf={`input`}
                                            >
                                                <Button
                                                    variant={'contained'}
                                                    className={state.warrant_company_type === 0 ? buttonStyles.buttonBlue : buttonStyles.buttonBlueDisabled}
                                                    onClick={(e: any) => dispatch({ name: 'warrant_company_type', value: 0 })}

                                                >
                                                    개인 사업장
                                                </Button>
                                                <Button
                                                    className={state.warrant_company_type === 1 ? buttonStyles.buttonBlue : buttonStyles.buttonBlueDisabled}
                                                    onClick={(e: any) => dispatch({ name: 'warrant_company_type', value: 1 })}

                                                >
                                                    법인 사업장
                                                </Button>
                                            </GridBoxDiv>
                                            <GridBoxDiv
                                                gtc={`repeat(2, 1fr)`}
                                                gap={`10px`}
                                                kindOf={`input`}
                                            >
                                                <TextField
                                                    error={state.warrant_company_name === '' && true}
                                                    className={classes.inputFullWidth}
                                                    label='상호'
                                                    size='small'
                                                    name='warrant_company_name'
                                                    type='text'
                                                    value={state.warrant_company_name}
                                                    onChange={(e: any) => { dispatch({ name: e.target.name, value: e.target.value }) }}
                                                />
                                                <FormControl
                                                    className={classes.inputProps}
                                                >
                                                    <InputLabel id="demo-multiple-name-label">업태</InputLabel>
                                                    <Select
                                                        error={state.warrant_main_type === 0 && true}
                                                        labelId="demo-multiple-name-label"
                                                        label={`업태`}
                                                        id={`warrant_main_type`}
                                                        name={`warrant_main_type`}
                                                        size='small'
                                                        value={state.warrant_main_type}
                                                        onChange={(e: any) => { dispatch({ name: e.target.name, value: e.target.value }) }}
                                                    >
                                                        {warrantMainTypeArray.map((item: any, i: any) => (
                                                            <MenuItem key={i} value={i} >{item} </MenuItem>
                                                        ))}
                                                    </Select>
                                                </FormControl>
                                            </GridBoxDiv>

                                            <GridBoxDiv
                                                gtc={`repeat(1, 1fr)`}
                                                gap={`10px`}
                                                kindOf={`input`}
                                            >
                                                <TextField
                                                    error={state.warrant_company_code === '' && true}
                                                    className={classes.inputFullWidth}
                                                    label='사업자등록번호'
                                                    size='small'
                                                    name='warrant_company_code'
                                                    type='text'
                                                    value={state.warrant_company_code}
                                                    onChange={(e: any) => { dispatch({ name: e.target.name, value: e.target.value }) }}
                                                />
                                            </GridBoxDiv>

                                            <GridBoxDiv
                                                gtc={`8.5fr 1.5fr`}
                                                gap={`10px`}
                                                kindOf={`input`}
                                            >
                                                <TextField
                                                    label={`사업자등록증 파일`}
                                                    type='text'
                                                    color='primary'
                                                    size='small'
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                    value={state.warrant_business_reg_card_name ? state.warrant_business_reg_card_name : state.warrant_business_reg_card_path ? "image.png" : ""}
                                                    disabled={true}
                                                />
                                                <Button className={buttonStyles.buttonUpload} variant='contained' component="label">
                                                    <input
                                                        accept='image/gif, image/png, image/jpeg, image/bmp, image/webp'
                                                        hidden
                                                        name={`file_object`}
                                                        type="file"
                                                        onChange={(e: any) => {
                                                            let reader = new FileReader();
                                                            let file = e.target.files[0];
                                                            if (file) {
                                                                reader.onloadend = () => {
                                                                    fileDispatch({ name: "warrant_business_reg_card_object", value: file });
                                                                    fileDispatch({ name: 'warrant_business_reg_card_url', value: reader.result });
                                                                    // fileDispatch({ name: 'file_kinds', value: 'business' });
                                                                    dispatch({ name: 'warrant_business_reg_card_name', value: file.name })
                                                                };
                                                                reader.readAsDataURL(file);
                                                            }
                                                            else {
                                                                fileDispatch({ name: "warrant_business_reg_card_object", value: '' });
                                                            }
                                                        }}
                                                    />
                                                    업로드
                                                </Button>
                                            </GridBoxDiv>

                                            {(fileState.warrant_business_reg_card_url !== '' || (state.warrant_business_reg_card_path && (state.warrant_business_reg_card_path !== ''))) &&
                                                <GridBoxDiv
                                                    gtc={`repeat(1, 1fr)`}
                                                    gap={`10px`}
                                                    kindOf={`inputFirst`}
                                                >
                                                    <Button
                                                        className={buttonStyles.buttonGrey}
                                                        variant="contained"
                                                        id={fileState.warrant_business_reg_card_url !== '' ? fileState.warrant_business_reg_card_url : "https://00nomubucket1.s3.ap-northeast-2.amazonaws.com/" + state.warrant_business_reg_card_path}
                                                        onClick={(e: any) => downloadImageHandler(e.target.id, state.warrant_business_reg_card_name)}
                                                    >
                                                        <DownloadIcon sx={{ marginRight: `5px` }} fontSize="small" />다운로드
                                                    </Button>

                                                </GridBoxDiv>
                                            }


                                            {state.warrant_company_type === 1 ? 
                                            
                                        
                                        
                                         <>
                                            <GridBoxDiv
                                                gtc={`8.5fr 1.5fr`}
                                                gap={`10px`}
                                                kindOf={`input`}
                                            >
                                                <TextField
                                                    label={`인감 증명서(업체 업로드)`}
                                                    type='text'
                                                    color='primary'
                                                    size='small'
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                    value={state.warrant_complete_name}
                                                    disabled={true}
                                                />

                                                <Button className={buttonStyles.buttonUpload} variant='contained' component="label">
                                                    <input hidden
                                                        name={`file_object`}
                                                        accept="application/pdf"
                                                        type='file'
                                                        onChange={(e: any) => {
                                                            let reader = new FileReader();
                                                            let file = e.target.files[0];
                                                            if (file) {
                                                                reader.onloadend = () => {
                                                                    fileDispatch({ name: "warrant_complete_object", value: file });
                                                                    fileDispatch({ name: 'warrant_complete_url', value: reader.result });
                                                                    // fileDispatch({ name: 'file_kinds', value: 'business' });

                                                                    dispatch({ name: 'warrant_complete_name', value: file.name })
                                                                };
                                                                reader.readAsDataURL(file);
                                                            }
                                                            else {
                                                                fileDispatch({ name: "warrant_complete_object", value: '' });
                                                            }
                                                        }}
                                                    />
                                                    업로드
                                                </Button>

                                            </GridBoxDiv>
                                            {(fileState.warrant_complete_url !== '' || (state.warrant_complete_path && (state.warrant_complete_path !== ''))) &&
                                                <GridBoxDiv
                                                    gtc={`repeat(1, 1fr)`}
                                                    gap={`10px`}
                                                    kindOf={`inputFirst`}
                                                >
                                                    <Button
                                                        className={buttonStyles.buttonGrey}
                                                        variant="contained"
                                                        id={fileState.warrant_complete_url !== '' ? fileState.warrant_complete_url : "https://00nomubucket1.s3.ap-northeast-2.amazonaws.com/" + state.warrant_complete_path}
                                                        onClick={(e: any) => downloadPdfHandler(e.target.id, state.warrant_complete_name)}
                                                    >
                                                        <DownloadIcon sx={{ marginRight: `5px` }} fontSize="small" />다운로드
                                                    </Button>
                                                </GridBoxDiv>
                                            }
                                            <GridBoxDiv
                                                gtc={`8.5fr 1.5fr`}
                                                gap={`10px`}
                                                kindOf={`input`}
                                            >
                                                <TextField
                                                    label={`인감 도장(업체 업로드)`}
                                                    type='text'
                                                    color='primary'
                                                    size='small'
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                    value={state.warrant_stamp_name ? state.warrant_stamp_name : state.warrant_stamp_path ? "image.png" : ""}
                                                    disabled={true}
                                                />

                                                <Button className={buttonStyles.buttonUpload} variant='contained' component="label">
                                                    <input hidden
                                                        name={`file_object`}
                                                        accept='image/gif, image/png, image/jpeg, image/bmp, image/webp'
                                                        type='file'
                                                        onChange={(e: any) => {
                                                            let reader = new FileReader();
                                                            let file = e.target.files[0];
                                                            if (file) {
                                                                reader.onloadend = () => {
                                                                    fileDispatch({ name: "warrant_stamp_object", value: file });
                                                                    fileDispatch({ name: 'warrant_stamp_url', value: reader.result });
                                                                    // fileDispatch({ name: 'file_kinds', value: 'business' });

                                                                    dispatch({ name: 'warrant_stamp_name', value: file.name })
                                                                    dispatch({ name: 'warrant_stamp_image', value: reader.result })
                                                                };
                                                                reader.readAsDataURL(file);
                                                            }
                                                            else {
                                                                fileDispatch({ name: "warrant_stamp_object", value: '' });
                                                            }
                                                        }}
                                                    />
                                                    업로드
                                                </Button>

                                            </GridBoxDiv>
                                            {(fileState.warrant_stamp_url !== '' || (state.warrant_stamp_path && (state.warrant_stamp_path !== ''))) &&
                                                <GridBoxDiv
                                                    gtc={`repeat(1, 1fr)`}
                                                    gap={`10px`}
                                                    kindOf={`inputFirst`}
                                                >
                                                    <Button
                                                        className={buttonStyles.buttonGrey}
                                                        variant="contained"
                                                        id={fileState.warrant_stamp_url !== '' ? fileState.warrant_stamp_url : "https://00nomubucket1.s3.ap-northeast-2.amazonaws.com/" + state.warrant_stamp_path}
                                                        onClick={(e: any) => downloadImageHandler(e.target.id, state.warrant_stamp_name)}
                                                    >
                                                        <DownloadIcon sx={{ marginRight: `5px` }} fontSize="small" />다운로드
                                                    </Button>
                                                </GridBoxDiv>
                                            }

                                            </>


                                            : null}
                                            <LineDiv margin={`20px 0`}></LineDiv>
    


                                            <GridBoxDiv
                                                gtc={`repeat(1, 1fr)`}
                                                gap={`10px`}
                                                kindOf={`inputLast`}
                                            >
                                                <FormControl className={classes.inputFullWidth} variant="outlined" size='small'>
                                                    <InputLabel>사업장 주소</InputLabel>
                                                    <OutlinedInput
                                                        error={state.warrant_company_address === '' && true}
                                                        name={`warrant_company_address`}
                                                        value={state.warrant_company_address}
                                                        onChange={(e: any) => { dispatch({ name: e.target.name, value: e.target.value }) }}
                                                        endAdornment={
                                                            <InputAdornment position="end">
                                                                <IconButton
                                                                    onClick={(e: any) => { setAddressOpen(true); }}
                                                                >
                                                                    <SearchOutlinedIcon></SearchOutlinedIcon>
                                                                </IconButton>
                                                            </InputAdornment>
                                                        }
                                                        label="사업장 주소"
                                                    />
                                                </FormControl>
                                            </GridBoxDiv>
                                            <GridBoxDiv
                                                gtc={`repeat(1, 1fr)`}
                                                gap={`10px`}
                                                kindOf={`inputLast`}
                                            >
                                                <TextField
                                                    error={state.warrant_company_address_detail === '' && true}
                                                    className={classes.inputFullWidth}
                                                    label='상세주소'
                                                    InputLabelProps={{
                                                        shrink: true
                                                    }}
                                                    size='small'
                                                    name='warrant_company_address_detail'
                                                    type='text'
                                                    value={state.warrant_company_address_detail}
                                                    onChange={(e: any) => { dispatch({ name: e.target.name, value: e.target.value }) }}
                                                />
                                            </GridBoxDiv>

                                            <GridBoxDiv
                                                gtc={`repeat(1, 1fr)`}
                                                gap={`10px`}
                                                kindOf={`input`}
                                            >
                                                <TextField
                                                    className={classes.inputFullWidth}
                                                    label='대표자 성명'
                                                    size='small'
                                                    name='warrant_owner_name'
                                                    type='text'
                                                    value={state.warrant_owner_name}
                                                    onChange={(e: any) => { dispatch({ name: e.target.name, value: e.target.value }) }}
                                                />
                                            </GridBoxDiv>
                                            <GridBoxDiv
                                                gtc={`8.5fr 1.5fr`}
                                                gap={`10px`}
                                                kindOf={`input`}
                                            >
                                                <TextField
                                                    label={`주민등록증 파일`}
                                                    type='text'
                                                    color='primary'
                                                    size='small'
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                    value={state.warrant_personal_reg_card_name ? state.warrant_personal_reg_card_name : state.warrant_personal_reg_card_path ? "image.png" : ""}
                                                    disabled={true}
                                                />
                                                <Button className={buttonStyles.buttonUpload} variant='contained' component="label">
                                                    <input
                                                        accept='image/gif, image/png, image/jpeg, image/bmp, image/webp'
                                                        hidden
                                                        name={`file_object`}
                                                        type="file"
                                                        onChange={(e: any) => {
                                                            let reader = new FileReader();
                                                            let file = e.target.files[0];
                                                            if (file) {
                                                                reader.onloadend = () => {
                                                                    fileDispatch({ name: "warrant_personal_reg_card_object", value: file });
                                                                    fileDispatch({ name: 'warrant_personal_reg_card_url', value: reader.result });
                                                                    // fileDispatch({ name: 'file_kinds', value: 'business' });
                                                                    dispatch({ name: 'warrant_personal_reg_card_name', value: file.name })
                                                                };
                                                                reader.readAsDataURL(file);
                                                            }
                                                            else {
                                                                fileDispatch({ name: "warrant_personal_reg_card_object", value: '' });
                                                            }
                                                        }}
                                                    />

                                                    업로드
                                                </Button>
                                            </GridBoxDiv>
                                            {(fileState.warrant_personal_reg_card_url !== '' || (state.warrant_personal_reg_card_path && (state.warrant_personal_reg_card_path !== ''))) &&
                                                <GridBoxDiv
                                                    gtc={`repeat(1, 1fr)`}
                                                    gap={`10px`}
                                                    kindOf={`inputFirst`}
                                                >
                                                    <Button
                                                        className={buttonStyles.buttonGrey}
                                                        variant="contained"
                                                        id={fileState.warrant_personal_reg_card_url !== '' ? fileState.warrant_personal_reg_card_url : "https://00nomubucket1.s3.ap-northeast-2.amazonaws.com/" + state.warrant_personal_reg_card_path}
                                                        onClick={(e: any) => downloadImageHandler(e.target.id, state.warrant_personal_reg_card_name)}
                                                    >
                                                        <DownloadIcon sx={{ marginRight: `5px` }} fontSize="small" />다운로드
                                                    </Button>

                                                </GridBoxDiv>
                                            }

                                            <GridBoxDiv
                                                gtc={`repeat(2, 1fr)`}
                                                gap={`10px`}
                                                kindOf={`input`}
                                            >
                                                <TextField
                                                    className={classes.inputFullWidth}
                                                    label='주민등록번호(앞자리)'
                                                    size='small'
                                                    name='warrant_reg_number'
                                                    type='text'
                                                    value={state.warrant_reg_number}
                                                    onChange={(e: any) => { dispatch({ name: e.target.name, value: e.target.value }) }}
                                                />
                                                <TextField
                                                    InputProps={{
                                                        endAdornment: (
                                                            <InputAdornment position="end">
                                                                <IconButton
                                                                    aria-label="toggle password visibility"
                                                                    onClick={(e: any) => { setPwdShow(!pwdShow) }}
                                                                    edge="end"
                                                                >
                                                                    {pwdShow ? <VisibilityOff /> : <Visibility />}
                                                                </IconButton>
                                                            </InputAdornment>
                                                        ),
                                                    }}
                                                    label='뒷자리'
                                                    variant='outlined'
                                                    id="outlined-adornment-password"
                                                    type={pwdShow ? 'text' : 'password'}
                                                    size='small'
                                                    name={`warrant_reg_number2`}
                                                    value={state.warrant_reg_number2}
                                                    onChange={(e: any) => { dispatch({ name: e.target.name, value: e.target.value }) }}
                                                />
                                            </GridBoxDiv>
                                            <GridBoxDiv
                                                gtc={`repeat(1, 1fr)`}
                                                gap={`10px`}
                                                kindOf={`inputLast`}
                                            >
                                                <TextField
                                                    className={classes.inputFullWidth}
                                                    label='연락처'
                                                    InputLabelProps={{
                                                        shrink: true
                                                    }}
                                                    size='small'
                                                    name='warrant_company_tel'
                                                    type='text'
                                                    value={phoneNumber(state.warrant_company_tel)}
                                                    onChange={(e: any) => { dispatch({ name: e.target.name, value: e.target.value }) }}
                                                />
                                            </GridBoxDiv>
                                        </WrapperDiv>
                                    </Article>
                                </Article>
                            </InnerBox>
                        </Section>

                        <Section
                            overflow={`hidden`}
                            height={`760px`}
                        >
                            <InnerBox
                                kindOf={`titleBox`}
                                ju={`space-between`}
                            >
                                <TitleP
                                    kindOf={`18px`}
                                >
                                    특수관계인 여부
                                </TitleP>
                            </InnerBox>
                            <InnerBox>
                                <Article kindOf={`scroll`}>
                                    <Article kindOf={`padding-r15`}>
                                        <WrapperDiv kindOf={`margin30`}>

                                            <GridBoxDiv
                                                gtc={`repeat(1, 1fr)`}
                                                gap={`10px`}
                                                kindOf={`inputFirst`}
                                            >
                                                <FormControl
                                                    className={classes.inputFullWidth}
                                                >
                                                    <InputLabel id="demo-multiple-name-label">특수관계인 여부</InputLabel>
                                                    <Select
                                                        error={state.warrant_special_people_boolean === 0 && true}
                                                        labelId="demo-multiple-name-label"
                                                        label={`특수관계인 여부`}
                                                        id={`warrant_special_people_boolean`}
                                                        name={`warrant_special_people_boolean`}
                                                        size='small'
                                                        value={state.warrant_special_people_boolean}
                                                        onChange={(e: any) => { dispatch({ name: e.target.name, value: e.target.value }) }}
                                                    >
                                                        <MenuItem value={0} > 파악필요 </MenuItem>
                                                        <MenuItem value={1} > 특이사항 없음 </MenuItem>
                                                        <MenuItem value={2} > 파악완료 </MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </GridBoxDiv>

                                            <GridBoxDiv
                                                gtc={`repeat(1, 1fr)`}
                                                gap={`10px`}
                                                kindOf={`input`}
                                            >
                                                <TextField
                                                    multiline
                                                    rows={10}
                                                    className={classes.inputFullWidth}
                                                    label='특수관계인 파악필요 인원'
                                                    InputLabelProps={{
                                                        shrink: true
                                                    }}
                                                    size='medium'
                                                    name='warrant_special_peoples'
                                                    type='text'
                                                    value={state.warrant_special_peoples}
                                                    onChange={(e: any) => { dispatch({ name: e.target.name, value: e.target.value }) }}
                                                />
                                            </GridBoxDiv>

                                            <GridBoxDiv
                                                gtc={`repeat(1, 1fr)`}
                                                gap={`10px`}
                                                kindOf={`input`}
                                            >
                                                <TextField
                                                    multiline
                                                    rows={10}
                                                    className={classes.inputFullWidth}
                                                    label='특수관계인 파악 결과'
                                                    InputLabelProps={{
                                                        shrink: true
                                                    }}
                                                    size='medium'
                                                    name='warrant_special_people_result'
                                                    type='text'
                                                    value={state.warrant_special_people_result}
                                                    onChange={(e: any) => { dispatch({ name: e.target.name, value: e.target.value }) }}
                                                />
                                            </GridBoxDiv>
                                        </WrapperDiv>
                                    </Article>
                                </Article>
                                <WrapperDiv
                                    ai={`center`}
                                    style={{ margin: "20px 0 0 0" }}
                                >
                                </WrapperDiv>
                            </InnerBox>
                        </Section>
                        <Section
                            overflow={`hidden`}
                            height={`760px`}
                        >
                            <InnerBox
                                kindOf={`titleBox`}
                                ju={`space-between`}
                            >
                                <TitleP
                                    kindOf={`18px`}
                                >
                                    조회결과
                                </TitleP>
                            </InnerBox>
                            <InnerBox>
                                <Article kindOf={`scroll`}>
                                    <Article kindOf={`padding-r15`}>
                                        <WrapperDiv kindOf={`margin30`}>

                                            <GridBoxDiv
                                                gtc={`repeat(1, 1fr)`}
                                                gap={`10px`}
                                                kindOf={`inputFirst`}
                                            >
                                                <FormControl
                                                    className={classes.inputFullWidth}
                                                >
                                                    <InputLabel id="demo-multiple-name-label">환급여부</InputLabel>
                                                    <Select
                                                        error={state.warrant_refund_boolean === 0 && true}
                                                        labelId="demo-multiple-name-label"
                                                        label={`환급여부`}
                                                        id={`warrant_refund_boolean`}
                                                        name={`warrant_refund_boolean`}
                                                        size='small'
                                                        value={state.warrant_refund_boolean}
                                                        onChange={(e: any) => { dispatch({ name: e.target.name, value: e.target.value }) }}
                                                    >
                                                        <MenuItem value={0} > 조회중 </MenuItem>
                                                        <MenuItem value={1} > 환급 가능 </MenuItem>
                                                        <MenuItem value={2} > 환급금 없음 </MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </GridBoxDiv>
                                            <GridBoxDiv
                                                gtc={`repeat(1, 1fr)`}
                                                gap={`10px`}
                                                kindOf={`input`}
                                            >
                                                <TextField
                                                    className={classes.inputFullWidth}
                                                    label='환급 여부 내용'
                                                    InputLabelProps={{
                                                        shrink: true
                                                    }}
                                                    size='small'
                                                    name='warrant_contents'
                                                    type='text'
                                                    value={state.warrant_contents}
                                                    onChange={(e: any) => { dispatch({ name: e.target.name, value: e.target.value }) }}
                                                />
                                            </GridBoxDiv>
                                            <LineDiv margin={`20px 0`}></LineDiv>
                                            {/* <GridBoxDiv
                                                gtc={`8.5fr 1.5fr`}
                                                gap={`10px`}
                                                kindOf={`inputFirst`}
                                            >
                                                <TextField
                                                    label={`환급 검토 결과 보고(세무사 업로드)`}
                                                    type='text'
                                                    color='primary'
                                                    size='small'
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                    value={state.warrant_refund_result_name}
                                                    disabled={true}
                                                />

                                                <Button className={buttonStyles.buttonUpload} variant='contained' component="label">
                                                    <input hidden
                                                        name={`file_object`}
                                                        accept="application/pdf"
                                                        type="file"
                                                        onChange={(e: any) => {

                                                            let reader = new FileReader();
                                                            let file = e.target.files[0];
                                                            if (file) {
                                                                reader.onloadend = () => {
                                                                    fileDispatch({ name: "warrant_refund_result_object", value: file });
                                                                    fileDispatch({ name: 'warrant_refund_result_url', value: reader.result });

                                                                    dispatch({ name: 'warrant_refund_result_name', value: file.name })
                                                                    // fileDispatch({ name: 'file_kinds', value: 'business' });
                                                                };
                                                                reader.readAsDataURL(file);
                                                            }
                                                            else {
                                                                fileDispatch({ name: "warrant_refund_result_object", value: '' });
                                                            }
                                                        }}
                                                    />
                                                    업로드
                                                </Button>



                                            </GridBoxDiv> */}
                                            {/* {(fileState.warrant_refund_result_url !== '' || (state.warrant_refund_result_path && (state.warrant_refund_result_path !== ''))) &&
                                                <GridBoxDiv
                                                    gtc={`repeat(1, 1fr)`}
                                                    gap={`10px`}
                                                    kindOf={`inputFirst`}
                                                >
                                                    <Button
                                                        className={buttonStyles.buttonGrey}
                                                        variant="contained"
                                                        id={fileState.warrant_refund_result_url !== '' ? fileState.warrant_refund_result_url : "https://00nomubucket1.s3.ap-northeast-2.amazonaws.com/" + state.warrant_refund_result_path}
                                                        onClick={(e: any) => downloadPDF(e.target.id, state.warrant_refund_result_name)}
                                                    >
                                                        <DownloadIcon sx={{ marginRight: `5px` }} fontSize="small" />다운로드
                                                    </Button>

                                                </GridBoxDiv>
                                            } */}
                                            {/* 지우지 말 것 */}
                                            {/* <GridBoxDiv
                                                gtc={`8.5fr 1.5fr`}
                                                gap={`10px`}
                                                kindOf={`input`}
                                            >
                                                <TextField
                                                    label={`환급 검토 결과 보고 파일(스캔 업로드용)`}
                                                    type='text'
                                                    color='primary'
                                                    size='small'
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                    value={state.warrant_refund_result_scan_name}
                                                    disabled={true}
                                                />

                                                <Button className={buttonStyles.buttonUpload} variant='contained' component="label">
                                                    <input hidden
                                                        name={`file_object`}
                                                        accept="application/pdf"
                                                        type='file'
                                                        onChange={(e: any) => {

                                                            let reader = new FileReader();
                                                            let file = e.target.files[0];
                                                            if (file) {
                                                                reader.onloadend = () => {
                                                                    fileDispatch({ name: "warrant_refund_result_scan_object", value: file });
                                                                    fileDispatch({ name: 'warrant_refund_result_scan_url', value: reader.result });
                                                                    // fileDispatch({ name: 'file_kinds', value: 'business' });

                                                                    dispatch({ name: 'warrant_refund_result_scan_name', value: file.name })
                                                                };
                                                                reader.readAsDataURL(file);
                                                            }
                                                            else {
                                                                fileDispatch({ name: "warrant_refund_result_scan_object", value: '' });
                                                            }
                                                        }}
                                                    />
                                                    업로드
                                                </Button>
                                            </GridBoxDiv> */}

                                            {/* 지우지 말 것 */}
                                            {/* {(fileState.warrant_refund_result_scan_url !== '' || (state.warrant_refund_result_scan_path && (state.warrant_refund_result_scan_path !== ''))) &&
                                                <GridBoxDiv
                                                    gtc={`repeat(1, 1fr)`}
                                                    gap={`10px`}
                                                    kindOf={`inputFirst`}
                                                >
                                                    <Button
                                                        className={buttonStyles.buttonGrey}
                                                        variant="contained"
                                                        id={fileState.warrant_refund_result_scan_url !== '' ? fileState.warrant_refund_result_scan_url : "https://00nomubucket1.s3.ap-northeast-2.amazonaws.com/" + state.warrant_refund_result_scan_path}
                                                        onClick={(e: any) => downloadPDF(e.target.id, state.warrant_refund_result_scan_name)}
                                                    >
                                                        <DownloadIcon sx={{ marginRight: `5px` }} fontSize="small" />다운로드
                                                    </Button>

                                                </GridBoxDiv>
                                            } */}
                                            {/* <GridBoxDiv
                                                gtc={`8.5fr 1.5fr`}
                                                gap={`10px`}
                                                kindOf={`input`}
                                            >
                                                <TextField
                                                    label={`계약 관련 서류 파일(세무사 업로드)`}
                                                    type='text'
                                                    color='primary'
                                                    size='small'
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                    value={state.warrant_contract_doc_name}
                                                    disabled={true}
                                                />

                                                <Button className={buttonStyles.buttonUpload} variant='contained' component="label">
                                                    <input hidden
                                                        name={`file_object`}
                                                        type='file'
                                                        accept="application/pdf"
                                                        onChange={(e: any) => {
                                                            let reader = new FileReader();
                                                            let file = e.target.files[0];
                                                            if (file) {
                                                                reader.onloadend = () => {
                                                                    fileDispatch({ name: "warrant_contract_doc_object", value: file });
                                                                    fileDispatch({ name: 'warrant_contract_doc_url', value: reader.result });
                                                                    // fileDispatch({ name: 'file_kinds', value: 'business' });

                                                                    dispatch({ name: "warrant_contract_doc_name", value: file.name })
                                                                };
                                                                reader.readAsDataURL(file);
                                                            }
                                                            else {
                                                                fileDispatch({ name: "warrant_contract_doc_object", value: '' });
                                                            }
                                                        }}
                                                    />
                                                    업로드
                                                </Button>

                                            </GridBoxDiv> */}
                                            {/* {(fileState.warrant_contract_doc_url !== '' || (state.warrant_contract_doc_path && (state.warrant_contract_doc_path !== ''))) &&
                                                <GridBoxDiv
                                                    gtc={`repeat(1, 1fr)`}
                                                    gap={`10px`}
                                                    kindOf={`inputFirst`}
                                                >
                                                    <Button
                                                        className={buttonStyles.buttonGrey}
                                                        variant="contained"
                                                        id={fileState.warrant_contract_doc_url !== '' ? fileState.warrant_contract_doc_url : "https://00nomubucket1.s3.ap-northeast-2.amazonaws.com/" + state.warrant_contract_doc_path}
                                                        onClick={(e: any) => downloadPDF(e.target.id, state.warrant_contract_doc_name)}
                                                    >
                                                        <DownloadIcon sx={{ marginRight: `5px` }} fontSize="small" />다운로드
                                                    </Button>

                                                </GridBoxDiv>
                                            } */}
                                            {/* <LineDiv margin={`20px 0`}></LineDiv> */}
                                            {/* <GridBoxDiv
                                                gtc={`8.5fr 1.5fr`}
                                                gap={`10px`}
                                                kindOf={`inputFirst`}
                                            >
                                                <TextField
                                                    // inputProps={{
                                                    //     accept: 'application/pdf'
                                                    // }}
                                                    label={`계약 관련 서류 스캔본(업체 업로드)`}
                                                    type='text'
                                                    color='primary'
                                                    size='small'
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                    value={state.warrant_contract_doc_scan_name}
                                                    disabled={true}
                                                />

                                                <Button className={buttonStyles.buttonUpload} variant='contained' component="label">
                                                    <input hidden
                                                        name={`file_object`}
                                                        accept="application/pdf"
                                                        type='file'
                                                        onChange={(e: any) => {
                                                            let reader = new FileReader();
                                                            let file = e.target.files[0];
                                                            if (file) {
                                                                reader.onloadend = () => {
                                                                    fileDispatch({ name: "warrant_contract_doc_scan_object", value: file });
                                                                    fileDispatch({ name: 'warrant_contract_doc_scan_url', value: reader.result });
                                                                    // fileDispatch({ name: 'file_kinds', value: 'business' });

                                                                    dispatch({ name: "warrant_contract_doc_scan_name", value: file.name })
                                                                };
                                                                reader.readAsDataURL(file);
                                                            }
                                                            else {
                                                                fileDispatch({ name: "warrant_contract_doc_scan_object", value: '' });
                                                            }
                                                        }}
                                                    />
                                                    업로드
                                                </Button>

                                            </GridBoxDiv> */}
                                            {/* {(fileState.warrant_contract_doc_scan_url !== '' || (state.warrant_contract_doc_scan_path && (state.warrant_contract_doc_scan_path !== ''))) &&
                                                <GridBoxDiv
                                                    gtc={`repeat(1, 1fr)`}
                                                    gap={`10px`}
                                                    kindOf={`inputFirst`}
                                                >
                                                    <Button
                                                        className={buttonStyles.buttonGrey}
                                                        variant="contained"
                                                        id={fileState.warrant_contract_doc_scan_url !== '' ? fileState.warrant_contract_doc_scan_url : "https://00nomubucket1.s3.ap-northeast-2.amazonaws.com/" + state.warrant_contract_doc_scan_path}
                                                        onClick={(e: any) => downloadPDF(e.target.id, state.warrant_contract_doc_scan_name)}
                                                    >
                                                        <DownloadIcon sx={{ marginRight: `5px` }} fontSize="small" />다운로드
                                                    </Button>

                                                </GridBoxDiv>
                                            } */}
                                            {/* <GridBoxDiv
                                                gtc={`repeat(1, 1fr)`}
                                                gap={`10px`}
                                                kindOf={`input`}
                                            // kindOf={`input`}
                                            >
                                                <TextField
                                                    InputLabelProps={{
                                                        shrink: true
                                                    }}
                                                    className={classes.inputFullWidth}
                                                    label='등기 발송 날짜 (업체 입력)'
                                                    size='small'
                                                    name='warrant_send_date'
                                                    type='date'
                                                    value={state.warrant_send_date}
                                                    onChange={(e: any) => { dispatch({ name: e.target.name, value: e.target.value }) }}
                                                />
                                            </GridBoxDiv> */}
                                            {/* <LineDiv margin={`20px 0`}></LineDiv> */}
                                            <GridBoxDiv
                                                gtc={`8.5fr 1.5fr`}
                                                gap={`10px`}
                                                kindOf={`inputFirst`}
                                            >
                                                <TextField
                                                    // inputProps={{
                                                    //     accept: 'application/pdf'
                                                    // }}
                                                    label={`최종 환급 완료 보고 파일(세무사 업로드)`}
                                                    type='text'
                                                    color='primary'
                                                    size='small'
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                    value={state.warrant_refund_complete_name}
                                                    disabled={true}
                                                />
                                                <Button className={buttonStyles.buttonUpload} variant='contained' component="label">
                                                    <input hidden
                                                        name={`file_object`}
                                                        accept="application/pdf"
                                                        type='file'
                                                        onChange={(e: any) => {
                                                            let reader = new FileReader();
                                                            let file = e.target.files[0];
                                                            if (file) {
                                                                reader.onloadend = () => {
                                                                    fileDispatch({ name: "warrant_refund_complete_object", value: file });
                                                                    fileDispatch({ name: 'warrant_refund_complete_url', value: reader.result });
                                                                    // fileDispatch({ name: 'file_kinds', value: 'business' });

                                                                    dispatch({ name: 'warrant_refund_complete_name', value: file.name })
                                                                };
                                                                reader.readAsDataURL(file);
                                                            }
                                                            else {
                                                                fileDispatch({ name: "warrant_refund_complete_object", value: '' });
                                                            }
                                                        }}
                                                    />
                                                    업로드
                                                </Button>
                                            </GridBoxDiv>
                                            {(fileState.warrant_refund_complete_url !== '' || (state.warrant_refund_complete_path && (state.warrant_refund_complete_path !== ''))) &&
                                                <GridBoxDiv
                                                    gtc={`repeat(1, 1fr)`}
                                                    gap={`10px`}
                                                    kindOf={`inputFirst`}
                                                >
                                                    <Button
                                                        className={buttonStyles.buttonGrey}
                                                        variant="contained"
                                                        id={fileState.warrant_refund_complete_url !== '' ? fileState.warrant_refund_complete_url : "https://00nomubucket1.s3.ap-northeast-2.amazonaws.com/" + state.warrant_refund_complete_path}
                                                        onClick={(e: any) => downloadPdfHandler(e.target.id, state.warrant_refund_complete_name)}
                                                    >
                                                        <DownloadIcon sx={{ marginRight: `5px` }} fontSize="small" />다운로드
                                                    </Button>

                                                </GridBoxDiv>
                                            }

                                            {state.warrant_refund_boolean === 1 &&
                                                <>
                                                    <GridBoxDiv
                                                        gtc={`repeat(1, 1fr)`}
                                                        gap={`10px`}
                                                        kindOf={`input`}
                                                    >
                                                        <TextField
                                                            className={classes.inputFullWidth}
                                                            label='환급 금액(세무사 입력)'
                                                            InputLabelProps={{
                                                                shrink: true
                                                            }}
                                                            size='small'
                                                            name='warrant_refund_amount'
                                                            type='text'
                                                            value={state.warrant_refund_amount}
                                                            onChange={(e: any) => { dispatch({ name: e.target.name, value: e.target.value }) }}
                                                        />
                                                    </GridBoxDiv>
                                                </>
                                            }
                                        </WrapperDiv>
                                    </Article>
                                </Article>
                                <WrapperDiv
                                    ai={`center`}
                                    style={{ margin: "20px 0 0 0" }}
                                >
                                </WrapperDiv>
                            </InnerBox>
                        </Section>


                    </GridBoxDiv>
                </WrapperDiv>



            </WholeWrapperDiv>

            {/* 완료버튼 */}
            <WrapperDiv ai={`center`} ju={`center`} margin={`0 0 20px 0`}>
                <Button
                    className={buttonStyles.buttonBlue}
                    variant="contained"
                    // kindOf={`lightBlue`}
                    // hover={true}
                    // margin={`15px 0`}
                    onClick={async (e: any) => {
                        await dataSubmitHandler(
                            e,
                            componentTitle,
                            commonState,
                            commonDispatch,
                            state,
                            dispatch,

                            fileState,
                            fileDispatch
                        )
                    }}
                >
                    {isLoading ?
                        <ClipLoader
                            loading={true}
                            color={Theme.basic_white}
                            size={'20px'}
                        />
                        : "완료"}
                </Button>
            </WrapperDiv>
            <Modal
                isOpen={addressOpen}
                onRequestClose={() => { setAddressOpen(false) }}
                style={{
                    overlay: {
                        position: "fixed",
                        zIndex: 1020,
                        top: 0,
                        left: 0,
                        width: "100vw",
                        height: "100vh",
                        background: "rgba(0, 0, 0, 0.6)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    },
                    content: {
                        background: "white",
                        // width: "30vw",
                        top: 0,
                        maxWidth: "1920px",
                        maxHeight: "1080px",
                        // maxWidth: "calc(100vw - 2rem)",
                        // maxHeight: "calc(100vh - 2rem)",
                        overflowY: "auto",
                        position: "relative",
                        border: "none",
                        borderRadius: "0.3rem",
                        inset: 0,
                        padding: "0px",
                        margin: "0px 2%",
                        boxShadow: "0px 0px 16px rgba(0,0,0,0.5)"
                    },
                }}>
                {addressOpen ? <DaumPostcode onComplete={(data: any) => addressCompleteHandler(data, dispatch, 'warrant_company_address', setAddressOpen)} /> : null}
            </Modal>
        </>
    )
}

export default React.memo(ModalPresenter);