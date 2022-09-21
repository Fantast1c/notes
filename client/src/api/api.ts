import axios from "axios";

export const getNotesAPI = () => {
    return axios.get(`http://localhost:3001`)
        .then(response => {
            return response.data;
        ;})
}

export const postNotesAPI = (payload:any) => {
    debugger
    return axios.post(`http://localhost:3001`, payload)
        .then(response => {
            return response.data;
        ;})
}