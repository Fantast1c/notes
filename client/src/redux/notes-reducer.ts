import {getNotesAPI, postNotesAPI, putNoteAPI, deleteNoteAPI} from "../api/api"

type postNoteAT = {
    type:"POST-NOTE"
    id:number
    title:string
    content:string
}
type editNoteAT = {
    type:"EDIT-NOTE"
    title:string
    content:string
    id:number
}
type deleteNoteAT = {
    type:"DELETE-NOTE"
    id:number
}
type setTagAT = {
    type:"SET-TAG"
}
type filterOnTagAT = {
    type:"SET-FILTER-TAG"
    index:number
}
type setNotesAT ={
    type:"SET-NOTES"
    payload: any
}

type unionType = postNoteAT | editNoteAT | deleteNoteAT | setTagAT | filterOnTagAT | setNotesAT

type notesType = {
    id: number
    title:string
    content:string
}

let initState = {
    notes: [] as Array<notesType>,
    tags: []
}

export type NotesStateType = typeof initState

export const notesReducer = (state:NotesStateType = initState, action: unionType) => {
    switch (action.type) {
        case "POST-NOTE":{
            return state
        }
        case "EDIT-NOTE":{
            let stateCopy = {...state}
            const notes = stateCopy.notes.find(t => t.id === action.id)
            if (notes) {
                notes.title = action.title
                notes.content = action.content
            }
            return stateCopy
        }
        case "DELETE-NOTE": {
            let stateCopy
            if (state.notes) {
                stateCopy =  {...state, notes: state.notes.filter(n => n.id !== action.id)}
            }
            return stateCopy
        }
        case "SET-NOTES":{
            let stateCopy;
            stateCopy = {...state, notes:action.payload}
            
            return stateCopy
        }
        case "SET-TAG":{

            let titleToTag = state.notes.map(n=>
                n.title.match(/#\w+/gm)).flat()
            let contentToTag = state.notes.map(n=>
                n.content.match(/#\w+/gm)).flat() 
                let tagCopy = []
                tagCopy.push(...titleToTag)
                tagCopy.push(...contentToTag)
            
    let stateCopy =  {
                ...state,
                tags: tagCopy
            }

           let uniqueTag = {...state,
           tags: stateCopy.tags
               .filter((el, index)=> {return stateCopy.tags.flat().indexOf(el) === index})
               .filter(el => el !== null)
           }
            return uniqueTag
        }
        case "SET-FILTER-TAG" :{
            let stateCopy = {...state}
            let tag = stateCopy.tags.find((elem, index) => index === action.index)
            // @ts-ignore
            let filtered = stateCopy.notes.filter((el)=>el.title.match(/#\w+/gm) == tag || el.content.match(/#\w+/gm) == tag)
            // @ts-ignore
            console.log(...stateCopy.notes.map((el)=>el.title.indexOf(tag) !== -1))
            return {...stateCopy, notes:  filtered}
        }
        default:
            return state
    }
}

export const setNotesAC = (payload:any) =>({type:"SET-NOTES", payload})
export const postNoteAC = (id:number,title:string, content:string) =>({type:"POST-NOTE",id, title, content})
export const editNoteAC = (id:number, title:string, content:string) =>({type:"EDIT-NOTE", title, content, id})
export const deleteNoteAC = (id:number) =>({type:"DELETE-NOTE", id})
export const setTagAC = () =>({type:"SET-TAG"})
export const setFilterOnTagAC = (index:number) =>({type:"SET-FILTER-TAG", index})

export const getNoteTC = () => async (dispatch: any) => {
    let response = await getNotesAPI()
    dispatch(setNotesAC(response))
    dispatch(setTagAC())
}
export const postNoteTC = (title:string, content:string ) => async (dispatch: any) => {
    let payload = {id:Date.now(), title, content}
    let response = await postNotesAPI(payload)
    dispatch(setNotesAC(response))
    dispatch(setTagAC())       
}
export const putNoteTC = (id:number, titleData: string, contentData: string) => async (dispatch:any, getState: any) => {
    dispatch(editNoteAC(id, titleData, contentData))
    dispatch(setTagAC())
    let response = await putNoteAPI(getState().notes.notes)
    dispatch(setNotesAC(response))
}
export const deleteNoteTC = (id:number) => async (dispatch:any, getState: any) => {
    dispatch(deleteNoteAC(id))
    let response = await deleteNoteAPI(getState().notes.notes)
    dispatch(setNotesAC(response))
    dispatch(setTagAC())
}
export const filterByTagTC = (index: number) => async (dispatch:any, getState: any) => {
    let response = await getNotesAPI()
    dispatch(setNotesAC(response))
    dispatch(setFilterOnTagAC(index))

}