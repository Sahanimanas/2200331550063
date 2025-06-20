const axios = require('axios');



const getnumber = async(val)=>{
    try{
let number=[];
let oper;
if(val){
    if(val=='e'){oper = "even"} 
    else if(val=='f') oper = "fibo";
    else if(val=='p') oper = 'primes'
    else if(val=='r') oper = 'rand'

}
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJtYW5hc2h2aXNhaGFuaUBnbWFpbC5jb20iLCJleHAiOjE3NTAzOTU1MTQsImlhdCI6MTc1MDM5NTIxNCwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6IjM5OGNlY2RmLTQwMjAtNDJmMS1iMDAwLWQzNGVhNmJiMTZiZCIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6Im1hbmFzaHZpIHNhaGFuaSIsInN1YiI6IjUwNGU1ZDFiLTFkYWUtNDJhZC1hMzc3LWQwMmVlOGNjMzkwYyJ9LCJlbWFpbCI6Im1hbmFzaHZpc2FoYW5pQGdtYWlsLmNvbSIsIm5hbWUiOiJtYW5hc2h2aSBzYWhhbmkiLCJyb2xsTm8iOiIyMjAwMzMxNTUwMDYzIiwiYWNjZXNzQ29kZSI6InJmUXpGUSIsImNsaWVudElEIjoiNTA0ZTVkMWItMWRhZS00MmFkLWEzNzctZDAyZWU4Y2MzOTBjIiwiY2xpZW50U2VjcmV0IjoiVW1TZ25TeUFUZ3JxcHdnUyJ9.EjPAMGOeUKyV803I3RH0XTQcfAqINpMZMZLuPfl7L70";


const {numbers} = await axios.get(`http://20.244.56.144/evaluation-service/${oper}`, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      timeout: 500
    });

   
    console.log("frehdedd", numbers)

// not working

//so demo
return  number = numbers
}
catch(error){
    console.error('not getting number', error );
}
}






module.exports = getnumber