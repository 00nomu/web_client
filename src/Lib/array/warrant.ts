const warrantMainTypeArray: any = [
    '선택',
    '음식점업',
    '서비스업',
    '제조업',
    '건설업',
    '도매및소매업',
    '운수및창고업',
    '정보통신업',
    '기타'
]

const warrantSelectTitle: any = ['전체', '상호', '대표자성명', '업태', '사업자등록번호'];
const warrantSelectData: any = ['전체', 'warrant_company_name', 'warrant_owner_name', 'warrant_main_type', 'warrant_company_code'];

const warrantCompanyName: any = ['공공노무법인 대전지사', '송민준 업체', '(유)비전에스아이', '단체문자 (DB)', '김종인', '정재욱', '공공노무법인 (영업직) 이정석', '공공노무법인 (영업직) 조태윤', '공공노무법인 (영업직) 최재욱'];
const warrantCompanyCode: any = ['7828500389', '1111111111', '4028180121', '7744778855', '0030942351', '1045241123', '1050942672', '1048406644', '1071840099'];

const warrantDateTitle: any = ['등록일순'];
const warrantDateData: any = ['warrant_created'];

const warrantBasicTitleDate: any = ['최근 3년', '최근 1년', '최근 6개월', '최근 3개월', '최근 1개월', '최근 1주일'];

const warrantBasicDateData: any = ['3년', '1년', '6개월', '3개월'];

const warrantGradeData: any = ['근로계약서팀', '4대보험팀', '지원금팀', '사무장팀', '개발팀', '기타', '관리자']

export {
    warrantSelectTitle,
    warrantSelectData,

    warrantCompanyName,
    warrantCompanyCode,

    warrantDateTitle,
    warrantDateData,
    warrantBasicTitleDate,
    warrantBasicDateData,
    warrantGradeData,

    warrantMainTypeArray
}