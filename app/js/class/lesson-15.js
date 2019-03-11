// Generator 异步编程的解决方案
{
  let tell = function* () {
    yield 'a'
    yield 'b'
    return 'c'
  }
  // Generator函数返回一个Iterator接口
  let k = tell()
  console.log(k.next())
  console.log(k.next())
  console.log(k.next())
  console.log(k.next())
}

{
  let obj = {}
  obj[Symbol.iterator]=function* () {
    yield 1
    yield 2
    yield 3
  }
  console.log(obj)
  for(let key of obj) {
    console.log(key)
  }
}

{
  // 状态机。需要用a、b、c三种状态来描述一个
  let state = function* (){
    while(1){
      yield 'A'
      yield 'B'
      yield 'C'
    }
  }
  let statues = state()
  console.log(statues.next())
  console.log(statues.next())
  console.log(statues.next())
  console.log(statues.next())
}

{
  let draw = function(count){
    console.log(`剩余${count}次`)
  }
  let residue = function* (count) {
    while (count > 0) {
      count--
      yield draw(count) 
    }
  }

  let star = residue(5)
  let btn = document.createElement('button')
  btn.id = 'start'
  btn.textContent = '抽奖'
  document.body.appendChild(btn)
  document.getElementById('start').addEventListener('click',function(){
    star.next()
  },false)
}