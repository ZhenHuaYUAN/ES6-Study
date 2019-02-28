// symbol数据类型  这种数据类型提供一个独一无二的值，用这种数据类型生成的值永远都不相等
{
  let a1 = Symbol();
  let a2 = Symbol();
  console.log(a1 === a2)
  let a3 = Symbol.for('a3')
  // 这是a4拿到的就是a3的值
  let a4 = Symbol.for('a3')
  console.log(a3,a4,a3===a4)
}

{
  let a1 = Symbol.for('abc')
  let obj = {
    [a1]:'123',
    'abc':'345',
    'c':456
  }
  console.log(obj)
  // 取不到key值为Symbol类型的值
  for(let [key,value] of Object.entries(obj)){
    console.log(key,value)
  }

  // 只包含Symbol 返回数组
  Object.getOwnPropertySymbols(obj).forEach(function(item){
    console.log(item,obj[item])
  })

  console.log('ownKeys')
  // 都包含 返回数组
  Reflect.ownKeys(obj).forEach(function(item){
    console.log(item,obj[item])
  })
}