import { createReducer, createSlice } from '@reduxjs/toolkit'

let userSlice = createSlice({
    name:'user',
    initialState:{
        isLogin: false,
        loginCount:0
    },
    reducers:{
        addLoginCount(state){
            state.loginCount++
        },
        addLoginCountByNum(state,action){
            console.log(action)
            state.loginCount += action.payload
        }
    }
})

//外部组件来使用的action
export const {addLoginCount,addLoginCountByNum} = userSlice.actions

//默认导出是所有的reducer 供store注册这些方法
export default userSlice.reducer