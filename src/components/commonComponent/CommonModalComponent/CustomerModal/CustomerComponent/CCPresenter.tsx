import {
    WrapperDiv,
    GridBoxDiv,
    LineDiv,
    Button,
    TitleP,
} from "../../../../styles/AllStyles";
import {
    Section,
    Article,
    InnerBox
} from "../../../../styles/common/ModalComponents";

import React from "react";
import { mInput } from "../../../../styles/mui/mInput";

import { TextField, Select, InputLabel, MenuItem, FormControl } from '@mui/material/';


// address Modal
import Modal from "react-modal";
import DaumPostcode from 'react-daum-postcode';
import moment from "moment";
import { customerFourInsuranceName, customerScaleStatus } from "../../../../../Lib/array/customer";
import { addressCompleteHandler } from "../../../../../modules/addressComplete";
import { downloadImageHandler } from "../../../../../modules/fileDownloadHandler";


const CCPresenter = ({
    commonState,

    state,
    dispatch,

    addressOpen,
    setAddressOpen,

    onChangeHandler,

    wageCount,

    fileState,
    fileDispatch,


}: any) => {

    const {
        loginData,
        modalKinds
    } = commonState;


    const {
        worker_list
    } = state;

    const classes = mInput();

    return (
        <Section overflow={`hidden`} height={`760px`}>
            <InnerBox
                kindOf={`titleBox`}
                ju={`space-between`}
            >
                <TitleP kindOf={`18px`}>거래처 {modalKinds}</TitleP>
            </InnerBox>
            <InnerBox>
                <Article kindOf={`scroll`}>
                    <Article kindOf={`padding-r15`}>
                        <WrapperDiv kindOf={`margin30`}>
                            <WrapperDiv
                                kindOf={`inputFirst`}
                            >
                                <TextField
                                    className={classes.inputFullWidth}
                                    style={{ marginBottom: "15px" }}
                                    label={`모바일 아이디`}
                                    type='text'
                                    size='small'
                                    name={`customer_muser_id`}
                                    value={state.customer_muser_id}
                                    onChange={onChangeHandler}
                                />
                            </WrapperDiv>
                            <TitleP kindOf={`13px`}>기본정보</TitleP>

                            <GridBoxDiv
                                gtc={`repeat(2, 1fr)`}
                                gap={`10px`}
                                kindOf={`input`}
                            >
                                <TextField
                                    error={state.customer_name === "" ? true : false}
                                    className={classes.inputFullWidth}
                                    label={`상호 *`}
                                    type='text'
                                    size='small'
                                    name={`customer_name`}
                                    value={state.customer_name}
                                    onChange={onChangeHandler}
                                />

                                <FormControl
                                    className={classes.inputProps}
                                    sx={{ m: 1 }}
                                >
                                    <InputLabel id="demo-multiple-name-label">상시 근로자수</InputLabel>
                                    <Select
                                        label='상시 근로자수'
                                        size='small'
                                        name={`customer_scale_status`}
                                        value={state.customer_scale_status}
                                        onChange={onChangeHandler}
                                    >
                                        {customerScaleStatus.map((item: any, i: any) => (
                                            <MenuItem
                                                key={i}
                                                value={item.value}
                                            >
                                                {item.title}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>

                            </GridBoxDiv>
                            <GridBoxDiv
                                gtc={`repeat(2, 1fr)`}
                                gap={`10px`}
                                kindOf={`input`}
                            >
                                <TextField
                                    error={state.customer_owner_name === "" ? true : false}
                                    className={classes.inputProps}
                                    label={`대표자 성명 *`}
                                    type='text'
                                    color='primary'
                                    size='small'
                                    name={`customer_owner_name`}
                                    value={state.customer_owner_name}
                                    onChange={onChangeHandler}
                                />
                                <TextField
                                    error={state.customer_tel === "" ? true : false}
                                    className={classes.inputProps}
                                    label={`연락처(핸드폰) *`}
                                    type='text'
                                    color='primary'
                                    size='small'
                                    placeholder="'-' 없이 입력"
                                    name={`customer_tel`}
                                    value={state.customer_tel}
                                    onChange={onChangeHandler}
                                />
                            </GridBoxDiv>
                            <GridBoxDiv
                                gtc={`repeat(2, 1fr)`}
                                gap={`10px`}
                                kindOf={`input`}
                            >
                                {modalKinds === '추가' ? (
                                    <TextField
                                        error={state.customer_code === "" ? true : false}
                                        inputProps={{ maxLength: 10 }}
                                        className={classes.inputProps}
                                        label={`사업자등록번호`}
                                        type='text'
                                        size='small'
                                        required={true}
                                        name={`customer_code`}
                                        value={state.customer_code}
                                        onChange={onChangeHandler}
                                        placeholder="'-' 제외한 10자리 "
                                    />
                                ) : (
                                    <TextField
                                        error={state.customer_code === "" ? true : false}
                                        className={classes.inputProps}
                                        inputProps={{ maxLength: 10 }}
                                        label={`사업자등록번호`}
                                        type='text'
                                        size='small'
                                        required={true}
                                        name={`customer_code`}
                                        value={state.customer_code}
                                        onChange={onChangeHandler}
                                        placeholder="'-' 제외한 10자리 "
                                    />
                                )}
                                <WrapperDiv
                                    position={`relative`}
                                >
                                    <TextField disabled
                                        className={classes.inputProps}
                                        label={`근로자 수`}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        type='text'
                                        color='primary'
                                        size='small'
                                        name={`worker_number`}
                                        value={worker_list.length}
                                        onChange={onChangeHandler}
                                    />
                                    <WrapperDiv
                                        ai={`center`}
                                        position={`absolute`}
                                        bottom={`10px`}
                                        right={`-105px`}
                                    >
                                        <svg style={{ marginRight: "5px" }} xmlns="http://www.w3.org/2000/svg" width="11.667" height="14" viewBox="0 0 11.667 14">
                                            <path id="fi-rs-document" d="M4.917,7H10.75V8.167H4.917Zm0,3.5H9V9.333H4.917Zm8.75-6.075V14H2V1.75A1.75,1.75,0,0,1,3.75,0H9.241ZM9.583,4.083h2.092L9.583,1.992Zm2.917,8.75V5.25H8.417V1.167H3.75a.583.583,0,0,0-.583.583V12.833Z" transform="translate(-2)" />
                                        </svg>
                                        {wageCount}/{worker_list.length}
                                    </WrapperDiv>
                                </WrapperDiv>
                            </GridBoxDiv>
                            <GridBoxDiv
                                gtc={`repeat(2, 155px)`}
                                gap={`10px`}
                                kindOf={`input`}
                            >
                                <TextField
                                    className={classes.inputProps}
                                    label={`업태`}
                                    type='text'
                                    color='primary'
                                    size='small'
                                    name={`customer_main_type`}
                                    value={state.customer_main_type}
                                    onChange={onChangeHandler}
                                />
                                <TextField
                                    className={classes.inputProps}
                                    label={`업태상세`}
                                    type='text'
                                    color='primary'
                                    size='small'
                                    name={`customer_sub_type`}
                                    value={state.customer_sub_type}
                                    onChange={onChangeHandler}
                                />
                            </GridBoxDiv>
                            <GridBoxDiv
                                gtc={`0.98fr 30px`}
                                gap={`10px`}
                                ai={`center`}
                                kindOf={`input`}
                            >
                                <TextField
                                    label={`주소`}
                                    type='text'
                                    color='primary'
                                    size='small'
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    name={`customer_address`}
                                    value={state.customer_address}
                                    onChange={onChangeHandler}
                                />
                                <Button
                                    width={`35px`}
                                    height={`35px`}
                                    padding={`0`}
                                    margin={`0`}
                                    type={`button`}
                                    kindOf={`greyButton`}
                                    hoverGrey={true}
                                    onClick={(e: any) => { setAddressOpen(true); }}
                                >
                                    <svg id="svg" data-name="01 align center" style={{ marginRight: "0" }} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                        <path id="패스_117" data-name="패스 117" d="M13.968,13.144,10.32,9.5a5.835,5.835,0,1,0-.824.824l3.648,3.648ZM5.812,10.473a4.66,4.66,0,1,1,4.66-4.66,4.66,4.66,0,0,1-4.66,4.66Z" transform="translate(0.032 0.032)" fill="#1f282e" />
                                    </svg>
                                </Button>

                            </GridBoxDiv>
                            <WrapperDiv
                                kindOf={`input`}
                            >
                                <TextField
                                    className={classes.inputFullWidth}
                                    // sx={{ marginTop: "25px" }}
                                    label={`상세주소`}
                                    type='text'
                                    color='primary'
                                    size='small'
                                    name={`customer_address_detail`}
                                    value={state.customer_address_detail}
                                    onChange={onChangeHandler}
                                />
                            </WrapperDiv>

                            <WrapperDiv
                                kindOf={`input`}
                            >
                                <TextField
                                    label={`사업자등록증`}
                                    type='file'
                                    color='primary'
                                    size='small'
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    name={`file_object`}
                                    onChange={(e: any) => {
                                        let reader = new FileReader();
                                        let file = e.target.files[0];
                                        reader.onloadend = () => {
                                            fileDispatch({ name: e.target.name, value: file });
                                            fileDispatch({ name: 'file_url', value: reader.result });
                                            fileDispatch({ name: 'file_kinds', value: 'business' });
                                            fileDispatch({ name: 'file_name', value: file.name });
                                        };
                                        reader.readAsDataURL(file);
                                    }}
                                />
                            </WrapperDiv>
                            {fileState.file_url !== '' &&
                                <WrapperDiv>
                                    <img style={{ width: "100%", height: "100%" }} src={fileState.file_url} />
                                </WrapperDiv>
                            }
                            {(!fileState.file_url && fileState.file_location !== '') &&
                                <GridBoxDiv
                                    gtc={`1fr 1fr`}
                                    gap={`10px`}
                                    ai={`center`}
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
                                        value={fileState.file_name ? fileState.file_name : 'image.png'}
                                        disabled={true}
                                    />
                                    <Button
                                        width={`100%`}
                                        height={`35px`}
                                        padding={`0`}
                                        margin={`0`}
                                        type={`button`}
                                        kindOf={`greyButton`}
                                        hoverGrey={true}
                                        id={fileState.file_location}
                                        onClick={(e: any) => downloadImageHandler(e.target.id)}
                                    >
                                        download
                                    </Button>

                                </GridBoxDiv>
                            }

                        </WrapperDiv>
                        <WrapperDiv dr={`column`}>
                            <GridBoxDiv
                                gtc={`repeat(1, 1fr)`}
                                gap={`10px`}
                                kindOf={`input`}
                            >
                                <FormControl
                                    className={classes.inputProps}
                                >
                                    <InputLabel id="demo-multiple-name-label">4대보험</InputLabel>
                                    <Select
                                        labelId="demo-multiple-name-label"
                                        label={`4대보험`}
                                        id={`4대보험`}
                                        name={`4대보험`}
                                        size='small'
                                        value={state.customer_four_insurance_name}
                                        onChange={(e: any) => {
                                            dispatch({ name: `customer_four_insurance_name`, value: e.target.value })
                                        }}
                                    >
                                        <MenuItem value={`미정`} selected>미정</MenuItem>
                                        {customerFourInsuranceName.map((item: any, i: any) => (
                                            <MenuItem
                                                key={i}
                                                value={item}
                                            >
                                                {item}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>


                            </GridBoxDiv>
                            {((loginData.user_grade !== '4대보험팀') && (loginData.user_grade !== '지원금') && (loginData.user_grade !== '기타')) &&
                                <>
                                    <GridBoxDiv
                                        gtc={`repeat(2, 1fr)`}
                                        gap={`10px`}
                                        kindOf={`input`}
                                    >
                                        <TextField
                                            className={classes.inputProps}
                                            label={`세팅비`}
                                            type='number'
                                            color='primary'
                                            size='small'
                                            name={`customer_set_cost`}
                                            value={state.customer_set_cost}
                                            onChange={onChangeHandler}
                                            placeholder="0"
                                        />
                                        <TextField
                                            className={classes.inputProps}
                                            label={`보험료`}
                                            type='number'
                                            color='primary'
                                            size='small'
                                            name={`customer_insurance_cost`}
                                            value={state.customer_insurance_cost}
                                            onChange={onChangeHandler}
                                            placeholder="0"
                                        />
                                    </GridBoxDiv>
                                    <GridBoxDiv
                                        gtc={`repeat(2, 155px)`}
                                        gap={`10px`}
                                        kindOf={`input`}
                                    >
                                        <TextField
                                            className={classes.inputProps}
                                            label={`월자문료`}
                                            type='number'
                                            color='primary'
                                            size='small'
                                            name={`customer_manage_cost`}
                                            value={state.customer_manage_cost}
                                            onChange={onChangeHandler}
                                            placeholder="0"
                                        />
                                        <FormControl
                                            className={classes.inputProps}
                                        >
                                            <InputLabel id="demo-multiple-name-label">지원금 수임료(%)</InputLabel>
                                            <Select
                                                labelId="demo-multiple-name-label"
                                                label={`지원금 수임료(%)`}
                                                id={`지원금 수임료`}
                                                name={`지원금 수임료`}
                                                size='small'
                                                value={state.customer_support_fee}
                                                onChange={(e: any) => {
                                                    dispatch({ name: `customer_support_fee`, value: e.target.value })
                                                }}
                                            >
                                                <MenuItem value={`미정`} selected>미정</MenuItem>
                                                <MenuItem value={`15`} selected>15</MenuItem>
                                                <MenuItem value={`20`} selected>20</MenuItem>
                                                <MenuItem value={`25`} selected>25</MenuItem>
                                                <MenuItem value={`30`} selected>30</MenuItem>

                                            </Select>
                                        </FormControl>
                                    </GridBoxDiv>
                                    <GridBoxDiv
                                        gtc={`repeat(2, 155px)`}
                                        gap={`10px`}
                                        kindOf={`input`}
                                    >
                                        <TextField
                                            className={classes.inputProps}
                                            label={`입금날짜`}
                                            type='date'
                                            color='primary'
                                            size='small'
                                            name={`customer_deposit_date`}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            value={moment(state.customer_deposit_date).format('YYYY-MM-DD')}
                                            onChange={onChangeHandler}
                                        />
                                        <FormControl
                                            className={classes.inputProps}
                                        >
                                            <InputLabel id="demo-multiple-name-label">계산서 발행여부</InputLabel>
                                            <Select
                                                labelId="demo-multiple-name-label"
                                                label={`계산서 발행여부`}
                                                id={`계산서 발행여부`}
                                                name={`계산서 발행여부`}
                                                size='small'
                                                value={state.customer_bill_boolean}
                                                onChange={(e: any) => {
                                                    dispatch({ name: `customer_bill_boolean`, value: e.target.value })
                                                }}
                                            >
                                                <MenuItem value={`발행미완료`} selected>발행미완료</MenuItem>
                                                <MenuItem value={`발행완료`} selected>발행완료</MenuItem>

                                            </Select>
                                        </FormControl>
                                    </GridBoxDiv>
                                </>
                            }
                        </WrapperDiv>
                        <LineDiv margin={`20px 0`}></LineDiv>

                        <TitleP kindOf={`13px`}>거래처 메모</TitleP>
                        <TextField fullWidth
                            id="outlined-multiline-static"
                            label="메모"
                            multiline
                            rows={3}
                            name={`customer_memo`}
                            value={state.customer_memo}
                            onChange={onChangeHandler}
                        />
                        <LineDiv margin={`20px 0`}></LineDiv>
                        <TextField fullWidth
                            id="outlined-multiline-static"
                            label="사업주메모"
                            multiline
                            rows={3}
                            name={`customer_muser_memo`}
                            value={state.customer_muser_memo}
                            onChange={onChangeHandler}
                            disabled={true}
                        />
                    </Article>

                </Article>
            </InnerBox>
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
                        width: "30vw",
                        top: 0,
                        maxWidth: "1920px",
                        maxHeight: "1080px",
                        overflow: "hidden",
                        position: "relative",
                        border: "none",
                        borderRadius: "0.3rem",
                        inset: 0,
                        padding: "0px",
                        margin: "0px 2%",
                        boxShadow: "0px 0px 16px rgba(0,0,0,0.6)"
                    },
                }}>
                {addressOpen ? <DaumPostcode onComplete={(data: any) => addressCompleteHandler(data, dispatch, 'customer_address', setAddressOpen)} /> : null}
            </Modal>
        </Section >
    )
}

export default React.memo(CCPresenter);
