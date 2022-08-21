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
type setTagAT = {
    type:"SET-TAG"
}
type filterOnTagAT = {
    type:"SET-FILTER-TAG"
    index:number
}
type unionType = addNoteAT | editNoteAT | deleteNoteAT | setTagAT | filterOnTagAT

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
        case "SET-TAG":{
    let stateCopy =  {
                ...state,
                tags: state.notes.map(n=>
                    n.title.match(/#\w+/gm)
                    || n.content.match(/#\w+/gm))
                    .flat()
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

export const addNoteAC = (title:string, content:string) =>({type:"ADD-NOTE", title, content})
export const editNoteAC = (title:string, content:string, id:number) =>({type:"EDIT-NOTE", title, content, id})
export const deleteNoteAC = (id:number) =>({type:"DELETE-NOTE", id})
export const setTagAC = () =>({type:"SET-TAG"})
export const setFilterOnTagAC = (index:number) =>({type:"SET-FILTER-TAG", index})