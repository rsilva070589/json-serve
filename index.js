import express from 'express' 
import itens from './data/itens.js'
import itensTipo from './data/itensTipo.js'
import imagens from './data/imagens.js'
import cors from 'cors'
import dadosteste from './data/dadosteste.js' 
import axios from 'axios'

const PORT = process.env.PORT || 5050
const HOST = '0.0.0.0';



const app = express();
app.use(cors())

app.get('/', (req, res) => {
  res.send('Aplicacao Rodando na Porta '+ PORT)
})

app.get('/itens', (req, res) => {
  res.send(itens)
})

app.get('/itenstipo', (req, res) => {
  res.send(itensTipo)
})

app.get('/imagens', (req, res) => {
  res.send(imagens)
})

app.get('/dados', (req, res) => {
  res.send(dadosteste)
})
 
app.post('/dados', function(request, response){
  console.log(request.body);      // your JSON
   response.send(request.body);    // echo the result back
});
 

app.listen(PORT, HOST, console.log('Aplicacao Rodando na Porta ' + PORT));