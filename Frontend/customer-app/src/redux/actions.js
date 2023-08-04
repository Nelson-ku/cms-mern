import { CREATE_CUSTOMER,DELETE_CUSTOMER,UPDATE_CUSTOMER,GET_CUSTOMER ,GET_CUSTOMERS} from './reducers';



export const createCustomer=(customerData)=>({
    type:CREATE_CUSTOMER,
    payload:customerData,
});

export const deleteCustomer=(customerId)=>({
    type:DELETE_CUSTOMER,
    payload:customerId,
});

export const updateCustomer=(customerId)=>({
    type:UPDATE_CUSTOMER,
    payload:customerId,
});

export const getCustomer1=(customerId)=>({
    type:GET_CUSTOMER,
    payload:customerId,
})

export const getCustomers1=(customerData)=>({
    type:GET_CUSTOMERS,
    payload:null,
})