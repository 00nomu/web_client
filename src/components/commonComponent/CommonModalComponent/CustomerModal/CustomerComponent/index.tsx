import React from "react";
import { useEffect, useState } from "react";
import CCPresenter from "./CCPresenter";

const CustomerComponent = (props: any) => {
    const {

        commonState,
        commonDispatch,

        state,
        dispatch,

        fileState,
        fileDispatch

    } = props;

    const {
        worker_list
    } = state;

    const [addressOpen, setAddressOpen] = useState(false);
    const [wageCount, setWageCount] = useState(0);

    const onChangeHandler = (e: any) => {
        dispatch({ name: e.target.name, value: e.target.value });
    }

    useEffect(() => {
        var count = 0;
        for (var i = 0; i < worker_list.length; i++) {
            if (worker_list[i].worker_wage_boolean) {
                count++;
            }
        }
        setWageCount(count);
    }, [worker_list]);

    return (
        <CCPresenter

            commonState={commonState}

            state={state}
            dispatch={dispatch}

            addressOpen={addressOpen}
            setAddressOpen={setAddressOpen}

            onChangeHandler={onChangeHandler}

            wageCount={wageCount}

            fileState={fileState}
            fileDispatch={fileDispatch}
        />
    )
}
export default React.memo(CustomerComponent);