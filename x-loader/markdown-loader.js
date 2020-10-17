const mark = require('marked')

module.exports = source => {
    console.log(source)
    const marksource = mark(source)
    return marksource

}