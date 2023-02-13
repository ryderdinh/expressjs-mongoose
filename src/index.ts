import './lib/db'
import express from 'express'
import countryRoutes from './routes/country'

const app = express()
const port = process.env.PORT || 3333

app.use(express.json())
app.use(express.raw({ type: 'application/vnd.custom-type' }))
app.use(express.text({ type: 'text/html' }))

app.get('/', async (req, res) => {
	res.json({ message: 'Please visit /countries to view all the countries' })
})
app.post('/', function (req, res) {
	console.log(req)
	res.redirect(`https://chat.openai.com/chat`)
})

app.use('/countries', countryRoutes)

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})
