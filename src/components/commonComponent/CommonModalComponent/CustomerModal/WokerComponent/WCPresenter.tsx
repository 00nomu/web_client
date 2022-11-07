import {

    CheckBoxInput,
    WrapperDiv,
    GridBoxDiv,
    InputWrapperDiv,
    LineDiv,
    Button,
    TitleP,
    InputTitleSpan,
    MuiInputSpan,

} from "../../../../styles/AllStyles";
import {
    Section,
    Article,
    InnerBox
} from "../../../../styles/common/ModalComponents";
import {
    PageBox,
    PageWrap,
} from "../../../../styles/common/PaginationComponents";
import {
    ListGrid,
    ListCell,
    ListCellInner
} from "../../../../styles/common/ListComponents";

import React, { useState } from "react";
import Theme from '../../../../../../styles/Theme';
import { mInput, MenuProps } from "../../../../styles/mui/mInput";


import ruLocale from 'date-fns/locale/ru';
import { TextField, Select, InputLabel, MenuItem, FormControl, InputAdornment, IconButton } from '@mui/material/';
import { LocalizationProvider, TimePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";


// address Modal
import Modal from "react-modal";
import DaumPostcode from 'react-daum-postcode';
import { Visibility, VisibilityOff } from "@mui/icons-material";

import { alpha, styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import Switch from '@mui/material/Switch';
import { addressCompleteHandler } from "../../../../../modules/addressComplete";

const GreenSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
        color: pink[600],
        '&:hover': {
            backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
        },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
        backgroundColor: pink[600],
    },
}));

const CWPresenter = ({
    width,

    // state,
    commonWorkerState,

    workerState,
    workerDispatch,

    createEdit,
    setCreateEdit,
    workerOnChangeHandler,
    addListHandler,
    listClickHandler,

    oneLeaveClickHandler,

    workerEditButtonOn,
    setworkerEditButtonOn,

    pageClickHandler,
    pageUpClickHandler,
    pageDoubleUpClickHandler,
    pageDownClickHandler,
    pageDoubleDouwnClickHandler,

    dayoffClickHandler,
    dayClickHandler,
}: any) => {

    const {
        dataList,
        pageNumber,
        postNumber,
        pageArray,
    } = commonWorkerState

    const [addressOpen, setAddressOpen] = useState(false);
    const [pwdShow, setPwdShow] = useState(true);
    const classes = mInput();

    return (
        <GridBoxDiv gtc={`720px 360px`} gap={`10px`}>
            {/* 근로자 추가 부분 */}
            <Section overflow={`hidden`} width={`auto`} height={`760px`} position={`relative`}>
                <InnerBox
                    kindOf={`titleBox`}
                    ju={`space-between`}
                >
                    <TitleP
                        kindOf={`18px`}
                    >
                        근로자 {createEdit}
                    </TitleP>

                </InnerBox>

                {/* 근로자 추가 박스 왼쪽*/}
                <WrapperDiv height={`calc(100% - 100px)`}>
                    <InnerBox kindOf={`largeBox`} width={`50%`}>
                        <Article kindOf={`scroll`}>
                            <Article kindOf={`padding-r15`}>
                                {/* 기본정보 */}
                                <WrapperDiv kindOf={`margin30`}>
                                    <TitleP kindOf={`13px`}>기본정보 (1)</TitleP>
                                    <WrapperDiv kindOf={`inputFirst`}>
                                        <TextField
                                            error={workerState.worker_name === "" ? true : false}
                                            className={classes.inputFullWidth}
                                            label={`근로자 성명 *`}
                                            type='text'
                                            size='small'
                                            name={`worker_name`}
                                            value={workerState.worker_name}
                                            onChange={workerOnChangeHandler}
                                        />
                                    </WrapperDiv>
                                    <GridBoxDiv
                                        gtc={`repeat(2, 1fr)`}
                                        gap={`10px`}
                                        kindOf={`input`}
                                    >
                                        <TextField
                                            className={classes.inputProps}
                                            label={`주민등록번호(앞자리)`}
                                            type='text'
                                            color='primary'
                                            size='small'
                                            name={`worker_geunroja_reg_num1`}
                                            value={workerState.worker_geunroja_reg_num1
                                            }
                                            onChange={(e: any) => {
                                                if (e.target.value.length < 7)
                                                    workerOnChangeHandler(e)
                                            }}
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
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            variant='outlined'
                                            id="outlined-adornment-password"
                                            type={pwdShow ? 'text' : 'password'}
                                            size='small'
                                            name={`worker_geunroja_reg_num2`}
                                            value={workerState.worker_geunroja_reg_num2}
                                            onChange={(e: any) => {
                                                if (e.target.value.length < 8)
                                                    workerOnChangeHandler(e)
                                            }}
                                        />

                                    </GridBoxDiv>
                                    <GridBoxDiv
                                        ai={`center`}
                                        kindOf={`input`}
                                    >
                                        <TextField
                                            className={classes.inputFullWidth}
                                            label={`연락처 (핸드폰)`}
                                            type='tel'
                                            color='primary'
                                            size='small'
                                            name={`worker_tel`}
                                            value={workerState.worker_tel}
                                            placeholder="'-' 없이 입력"
                                            onChange={workerOnChangeHandler}
                                        />

                                    </GridBoxDiv>
                                </WrapperDiv>

                                {/* 근로정보 1 */}
                                <WrapperDiv dr={`column`}>
                                    <TitleP kindOf={`13px`}>기본정보 (2)</TitleP>

                                    <GridBoxDiv
                                        gtc={`repeat(2, 155px)`}
                                        gap={`10px`}
                                        kindOf={`input`}
                                    >
                                        <FormControl>
                                            <InputLabel id="demo-multiple-name-label">급여지급일</InputLabel>
                                            <Select
                                                labelId="demo-multiple-name-label"
                                                label={`급여지급일`}
                                                id={`worker_wage_date1`}
                                                name="worker_wage_date1"
                                                size={`small`}
                                                onChange={workerOnChangeHandler}
                                                value={workerState.worker_wage_date1}
                                            >
                                                <MenuItem value={`당월`} >매월</MenuItem>
                                                <MenuItem value={`익월`} >익월</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <FormControl>
                                            <Select
                                                id={`worker_wage_date2`}
                                                name="worker_wage_date2"
                                                size={`small`}
                                                onChange={workerOnChangeHandler}
                                                value={workerState.worker_wage_date2}
                                                MenuProps={MenuProps}
                                            >
                                                <MenuItem value={`말일`} >말일</MenuItem>
                                                {Array(31).fill(0).map((item: any, index: any) => (
                                                    <MenuItem
                                                        key={index}
                                                        value={index + 1}
                                                    >
                                                        {index + 1}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </GridBoxDiv>
                                    <GridBoxDiv
                                        gtc={`repeat(2, 155px)`}
                                        gap={`10px`}
                                        kindOf={`input`}
                                    >
                                        <FormControl>
                                            <InputLabel id="demo-multiple-name-label">급여계산 시작일</InputLabel>
                                            <Select
                                                labelId="demo-multiple-name-label"
                                                label={`급여계산 시작일`}
                                                id={`worker_wage_term1`}
                                                name="worker_wage_term1"
                                                size={`small`}
                                                onChange={workerOnChangeHandler}
                                                value={workerState.worker_wage_term1}
                                            >
                                                <MenuItem value={`당월`} >매월</MenuItem>
                                                <MenuItem value={`익월`} >익월</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <FormControl>
                                            <Select
                                                id={`worker_wage_term2`}
                                                name="worker_wage_term2"
                                                size={`small`}
                                                onChange={workerOnChangeHandler}
                                                value={workerState.worker_wage_term2}
                                                MenuProps={MenuProps}
                                            >
                                                <MenuItem value={`말일`} >말일</MenuItem>
                                                {Array(31).fill(0).map((item: any, index: any) => (
                                                    <MenuItem
                                                        key={index}
                                                        value={index + 1}
                                                    >
                                                        {index + 1}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </GridBoxDiv>
                                    <GridBoxDiv
                                        gtc={`repeat(2, 155px)`}
                                        gap={`10px`}
                                        kindOf={`input`}
                                    >
                                        <FormControl>
                                            <InputLabel id="demo-multiple-name-label">급여계산 종료일</InputLabel>
                                            <Select
                                                labelId="demo-multiple-name-label"
                                                label={`급여계산 종료일`}
                                                id={`worker_wage_term3`}
                                                name="worker_wage_term3"
                                                size={`small`}
                                                onChange={workerOnChangeHandler}
                                                value={workerState.worker_wage_term3}
                                            >
                                                <MenuItem value={`당월`} >매월</MenuItem>
                                                <MenuItem value={`익월`} >익월</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <FormControl>
                                            <Select
                                                id={`worker_wage_term4`}
                                                name="worker_wage_term4"
                                                size={`small`}
                                                onChange={workerOnChangeHandler}
                                                value={workerState.worker_wage_term4}
                                                MenuProps={MenuProps}
                                            >
                                                <MenuItem value={`말일`} >말일</MenuItem>
                                                {Array(31).fill(0).map((item: any, index: any) => (
                                                    <MenuItem key={index} value={index + 1}>{index + 1}</MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </GridBoxDiv>

                                    <LineDiv margin={`20px 0`}></LineDiv>
                                    <WrapperDiv dr={`column`}>
                                        <TitleP kindOf={`13px`}>4대보험</TitleP>
                                        <GridBoxDiv
                                            gtc={`repeat(2, 1fr)`}
                                            gap={`10px`}
                                            kindOf={`inputFirst`}
                                        >
                                            <FormControl className={classes.inputFullWidth}>
                                                <InputLabel id="demo-multiple-name-label">4대보험 상태</InputLabel>
                                                <Select
                                                    labelId="demo-multiple-name-label"
                                                    label={`4대보험 상태`}
                                                    id={`4대보험 상태`}
                                                    name="worker_singo_status"
                                                    size={`small`}
                                                    onChange={workerOnChangeHandler}
                                                    value={workerState.worker_singo_status}
                                                >
                                                    <MenuItem value={0} >조회 전</MenuItem>
                                                    <MenuItem value={1} >조회 중</MenuItem>
                                                    <MenuItem value={2} >취득신고 요청 전</MenuItem>
                                                    <MenuItem value={3} >취득신고 진행중</MenuItem>
                                                    <MenuItem value={4} >취득신고완료(상실신고 요청 전)</MenuItem>
                                                    <MenuItem value={5} >상실신고 진행중</MenuItem>
                                                    <MenuItem value={6} >상실신고 완료</MenuItem>
                                                </Select>
                                            </FormControl>
                                            <TextField
                                                className={workerState.worker_insurance_boolean ? classes.inputProps : classes.inputDisabled}
                                                disabled={!workerState.worker_insurance_boolean}
                                                label={'취득금액'}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                size='small'
                                                name='worker_chideuk_cost'
                                                type='text'
                                                margin='dense'
                                                value={workerState.worker_chideuk_cost}
                                                onChange={workerOnChangeHandler}
                                            />
                                        </GridBoxDiv>
                                        <GridBoxDiv
                                            gtc={`repeat(2, 1fr)`}
                                            gap={`10px`}
                                            kindOf={`input`}
                                        >
                                            <TextField
                                                className={workerState.worker_insurance_boolean ? classes.inputProps : classes.inputDisabled}
                                                disabled={!workerState.worker_insurance_boolean}
                                                label="취득일"
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                size='small'
                                                name='worker_get_date'
                                                type='date'
                                                value={workerState.worker_get_date}
                                                onChange={workerOnChangeHandler}
                                            />
                                            <TextField
                                                className={workerState.worker_insurance_boolean ? classes.inputProps : classes.inputDisabled}
                                                disabled={!workerState.worker_insurance_boolean}
                                                label="상실일"
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                size='small'
                                                name='worker_lost_date'
                                                type='date'
                                                margin='dense'

                                                value={workerState.worker_lost_date}
                                                onChange={workerOnChangeHandler}
                                            />
                                        </GridBoxDiv>
                                        <GridBoxDiv
                                            gtc={`repeat(2, 1fr)`}
                                            gap={`10px`}
                                            kindOf={`input`}
                                        >
                                            <TextField
                                                className={workerState.worker_insurance_boolean ? classes.inputProps : classes.inputDisabled}
                                                disabled={!workerState.worker_insurance_boolean}
                                                label={`국민연금`}
                                                type='number'
                                                color='primary'
                                                size='small'
                                                placeholder="0"
                                                name={`worker_national_pension`}
                                                value={workerState.worker_national_pension}
                                                onChange={workerOnChangeHandler}
                                            />
                                            <TextField
                                                className={workerState.worker_insurance_boolean ? classes.inputProps : classes.inputDisabled}
                                                disabled={!workerState.worker_insurance_boolean}
                                                label={`건강보험`}
                                                type='number'
                                                color='primary'
                                                size='small'
                                                placeholder="0"
                                                name={`worker_health_insurance`}
                                                value={workerState.worker_health_insurance}
                                                onChange={workerOnChangeHandler}
                                            />
                                        </GridBoxDiv>
                                        <GridBoxDiv
                                            gtc={`repeat(2, 1fr)`}
                                            gap={`10px`}
                                            kindOf={`input`}
                                        >
                                            <TextField
                                                className={workerState.worker_insurance_boolean ? classes.inputProps : classes.inputDisabled}
                                                disabled={!workerState.worker_insurance_boolean}
                                                label={`장기요양보험`}
                                                type='number'
                                                color='primary'
                                                size='small'
                                                placeholder="0"
                                                name={`worker_longcare_insurance`}
                                                value={workerState.worker_longcare_insurance}
                                                onChange={workerOnChangeHandler}
                                            />
                                            <TextField
                                                className={workerState.worker_insurance_boolean ? classes.inputProps : classes.inputDisabled}
                                                disabled={!workerState.worker_insurance_boolean}
                                                label={`고용보험`}
                                                type='number'
                                                color='primary'
                                                size='small'
                                                placeholder="0"
                                                name={`worker_employment_insurance`}
                                                value={workerState.worker_employment_insurance}
                                                onChange={workerOnChangeHandler}
                                            />
                                        </GridBoxDiv>
                                        <GridBoxDiv
                                            gtc={`repeat(2, 155px)`}
                                            gap={`10px`}
                                            kindOf={`input`}
                                        >
                                            <TextField
                                                className={workerState.worker_insurance_boolean ? classes.inputProps : classes.inputDisabled}
                                                disabled={!workerState.worker_insurance_boolean}
                                                label={`소득세`}
                                                type='number'
                                                color='primary'
                                                size='small'
                                                placeholder="0"
                                                name={`worker_income_tax`}
                                                value={workerState.worker_income_tax}
                                                onChange={workerOnChangeHandler}
                                            />
                                            <TextField
                                                className={workerState.worker_insurance_boolean ? classes.inputProps : classes.inputDisabled}
                                                disabled={!workerState.worker_insurance_boolean}
                                                label={`지방소득세`}
                                                type='number'
                                                color='primary'
                                                size='small'
                                                placeholder="0"
                                                name={`worker_resident_tax`}
                                                value={workerState.worker_resident_tax}
                                                onChange={workerOnChangeHandler}
                                            />
                                        </GridBoxDiv>
                                        <GridBoxDiv
                                            kindOf={`input`}
                                        >
                                            <WrapperDiv dr={`column`}>
                                                <TitleP kindOf={`13px`}>4대보험 메모</TitleP>
                                                <TextField fullWidth
                                                    id="outlined-multiline-static"
                                                    label="메모"
                                                    multiline

                                                    rows={3}
                                                    name={`worker_insurance_memo`}
                                                    value={workerState.worker_insurance_memo ? workerState.worker_insurance_memo : ''}
                                                    onChange={workerOnChangeHandler}
                                                />
                                            </WrapperDiv>
                                        </GridBoxDiv>
                                    </WrapperDiv>
                                </WrapperDiv>
                            </Article>
                        </Article>
                    </InnerBox>

                    {/* 근로자 추가 박스 오른쪽*/}
                    <InnerBox kindOf={`largeBox`} width={`50%`}>
                        <Article kindOf={`scroll`}>
                            <Article kindOf={`padding-r15`}>
                                {/* 근로정보 2 */}
                                <WrapperDiv kindOf={`margin30`}>
                                    <TitleP kindOf={`13px`}>근로정보</TitleP>
                                    <GridBoxDiv
                                        gtc={`repeat(2, 155px)`}
                                        gap={`10px`}
                                        kindOf={`inputFirst`}
                                    >
                                        <FormControl>
                                            <InputLabel id="demo-multiple-name-label">고용형태</InputLabel>
                                            <Select
                                                labelId="demo-multiple-name-label"
                                                label={`고용형태`}
                                                id={`worker_work_type`}
                                                name={`worker_work_type`}
                                                size='small'
                                                value={workerState.worker_work_type}
                                                onChange={(e: any) => {
                                                    setworkerEditButtonOn(true);
                                                    workerDispatch({ name: `worker_work_type`, value: e.target.value })
                                                }}
                                            >
                                                <MenuItem value={`정규직`} selected>정규직</MenuItem>
                                                <MenuItem value={`계약직`} selected>계약직</MenuItem>

                                            </Select>
                                        </FormControl>
                                        <FormControl>
                                            <InputLabel id="demo-multiple-name-label">고용형태 상세</InputLabel>
                                            <Select
                                                labelId="demo-multiple-name-label"
                                                label={`고용형태 상세`}
                                                id={`worker_work_type_detail`}
                                                name={`worker_work_type_detail`}
                                                size='small'
                                                value={workerState.worker_work_type_detail}
                                                onChange={(e: any) => {
                                                    setworkerEditButtonOn(true);
                                                    workerDispatch({ name: `worker_work_type_detail`, value: e.target.value })
                                                }}
                                            >
                                                <MenuItem value={`통상 근로자`} selected>통상 근로자</MenuItem>
                                                <MenuItem value={`단시간 근로자`} selected>단시간 근로자</MenuItem>
                                                <MenuItem value={`초단시간 근로자`} selected>초단시간 근로자</MenuItem>

                                            </Select>
                                        </FormControl>
                                    </GridBoxDiv>
                                    <GridBoxDiv
                                        gtc={`repeat(2, 1fr)`}
                                        gap={`10px`}
                                        kindOf={`input`}
                                    >
                                        <TextField
                                            className={classes.inputProps}
                                            label={workerState.worker_work_type === '계약직' ? '계약시작일' : '입사일'}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            size='small'
                                            name='worker_start_date'
                                            type='date'
                                            margin='dense'
                                            value={workerState.worker_start_date}
                                            onChange={workerOnChangeHandler}
                                        />
                                        <TextField
                                            className={classes.inputProps}
                                            label={workerState.worker_work_type === '계약직' ? '계약종료일' : '퇴사일'}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            size='small'
                                            name='worker_end_date'
                                            type='date'
                                            margin='dense'
                                            value={workerState.worker_end_date}
                                            onChange={workerOnChangeHandler}
                                        />
                                    </GridBoxDiv>
                                    <GridBoxDiv
                                        gtc={`repeat(2, 155px)`}
                                        gap={`10px`}
                                        kindOf={`input`}
                                    >
                                        <FormControl
                                            className={classes.inputProps}
                                        >
                                            <InputLabel id="demo-multiple-name-label">급여형태</InputLabel>
                                            <Select
                                                labelId="demo-multiple-name-label"
                                                label={`급여형태`}
                                                id={`급여구분`}
                                                name={`급여구분`}
                                                size='small'
                                                value={workerState.worker_pay_type}
                                                onChange={(e: any) => {
                                                    setworkerEditButtonOn(true);
                                                    workerDispatch({ name: `worker_pay_type`, value: e.target.value })
                                                }}
                                            >
                                                <MenuItem value={`월급제`} selected>월급제</MenuItem>
                                                <MenuItem value={`시급제`} selected>시급제</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <TextField
                                            className={classes.inputProps}
                                            label={workerState.worker_pay_type === '월급제' ? '월급' : '시급'}
                                            type='text'
                                            color='primary'
                                            size='small'
                                            name={`worker_pay`}
                                            value={workerState.worker_pay}
                                            onChange={workerOnChangeHandler}
                                        />
                                    </GridBoxDiv>
                                    <GridBoxDiv
                                        gtc={`repeat(2, 155px)`}
                                        gap={`10px`}
                                        kindOf={`input`}
                                    >
                                        <FormControl
                                            className={classes.inputProps}
                                        >
                                            <InputLabel id="demo-multiple-name-label">근로형태</InputLabel>
                                            <Select
                                                labelId="demo-multiple-name-label"
                                                label={`근로형태`}
                                                id={`worker_employ_type`}
                                                name={`worker_employ_type`}
                                                size='small'
                                                value={workerState.worker_employ_type}
                                                onChange={(e: any) => {
                                                    setworkerEditButtonOn(true);
                                                    if (e.target.value === '변동근로') {
                                                        workerDispatch({ name: `worker_refresh_type`, value: '주간' })
                                                        workerDispatch({ name: "worker_monthly_refresh_count", value: 0 })
                                                        workerDispatch({ name: "worker_weekly_work_count", value: 5 })
                                                        workerDispatch({ name: "worker_주간휴무일수", value: 2 })
                                                    }
                                                    workerDispatch({ name: `worker_employ_type`, value: e.target.value })
                                                }}
                                            >
                                                <MenuItem value={`고정근로`} selected>고정근로</MenuItem>
                                                <MenuItem value={`변동근로`} selected>변동근로</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <FormControl
                                            className={classes.inputProps}
                                        >
                                            <InputLabel id="demo-multiple-name-label">휴무형태</InputLabel>
                                            <Select
                                                labelId="demo-multiple-name-label"
                                                label={`휴무형태`}
                                                id={`worker_refresh_type`}
                                                name={`worker_refresh_type`}
                                                size='small'
                                                value={workerState.worker_refresh_type}
                                                onChange={dayoffClickHandler}
                                            >
                                                <MenuItem value={`주간`}>주간</MenuItem>
                                                {workerState.worker_employ_type === '고정근로' &&
                                                    <MenuItem value={`월간`}>월간</MenuItem>
                                                }
                                            </Select>
                                        </FormControl>
                                    </GridBoxDiv>
                                    {workerState.worker_refresh_type === '주간' ?
                                        <>
                                            <WrapperDiv
                                                kindOf={`input`}
                                                position={`relative`}
                                            >
                                                <MuiInputSpan>근무요일</MuiInputSpan>
                                                <WrapperDiv
                                                    kindOf={`borderBox`}
                                                    width={`320px`}
                                                >
                                                    <GridBoxDiv
                                                        gtc={`repeat(7, 1fr)`}
                                                    >
                                                        <InputWrapperDiv>
                                                            <CheckBoxInput
                                                                type={`checkbox`}
                                                                id='일'
                                                                checked={workerState.worker_weekly_data.일.근무여부}
                                                                onChange={dayClickHandler}
                                                            />
                                                            일
                                                        </InputWrapperDiv>
                                                        <InputWrapperDiv>
                                                            <CheckBoxInput
                                                                type={`checkbox`}
                                                                id='월'
                                                                checked={workerState.worker_weekly_data.월.근무여부}
                                                                onChange={dayClickHandler}
                                                            />
                                                            월
                                                        </InputWrapperDiv>
                                                        <InputWrapperDiv>
                                                            <CheckBoxInput
                                                                type={`checkbox`}
                                                                id='화'
                                                                checked={workerState.worker_weekly_data.화.근무여부}
                                                                onChange={dayClickHandler}
                                                            />
                                                            화
                                                        </InputWrapperDiv>
                                                        <InputWrapperDiv>
                                                            <CheckBoxInput
                                                                type={`checkbox`}
                                                                id='수'
                                                                checked={workerState.worker_weekly_data.수.근무여부}
                                                                onChange={dayClickHandler}
                                                            />
                                                            수
                                                        </InputWrapperDiv>
                                                        <InputWrapperDiv>
                                                            <CheckBoxInput
                                                                type={`checkbox`}
                                                                id='목'
                                                                checked={workerState.worker_weekly_data.목.근무여부}
                                                                onChange={dayClickHandler}
                                                            />
                                                            목
                                                        </InputWrapperDiv>
                                                        <InputWrapperDiv>
                                                            <CheckBoxInput
                                                                type={`checkbox`}
                                                                id='금'
                                                                checked={workerState.worker_weekly_data.금.근무여부}
                                                                onChange={dayClickHandler}
                                                            />
                                                            금
                                                        </InputWrapperDiv>
                                                        <InputWrapperDiv>
                                                            <CheckBoxInput
                                                                type={`checkbox`}
                                                                id='토'
                                                                checked={workerState.worker_weekly_data.토.근무여부}
                                                                onChange={dayClickHandler}
                                                            />
                                                            토
                                                        </InputWrapperDiv>
                                                    </GridBoxDiv>
                                                </WrapperDiv>

                                            </WrapperDiv>
                                            <GridBoxDiv
                                                gtc={`repeat(2, 155px)`}
                                                gap={`10px`}
                                                kindOf={`input`}
                                            >
                                                <TextField disabled
                                                    className={classes.inputDisabled}
                                                    sx={{ m: 1 }}
                                                    label="주간 근무일"
                                                    size="small"
                                                    name="worker_weekly_work_count"
                                                    value={workerState.worker_weekly_work_count}
                                                    onChange={workerOnChangeHandler}
                                                />
                                                <TextField disabled
                                                    className={classes.inputDisabled}
                                                    sx={{ m: 1 }}
                                                    label="주간 휴무일"
                                                    size="small"
                                                    name="worker_weekly_work_count"
                                                    value={workerState.worker_주간휴무일수}
                                                    onChange={workerOnChangeHandler}
                                                />
                                            </GridBoxDiv>
                                        </>
                                        :
                                        <>
                                            <GridBoxDiv
                                                gtc={`repeat(2, 1fr)`}
                                                gap={`10px`}
                                                kindOf={`input`}
                                            >
                                                <TextField
                                                    className={classes.inputProps}
                                                    sx={{ m: 1 }}
                                                    label="월 근무일"
                                                    size="small"
                                                    name="worker_monthly_refresh_count"
                                                    value={workerState.worker_monthly_refresh_count}
                                                    onChange={workerOnChangeHandler}
                                                />
                                            </GridBoxDiv>
                                            <GridBoxDiv
                                                gtc={`repeat(2, 1fr)`}
                                                gap={`10px`}
                                                kindOf={`input`}
                                            >
                                                <TextField
                                                    className={classes.inputProps}
                                                    sx={{ m: 1 }}
                                                    label="주간 근무일"
                                                    size="small"
                                                    name="worker_weekly_work_count"
                                                    disabled={true}
                                                    value={workerState.worker_weekly_work_count}
                                                    onChange={workerOnChangeHandler}
                                                />
                                                <TextField
                                                    className={classes.inputProps}
                                                    sx={{ m: 1 }}
                                                    label="주간 휴무일"
                                                    size="small"
                                                    name="worker_주간휴무일수"
                                                    disabled={true}
                                                    value={workerState.worker_주간휴무일수}
                                                    onChange={workerOnChangeHandler}
                                                />
                                            </GridBoxDiv>
                                        </>
                                    }



                                </WrapperDiv>

                                {/* 근로시간 */}
                                <WrapperDiv kindOf={`margin30`}>
                                    <TitleP kindOf={`13px`}>근로시간</TitleP>

                                    {/* ############고정근로 worker_start_time */}
                                    {workerState.worker_employ_type === '고정근로' ?
                                        <GridBoxDiv
                                            gtc={`repeat(2, 1fr)`}
                                            gap={`10px`}
                                            kindOf={`inputFirst`}
                                        >
                                            <LocalizationProvider dateAdapter={AdapterDateFns} locale={ruLocale}>
                                                <FormControl
                                                    className={classes.inputProps}
                                                >
                                                    <TimePicker
                                                        disableOpenPicker={true}
                                                        label={'시업시간'}
                                                        data-type="시업시간"
                                                        value={workerState.worker_start_time}
                                                        onChange={(date: any) => {
                                                            setworkerEditButtonOn(true);
                                                            workerDispatch({ name: 'worker_start_time', value: date })
                                                        }}
                                                        renderInput={(params: any) => <TextField {...params}
                                                            size='small'
                                                        />}
                                                    />
                                                </FormControl>
                                                <FormControl
                                                    className={classes.inputProps}
                                                >
                                                    <TimePicker
                                                        disableOpenPicker={true}
                                                        label={'종업시간'}
                                                        value={workerState.worker_end_time}
                                                        onChange={(date: any) => {
                                                            setworkerEditButtonOn(true);
                                                            workerDispatch({ name: 'worker_end_time', value: date })
                                                        }}
                                                        renderInput={(params: any) => <TextField {...params}
                                                            size='small'
                                                        />}
                                                    />
                                                </FormControl>
                                            </LocalizationProvider>
                                        </GridBoxDiv>
                                        :

                                        Object.keys(workerState.worker_weekly_data).map((item: any, index: any) => {
                                            if (workerState.worker_weekly_data[item].근무여부) {
                                                return (
                                                    <GridBoxDiv
                                                        key={index}
                                                        gtc={`25px repeat(2, 1fr)`}
                                                        gap={`15px 10px`}
                                                        kindOf={`input`}
                                                        ai={`center`}
                                                    >
                                                        <InputTitleSpan>
                                                            ({item})
                                                        </InputTitleSpan>
                                                        <LocalizationProvider dateAdapter={AdapterDateFns} locale={ruLocale}>
                                                            {/* <WrapperDiv kindOf={`input-margin0`}> */}
                                                            <TimePicker
                                                                disableOpenPicker={true}
                                                                className={classes.timePickerProps}
                                                                label={'시업시간'}
                                                                value={workerState.worker_weekly_data[item].시업시간}
                                                                onChange={(date: any) => {
                                                                    setworkerEditButtonOn(true);
                                                                    workerDispatch({ type: 'weekData', id: '시업시간', name: item, value: date })
                                                                }}
                                                                renderInput={(params: any) => {
                                                                    var pr = { ...params, error: false }
                                                                    return (<TextField
                                                                        size='small'
                                                                        {...pr} />)
                                                                }}
                                                            />
                                                            {/* </WrapperDiv> */}
                                                        </LocalizationProvider>
                                                        <LocalizationProvider dateAdapter={AdapterDateFns} locale={ruLocale}>
                                                            <TimePicker
                                                                disableOpenPicker={true}
                                                                className={classes.timePickerProps}
                                                                label={'종업시간'}
                                                                value={workerState.worker_weekly_data[item].종업시간}
                                                                onChange={(date: any) => {
                                                                    setworkerEditButtonOn(true);
                                                                    workerDispatch({ type: 'weekData', id: '종업시간', name: item, value: date })
                                                                }}
                                                                renderInput={(params: any) => {
                                                                    var pr = { ...params, error: false }
                                                                    return (<TextField
                                                                        size='small'
                                                                        {...pr} />)
                                                                }}
                                                            />
                                                        </LocalizationProvider>

                                                        <WrapperDiv kindOf={`input-margin0`}></WrapperDiv>
                                                        <TextField
                                                            label={`주간휴게`}
                                                            type='number'
                                                            color='primary'
                                                            size='small'
                                                            name={item}
                                                            value={workerState.worker_weekly_data[item].휴게시간_주간}
                                                            onChange={(e: any) => {
                                                                setworkerEditButtonOn(true);
                                                                workerDispatch({ type: 'weekData', id: '휴게시간_주간', name: e.target.name, value: e.target.value })
                                                            }}
                                                        />
                                                        <TextField
                                                            label={`야간휴게`}
                                                            type='number'
                                                            color='primary'
                                                            size='small'
                                                            name={item}
                                                            value={workerState.worker_weekly_data[item].휴게시간_야간}
                                                            onChange={(e: any) => {
                                                                setworkerEditButtonOn(true);
                                                                workerDispatch({ type: 'weekData', id: '휴게시간_야간', name: e.target.name, value: e.target.value })
                                                            }}
                                                        />
                                                    </GridBoxDiv>
                                                )
                                            }
                                        })

                                    }
                                </WrapperDiv>

                                {/* 4대보험 */}
                                <WrapperDiv dr={`column`}>
                                    <TitleP kindOf={`13px`}>근로자 메모</TitleP>
                                    <TextField fullWidth
                                        id="outlined-multiline-static"
                                        label="메모"
                                        multiline

                                        rows={3}
                                        name={`worker_memo`}
                                        value={workerState.worker_memo}
                                        onChange={workerOnChangeHandler}
                                    />
                                    <LineDiv margin={`20px 0`}></LineDiv>
                                    <TextField fullWidth
                                        id="outlined-multiline-static"
                                        label="사업주메모"
                                        multiline
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        rows={3}
                                        name={`worker_muser_memo`}
                                        value={workerState.worker_muser_memo}
                                        onChange={workerOnChangeHandler}
                                        disabled={true}
                                    />
                                </WrapperDiv>


                            </Article>
                        </Article>
                    </InnerBox>
                </WrapperDiv>
                <WrapperDiv
                    height={`52px`}
                    ju={`center`}
                    ai={`center`}
                    position={`absolute`}
                    bottom={`0`}
                    borderTop={`1px solid ${Theme.grey_v2}`}
                >
                    {createEdit === '추가' ?
                        <Button
                            kindOf={`lightBlue`}
                            hover={true}
                            margin={`0`}
                            type={`button`}
                            onClick={addListHandler}
                        >
                            리스트에 추가

                        </Button>
                        :
                        <Button
                            kindOf={workerEditButtonOn ? `lightBlue` : `disabledButton`}
                            margin={`0`}
                            type={`button`}
                            onClick={addListHandler}
                            hover={workerEditButtonOn ? true : false}
                            disabled={workerEditButtonOn ? false : true}
                        >
                            수정하기
                        </Button>
                    }
                </WrapperDiv>
            </Section>

            {/* 근로자리스트 */}
            <Section overflow={`hidden`} height={`760px`}>
                <InnerBox
                    kindOf={`titleBox`}
                    ju={`space-between`}
                >
                    <TitleP kindOf={`18px`}>근로자 리스트</TitleP>
                    <WrapperDiv width={`auto`}>
                        <Button
                            type={`button`}
                            kindOf={`textButton`}
                            marginRight={`10px`}
                            onClick={(e: any) => {
                                setworkerEditButtonOn(true);
                                workerDispatch({ type: `workerInit` });
                                setCreateEdit("추가");
                            }}
                        >
                            신규 근로자 입력
                        </Button>
                    </WrapperDiv>
                </InnerBox>
                <InnerBox kindOf={`padding-none`}>
                    <ListGrid
                        kindOf={`header`}
                        gtc={` 30px repeat(3, 1fr)`}
                    >
                        <ListCell
                            kindOf={`header`}
                            height={`30px`}
                        >
                        </ListCell>
                        <ListCell
                            kindOf={`header`}
                            height={`30px`}
                        >
                            <ListCellInner>
                                이름
                            </ListCellInner>
                        </ListCell>
                        <ListCell
                            kindOf={`header`}
                            height={`30px`}
                        >
                            <ListCellInner>
                                생년월일
                            </ListCellInner>
                        </ListCell>
                        <ListCell
                            kindOf={`header`}
                            borderRight={`none`}
                            height={`30px`}
                        >
                            <ListCellInner>
                                퇴사여부
                            </ListCellInner>
                        </ListCell>

                    </ListGrid>
                    {(dataList.length === 0) ?
                        <ListCell
                            height={`100%`}
                        >
                            <ListCellInner
                                kindOf={`null`}
                            >
                                {`데이터가 존재하지 않습니다.`}
                            </ListCellInner>
                        </ListCell>
                        :
                        // 데이터있을때
                        <Article height={`100%`}>
                            {dataList.map((item: any, index: any) => (
                                <ListGrid
                                    hover={true}
                                    kindOf={`lists`}
                                    style={{ backgroundColor: workerState.worker_index === item.worker_index && Theme.light_sky }}
                                    gtc={` 30px repeat(3, 1fr)`}
                                    key={index}
                                >
                                    {/* 번호 */}
                                    <ListCell
                                        kindOf={`modalWorkerList`}
                                        onClick={(e: any) => { listClickHandler(item.worker_index) }}
                                    >
                                        <ListCellInner
                                            color={Theme.grey_v3}
                                        >
                                            {(pageNumber * postNumber) + index + 1}
                                        </ListCellInner>
                                    </ListCell>
                                    {/* 이름 */}
                                    <ListCell
                                        kindOf={`modalWorkerList`}
                                        onClick={(e: any) => { listClickHandler(item.worker_index) }}
                                    >
                                        <ListCellInner>
                                            {item.worker_name}
                                        </ListCellInner>
                                    </ListCell>
                                    {/* 생년월일 */}
                                    {(item.worker_geunroja_reg_num1
                                        !== "") ?
                                        <ListCell
                                            kindOf={`modalWorkerList`}
                                            onClick={(e: any) => { listClickHandler(item.worker_index) }}
                                        >
                                            <ListCellInner>
                                                {item.worker_geunroja_reg_num1
                                                }
                                            </ListCellInner>
                                        </ListCell>
                                        :
                                        <ListCell
                                            kindOf={`modalWorkerList`}
                                            onClick={(e: any) => { listClickHandler(item.worker_index) }}
                                        >
                                            <ListCellInner>
                                                -
                                            </ListCellInner>
                                        </ListCell>
                                    }
                                    <ListCell
                                        kindOf={`modalWorkerList`}
                                    >
                                        <ListCellInner>
                                            <GreenSwitch
                                                id={item.worker_index}
                                                onChange={oneLeaveClickHandler}
                                                checked={item.worker_delete_status}
                                            />
                                        </ListCellInner>
                                    </ListCell>
                                </ListGrid>
                            ))}
                        </Article>
                    }
                    <PageWrap
                        kindOf={`modalWorkerList`}
                    >
                        <PageBox
                            onClick={pageDoubleDouwnClickHandler}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="8.09" height="8.766" viewBox="0 0 8.09 8.766">
                                <g id="그룹_2347" data-name="그룹 2347" transform="translate(0.707 0.354)">
                                    <path id="패스_539" data-name="패스 539" d="M-14856.059-19345.014l-4.029,4.029,1.679,1.68,2.351,2.35" transform="translate(14863.088 19345.014)" fill="none" stroke="#707070" />
                                    <path id="패스_540" data-name="패스 540" d="M-14856.059-19345.014l-4.029,4.029,1.679,1.68,2.351,2.35" transform="translate(14860.088 19345.014)" fill="none" stroke="#707070" />
                                </g>
                            </svg>
                        </PageBox>
                        <PageBox
                            onClick={pageDownClickHandler}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="5.889" height="9.271" viewBox="0 0 5.889 9.271">
                                <path id="패스_495" data-name="패스 495" d="M-15432.914-18560.455l-4.8,4.262,4.8,4.264" transform="translate(15438.471 18560.828)" fill="none" stroke="#7b7b7b" />
                            </svg>
                        </PageBox>
                        {(pageArray.length !== 0) ? pageArray.map((item: any, index: any) => (
                            (item === pageNumber + 1) ? (
                                <PageBox
                                    style={{ fontWeight: "bold", margin: "0", color: "#0071f4" }}
                                    key={index}
                                    onClick={pageClickHandler}
                                >
                                    {item}
                                </PageBox>
                            ) : (
                                <PageBox
                                    style={{ margin: "0" }}
                                    key={index}
                                    onClick={pageClickHandler}
                                >
                                    {item}
                                </PageBox>)
                        ))
                            : null
                        }
                        <PageBox
                            onClick={pageUpClickHandler}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="5.889" height="9.271" viewBox="0 0 5.889 9.271">
                                <path id="패스_493" data-name="패스 493" d="M-15437.719-18560.455l4.8,4.262-4.8,4.264" transform="translate(15438.051 18560.828)" fill="none" stroke="#7b7b7b" />
                            </svg>
                        </PageBox>
                        <PageBox
                            onClick={pageDoubleUpClickHandler}
                            borderRight={`1xp solid ${Theme.grey_v2}`}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="8.09" height="8.766" viewBox="0 0 8.09 8.766">
                                <g id="그룹_2346" data-name="그룹 2346" transform="translate(-1065.559 -1034.633)">
                                    <path id="패스_539" data-name="패스 539" d="M-14860.088-19345.014l4.029,4.029-1.679,1.68-2.351,2.35" transform="translate(15926 20380)" fill="none" stroke="#707070" />
                                    <path id="패스_540" data-name="패스 540" d="M-14860.088-19345.014l4.029,4.029-1.679,1.68-2.351,2.35" transform="translate(15929 20380)" fill="none" stroke="#707070" />
                                </g>
                            </svg>
                        </PageBox>
                    </PageWrap>
                </InnerBox>
            </Section>


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
                        // maxWidth: "calc(100vw - 2rem)",
                        // maxHeight: "calc(100vh - 2rem)",
                        overflowY: "auto",
                        position: "relative",
                        border: "none",
                        borderRadius: "0.3rem",
                        inset: 0,
                        padding: "0px",
                        margin: "0px 2%",
                        boxShadow: "0px 0px 16px rgba(0,0,0,0.6)"
                    },
                }}>
                {addressOpen ? <DaumPostcode onComplete={(data: any) => addressCompleteHandler(data, workerDispatch, 'worker_address', setAddressOpen, setworkerEditButtonOn)} /> : null}
            </Modal>
        </GridBoxDiv >
    )
}

export default React.memo(CWPresenter);