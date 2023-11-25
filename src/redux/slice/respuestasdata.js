import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'
import { constantes } from "../uri/constantes"

const baseurl = `${constantes().url_principal[0].url}`
let stateType = ''

export const respuestasdata = createAsyncThunk ('', async (params) => {
    stateType = params.stateType
    switch (stateType){
        case 'new_respuesta':
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
        case 'get_respuesta':
            if (params.reset){ 
                return {success: null}
            }else{
                try{
                    const response = await axios.get (`${baseurl}/${params.path}`)
                    return response.data
                }catch (err){
                    return err.message
                }
            }
        case 'update_respuesta':
            if (params.reset){ 
                return {success: null}
            }else{
                try{
                    console.log ('url', `${baseurl}/${params.path}`)
                    const response = await axios.get (`${baseurl}/${params.path}`, params.data)
                    console.log ('data', response.data)
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

const dataRespuestas = createSlice ({
    name: 'fetch',
    initialState: initialState (stateType),
    extraReducers: (builder) => {
        builder.addCase (respuestasdata.pending, (state) => {
            state.loading = true
        }),
        builder.addCase (respuestasdata.fulfilled, (state, action) => {
            state.loading = false
            state.finishWithErrors = false
            state[stateType] = action.payload
        }),
        builder.addCase (respuestasdata.rejected, (state) => {
            state.loading = false
            state.finishWithErrors = true
        })
    }
})

export default dataRespuestas.reducer