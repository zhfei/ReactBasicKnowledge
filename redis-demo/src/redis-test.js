
const {getValue, setValue, getHValue} = require("./RedisHelper")

setValue("age",30);
getValue("age").then((res)=>{
  console.log(res)
})

setValue("today",{"sky":"blue","swater":20,"work":"hangzhou"})
getHValue("today").then((res)=>{
  console.log(res)
})
