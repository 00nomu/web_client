import moment from "moment";
import XLSX from "xlsx"
import { commaNumber, companyNumber } from "../../../../modules/replace";

const xlsxDownloadHandler = (
    componentTitle: any,
    dataList: any
) => {
    var xlsxArray: any = [];
    let worksheet;
    const new_workbook = XLSX.utils.book_new(); // excel 파일에 해당

    switch (componentTitle) {

        case 'warrant':
            xlsxArray.push(["등록일", "상호", "최종 환급금액", "업체명"]);

            for (let i = 0; i < dataList.length; i++) {

                xlsxArray.push([
                    moment(dataList[i].warrant_sign_date).format("YYYY-MM-DD"),
                    dataList[i].warrant_company_name,
                    dataList[i].warrant_refund_amount,
                    dataList[i].company_name,
                ])
            }

            worksheet = XLSX.utils.aoa_to_sheet(xlsxArray); // excel sheet하단의 worksheet에 해당

            worksheet["!cols"] = [

                { width: 20 }
                , { width: 25 }
                , { width: 20 }
                , { width: 25 }

            ]

            XLSX.utils.book_append_sheet(new_workbook, worksheet, 'Sheet1'); // excelsheet를 excel파일에 넣음
            XLSX.writeFile(new_workbook, "경정청구리스트" + '.xlsx');
            break;

        case 'customer':
            xlsxArray.push(["상호명", "대표자", "전화번호", "주소", "사업자등록번호", "4대보험"]);

            for (let i = 0; i < dataList.length; i++) {
                xlsxArray.push([
                    dataList[i].customer_name,
                    dataList[i].customer_owner_name,
                    dataList[i].customer_tel,
                    dataList[i].customer_address,
                    companyNumber(dataList[i].customer_code),
                    commaNumber(dataList[i].customer_four_insurance_name)
                ])
            }

            worksheet = XLSX.utils.aoa_to_sheet(xlsxArray); // excel sheet하단의 worksheet에 해당


            worksheet["!cols"] = [

                { width: 20 }
                , { width: 10 }
                , { width: 20 }
                , { width: 20 }
                , { width: 20 }
                , { width: 10 }

            ]

            XLSX.utils.book_append_sheet(new_workbook, worksheet, 'Sheet1'); // excelsheet를 excel파일에 넣음
            XLSX.writeFile(new_workbook, "거래처리스트" + '.xlsx');
            break;
    }



}

export default xlsxDownloadHandler;