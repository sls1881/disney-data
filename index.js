//Import app
const { app } = require('./app.js')

//Port, let it choose
const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`I work! http://localhost:${port}`)
})