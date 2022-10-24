const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000


app.use(cors())

app.get('/', (req, res) => {
    res.send('New course are coming soon')
})
app.listen(port,()=> {
    console.log(`Code academy is running....${port}`)
})