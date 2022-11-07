import React from "react";
import { useEffect, useReducer, useState } from "react";
import { commonInitState, initWorkerState, initWorker요일정보 } from "../../../../../modules/state/initstate";
import WCPresenter from "./WCPresenter";

const WorkerComponent = (props: any) => {

    const {
        commonState,
        state,
        dispatch
    } = props;

    const {
        worker_list
    } = state;

    const {
        loginData
    } = commonState;

    const [createEdit, setCreateEdit] = useState("추가");
    const [workerIndex, setWorkerIndex] = useState(0);

    const [commonWorkerState, commonWorkerDispatch] = useReducer(commonReducer, commonInitState(loginData, "worker"));

    function commonReducer(state: any, action: any) {
        switch (action.type) {
            case 'init':
                return commonInitState(loginData, "worker");
            default:
                return {
                    ...state,
                    [action.name]: action.value
                }
        }
    }

    const {
        totalPage,
        postPageNumber,

        pageNumber,
        postNumber,

    } = commonWorkerState;

    const [workerEditButtonOn, setworkerEditButtonOn] = useState(false); //근로자 수정하기 버튼 on/off

    const pageUpClickHandler = (e: any) => {
        if ((pageNumber + 1) < totalPage) {
            commonWorkerDispatch({ name: "pageNumber", value: pageNumber + 1 });
        }
    }

    const pageDoubleUpClickHandler = (e: any) => {
        if ((pageNumber + postPageNumber) < totalPage) {
            commonWorkerDispatch({ name: "pageNumber", value: pageNumber + postPageNumber });
        }
        else if ((totalPage - 1) < 0) {

        }
        else {
            commonWorkerDispatch({ name: "pageNumber", value: totalPage - 1 });
        }
    }

    const pageDownClickHandler = (e: any) => {
        if ((pageNumber - 1) >= 0) {
            commonWorkerDispatch({ name: "pageNumber", value: pageNumber - 1 });
        }
    }

    const pageDoubleDouwnClickHandler = (e: any) => {
        if ((pageNumber - postPageNumber) >= 0) {
            commonWorkerDispatch({ name: "pageNumber", value: pageNumber - postPageNumber });
        }
        else {
            commonWorkerDispatch({ name: "pageNumber", value: 0 });
        }
    }

    const pageClickHandler = (e: any) => {
        commonWorkerDispatch({ name: "pageNumber", value: e.target.innerHTML - 1 });
    }

    useEffect(() => {

        let emptyArray = [];

        // 페이지네이션
        const count = worker_list.length;

        var startpage = Math.floor(pageNumber / postPageNumber) * postPageNumber; // 시작 페이지 숫자
        var endpage = startpage + postPageNumber; // 마지막 페이지 숫자
        var totalpage = Math.ceil(count / postNumber); // 전체 페이지 개수

        for (var i = pageNumber * postNumber; i < (pageNumber * postNumber) + postNumber; i++) {
            if (worker_list[i]) {
                emptyArray.push(worker_list[i]);
            }
        }
        commonWorkerDispatch({ name: "dataList", value: emptyArray })

        if (endpage > totalpage) { // 끝 페이지가 총 페이지 수보다 많으면 같게끔 처리
            endpage = totalpage
        }

        emptyArray = [];
        for (let i = startpage; i < endpage; i++) {
            emptyArray.push(i + 1);
        }

        commonWorkerDispatch({ name: "pageArray", value: emptyArray })
        commonWorkerDispatch({ name: "totalPage", value: totalpage })

    }, [state, pageNumber])


    function workerReducer(state: any, action: any) {
        switch (action.type) {
            case 'init':
                return initWorkerState(loginData);
            case 'workerInit':
                return initWorkerState(loginData);
            case 'workerListClick':
                var newState = { ...state }
                for (let item in action.value) {
                    newState[item] = action.value[item]
                }
                return { ...newState };

            case 'workerWageBoolean':
                return {
                    ...state,
                    'worker_wage_boolean': !state.worker_wage_boolean
                }
            case 'weekInit':
                return {
                    ...state,
                    worker_weekly_data: initWorker요일정보(),
                }
            case 'weekData':
                return {
                    ...state,
                    ['worker_weekly_data']: { ...state.worker_weekly_data, [action.name]: { ...state['worker_weekly_data'][action.name], [action.id]: action.value } }
                }
            case '월간요일정보':
                return {
                    ...state,
                    worker_weekly_data: {
                        일: {
                            시업시간: "",
                            종업시간: "",
                            휴게시간_주간: 0,
                            휴게시간_야간: 0,
                            근무시간: 0,
                            근무여부: true,
                        },
                        월: {
                            시업시간: "",
                            종업시간: "",
                            휴게시간_주간: 0,
                            휴게시간_야간: 0,
                            근무시간: 0,
                            근무여부: true,
                        },
                        화: {
                            시업시간: "",
                            종업시간: "",
                            휴게시간_주간: 0,
                            휴게시간_야간: 0,
                            근무시간: 0,
                            근무여부: true,
                        },
                        수: {
                            시업시간: "",
                            종업시간: "",
                            휴게시간_주간: 0,
                            휴게시간_야간: 0,
                            근무시간: 0,
                            근무여부: true,
                        },
                        목: {
                            시업시간: "",
                            종업시간: "",
                            휴게시간_주간: 0,
                            휴게시간_야간: 0,
                            근무시간: 0,
                            근무여부: true,
                        },
                        금: {
                            시업시간: "",
                            종업시간: "",
                            휴게시간_주간: 0,
                            휴게시간_야간: 0,
                            근무시간: 0,
                            근무여부: true,
                        },
                        토: {
                            시업시간: "",
                            종업시간: "",
                            휴게시간_주간: 0,
                            휴게시간_야간: 0,
                            근무시간: 0,
                            근무여부: true,
                        }
                    }
                }
            case 'oneLeave': // 한명 퇴사처리
                newState = { ...state };
                var emptyArray = worker_list;
                if (action.value) {
                    for (let i = 0; i < emptyArray.length; i++) {
                        if (emptyArray[i].worker_index === parseInt(action.name)) {
                            emptyArray[i].worker_delete_status = true;
                        }
                    }
                }
                else {
                    for (let i = 0; i < emptyArray.length; i++) {
                        if (emptyArray[i].worker_index === parseInt(action.name)) {
                            emptyArray[i].worker_delete_status = false;
                        }
                    }
                }
                dispatch({ name: "worker_list", value: emptyArray })
                // setWorkerList({ array: emptyArray })
                return {
                    ...newState
                }

            default:
                return {
                    ...state,
                    [action.name]: action.value
                }
        }

    }

    const [workerState, workerDispatch] = useReducer(workerReducer, initWorkerState(loginData))

    // workerOnChangeHandler
    const workerOnChangeHandler = (e: any) => {
        setworkerEditButtonOn(true);
        if (e.target.name === "worker_wage_boolean") {
            if (e.target.value === `있음`)
                workerDispatch({ name: e.target.name, value: true });
            else
                workerDispatch({ name: e.target.name, value: false });
        }
        else if (e.target.value === '변동근로' || e.target.value === '고정근로') {
            workerDispatch({ type: 'weekInit' })
            workerDispatch({ name: 'worker_weekly_work_count', value: '5' })
            workerDispatch({ name: 'worker_주간휴무일수', value: '2' })
            workerDispatch({ name: 'worker_refresh_type', value: '주간' })
            workerDispatch({ name: e.target.name, value: e.target.value });
        }
        else {
            workerDispatch({ name: e.target.name, value: e.target.value });
        }
    }

    // 리스트에 추가하기 or 수정하기
    const addListHandler = async (e: any) => {
        e.preventDefault();
        const nowWorkerInfo = { // 입력한 근로자 정보 값들
            ...workerState,
            worker_index: workerIndex, // 추가할때만 쓰임 (1씩 증가)
        }
        if (workerState.worker_name === '') {
            alert('근로자 이름을 입력해주세요.')
        }
        else {
            if (createEdit === '추가') { // 추가
                var emptyArray: any = worker_list;
                emptyArray.push(nowWorkerInfo)
                await dispatch({ name: "worker_list", value: emptyArray });
                // setWorkerList({ array: emptyArray })
                await setWorkerIndex(workerIndex + 1);
                await workerDispatch({ type: 'workerInit' });
            }
            else { // 수정
                if (window.confirm('수정하시겠습니까?')) {
                    var emptyArray: any = worker_list;
                    for (let i = 0; i < emptyArray.length; i++) {
                        if (emptyArray[i].worker_index === workerState.worker_index) {
                            Object.keys(emptyArray[i]).map((item: any, index: any) => {
                                emptyArray[i][item] = workerState[item]
                            })
                        }
                    }
                    dispatch({ name: "worker_list", value: emptyArray });
                    // setWorkerList({ array: emptyArray })
                    setworkerEditButtonOn(false);
                }
            }
        }
    }

    // 리스트 클릭 시 정보 가져옴
    const listClickHandler = (workerClickIndex: any) => {
        for (let i = 0; i < worker_list.length; i++) {
            if (worker_list[i].worker_index === workerClickIndex) {
                workerDispatch({ type: 'workerListClick', value: worker_list[i] })
            }
        }
        setworkerEditButtonOn(false);
        setCreateEdit("수정");
    }

    const oneLeaveClickHandler = (e: any) => {
        workerDispatch({ type: 'oneLeave', name: e.target.id, value: e.target.checked })
    }

    useEffect(() => {
        if (workerState.worker_refresh_type === '주간') {
            let calc_week_count = 0;

            if (workerState.worker_weekly_data.일.근무여부 === true) {
                calc_week_count = calc_week_count + 1;
            }
            if (workerState.worker_weekly_data.월.근무여부 === true) {
                calc_week_count = calc_week_count + 1;
            } if (workerState.worker_weekly_data.화.근무여부 === true) {
                calc_week_count = calc_week_count + 1;
            } if (workerState.worker_weekly_data.수.근무여부 === true) {
                calc_week_count = calc_week_count + 1;
            } if (workerState.worker_weekly_data.목.근무여부 === true) {
                calc_week_count = calc_week_count + 1;
            } if (workerState.worker_weekly_data.금.근무여부 === true) {
                calc_week_count = calc_week_count + 1;
            } if (workerState.worker_weekly_data.토.근무여부 === true) {
                calc_week_count = calc_week_count + 1;
            }
            workerDispatch({ name: "worker_weekly_work_count", value: calc_week_count })
            workerDispatch({ name: "worker_주간휴무일수", value: Math.round((7 - calc_week_count) * 100) / 100 })
        } else if (workerState.worker_refresh_type === "월간") {
            workerDispatch({ name: "worker_weekly_work_count", value: Math.round(((30.415 - workerState.worker_monthly_refresh_count) / 4.345) * 100) / 100 })
            workerDispatch({ name: "worker_주간휴무일수", value: Math.round((7 - Math.round(((30.415 - workerState.worker_monthly_refresh_count) / 4.345) * 100) / 100) * 100) / 100 })
        }

    }, [workerState.worker_weekly_data, workerState.worker_monthly_refresh_count])

    // 휴무형태 클릭 
    const dayoffClickHandler = (e: any) => {
        setworkerEditButtonOn(true);
        if (e.target.value === '주간') {
            workerDispatch({ name: "worker_refresh_type", value: "주간" })
            workerDispatch({ name: "worker_monthly_refresh_count", value: 0 })
            workerDispatch({ name: "worker_weekly_work_count", value: 5 })
            workerDispatch({ name: "worker_주간휴무일수", value: 2 })
            workerDispatch({ type: 'weekInit' })
        }
        else {
            workerDispatch({ type: "월간요일정보" });
            workerDispatch({ name: "worker_refresh_type", value: "월간" })
            workerDispatch({ name: "worker_monthly_refresh_count", value: 6 })
            workerDispatch({ name: "worker_weekly_work_count", value: 5.52 })
            workerDispatch({ name: "worker_주간휴무일수", value: 1.48 })
        }
    }

    // 근무 요일 체크박스 클릭
    const dayClickHandler = (e: any) => {
        setworkerEditButtonOn(true);
        if (e.target.checked) {
            workerDispatch({ type: 'weekData', id: '근무여부', name: e.target.id, value: true })
        }
        else {
            workerDispatch({ type: 'weekData', id: '근무여부', name: e.target.id, value: false })
        }
    }

    return (
        <WCPresenter

            commonWorkerState={commonWorkerState}
            commonWorkerDispatch={commonWorkerDispatch}

            workerState={workerState}
            workerDispatch={workerDispatch}

            createEdit={createEdit}
            setCreateEdit={setCreateEdit}
            workerOnChangeHandler={workerOnChangeHandler}
            addListHandler={addListHandler}
            listClickHandler={listClickHandler}

            oneLeaveClickHandler={oneLeaveClickHandler}

            setworkerEditButtonOn={setworkerEditButtonOn}
            workerEditButtonOn={workerEditButtonOn}


            pageClickHandler={pageClickHandler}
            pageUpClickHandler={pageUpClickHandler}
            pageDoubleUpClickHandler={pageDoubleUpClickHandler}
            pageDownClickHandler={pageDownClickHandler}
            pageDoubleDouwnClickHandler={pageDoubleDouwnClickHandler}

            dayoffClickHandler={dayoffClickHandler}
            dayClickHandler={dayClickHandler}
        />
    )
}
export default React.memo(WorkerComponent);