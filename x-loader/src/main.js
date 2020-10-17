import md from './about.md'
const main = document.createElement('h2');
main.textContent = "张三11";
const html = document.createElement('div');
html.innerHTML = md;

document.body.append(main)
document.body.append(html)