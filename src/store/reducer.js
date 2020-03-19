import { BRAND } from './actionTypes'
const defaultState = {
    brand: ''
}  //默认数据
export default (state = defaultState, action)=>{  //就是一个方法函数
    if(action.type === BRAND){
        let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
        newState.brand = action.value
        return newState
    }
    return state
}
