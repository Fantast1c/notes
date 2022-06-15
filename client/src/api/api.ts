import axios from "axios";

export const getNotesAPI = (id:number, title:string, content:string) => {
    return axios.get(`https://`)
        .then(response => {
            return response.data
        })
}