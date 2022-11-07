import React from "react";
import { RadioInput, RadioWrapperDiv, TitleP } from "../../../../styles/AllStyles";
import { GridBoxDiv } from "../../../../styles/common/UtillComponents";

const AuthManageComponent = ({
    authTitle,

    authState,
    authStateString,

    state,
    dispatch,
}: any) => {

    return (
        <GridBoxDiv
            kindOf={`authoritySetting`}
        >
            <TitleP kindOf={`16px`}>
                {authTitle}
            </TitleP>
            <RadioWrapperDiv>
                <RadioInput
                    type={`radio`}
                    name={authStateString}
                    value={'0'}
                    checked={state[authStateString] === '0'}
                    onChange={(e: any) => { dispatch({ name: e.target.name, value: e.target.value }) }}
                />
                <span>
                    없음
                </span>
            </RadioWrapperDiv>
            <RadioWrapperDiv>
                <RadioInput
                    type={`radio`}
                    name={authStateString}
                    value={'1'}
                    checked={state[authStateString] === '1'}
                    onChange={(e: any) => { dispatch({ name: e.target.name, value: e.target.value }) }}
                    disabled={authState < 1 ? true : false}
                />
                <span>
                    읽기
                </span>
            </RadioWrapperDiv>
            <RadioWrapperDiv>
                <RadioInput
                    type={`radio`}
                    name={authStateString}
                    value={'2'}
                    checked={state[authStateString] === '2'}
                    onChange={(e: any) => { dispatch({ name: e.target.name, value: e.target.value }) }}
                    disabled={authState < 2 ? true : false}
                />
                <span>
                    쓰기
                </span>
            </RadioWrapperDiv>
            <RadioWrapperDiv>
                <RadioInput
                    type={`radio`}
                    name={authStateString}
                    value={'3'}
                    checked={state[authStateString] === '3'}
                    onChange={(e: any) => { dispatch({ name: e.target.name, value: e.target.value }) }}
                    disabled={authState < 3 ? true : false}
                />
                <span>
                    수정
                </span>
            </RadioWrapperDiv>
            <RadioWrapperDiv>
                <RadioInput
                    type={`radio`}
                    name={authStateString}
                    value={'4'}
                    checked={state[authStateString] === '4'}
                    onChange={(e: any) => { dispatch({ name: e.target.name, value: e.target.value }) }}
                    disabled={authState < 4 ? true : false}
                />
                <span>
                    삭제
                </span>
            </RadioWrapperDiv>
            <RadioWrapperDiv>
                <RadioInput
                    type={`radio`}
                    name={authStateString}
                    value={'5'}
                    checked={state[authStateString] === '5'}
                    onChange={(e: any) => { dispatch({ name: e.target.name, value: e.target.value }) }}
                    disabled={authState < 5 ? true : false}
                />
                <span>
                    전체
                </span>
            </RadioWrapperDiv>
        </GridBoxDiv>
    )
}

export default React.memo(AuthManageComponent);