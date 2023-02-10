import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';


export const STATUSES = Object.freeze({
    IDLE : 'idle',
    ERROR : 'error',
    LOADING : 'loading'

})

const productSlice = createSlice({

    name : "product",

    initialState:{
        data:[],
        status: ''
    },

    // reducers : {
    //     setProducts(state,action){
    //         state.data = action.payload;
    //     },

    //     setStatus(state,action){
    //         state.status = action.payload
    //     }
       
    // },



    extraReducers: (builder) => {
        builder
            .addCase(fetchProduct.pending, (state, action) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(fetchProduct.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE;
            })
            .addCase(fetchProduct.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
            });
    },


})





//export const {setProducts,setStatus} = productSlice.actions;
export default productSlice.reducer;





// export function fetchProduct(){

//     return async function fetchProductThunk(dispatch,getState){
//         dispatch(setStatus(STATUSES.LOADING))

//         try {
//             let res =  await fetch(`https://fakestoreapi.com/products`);
//             let data  = await res.json();
//             dispatch(setProducts(data));
//             dispatch(setStatus(STATUSES.IDLE))
//             console.log("Line 54 : ",data)

//         } catch (error) {
//             dispatch(setStatus(STATUSES.ERROR))   
//         }
//     }
// }

export const fetchProduct = createAsyncThunk('products/fetch', async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    return data;
});
