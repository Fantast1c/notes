type addNoteAT = {
    type:"ADD-NOTE"
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
type unionType = addNoteAT | editNoteAT | deleteNoteAT

type notesType = {
    id: number
    title:string
    content:string
}

let initState = {
    notes: [] as Array<notesType>,
    editMode: false
}

export type NotesStateType = typeof initState

export const notesReducer = (state:NotesStateType = initState, action: unionType) => {
    switch (action.type) {
        case "ADD-NOTE": {
            const newNote: notesType = {
                id: Date.now(),
                title: action.title,
                content: action.content
            }
            return {
                ...state,
                notes: [...state.notes, newNote],
            }
        }
        case "EDIT-NOTE":{
            const notes = state.notes.find(t => t.id === action.id)
            if (notes) {
                notes.title = action.title
                notes.content = action.content
            }
            return {...state}
        }

        case "DELETE-NOTE": {
            let stateCopy
            if (state.notes) {
                stateCopy =  {...state, notes: state.notes.filter(n => n.id !== action.id)}
            }
            return stateCopy
        }
        default:
            return state
    }
}

export const addNoteAC = (title:string, content:string) =>({type:"ADD-NOTE", title, content})
export const editNoteAC = (title:string, content:string, id:number) =>({type:"EDIT-NOTE", title, content, id})
export const deleteNoteAC = (id:number) =>({type:"DELETE-NOTE", id})