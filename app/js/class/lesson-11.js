import { Agent } from "http";

// proxy和reflect
{
  let obj = {
    time:'2017-03-02',
    name:'net',
    _r:123
  };

  let monitor = new Proxy(obj,{
    // 拦截对象属性的读取
    get(target,key){
      // 将所有属性的2017替换为2018
      return target[key].replace('2017','2018')
    },
    // 设置属性
    set(target,key,value){
      if(key === 'name'){
        return target[key] = value;
      }
      else{
        return target[key];
      }
    },
    //拦截判断当前对象中是否拥有某个属性  
    has(target,key){
      if(key === 'name'){
        return target[key]
      }else{
        return false
      }
    },
    // 拦截删除
    deleteProperty(target,key){
      if(key.indexOf('_')>-1){
        delete target[key]
        return true
      }else{
        return target[key]
      }
    },
    // 拦截Object.keys Object.getOwnPropertySymbols,Object.getOwnPropertyNames
    ownKeys(target){
      return Object.keys(target).filter(item=>item!='time')
    }
  })
  console.log('get',monitor.time)
  monitor.time = '2019'
  // monitor.name = '123'
  // console.log(monitor.time,monitor.name)
  // console.log(monitor)
  // console.log('has','name' in monitor)
  // console.log('has','time' in monitor)

  // console.log('delete',delete monitor.time)
  // delete monitor._r
  // console.log(monitor)
  console.log('ownKeys',Object.keys(monitor))
}

{
  let obj = {
    time:'2017-03-02',
    name:'net',
    _r:123
  };
  console.log('reflect',Reflect.get(obj,'time'))
  Reflect.set(obj,'name','panda')
  console.log('Reflectset',obj)
  console.log('Reflect Has',Reflect.has(obj,'name'))
}

{
  function validator(target,validator){
    return new Proxy(target,{
      _validator:validator,
      set(target,key,value,proxy){
        if(target.hasOwnProperty(key)){
          let va = this._validator[key];
          if(!!va(value)){
            return Reflect.set(target,key,value,proxy)
          }else{
            throw Error(`不能设置${key}到${value}`)
          }
        }else{
          throw  Error(`${key} 不存在`)
        }
      }
    })
  }
  const personValidators={
    name(val){
      return typeof val==='string'
    },
    age(val){
      return typeof val === 'number' && val > 18
    }
  }

  class Person{
    constructor(name,age){
      this.name = name;
      this.age = age;
      return validator(this.personValidators)
    }
  }

  const person = new Person('panda','22')
  console.log(person)
}