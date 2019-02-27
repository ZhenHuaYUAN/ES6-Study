// ES6中的函数
{
  // 函数默认值 会被传入值覆盖.有默认值的后面不能再有没有默认值的形参
  function test(x=1,y = 'world'){
    console.log('默认值',x,y)
  }
  test()
  test('hello','123')
}

{
  
  let x = 'test'
  function test2(x,y=x){
    console.log('作用域',x,y)
  }
  function test3(c,y=x){
    console.log('作用域',x,y)
  }
  test2('kill')
  test3('kill')
}

{
  // res参数 ...后面紧跟一个变量。把一系列的参数转成了数组   res参数之后不能再有其他参数了
  function test4(...arg){
    for(let v of arg){
      console.log('rest',v)
    }
  }
  test4(1,2,3,4,5,'a',[2,3])
}

{
  // 把数组拆成离散的值
  console.log(...[1,2,4])
}

{
  // 箭头函数 arrow函数名，v参数（没有参数时用一个空的圆括号），v*2函数体，函数返回至
  let arrow = v=>v*2
  console.log('arrow',arrow(3))

  let arrow2 = () => 5;
  console.log('arrow2',arrow2())
}

{
  // 尾调用 函数的最后一句话是不是一个函数  提升性能
  function tail(x){
    console.log('tail', x)
  }
  function fx(x){
    return tail(x) // 尾调用 
  }
  fx(123)

}