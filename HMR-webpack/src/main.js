import createEditor from './editer'
import background from './better.png'
import './global.css'

const editor = createEditor()
document.body.appendChild(editor)

const img = new Image()
img.src = background
document.body.appendChild(img)




if (module.hot) {

    let lastEditor = editor
    module.hot.accept('./editer', () => {
    
        console.log('editor module更新了', lastEditor)
        const value = lastEditor.innerHTML
        console.log('*****', value)
        document.body.removeChild(lastEditor)
        const newEditor = createEditor()
        newEditor.innerHTML = value
        document.body.appendChild(newEditor)
    })
    
    
    module.hot.accept('./better.png', () => {
        img.src = background
    })
}