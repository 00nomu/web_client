
import React from "react";
import Theme from '../../../../../../styles/Theme'

import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({

    TableData: {
        border: '1px solid ' + Theme.basic_black,
        backgroundColor: Theme.basic_white,
        textAlign: 'left',
        minHeight: '25px',
        height: '25px',
        maxHeight: '25px',
        padding:'5px 10px',
    },
    TableTitle: {
        border: '1px solid ' + Theme.basic_black,
        backgroundColor: Theme.basic_white,
        textAlign: 'left',
        minHeight: '25px',
        height: '25px',
        maxHeight: '25px',
        width: "12%",
        padding:'5px 10px',
    },
    TableSubTitle: {
        border: '1px solid ' + Theme.basic_black,
        backgroundColor: Theme.basic_white,
        textAlign: 'left',
        minHeight: '25px',
        height: '25px',
        maxHeight: '25px',
        width: "25%",
        padding:'5px 10px',
    },

});


const WarrantPrint = (props: any) => {

    const classes = useStyles();

    const data = props?.data;



    const today = new Date();

    return (
        <div
            style={{ display: "none" }}
        >
            <div
                ref={props.printRef}
            >

                    <div
                        style={{
                            padding: "50px",
                            display: "flex",
                            alignItems: "center",
                            flexDirection: "column"
                        }}
                    >
                        <h1>위임장</h1>
                        <TableContainer>
                            <Table width={'100%'} aria-label="simple table">
                                <TableRow>
                                    <TableCell rowSpan={5} className={classes.TableTitle}>위임인</TableCell>
                                    <TableCell rowSpan={1} className={classes.TableSubTitle} >1. 대표자 성명</TableCell>
                                    <TableCell rowSpan={1} colSpan={3} className={classes.TableData} > {data.warrant_owner_name}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell rowSpan={1} className={classes.TableData} >2. 주민등록번호</TableCell>
                                    <TableCell rowSpan={1} colSpan={3} className={classes.TableData} >{data.warrant_reg_number} - {data.warrant_reg_number2}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell rowSpan={1} className={classes.TableData} >3. 상호(사업자등록번호)</TableCell>
                                    <TableCell rowSpan={1} colSpan={3} className={classes.TableData} >{data.warrant_company_name}{props.data.warrant_sign_pad && <>({data.warrant_company_code})</>}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell rowSpan={1} className={classes.TableData} >4. 사업장 주소</TableCell>
                                    <TableCell rowSpan={1} colSpan={3} className={classes.TableData} >{data.warrant_company_address}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell rowSpan={1} className={classes.TableData} >5. 연락처</TableCell>
                                    <TableCell rowSpan={1} className={classes.TableData} >{data.warrant_company_tel}</TableCell>
                                    <TableCell rowSpan={1} className={classes.TableSubTitle} >6. 이메일</TableCell>
                                    <TableCell rowSpan={1} className={classes.TableData} >{data.warrant_email}</TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell rowSpan={4} className={classes.TableData}>피위임인</TableCell>
                                    <TableCell rowSpan={1} className={classes.TableData} >7. 성명</TableCell>
                                    <TableCell rowSpan={1} className={classes.TableData} >정 재 욱</TableCell>
                                    <TableCell rowSpan={1} className={classes.TableSubTitle} >8. 관계</TableCell>
                                    <TableCell rowSpan={1} className={classes.TableData} >세무대리인</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell rowSpan={1} className={classes.TableData} >9. 주민등록번호</TableCell>
                                    <TableCell rowSpan={1} colSpan={3} className={classes.TableData} >870811-1091018</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell rowSpan={1} className={classes.TableData} >10. 상호(사업자등록번호)</TableCell>
                                    <TableCell rowSpan={1} colSpan={3} className={classes.TableData} >에덴택스세무회계사무소 (776-25-01166) </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell rowSpan={1} className={classes.TableData} >11. 사업장 주소</TableCell>
                                    <TableCell rowSpan={1} colSpan={3} className={classes.TableData} >서울시 강남구 논현로 507 (성지하이츠3차, 1913호)</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={5} className={classes.TableData} >
                                        위임내용: 하기 서류에 관한 출력 업무 위임의 件<br /><br />
                                        1. 위임인의 2017년 ~ 2021년 귀속분 종합소득세 신고서<br />
                                        2. 위임인의 운영한 모든 사업자에서 제출한<br />2015년 ~ 2021년 소득자별 근로소득 원천징수부<br />
                                        3. 기타 1,2와 관련한 부속 서류
                                    </TableCell>
                                </TableRow>
                            </Table>
                        </TableContainer>
                        <span style={{ padding: "30px 0" }}>상기 위임내용에 관한 일체의 행위를 위임합니다.</span>
                        <span style={{ padding: "30px 0" }}>{data.warrant_sign_date ? <>{data.warrant_sign_date.substring(0, 4)}년 {data.warrant_sign_date.substring(5, 7)}월 {data.warrant_sign_date.substring(8, 10)}일</> : ""}</span>
                        {/* <div style={{ display: "flex" }}>
                            <span style={{}}>위임인 성명 : </span>
                            <div style={{ borderBottom: "1px solid black", paddingLeft: "200px", paddingBottom: "3px" }}>
                                {data.warrant_owner_name} &nbsp;&nbsp;
                                {props.data.warrant_sign_pad &&
                                    <img style={{ width: "50px", height: "50px" }} src={props.data.warrant_sign_pad} />
                                }
                                (서명 또는 인)
                            </div>
                        </div> */}


        {(function () {
            if(data.warrant_company_type === 0)
                return (
                    <TableContainer style={{marginTop : 20,}}>
                        <Table width={'100%'} aria-label="simple table">
                            <TableRow>
                                <TableCell className={classes.TableData} style={{width : '50%'}}>대표자 성명</TableCell>
                                <TableCell className={classes.TableData} style={{width : '50%'}} >대표자 서명</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className={classes.TableData} style={{width : '50%'}}>{data.warrant_owner_name}</TableCell>
                                <TableCell className={classes.TableData} style={{width : '50%'}}><img style={{ width: "50px", height: "30px" }} src={props.data.warrant_sign_pad} /></TableCell>
                            </TableRow>
                        </Table>
                    </TableContainer>
                );

                if(data.warrant_company_type === 1 && data.warrant_stamp_name === null) // 법인인데 인감도장 안올리면 서명으로
                return (
                    <TableContainer style={{marginTop : 20,}}>
                        <Table width={'100%'} aria-label="simple table">
                            <TableRow>
                                <TableCell className={classes.TableData} style={{width : '50%'}}>대표자 성명</TableCell>
                                <TableCell className={classes.TableData} style={{width : '50%'}} >대표자 서명</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className={classes.TableData} style={{width : '50%'}}>{data.warrant_owner_name}</TableCell>
                                <TableCell className={classes.TableData} style={{width : '50%'}}><img style={{ width: "50px", height: "30px" }} src={props.data.warrant_sign_pad} /></TableCell>
                            </TableRow>
                        </Table>
                    </TableContainer>



                );

                if(data.warrant_company_type === 1 && data.warrant_stamp_name !== null) // 법인인데 인감도장 올렸으면 인감도장으로
                return (
                  <>
                    <TableContainer style={{display:'grid', gridTemplateColumns:'repeat(2, 1fr)', gap:'10px'}}>
                        <Table style={{height:'130px'}} aria-label="simple table">
                            <TableRow style={{height:'25px',maxHeight:'25px', padding:'0'}}>
                              <TableCell className={classes.TableData} style={{textAlign:'center', height:'25px'}}>대표자 성명</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className={classes.TableData} style={{textAlign:'center', height:'100%', maxHeight:'100%'}}>{data.warrant_owner_name}</TableCell>
                            </TableRow>

                        </Table>
                        <Table style={{height:'130px'}} aria-label="simple table">

                            <TableRow style={{height:'25px',maxHeight:'25px', padding:'0'}}>
                              <TableCell className={classes.TableData} style={{textAlign:'center'}} >인감도장</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className={classes.TableData} style={{textAlign:'center', height:'100%', maxHeight:'100%'}}><img style={{ width: "50px", height: "50px",alignSelf:'center', objectFit:'contain'}} src={props.data.warrant_stamp_image} /></TableCell>
                            </TableRow>
                        </Table>
                    </TableContainer>
                    </>


                );

            })()}













                    </div>

            </div>
        </div>
    )
}

export default WarrantPrint;
