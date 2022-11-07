// jwt를 json으로 만드는 함수
export const addressCompleteHandler = (
    data: any,
    dispatch: any,
    dispatchData: any,
    setAddressOpen: any,
    setWorkerEditButtonOn?: any,
) => {
    let fullAddress = data.address;
    let extraAddress = '';
    if (data.addressType === 'R') {
        if (data.bname !== '') {
            extraAddress += data.bname;
        }
        if (data.buildingName !== '') {
            extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
        }
        fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
    }

    //fullAddress -> 전체 주소반환
    dispatch({ name: dispatchData, value: fullAddress });
    setAddressOpen(false);
    if (setWorkerEditButtonOn) {
        setWorkerEditButtonOn(true);
    }
}