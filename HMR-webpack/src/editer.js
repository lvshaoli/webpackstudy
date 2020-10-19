
import './editer.css'

export default () => {
    const editorElement = document.createElement('div')
    editorElement.contentEditable = true
    editorElement.className = 'editor'
    editorElement.id = 'editor'
    console.log('12')
    return editorElement
}

