import axios from "axios";

export const getNotesAPI = () => {
    debugger
    return axios.get(`http://localhost:3001`)
        .then(response => {
            return response.data;
        ;})
}

export const postNotesAPI = (id:number, title:string, content:string) => {
    return axios.post(`http://localhost:3001`)
        .then(response => {
            return response.data;
        ;})
}