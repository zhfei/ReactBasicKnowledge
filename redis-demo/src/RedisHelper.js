
const redis = require("redis");
const util = require('util')
// const bluebird = require('bluebird')
// //存在用户名：密码时
// // format redis[s]://[[username][:password]@][host][:port][/db-number]:
// const client = redis.createClient({
//   url: "redis://root:0059ssxxSS11@1.xxx.xxx.159:6379",
// });
//
// //不存在用户名时，password为鉴权密码
// const client = redis.createClient({
//   url: "redis://:password1@192.168.0.1:6379",
// });

//链接配置
const options = {
  url:'redis://:123456@1.15.55.28:15001'
};

const client = redis.createClient(options)
// 使用bluebird将redis中的所有异步方法包括一层Asnyc
// const client = bluebird.promisifyAll(redis.createClient(options))

//监听错误事件
client.on("error", (err) => {
  console.log("redis error", err);
});


(async ()=>{
  //建立链接
  await client.connect();

  //写数据
  await client.set("city",'hangzhou'+Date.now())
  //读数据
  const value = await client.get("city")
  console.log("value: "+value)

  //关闭链接
  // await client.quit()                //关闭连接 quit可以确保在连接销毁之前，挂起的命令被发送到redis
  // await client.disconnecting()       //强制关闭连接 挂起的命令可能没有被发送到redis
})()


//添加导出方法
// const getAsync = util.promisify(client.get).bind(client)  无效，使用Promise对象创建

const getAsync = (key) => {
  return new Promise((resolve, reject) => {
    client.get(key)
        .then((res) => {
            resolve(res);
        })
        .catch((err)=>{
            reject(err);
        });
  });
}

const getValue = (key) => {
  return getAsync(key)
}
// const getValue = (key) => {
//   //bluebird内部提供了getAsync方法，它是把get方法封了一层Promise
//   return client.getAsync(key)
// }

const setValue = (key, value) => {
  if (typeof value === 'undefined' || value == null || value === ''){
    return
  } else if (typeof value === 'string') {
    return client.set(key, value)
  } else if (typeof value === 'object') {
    console.log(value)
    Object.keys(value).forEach((item) => {
      //如果传入的是{}对象，按hash集合保存
      client.hSet(key,item,value[item],redis.print)
    })
  }
}

const getHValue = (key) => {
  return new Promise((resolve, reject) => {
    client.hGetAll(key).then((res)=>{
      resolve(res);
    }).catch((err)=>{
      reject(err)
    })
  })
}

exports.setValue = setValue;
exports.getValue = getValue;
exports.getHValue = getHValue;
exports.client = client;






