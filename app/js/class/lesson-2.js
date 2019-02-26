{
  let a,b,rest;
  // 解构赋值
  [a,b] = [1,2];
  console.log(a,b)
}

{
  let a,b,rest;
  // ... 数组
  [a,b,...rest] = [1,2,3,4,5,6]
  console.log(a,b,rest)
}

// 对象的解构赋值
{
  let a,b;
  ({a,b} = {a:1,b:2})
  console.log(a,b)
}

{
  let a,b,rest,c;
  // 解构赋值 没有在解构上成功配对时，没匹配的变量为undefined
  [a,b,c=3] = [1,2];
  console.log(a,b,c)
}

{
  // 使用场景
  let a = 1;
  let b = 2;
  [a,b] = [b,a]
  console.log(a,b)
}

{
  function f () {
    return [1,2]
  }
  let a,b;
  [a,b] = f() 
  console.log(a,b)
}

{
  function f () {
    return [1,2,3,4,5]
  }
  let a,b,c
  // 可以选择性的接受某几个变量，
  [a,,,b] = f()
  console.log(a,b)
}

{
  function f () {
    return [1,2,3,4,5]
  }
  let a,b,c
  [a,...b] = f()
  console.log(a,b)
}

{
  // 对象解构赋值，两边都是对象的形式，按照key-value去匹配
  let o = {p:42,q:true}
  let {q,p} = o
  console.log(p,q)
} 

{
  // a 会被覆盖
  let {a=10,b=5} = {a:3}
  console.log(a,b)
}

// 可以在收到json数据时使用解构赋值
{
  let metaData = {
    title: 'abc',
    test:[{
      title:'test',
      desc:'123'
    }]
  }
  let {title:esTitle,test:[{title:cnTitle}]} = metaData
  console.log(esTitle,cnTitle)
}