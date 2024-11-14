import logo from './logo.svg';
import './App.css';
import {addLoginCount, addLoginCountByNum} from './store/reducers/user'
import {useDispatch, useSelector} from 'react-redux'
import { useState } from 'react';
import {memo} from 'react'

// props发生变化的时候更新
const Son = memo((props)=>{
  console.log('子组件更新',props.num)
  const user = useSelector(state=>state.user)
  return <h1>我是子组件{user.loginCount}</h1>
})

function App() {
  const user = useSelector(state=>state.user)
  const dispatch = useDispatch()
  const [num,setNum] = useState(1)
  console.log('user:',user)
  return (
    <div className="App">
      <div>
        {user.isLogin}
        {user.loginCount}
        {num}
      </div>
      <button onClick={e=>dispatch(addLoginCount())}>更改isLogin</button>
      <button onClick={e=>dispatch(addLoginCountByNum(10))}>更改LoginCount</button>
      <button onClick={e=>setNum(num+1)}>变更父组件</button>
      <Son num={num}/>
    </div>
  );
}

export default App;
