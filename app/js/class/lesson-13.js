
// // Promise 异步编程的解决方案
// // 异步：有一个函数A，A执行完后执行B。传统通过回调和事件触发的方式

// {
//   // ES5中回调
//   let ajax = function (callback) {
//     console.log('执行')
//     setTimeout(function () {
//       callback && callback.call()
//     }, 1000)
//   }
//   ajax(function () {
//     console.log('timeout1')
//   })
// }

// {
//   // promise写法
//   let ajax = function () {
//     console.log('执行2')
//     return new Promise(function (resolve, reject) {
//       // resolve 执行下步操作，reject中断操作
//       setTimeout(function () {
//         resolve()
//       }, 1000)
//     })
//   }
//   // .then的函数体就是下一步要执行的内容
//   ajax().then(function () {
//     console.log('Promist', 'timeout2')
//   })
// }

// {
//   // 多步骤串行过程
//   let ajax = function () {
//     console.log('执行3')
//     return new Promise(function (resolve, reject) {
//       // resolve 执行下步操作，reject中断操作
//       setTimeout(function () {
//         resolve()
//       }, 1000)
//     })
//   }
//   // .then的函数体就是下一步要执行的内容
//   ajax()
//     .then(function () {
//     console.log('Promise2', 'timeout2')
//     return new Promise(function(resolve,reject){
//       setTimeout(function(){
//         resolve()
//       },2000)
//     })
//   })
//     .then(function(){
//     console.log('Promise3','timeout3')
//   })
// }

// {
//   // 捕获错误
//   let ajax = function(num) {
//     console.log('执行4')
//     return new Promise(function(resolve,reject){
//       if(num>5){
//         resolve()
//       }else{
//         throw new Error('出错了')
//       }
//     })
//   }

//   ajax(3).then(function(){
//     console.log(6)
//   }).catch(function(err){
//     console.log('catch',err)
//   })

// }

{
  // 所有图片都加载完后再加载页面，同步加载，都加载成功后在加载到页面上
  function loadImg(src){
    return new Promise((resolve,reject)=>{
      let img = document.createElement('img');
      img.src = src
      img.onload=function(){
        resolve(img)
      }
      img.onerror=function(err){
        reject(err)
      }
    })
  }

  function showImgs(imgs){
    imgs.forEach(function(img){
      document.body.appendChild(img)
    })
  }
  // 表示把多个Promise实例当做一个Promise实例。当里面的所有Promise都完成后才会触发这个Promise的then方法
  // Promise.all([
  //   loadImg('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551956542387&di=8c27217d5f271f8de56c1a7b991efab9&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201803%2F27%2F20180327212123_jhosw.jpeg'),
  //   loadImg('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551956542387&di=bb175c2641264a374fbd4948fc0c536c&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201503%2F12%2F20150312164217_NV5nw.jpeg'),
  //   loadImg('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551956542386&di=abbcf67120db9c8dd96aa8f1c1973d23&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201408%2F19%2F20140819122137_mUtYd.png')
  // ]).then(showImgs)
}

{
  // 只用加载一个。哪个到了就显示哪个
  function loadImg(src){
    return new Promise((resolve,reject)=>{
      let img = document.createElement('img');
      img.src = src
      img.onload=function(){
        resolve(img)
      }
      img.onerror=function(err){
        reject(err)
      }
    })
  }

  function showImgs(img){
    let p = document.createElement('p')
    p.appendChild(img)
    document.body.appendChild(p)
  }
  
  Promise.race([
    loadImg('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551956542387&di=bb175c2641264a374fbd4948fc0c536c&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201503%2F12%2F20150312164217_NV5nw.jpeg'),
    loadImg('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551956542387&di=8c27217d5f271f8de56c1a7b991efab9&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201803%2F27%2F20180327212123_jhosw.jpeg'),
    loadImg('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551956542386&di=abbcf67120db9c8dd96aa8f1c1973d23&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201408%2F19%2F20140819122137_mUtYd.png')
  ]).then(showImgs)

}