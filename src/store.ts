import { createStore } from 'redux';
import { rootReducer } from './reducers';

export function configureStore() {
    return createStore(
        rootReducer,
        // @ts-ignore
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            // @ts-ignore
            window.__REDUX_DEVTOOLS_EXTENSION__()
    );
}
