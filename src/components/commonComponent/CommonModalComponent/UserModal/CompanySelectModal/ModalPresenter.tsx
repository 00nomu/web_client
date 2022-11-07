import { withResizeDetector } from "react-resize-detector";
import {
    Input,
    WholeWrapperDiv,
    WrapperDiv,
    GridBoxDiv,
    Button,
    TitleP,
} from "../../../../styles/AllStyles";
import {
    ListWrapper,
    ListGrid,
    ListCell,
    ListCellInner
} from "../../../../styles/common/ListComponents";
import React from "react";

const ModalPresenter = ({
    width,
    commonState,
    commonDispatch,
    companySearchHandler,
    companySelectHandler,
    setCompanyModalOpen,
}: any) => {

    const {
        dataList,
        pageNumber,
        postNumber
    } = commonState;

    return (
        <WholeWrapperDiv
            kindOf={`modalBg`}
            position={`relative`}
        >
            {/* 닫기 */}
            <Button
                kindOf={`closeGreyButton`}
                hoverGrey={true}
                top={`20px`}
                right={`18px`}
                onClick={(e: any) => { setCompanyModalOpen(false) }}
            >
                <svg id="close" data-name="01 align center" xmlns="http://www.w3.org/2000/svg" width="13.764" height="13.764" viewBox="0 0 13.764 13.764">
                    <path id="패스_189" data-name="패스 189" d="M13.764.811,12.953,0,6.882,6.071.811,0,0,.811,6.071,6.882,0,12.953l.811.811L6.882,7.693l6.071,6.071.811-.811L7.693,6.882Z" />
                </svg>
            </Button>
            <TitleP
                kindOf={`24px`}
            >
                업체 리스트
            </TitleP>
            <WrapperDiv>
                <WrapperDiv
                    marginBottom={`15px`}
                >
                    <form
                        style={{
                            width: "100%",
                        }}
                        onSubmit={companySearchHandler}
                    >
                        <GridBoxDiv
                            width={`50%`}
                            gtc={`auto 30px`}
                            gap={`10px`}
                        >
                            <Input
                                kindOf={`search`}
                                type={`text`}
                                placeholder={`검색어를 입력 후 엔터를 눌러주세요.`}
                                onChange={(e: any) => { commonDispatch({ name: "searchText", value: e.target.value }) }}
                            />
                            <Button
                                type={`submit`}
                                hoverGrey={true}
                                kindOf={`searchGreyButton`}
                            >
                                <svg id="svg" data-name="01 align center" style={{ marginRight: "0" }} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                    <path id="패스_117" data-name="패스 117" d="M13.968,13.144,10.32,9.5a5.835,5.835,0,1,0-.824.824l3.648,3.648ZM5.812,10.473a4.66,4.66,0,1,1,4.66-4.66,4.66,4.66,0,0,1-4.66,4.66Z" transform="translate(0.032 0.032)" fill="#1f282e" />
                                </svg>
                            </Button>
                        </GridBoxDiv>
                    </form>
                </WrapperDiv>
            </WrapperDiv>

            <ListWrapper>
                {/* 테이블헤더 */}
                <ListGrid
                    kindOf={`header`}
                    gtc={`40px 3fr 1fr 1.5fr 1.5fr 1fr`}
                >
                    <ListCell
                        kindOf={`header`}
                    >
                        <ListCellInner>

                        </ListCellInner>
                    </ListCell>
                    <ListCell
                        kindOf={`header`}
                    >
                        <ListCellInner>
                            상호
                        </ListCellInner>
                    </ListCell>
                    <ListCell
                        kindOf={`header`}
                    >
                        <ListCellInner>
                            대표자
                        </ListCellInner>
                    </ListCell>
                    <ListCell
                        kindOf={`header`}
                    >
                        <ListCellInner>
                            연락처
                        </ListCellInner>
                    </ListCell>
                    <ListCell
                        kindOf={`header`}
                    >
                        <ListCellInner>
                            사업자등록번호
                        </ListCellInner>
                    </ListCell>
                    <ListCell
                        kindOf={`header`}
                        borderRight={`none`}
                    >
                        <ListCellInner >
                            선택
                        </ListCellInner >
                    </ListCell>
                </ListGrid>
                {dataList.length > 0 ? (
                    <>
                        {dataList.map((item: any, index: any) => (
                            <ListGrid
                                key={index}
                                kindOf={`lists`}
                                gtc={`40px 3fr 1fr 1.5fr 1.5fr 1fr`}
                            >
                                <ListCell>
                                    <ListCellInner
                                        kindOf={`numbering`}
                                    >
                                        {(pageNumber * postNumber) + (index + 1)}
                                    </ListCellInner>
                                </ListCell>
                                <ListCell>
                                    <ListCellInner>
                                        {item.company_name ? item.company_name : '-'}
                                    </ListCellInner>
                                </ListCell>
                                <ListCell>
                                    <ListCellInner>
                                        {item.company_owner_name ? item.company_owner_name : '-'}
                                    </ListCellInner>
                                </ListCell>
                                <ListCell>
                                    <ListCellInner>
                                        {item.company_tel ? item.company_tel : '-'}
                                    </ListCellInner>
                                </ListCell>
                                <ListCell>
                                    <ListCellInner>
                                        {item.company_code ? item.company_code : '-'}
                                    </ListCellInner>
                                </ListCell>
                                <ListCell
                                    kindOf={`lastCell`}
                                >
                                    <ListCellInner>
                                        <Button
                                            hover={true}
                                            kindOf={`lightBlue`}
                                            onClick={(e: any) => companySelectHandler(item)}
                                        >
                                            선택
                                        </Button>
                                    </ListCellInner>
                                </ListCell>
                            </ListGrid>
                        ))}
                    </>

                ) : (

                    <ListCell
                        kindOf={`null`}
                        width={`100%`}
                        height={`400px`}
                    >
                        <ListCellInner kindOf={`null`}>
                            {`데이터가 존재하지 않습니다.`}
                        </ListCellInner>
                    </ListCell>
                )}
            </ListWrapper>

        </WholeWrapperDiv>
    )
}

export default React.memo(withResizeDetector(ModalPresenter));