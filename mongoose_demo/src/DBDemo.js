const {userModel} = require('./model/userModel')

const user = {
  name:'lucy',
  age: 20,
  email: 'lucy@qq.com'
}

//增
const run = async () => {
  console.log(userModel)
  const data = new userModel(user)
  const result = await data.save()
  console.log(result)
}
// run()

//查
const run1 = async () => {
  console.log(userModel)
  const result = await userModel.find()
  console.log(result)
}
// run1()

//改
const run2 = async () => {
  console.log(userModel)
  const result = await userModel.updateOne({name:'lucy'},{age:21})
  console.log(result)
}
// run2()
//删
const run3 = async () => {
  console.log(userModel)
  const result = await userModel.deleteOne({name:'lucy'})
  console.log(result)
}
run3()


