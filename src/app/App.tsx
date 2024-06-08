import { Provider } from 'react-redux';
import { store } from './providers/store/store.ts';
import { RouterProvider } from 'react-router-dom';
import { router } from '@app/providers/router/router.tsx';

export const App = () => {
    return (
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    );
};
