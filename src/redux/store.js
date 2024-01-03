import { configureStore } from '@reduxjs/toolkit';

import begindata       from './slice/begindata'
import datareducer     from './reducers/datareducer'
import questionsdata   from './slice/questionsdata'
import clinicsdata    from './slice/clinicsdata'
import drivingschooldata    from './slice/drivingschooldata'

const store = configureStore({
    reducer: ({
        begin: begindata,
        questions: questionsdata,
        clinics: clinicsdata,
        drivingschools: drivingschooldata,
        datareducer: datareducer
    }),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({

    })
})

export {store}