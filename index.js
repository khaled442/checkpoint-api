const express=require('express')
const app = express()
const fs =require('fs')


var today = new Date();
var date = today.getFullYear()+'-'+ (today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours()+ "1"+ today.getUTCMinutes()+ "1"+ today.getSeconds();
var day = today.getDay();
var dateTime = day+' '+date+' '+time;
var hour = today.getHours();

const checkDate= (req,res,next) =>{
    (day >=1 && day <= 5) && (hour >= 9 && hour <= 16) ?
    next():
    res.send("<h1>We Are Closed</h1>")
}
app.use(checkDate);


app.use(express.static('public'))
app.get('/', (req,res) => {
    fs.readFile('./public/Home.html', 'utf-8', (err,data)=> {
        err ? console.log(err) : res.send(data)
    })
    
})
app.get('/service', (req,res) => {
    fs.readFile('./public/OurService.html', 'utf-8', (err,data)=> {
        err ? console.log(err) : res.send(data)
    })
    
})
app.get('/Contact', (req,res) => {
    fs.readFile('./public/ContactUs.html', 'utf-8', (err,data)=> {
        err ? console.log(err) : res.send(data)
    })
    
})




const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, (err)=> err ? console.log(err): console.log(`service is runing on port ${PORT}`))