const express = require('express')
const app = express()
const cors = require('cors')
const corsOptions ={
    origin: '*',
    credentials:true,
    optionStatusSuccess:200,
}
const PORT = 8000

app.use(cors(corsOptions))

const rappers = {
    '21 savage' : {
        'age' : 29,
        'birthname' : 'Shéyaa Bin Abraham-Joseph',
        'birthlocation' : 'London, England'
    },
    'chance the rapper' : {
        'age' : 29,
        'birthname' : 'Chancelor Johnathan Bennett',
        'birthlocation' : 'Chicago, Illinois'
    },
    'dylan' : {
        'age' : 29,
        'birthname' : 'Dylan',
        'birthlocation' : 'Dylan'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName', (req,res) => {
    const rappersName = req.params.rapperName.toLowerCase()
    if (rappers[rappersName]){
        res.json(rappers[rappersName])
    }else{
        res.json(rappers['dylan'])
    }
})

app.listen(process.env.PORT || PORT, ()=> {
    console.log(`The server is running on port ${PORT}! You better go catch it!`)
})