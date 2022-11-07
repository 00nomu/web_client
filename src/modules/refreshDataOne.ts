import axios from "axios"

const refreshDataOne = async (
    componentTitle: string,
    item: any,
    dispatch: any,
    fileDispatch?: any
) => {
    switch (componentTitle) {
        case "customer":
            // 이미 등록된 파일이 있는지 확인
            await axios.get(`/api/file`, { params: { file_customer_code: item.customer_code } })
                .then(({ data }) => {
                    if (data.success) {
                        fileDispatch({ type: 'listClick', value: data.result })
                    }
                    else {
                        fileDispatch({ type: 'init' })
                    }
                })


            await axios.get('/java/worker/findall', { params: { worker_customer_code: item.customer_code } })
                .then(({ data }) => {
                    dispatch({ type: 'customerListClick', value: item, value2: data.result });
                })
            break;
        default:
            dispatch({ type: "listClick", value: item });
            break;
    }
}

export default refreshDataOne;