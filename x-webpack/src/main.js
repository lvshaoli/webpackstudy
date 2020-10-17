import "./main.css"
import createHeading from './heading.js'
import icon from './123.png'

const heading = createHeading()

const img = new Image();
img.src = icon;

document.body.append(img)

document.body.append(heading)