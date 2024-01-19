//Elementos
const notesContainer = document.querySelector("#notes-container")
const noteInput = document.querySelector("#note-content")
const addNoteBtn = document.querySelector(".add-note")

//Funções
const showNotes = ()=> {
    cleanNotes()
    getNotes().forEach((note) => {
        const noteElement = createNote(note.id, note.content, note.fixed)

        notesContainer.appendChild(noteElement)       
    })
}

const cleanNotes = ()=> {
    notesContainer.replaceChildren([])


}

const addNote = ()=> {
    const notes = getNotes()

    const noteObject = {
        id: generationID(),
        content: noteInput.value,
        fixed: false,
    }
    
    const noteElement = createNote(noteObject.id, noteObject.content)

    notesContainer.appendChild(noteElement)

    notes.push(noteObject)

    saveNotes(notes)

    noteInput.value = ""
}


const generationID = ()=> {
    return Math.floor(Math.random() * 5000)
}

const createNote = (id, content,fixed)=> {

    const element = document.createElement("div")
    element.classList.add("note")

    const textarea = document.createElement("textarea")
    textarea.value = content
    textarea.placeholder = "Adicione algum texto..."

    element.appendChild(textarea)

    const pinIcon = document.createElement("i")
    pinIcon.classList.add(...["bi", "bi-pin"])

    element.appendChild(pinIcon)

    const deleteIcon = document.createElement("i")
    deleteIcon.classList.add(...["bi", "bi-x-lg"])

    element.appendChild(deleteIcon)

    const duplicateIcon = document.createElement("i")
    duplicateIcon.classList.add(...["bi", "bi-file-earmark-plus"])

    element.appendChild(duplicateIcon)

    if(fixed) {
        element.classList.add("fixed")
    }

    // Eventos do elemento
    element.querySelector(".bi-pin").addEventListener("click", ()=> {
        toggleFixdNote(id)
    })

    element.querySelector(".bi-x-lg").addEventListener("click", ()=> {
        deleteNote(id,element)
    })

    element.querySelector(".bi-file-earmark-plus").addEventListener("click", ()=> {
        copyNote(id)
    })

    return element
}

const toggleFixdNote = (id)=> {
    const notes = getNotes()

    const targetNote = notes.filter((note) => note.id === id)[0]

    targetNote.fixed = !targetNote.fixed

    saveNotes(notes)

    showNotes()
}

const deleteNote = (id, element)=> {
    const notes = getNotes().filter((note)=> note.id !== id)

    saveNotes(notes)

    notesContainer.removeChild(element)

}

const copyNote = (id)=> {
    const notes = getNotes()

    const targetNote = notes.filter((note)=> note.id === id)[0]

    const noteObject = {
        id: generationID(),
        content: targetNote.content,
        fixed: false,
    }

    const noteElement = createNote(noteObject.id, noteObject.content, noteObject.fixed)

    notesContainer.appendChild(noteElement)

    notes.push(noteObject)

    saveNotes(notes)

}


//Local storage
const getNotes = ()=> {
    const notes = JSON.parse(localStorage.getItem("notes") || "[]")

    const orderedNotes = notes.sort((a,b) => a.fixed > b.fixed ? -1 : 1)

    return orderedNotes
}

const saveNotes = (notes) => {
    localStorage.setItem("notes",JSON.stringify(notes))
}


//Eventos
addNoteBtn.addEventListener("click", ()=> {
    addNote()
})

//inicialização
showNotes()