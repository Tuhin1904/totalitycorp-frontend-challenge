import {createSlice} from "@reduxjs/toolkit"

 const counterSlice = createSlice(
    {
        initialState:{
            nProducts:0,
            totalPrice:0,
            pids:[]
        },
        name:"counter",
        reducers:{
            // increament:((state)=>{ 
            //     return state+1;
            // }),
            // decreament:(state)=>{return state-1},
            // addamount:(state, payloadprice)=>{return (payloadprice+state)}.
            addToCart:(state, action)=>({ 
                ...state,
                nProducts: state.nProducts + 1,
                totalPrice: state.totalPrice + Number(String(action.payload.price)),
                pids: [...state.pids, action.payload.id],
            }),
            removeFromCart:(state, action)=>({
                ...state,
                nProducts:state.nProducts -1,
                totalPrice:state.totalPrice - Number(String(action.payload.price)),
                pids:[...state.pids, action.payload.id],
            })
    },
});

// console.log(counterSlice.actions)
// events exported
export const {
    // increament , decreament , addamount
    addToCart
}= counterSlice.actions;
export default counterSlice.reducer;