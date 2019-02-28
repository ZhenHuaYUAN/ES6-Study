{
  // 简介表达
  let o = 1;
  let k = 2;
  let es5 = {
    o:o,
    k:k
  }
  let es6 ={
    o,
    k
  }
  console.log(es6)

  let es5_method={
    hello:function () {
      console.log('hello')
    }
  }
  let es6_method={
    hello () {
      console.log('hello')
    }
  }
  console.log(es6_method.hello())
}

{
  // 属性表达式
  let a = 'b'
  let es5_obj = {
    a:'c'
  }

  let es6_obj = {
    // 用中括号包起来的表示是一个表达式
    [a]:'c'
  }
  console.log(es5_obj,es6_obj)
}

{
  // 新增对象方法 与===在功能上是一样的
  console.log('字符串',Object.is('abc','abc'))
  // 数组是引用类型，虽然两个数组在值上都是空，但引用的是不同的地址
  console.log('数组',Object.is([],[]))

  // 拷贝  拷贝是浅拷贝，只修改引用地址而不是把所有值拷过去。拷贝的只有对象自身的属性，不会拷贝继承的属性和不可枚举的属性
  console.log('拷贝',Object.assign({a:'a'},{b:'b'}))

  let test = {k:123,o:456}
  for(let [key,value] of Object.entries(test)){
    console.log(key,value)
  }
}

