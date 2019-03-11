// Decorator 修饰器是一个函数，用来修改类的行为 扩展类的功能
// 第三方库修饰器  core-decorators  
{
  let readonly=function(target,name,descriptor){
    descriptor.writable = false // 不能写
    return descriptor
  }
  class Test {
    @readonly
    time(){
      return '2017'
    }
  }
  let test = new Test()
  // test.time = function() {
  //   console.log("rest time")
  // }
  console.log(test.time())
}

{
  // 静态属性
  let typename = function(target,name,descriptor){
    target.myname = 'hello'
  }

  @typename
  class Test{

  }
  let test = new Test()
  console.log(Test.myname)
}

{
  let log = (type)=>{
    return function(target,name,descriptor){
      let src_method = descriptor.value
      descriptor.value = (...arg)=>{
        src_method.apply(target,arg)
        console.log(`log ${type}`)
      }
    }
  }
  class AD{
    @log('show')
    show() {
      console.info('ad is show')
    }
    @log('click')
    click() {
      console.info('ad is click')
    }
  } 
  let ad = new AD()
  ad.show()
  ad.click()
}