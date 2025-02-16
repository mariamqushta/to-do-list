
import './App.css';
import { useRef, useState } from 'react';

function App() {

  const[x,setx]=useState([])
  const input1=useRef()
  const Add =()=>{
    const value= input1.current.value
    const newData ={value,combleted:false}
    setx([...x,newData])
    input1.current.value=""
  }
 const ItemDone=(index)=>{
  const newx=[...x]
  newx[index].combleted=!newx[index].combleted
  setx(newx)
 }

const Delete=(index)=>{
  const newx=[...x]
  newx.splice(index,1)
  setx(newx)
}

  return (
    <div className="App">
      
      <h2>to do list</h2>
      <ul>
        {
        x.map(({value,combleted},index)=>{
          return<div className='div1'>
            <li className={combleted?'diffstyl':""} onClick={()=>ItemDone(index)}>{value}</li>
            <span onClick={()=>Delete(index)} >x</span>
            </div>
          
})
        }
      </ul>
      <input ref={input1} placeholder='Task You Want To Add'/>
      <button onClick={Add}>Add</button>

    </div>
  );
}

export default App;
