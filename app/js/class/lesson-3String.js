{
  // 字符Unicode表示方法
  console.log('a','\u0061')
  console.log('s','\u20BB7')
  // 用大括号将unicode包起来，可以显示大于0XFFFF的字符
  console.log('s','\u{20BB7}')
}

{
  // let s = '𠮷'
  // console.log('length',s.length)
  // // 取对应位置的字符
  // console.log('0',s.charAt(0))
  // console.log('1',s.charAt(1))
  // // 取对应位置的码值 字符的Unicode编码码值
  // console.log('0',s.charCodeAt(0))
  // console.log('1',s.charCodeAt(1))
  
  // let s1 = '𠮷a'
  // console.log('length',s1.length)
  // // 取对应位置的字符
  // console.log('0',s1.codePointAt(0))
  // console.log('0',s1.codePointAt(0).toString(16))
  // console.log('1',s1.codePointAt(1))
  // console.log('1',s1.codePointAt(1).toString(16))
  // // 取对应位置的码值 字符的Unicode编码码值
  // console.log('0',s1.charCodeAt(0))
  // console.log('1',s1.charCodeAt(1))
}

{
  // es5
  console.log(String.fromCharCode("0x20bb7"))
  // es6  区别在于能否处理大于两个字节的Unicode字符
  console.log(String.fromCodePoint("0x20bb7"))
}

// {
//   // 字符串遍历器接口
//   let str = "\u{20bb7}abc"
//   // es5
//   for(let i=0; i<str.length; i++){
//     console.log(str[i])
//   }
//   // es6
//   for(let code of str){
//     console.log('es6',code)
//   }
// }

{
  // 判断字符串中是否包含某些字符，是否已某些字符为起始或截止
  let str = 'string'
  console.log('includes',str.includes('e'))
  console.log('start',str.startsWith('str'))
  console.log('end',str.endsWith('ng'))
}

{
  let str = 'abc'
  // 重复
  console.log(str.repeat(5))
}

{
  // 模板字符串
  let name = 'list'
  let info = 'helloWorld'
  let m = `I am ${name},${info}`
  console.log(m)
}

{
  //  padStart(长度，补的值) 向前补  es7草案中的接口，要使用需要安装babel-polyfill
  console.log('1'.padStart(4,'0'))
  // 向后补
  console.log('1'.padEnd(4,'0'))
}

{
  // 标签模板
  let user = {
    name: 'list',
    info: 'helloWorld'
  }
  console.log(abc `I am ${user.name},${user.info}`)
  function abc(s,v1,v2){
    console.log(s,v1,v2)
    return s+v1+v2
  }
}


{
  // 不用.raw \n会自动转义为换行  raw对所有\进行了转义，即在\前又加了一个\
  console.log(String.raw`Hi\n$(1+2)`)
  console.log(`Hi\n$(1+2)`)
} 