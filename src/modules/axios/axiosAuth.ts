import axios from "axios";
import router from "next/router";

export const axiosLoginHandler = async (
    url: string,
    method: any,

    data: any,
) => {
    return await axios(url, { method: method, data: data })
        .then(({ data }) => {
            return data.success;
        })
}

export const axiosLogoutHandler = async (
) => {
    await axios.get('/java/auth/web/logout').then(({ data }) => {
        if (data.success)
            router.push('/');
    })
}

// export const axiosEditProfileHandler = async (
//     state: any,
// ) => {
//     await axios.post('/api/session/edit', { where: state.user_id, content: state })
//         .then(({ data }) => {
//             if (data.success) {
//                 router.push('/');
//                 alert('수정이 완료되었습니다. 다시 로그인해주세요.');
//             }
//         })
// }