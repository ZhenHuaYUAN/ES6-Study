// 数值处理新增特性
{
  // 二进制和八进制
  // 二进制已0b(0B)开头
  console.log(0b1110111)
  // 八进制已0o(0O)开头
  console.log(0o1234567)
}

{
  // 判断值是不是有尽
  console.log('15',Number.isFinite(15))
  console.log('NaN',Number.isFinite(NaN))
  console.log('1/0',Number.isFinite(1/0))
  // 判断是不是一个数  NaN:Not a Number，非数 表示未定义或不可表示的值。常在浮点数运算中使用。
  console.log('NaN',Number.isNaN(NaN))
  console.log('1',Number.isNaN('1'))
}

{
  // 判断是不是整数
  console.log('1',Number.isInteger(1))
  console.log('1.0',Number.isInteger(1.0))
  console.log('1.1',Number.isInteger(1.1))
  console.log('字符串1',Number.isInteger('1'))
}

{
  // 判断一个数是不是在-2^53 到2^53之间，不包含端点，在js中如果超过这个值，存储值就不准了
  console.log('最大上限',Number.MAX_SAFE_INTEGER)
  console.log('最小下限',Number.MIN_SAFE_INTEGER)
  console.log(Number.isSafeInteger(90071992547409911))
  console.log(Number.isSafeInteger(10))
}

{
  // 判断带小数的整数部分并返回
  console.log('22.99',Math.trunc(22.99))
}

{
  // 判断一个数是正还是负还是0  负数返回-1，0返回0，整数返回1，不是数时返回NaN
  console.log('-5',Math.sign(-5))
  console.log('0',Math.sign(0))
  console.log('5',Math.sign(5))
  console.log('aa',Math.sign('aa'))
}

{
  // 立方根的计算
  console.log('3',Math.cbrt(3))
  console.log('-1',Math.cbrt(-1))
}
