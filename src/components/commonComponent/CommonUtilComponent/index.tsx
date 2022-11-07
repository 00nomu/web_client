import moment from "moment";
import { useEffect, useState } from "react";
import CUCPresenter from "./CUCPresenter";

const CommonUtilComponent = (props: any) => {

    // props로 전달받을 값들
    const {

        commonState,
        commonDispatch,

        state,
        dispatch,

        fileState,
        fileDispatch,

    } = props;

    const {
        range,
        startDateObject,
        endDateObject,
    } = commonState;

    const [windowWidth, setWindowWidth] = useState(0);

    const resizeWindow = () => {
        setWindowWidth(window.innerWidth)
    }

    useEffect(() => {
        setWindowWidth(window.innerWidth)
        window.addEventListener("resize", resizeWindow)
        return () => {
            window.removeEventListener("resize", resizeWindow)
        }
    }, [windowWidth])


    useEffect(() => { // 라디오 버튼 클릭 시 날짜 정보 변경

        if (range === '최근 1주일') {
            commonDispatch({ name: "startDateObject", value: moment().add(-1, "week").toDate() });
            commonDispatch({ name: "endDateObject", value: moment().toDate() })
        }
        else if (range === '최근 1개월') {
            commonDispatch({ name: "startDateObject", value: moment().add(-1, "month").toDate() });
            commonDispatch({ name: "endDateObject", value: moment().toDate() })
        }
        else if (range === '최근 3개월') {
            commonDispatch({ name: "startDateObject", value: moment().add(-3, "month").toDate() });
            commonDispatch({ name: "endDateObject", value: moment().toDate() })
        }
        else if (range === '최근 6개월') {
            commonDispatch({ name: "startDateObject", value: moment().add(-6, "month").toDate() });
            commonDispatch({ name: "endDateObject", value: moment().toDate() })
        }
        else if (range === '최근 1년') {
            commonDispatch({ name: "startDateObject", value: moment().add(-1, "year").toDate() });
            commonDispatch({ name: "endDateObject", value: moment().toDate() })
        }
        else if (range === '최근 3년') {
            commonDispatch({ name: "startDateObject", value: moment().add(-3, "year").toDate() });
            commonDispatch({ name: "endDateObject", value: moment().toDate() })
        }
        else {
            commonDispatch({ name: "startDateObject", value: moment().add(-3, "year").toDate() });
            commonDispatch({ name: "endDateObject", value: moment().toDate() })
        }

    }, [range]);

    useEffect(() => { // startDateObject, endDateObject 변경될 때마다 
        commonDispatch({ name: "startDate", value: moment(startDateObject).format("YYYY-MM-DD") });
        commonDispatch({ name: "endDate", value: moment(endDateObject).format("YYYY-MM-DD") });
    }, [startDateObject, endDateObject])

    return (
        <CUCPresenter
            windowWidth={windowWidth}

            commonState={commonState}
            commonDispatch={commonDispatch}

            state={state}
            dispatch={dispatch}

            fileState={fileState}
            fileDispatch={fileDispatch}
        />
    )
}

export default CommonUtilComponent;