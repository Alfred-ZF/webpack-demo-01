import _ from 'lodash'
import './style.scss'

let component = ()=>{
  let element = document.createElement('div');
  let code = document.createElement('p')
  let aTag = 1
  console.log(aTag);
  
  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  code.innerHTML = _.join(['Hello', 'I am','webpack'], ' ');
  element.classList.add('hello')


  element.appendChild(code)

  return element;
}

document.body.appendChild(component());