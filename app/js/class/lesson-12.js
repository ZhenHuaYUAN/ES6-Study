// ES6中的类
{
  // 类的基本定义和生成实例
  class Parent {
    // 构造函数
    constructor(name = 'panda') {
      this.name = name;
    }
  }
  let v_parent = new Parent('abcd')
  console.log('构造函数和实例', v_parent)
}

{
  // 继承 传递参数
  class Parent {
    constructor(name = 'panda') {
      this.name = name;
    }
  }
  class Child extends Parent {
    constructor(name = 'child', age = '123') {
      super(name)
      // 如果子类要增加自己的属性，调用this一定要放在super之后
      this.type = 'child'
      this.age = age
    }
  }
  let v_child = new Child('panda', 12)
  console.log("继承", v_child)
}

{
  // 类中的getter和setter
  class Parent {
    constructor(name = 'panda') {
      this.name = name;
    }
    // 这个地方不是一个函数方法，是一个属性
    get longName() {
      return 'mk' + this.name
    }
    set longName(value) {
      this.name = value
    }
  }
  let v_parent = new Parent()
  console.log('get方法', v_parent.longName)
  v_parent.longName = 'hello' // set
  console.log('get方法', v_parent.longName)
}

{
  // 静态方法定义  静态方法通过类去调用，而不是类的实例
  class Parent {
    constructor(name = 'panda') {
      this.name = name;
    }
    static tell () {
      console.log('tell')
    }
  }
  let v_parent = new Parent('abcd')
  Parent.tell()
}

{
  // 静态属性
  class Parent {
    constructor(name = 'panda') {
      this.name = name;
    }
  }
  // 定义静态属性
  Parent.type = 'parent'
  let v_parent = new Parent('abcd')
  console.log('静态属性',Parent.type)
}