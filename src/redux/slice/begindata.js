import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'
import { constants } from "../uri/constants"

const baseurl = `${constants().url_principal[0].url}`
let stateType = ''

export const begindata = createAsyncThunk ('', async (params) => {
    stateType = params.stateType
    switch (stateType){
        case 'login_user':
        case 'register_user':
        case 'forgot_password':
            if (params.reset){ 
                return {success: null}
            }else{
                try{
                    const response = await axios.post (`${baseurl}/${params.path}`, params.data)
                    return response.data
                }catch (err){
                    return err.message
                }
            }
        case 'get_user':
            if (params.reset){ 
                return {success: null}
            }else{
                try{
                    const response = await axios.get (`${baseurl}/${params.path}`, 
                                        {headers: {Authorization: `Bearer ${params.token}`}})
                    return response.data
                }catch (err){
                    return err.message
                }
            }
        case 'update_user':
            if (params.reset){ 
                return {success: null}
            }else{
                try{
                    console.log (`${baseurl}/${params.path}`, params.data)
                    const response = await axios.get (`${baseurl}/${params.path}`, params.data) 
                    console.log (response.data)
                    return response.data
                }catch (err){
                    return err.message
                }
            }
        default: return null
    }
})

const initialState = (type) => {
    return {
        [type]: [],
        loading: false,
        finishWithErrors: false,
        errorMessage: 'Hemos tenido problemas solicitando la información'
    }
}

const dataBegin = createSlice ({
    name: 'fetch',
    initialState: initialState (stateType),
    extraReducers: (builder) => {
        builder.addCase (begindata.pending, (state) => {
            state.loading = true
        }),
        builder.addCase (begindata.fulfilled, (state, action) => {
            state.loading = false
            state.finishWithErrors = false
            state[stateType] = action.payload
        }),
        builder.addCase (begindata.rejected, (state) => {
            state.loading = false
            state.finishWithErrors = true
        })
    }
})

export default dataBegin.reducer