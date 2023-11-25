import { configureStore } from '@reduxjs/toolkit';

import begindata       from './slice/begindata'
import datareducer     from './reducers/datareducer'
import preguntasdata   from './slice/preguntasdata'
import respuestasdata  from './slice/respuestasdata'
import clinicasdata    from './slice/clinicasdata'
import escuelasdata    from './slice/escuelasdata'

const store = configureStore({
    reducer: ({
        begin: begindata,
        preguntas: preguntasdata,
        respuestas: respuestasdata,
        clinicas: clinicasdata,
        escuelas: escuelasdata,
        datareducer: datareducer
    }),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({

    })
})

export {store}