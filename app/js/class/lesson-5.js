// 数组新增特性
{
  //Array.of把一组数据变量转化为数组
  let arr = Array.of(3,4,7,8,'11')
  console.log(arr)
  // 不传任何参数的时候就是个空数组
  let emp = Array.of()
  console.log(emp)
}

{
  // 把一些伪数组或者是集合转换为真正的数组
  let p = document.querySelectorAll('p')  //去页面上的所有p标签
  let pArr = Array.from(p)
  console.log(p,pArr)
  pArr.forEach(function(item){
    console.log(item.textContent)
  })

  // 还有类似于映射（map）的用法  第二个参数是一个函数，把第一个参数遍历了，并生成了新的结果
  console.log(Array.from([1,3,5],function(item){return item*2}))
}

{
  // 填充数组  把数组里的所有值都变为fill里的内容  当有多个参数时，第二个参数为替换开始的位置，第三个为替换的结束位置，替换不包含结束位置
  console.log('fill',[1,'a',undefined].fill(7))
  console.log('fill,pos',['a','b','c'].fill(7,1,2))
}

{
  // 遍历
  // keys返回下标集合
  // for(let index of [1,2,3,'c','kk'].keys()){
  //   console.log(index)
  // }

  // values返回对应值
  // for(let value of [1,2,3,'c','kk'].values()){
  //   console.log(value)
  // }

  // entries返回下标和索引
  for(let [index, value] of [1,2,3,'c','kk'].entries()){
    console.log(index,value)
  }
}

{
  // 在当前数组内部，将指定位置的一个成员复制到其他位置上  第一个参数：从哪个位置开始替换，第二个：从哪个位置开始读取数据，第三个：从哪个位置截止
  console.log([1,2,3,4,5].copyWithin(0,2,4))
}

{
  // 查找
  var arr = [1,2,3,'a',2,4,5]
  // 只找出第一个符合条件的数组成员
  console.log(arr.find(function(item){return item>3}))
  console.log(arr.findIndex(function(item){return item>3}))
}

{
  // 是否包含
  console.log('number',[1,2,NaN].includes(1))
}