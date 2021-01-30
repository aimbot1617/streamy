
const initialState = {user : null}

const reducer = (state = initialState,action)=>{
    if(action.type === "SET_USER"){
        return {
            user : action.payload
        }
    }
    else if(action.type === "CLEAR_USER"){
        return {
            user : null
        }
    }
    return state
}
export default reducer