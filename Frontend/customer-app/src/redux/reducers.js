export const CREATE_CUSTOMER='CREATE_CUSTOMER';
export const UPDATE_CUSTOMER='UPDATE_CUSTOMER';
export const DELETE_CUSTOMER='DELETE_CUTOMER';
export const GET_CUSTOMER='GET_CUSTOMER';
export const GET_CUSTOMERS='GET_CUSTOMERS';



const initialState={
    customerData:[],
}

const customerReducers= (state=initialState,action)=>{
    switch(action.type){
        case GET_CUSTOMERS:
            return{
                ...state,
                customerData:[...state.customerData, action.payload], 
            };
        case CREATE_CUSTOMER:
            return{
                ...state,
                customerData:[...state.customerData, action.payload],
            };
        case GET_CUSTOMER:
            return{
                ...state,
                customerData:state.customerData.filter((customer)=>customer._id !==action.payload),
            }
        case DELETE_CUSTOMER:
            return{
                ...state,
                customerData:state.customerData.filter((customer)=>customer._id !==action.payload),

            }

        case UPDATE_CUSTOMER:
            return {
                ...state,
                customerData:state.customerData.filter((customer)=>customer._id !==action.payload),
            }

        default:
            return state;
    }
};

export default customerReducers;