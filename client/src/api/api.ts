import axios from "axios";

export const getNotesAPI = () => {
    return axios.get(`http://localhost:3001`)
        .then(response => {
            return response.data;
        ;})
}

export const postNotesAPI = (payload:any) => {
    return axios.post(`http://localhost:3001`, payload)
        .then(response => {
            return response.data;
        ;})
}

export const putNoteAPI = (payload:any) => {
    return axios.put(`http://localhost:3001`,  payload)
        .then(response => {
            return response.data;
        ;})
}

export const deleteNoteAPI = (payload:any) => {
    return axios.delete(`http://localhost:3001`, {data: payload})
        .then(response => {
            return response.data;
        ;})
}