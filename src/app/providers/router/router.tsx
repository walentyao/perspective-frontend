import { createBrowserRouter } from 'react-router-dom';
import { LayoutApp } from '@shared/layouts/LayoutApp/LayoutApp';
import { Sidebar } from '@widgets/Sidebar/ui/Sidebar/Sidebar';
import { Header } from '@widgets/Header';
import { RouterPaths } from '@shared/constants/router.constants';

export const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <LayoutApp
                header={<Header />}
                sidebar={<Sidebar />}
            />
        ),
        children: [
            {
                path: RouterPaths.MAIN,
                index: true,
                lazy: async () => {
                    const { MainPage } = await import('@pages/MainPage/MainPage.tsx');
                    return { Component: MainPage };
                },
            },
            {
                path: RouterPaths.COURSES,
                lazy: async () => {
                    const { CoursesPage } = await import(
                        '@pages/CoursesPage/ui/CoursesPage/CoursesPage.tsx'
                    );
                    return { Component: CoursesPage };
                },
            },
        ],
    },
]);
