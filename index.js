const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000

app.use(cors())

const courses = require('./Data/CourseList.json')
const courseListItem = require('./Data/CourseDetails.json')

app.get('/courses', (req, res) => {
  res.send(courses)
})
app.get('/courseslist/:id', (req, res) => {
  const id = req.params.id

  const selectedCourseList = courseListItem.filter((cl) => cl.category_id == id)

  res.send(selectedCourseList)
})

app.get('/', (req, res) => {
  res.send('New course are coming soon')
})
app.listen(port, () => {
  console.log(`Code academy is running....${port}`)
})
