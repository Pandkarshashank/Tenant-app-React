const express = require('express')
const app = express()
const port = 4000
const cors = require('cors')
let complaints = [
  {
    complaint:"No Electricity",
    complaint_referer:"Shashank",
    solved: false
  },
  {
    complaint:"Bad Water",
    complaint_referer:"Neha",
    solved: true
  },
  {
    complaint:"Leaking Ceiling",
    complaint_referer:"Shashank",
    solved: true
  },
  {
    complaint:"No Electricity",
    complaint_referer:"Sachin",
    solved: false
  },
  {
    complaint:"No Electricity",
    complaint_referer:"Sok",
    solved: false
  },
]

let tenants = [
  {
    tenant_name:"Shashank",
    flat_no: 456,
    password: "W7SD9"
  },
  {
    tenant_name:"Neha",
    flat_no: 457,
    password: "IAK02"
  },
  {
    tenant_name:"Naamiitaa",
    flat_no: 458,
    password: "OKSN2"
  },
  {
    tenant_name:"Sachin",
    flat_no: 459,
    password: "9IY8W"
  },
  {
    tenant_name:"Sok",
    flat_no: 490,
    password: "P23ES"
  },
  {
    tenant_name:"neha pandkar",
    flat_no:903,
    password: "PAMN2"
  }
]

var corOptions = {
  origin : 'http://localhost:3001/view'
}

app.use(cors(corOptions))

app.get('/', (req, res) => {
  res.send('Welcome to Tenant app API')
})

app.get('/complaint',(req,res)=>{
  res.set('Access-Control-Allow-Origin', '*');
  res.json(complaints)
})

app.post('/complaint',(req,res)=>{
    console.log(req)
    res.set('Access-Control-Allow-Origin', '*');
    res.send("Here")
})

app.get('/view',(req,res)=>{
  res.set('Access-Control-Allow-Origin', '*');
  res.json(tenants)
})

app.post('/view',(req,res)=>{
  console.log(req.body)
  res.set('Access-Control-Allow-Origin', '*');
  tenants.push(req.body)
  res.send("Signup")
})

app.get('/auth',(req,res)=>{
  res.send("Auth console")
})

app.post('/auth',(req,res)=>{
  console.log(req)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port} with url http://localhost:4000/`)
})