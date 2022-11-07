
// var password = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/; // 영문 숫자 특수문자 조합 최소 8자리 이상
// var eng = /^[a-zA-Z]*$/; // 영어만
var num = /^[0-9]*$/; // 숫자만
var engNum = /^[a-zA-Z0-9]*$/; // 영어+숫자
// var email = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+$/; // 이메일
// var phone = /^\d{2,3}-\d{3,4}-\d{4}$/; // 전화번호
// var jumin = /\d{6} \- [1-4]\d{6}/; // 주민등록번호
// var regExp = /[ \{\}\[\]\/?.,;:|\)*~`!^\-_+┼<>@\#$%&\'\"\\\(\=]/gi; // 특수문자

// 사업자번호 validation
const companyNumberValidation = (number: any) => {
    if (number.length === 10 && num.test(number))
        return true;
    else
        return false;
}

const userIdValidaion = (str: any) => {
    if (engNum.test(str) || str === "")
        return true;
    else
        return false;
}


export {
    companyNumberValidation,
    userIdValidaion
}