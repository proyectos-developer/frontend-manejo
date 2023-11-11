import { configureStore } from '@reduxjs/toolkit';

import begindata from './slice/begindata'

const store = configureStore({
    reducer: ({
        begin: begindata,
    }),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({

    })
})

export {store}