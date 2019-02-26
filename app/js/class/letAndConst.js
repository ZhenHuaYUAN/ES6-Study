function test() {
  // 用var定义i时，在循环外还可以方位 用let定义时，i只在块作用域中有效（被一个大括号包起来的）
  // for(let i=1;i<3;i++){
  //   console.log(i)
  // }
  // console.log(i)

  // 使用let时不能重复定义变量
  var a = 1;
  var a = 2;

}
// 用const声明一个常量,不能进行修改，声明是必须赋值 const也是在块作用域有效   const定义对象时，对象是一个引用类型（返回值是对象存储在内存中
// 的指针），这个指针是不变的，但对象本身可以改变
function last() {
  const pi = 3.14;

  const k = {
    a:1
  }
  k.a = 2
  k.b = 3
  console.log(k)
}

last();