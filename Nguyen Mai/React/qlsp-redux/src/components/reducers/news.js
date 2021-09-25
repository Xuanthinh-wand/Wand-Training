import { GET_ALL_NEW, DELETE_NEW } from "../actions/news";

const initNew = {
    News:[]
}
 
function todoNew(state = initNew,action){
    switch(action.type){
        case GET_ALL_NEW:
            return{
                ...state,
                News:action.payload
            }
            case DELETE_NEW:
                return{
                    ...state,
                    News:state.News.filter(item=>{
                        return item.id!==action.payload.id
                    })
                    
                }
        default:
            return state;
    }
}

export default todoNew;