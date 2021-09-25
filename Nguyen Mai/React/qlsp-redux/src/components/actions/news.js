import callApiNews from '../indexNews';
export const GET_ALL_NEW = 'GET_ALL_NEW';
export const DELETE_NEW = 'DELETE_NEW';

export const actFetchNewsRequest = () => {
    return (dispatch) => {
        return callApiNews( 'GET', null).then(res => {
            dispatch(GetAllNew(res.data));
        });
    }
}
 
/*GET_ALL_PRODUCT*/
export function GetAllNew(payload){
    return{
        type:'GET_ALL_NEW',
        payload
    }
}
export function DeleteNew(payload){
    return{
        type:'DELETE_NEW',
        payload
    }
}