const express = require('express')
const app = express()

app.use(express.json())

let notas = [
    {
    id: 0,
    nombre: 'Lucas',
    texto: 'Prueba de texto',
},
    {
    id: 1,
    nombre: 'Lucas',
    texto: 'Prueba de texto',
},
    {
    id: 2,
    nombre: 'Lucas',
    texto: 'Prueba de texto',
},
    {
    id: 3,
    nombre: 'Lucas',
    texto: 'Prueba de texto',
}
]

// const app = http.createServer((require, response) =>{
//     response.writeHead(200, { 'Content-Type': 'application/json'})
//     response.end(JSON.stringify(Notas))
// })

app.get('/', (request, response) => {
    response.send('<h1>Probando API</h1>')
})

app.get('/api/notas', (request, response) => {
    response.json(notas)
})

app.get('/api/notas/:id', (request, response) => {
    const id = Number(request.params.id)
    const nota = notas.find(nota => nota.id === id)
    response.send(nota)
})

app.delete('/api/notas/:id', (request, response) => {
    const id = Number(request.params.id)
    notas = notas.filter(nota => nota.id !== id)
    response.status(204).end()
})

app.post('/api/notas', (request, response) => {
    const nota = request.body
    console.log(nota)
    const ids = notas.map(nota => nota.id)
    const maxId = Math.max(...ids)
    
    const newNota = {
        id: maxId + 1,
        nombre: nota.nombre,
        texto: nota.texto
    }

    notas = [...notas, newNota]

    response.json(newNota)
})


const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
