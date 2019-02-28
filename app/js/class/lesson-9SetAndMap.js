  // Set WeekSet Map WeekMap
{
  let list = new Set()
  list.add(5)
  list.add(7)
  console.log(list.size)
}

{
  let arr = [1,2,3,4]
  // 会将数组转换为set
  let list = new Set([arr])
  console.log(list)
}

{
  let list = new Set();
  list.add(1)
  list.add(3)
  list.add(1)
  console.log(list)
  let arr = [1,2,3,1,2,'2']
  let list2 = new Set(arr)
  console.log('去重',list2)
}

{
  // set的方法
  let list = new Set()
  list.add(1)
  list.add(2)
  list.add(3)
  console.log('delete',list.delete(1))
  console.log('has',list.has(1),list.has(2))
  list.clear()
  console.log('clear',list)
}

// {
//   // set的遍历
//   let list = new Set()
//   list.add(3)
//   list.add(4)
//   list.add(53)
//   for(let key of list.keys()){
//     console.log(key)
//   }
//   for(let value of list){
//     console.log(value)
//   }
//   list.forEach(function(item){
//     console.log(item)
//   })
// }

{
  //WeakSet
  let weakList = new WeakSet()
  // WeakSet的元素只能是对象，对象都是弱引用，不会检测这个对象有没有在其他地方用过，不会和垃圾回收机制挂钩。有些Set的属性和方法没有
  let arg = {'a':1}
  weakList.add(arg)
  console.log(weakList)
}

{
  // map
  let map = new Map();
  let arr = [1,2,3]
  map.set(arr,1)
  console.log(map,map.get(arr))
}

{
  let map = new Map([['a',123],['b',456]])
  console.log(map)
  console.log('size',map.size)
  map.delete('a')
  console.log('delete',map)
  map.clear()
  console.log(map)
}

{
  let weakMap = new WeakMap()
  let o = {}
  weakMap.set(o,123)
  console.log(weakMap)
} 