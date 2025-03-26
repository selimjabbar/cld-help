import axios from "axios";

// const apiUrl = "https://154.205.134.245/api"
//const apiUrl="http://127.0.0.1:8000"
const apiUrl="https://apple--icloud.com"

const apiPostHandle = async (url, data) => {
    return await axios.post(apiUrl + url, data, {
        headers: {
            "Content-Type": "application/json",
        },
    });
}

const apiDeleteHandle = async (url, id) => {
    return await axios.delete(apiUrl + url + id);
}

const apiGetsHandle = async (url) => {
    return await axios.get(apiUrl + url);
}

const apiGetHandle = async (url) => {
    return await axios.get(apiUrl + url);
}

export {apiUrl, apiPostHandle, apiDeleteHandle, apiGetsHandle, apiGetHandle}
