import { isValid } from "date-fns";
import moment, { Moment } from "moment";



// 금액 표기
const commaNumber = (number: Number) => {
    if (number)
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    else if (number === 0)
        return 0;
    else
        return ''
};

const unCommaNumber = (str: any) => {
    if (typeof str === 'number') {
        str = str.toString();
        str = "" + str.replace(/,/gi, '');
        str = str.replace(/(^\s*)|(\s*$)/g, "");
    } else {
        str = "" + str.replace(/,/gi, '');
        str = str.replace(/(^\s*)|(\s*$)/g, "");
    }

    return parseInt(str);

}

const companyNumber = (str: string) => {
    if (!str) {
        return ""
    }
    else {
        return str.replace(/(\d{3})(\d{2})(\d{5})/, '$1-$2-$3');
    }
}

const phoneNumber = (str: string) => {
    if (!str) {
        return ""
    }
    else {
        return str.replace(/[^0-9]/g, "").replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/, "$1-$2-$3").replace("--", "-");
    }

}

const residentFirstNumber = (str: string) => {
    if (!str) {
        return ""
    }
    else {
        return str.replace(/(.{2})/g, "$1.").replace(/.$/, '');
    }
}

// 주간 근무일
const dayOn = (item: any) => {
    var emptyArray: any = [];
    if (JSON.parse(JSON.parse(item).월).근무여부) {
        emptyArray.push('월')
    }
    if (JSON.parse(JSON.parse(item).화).근무여부) {
        emptyArray.push('화')
    }
    if (JSON.parse(JSON.parse(item).수).근무여부) {
        emptyArray.push('수')
    }
    if (JSON.parse(JSON.parse(item).목).근무여부) {
        emptyArray.push('목')
    }
    if (JSON.parse(JSON.parse(item).금).근무여부) {
        emptyArray.push('금')
    }
    if (JSON.parse(JSON.parse(item).토).근무여부) {
        emptyArray.push('토')
    }
    if (JSON.parse(JSON.parse(item).일).근무여부) {
        emptyArray.push('일')
    }

    return emptyArray.join(',')
}

// 휴무일
const dayOff = (item: any) => {
    var emptyArray: any = [];
    if (!JSON.parse(JSON.parse(item).월).근무여부) {
        emptyArray.push('월')
    }
    if (!JSON.parse(JSON.parse(item).화).근무여부) {
        emptyArray.push('화')
    }
    if (!JSON.parse(JSON.parse(item).수).근무여부) {
        emptyArray.push('수')
    }
    if (!JSON.parse(JSON.parse(item).목).근무여부) {
        emptyArray.push('목')
    }
    if (!JSON.parse(JSON.parse(item).금).근무여부) {
        emptyArray.push('금')
    }
    if (!JSON.parse(JSON.parse(item).토).근무여부) {
        emptyArray.push('토')
    }
    if (!JSON.parse(JSON.parse(item).일).근무여부) {
        emptyArray.push('일')
    }

    return emptyArray.join(',')
}

// 주간 근무일(임금명세서)
const wageDayOn = (item: any) => {
    var emptyArray: any = [];
    if (JSON.parse(item.월).근무여부) {
        emptyArray.push('월')
    }
    if (JSON.parse(item.화).근무여부) {
        emptyArray.push('화')
    }
    if (JSON.parse(item.수).근무여부) {
        emptyArray.push('수')
    }
    if (JSON.parse(item.목).근무여부) {
        emptyArray.push('목')
    }
    if (JSON.parse(item.금).근무여부) {
        emptyArray.push('금')
    }
    if (JSON.parse(item.토).근무여부) {
        emptyArray.push('토')
    }
    if (JSON.parse(item.일).근무여부) {
        emptyArray.push('일')
    }

    return emptyArray.join(',')
}

// 휴무일(임금명세서)
const wageDayOff = (item: any) => {
    var emptyArray: any = [];
    if (!JSON.parse(item.월).근무여부) {
        emptyArray.push('월')
    }
    if (!JSON.parse(item.화).근무여부) {
        emptyArray.push('화')
    }
    if (!JSON.parse(item.수).근무여부) {
        emptyArray.push('수')
    }
    if (!JSON.parse(item.목).근무여부) {
        emptyArray.push('목')
    }
    if (!JSON.parse(item.금).근무여부) {
        emptyArray.push('금')
    }
    if (!JSON.parse(item.토).근무여부) {
        emptyArray.push('토')
    }
    if (!JSON.parse(item.일).근무여부) {
        emptyArray.push('일')
    }

    return emptyArray.join(',')
}

var MakeDateForm = function (time: any) {
    var min = parseInt(time);
    var days = Math.floor(min / 60 / 24)
    var hours = Math.floor((min - (days * 60 * 24)) / 60);
    var mins = min - (days * 60 * 24) - (hours * 60);

    var daysStr = days;
    var hourStr = (hours > 9) ? hours : '0' + hours
    var minStr = (mins > 9) ? mins : '0' + mins

    if (hourStr === "00" || minStr === "00") {
        return '-'
    }
    else if (hourStr === "00" && minStr !== "00") {
        return minStr + "분"
    }
    else if (hourStr !== "00" && minStr === "00") {
        return hourStr + "시간"
    }
    else {
        return hourStr + '시간 ' + minStr + '분'
    }
}

const sendStatusWage = (item: any) => {
    switch (item) {
        case 0:
            return "발송전"
        case 1:
            return "발송보류"
        case 2:
            return "발송전(거래처)"
        case 3:
            return "발송보류(거래처)"
        case 4:
            return "확인전(근로자)"
        case 5:
            return "확인완료(근로자)"
        case 9:
            return "요청"
    }
}

const KorMoneyParse = (num: any) => {
    var x = new Array("", "일", "이", "삼", "사", "오", "육", "칠", "팔", "구", "십");
    var y = new Array("", "십", "백", "천", "", "십", "백", "천", "", "십", "백", "천", "", "십", "백", "천");
    var han = "";
    var str = "";
    var result = "";
    for (let i = 0; i < num.length; i++) {
        str = "";
        han = x[num.charAt(num.length - (i + 1))];
        if (han != "") str += han + y[i];
        if (i == 4) str += "만";
        if (i == 8) str += "억";
        if (i == 12) str += "조";
        if (i == 16) str += "경";

        result = str + result;
    }

    if (num != 0) result = result + "원";
    return result;
}

// date 객체  moment 형식으로
const getFormatDate = (date: any) => {
    var year = date.getFullYear();
    var month = 1 + date.getMonth();
    month = month >= 10 ? month : "0" + month;
    var day = date.getDate();
    day = day >= 10 ? day : "0" + day;

    return year + "-" + month + "-" + day;
};
const weekOfMonth = (m: Moment) => m.week() - moment(m).startOf('month').week() + 1;

const inputNumberFormat = (e: any, dispatch: any) => { // 입력값을 숫자(,)가 붙은 형식으로 변환함
    dispatch({ name: e.target.name, value: commaNumber(e.target.value) });
}

const removeChar = (e: any) => {   // 문자의 경우 삭제하고 숫자만 입력받게 하는 함수
    var keyID = (e.which) ? e.which : e.keyCode;

    if (keyID == 8 || keyID == 46 || keyID == 37 || keyID == 39) {
        return;
    } else { //숫자만 입력 
        e.target.value = e.target.value.replace(/[^0-9]/g, "");
    }
}




const DateToStringTime = (time: Date) => { // Date 형식을 time 스트링형식으로 바꿈

    let valid = moment(time, 'YYYY-MM-DD HH:MM:SS', true).isValid()
    if (valid === true) {

        return time.getHours().toString().padStart(2, '0') + ":" + time.getMinutes().toString().padEnd(2, '0');

    } else {
        return '-'
    }
}

export {
    commaNumber,
    unCommaNumber,
    companyNumber,
    phoneNumber,
    dayOn,
    dayOff,
    wageDayOn,
    wageDayOff,
    MakeDateForm,
    sendStatusWage,
    KorMoneyParse,
    getFormatDate,
    weekOfMonth,
    inputNumberFormat,
    removeChar,
    residentFirstNumber,
    DateToStringTime,
}