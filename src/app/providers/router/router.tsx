import { createBrowserRouter } from 'react-router-dom';
import { MainPage } from '@pages/MainPage/MainPage.tsx';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage />,
    },
]);
