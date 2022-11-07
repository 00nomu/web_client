import axios from "axios";

const config = {
    headers: {
        "content-type": "multipart/form-data",
    },
};

export const axiosFileUploadHandler = async (
    customerCode: any,
    fileName: any,
    fileWhere: any,
    fileKinds: any,
    fileObject: any,

) => {
    const formData = new FormData();
    formData.append("file_customer_code", customerCode);
    formData.append("file_worker_code", "");
    formData.append("file_name", fileName);
    formData.append("file_where", fileWhere)
    formData.append("file_kinds", fileKinds);
    formData.append("file_object", fileObject);

    await axios.post('/java/file/upload', formData, config)
}