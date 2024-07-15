import { createBrowserRouter } from 'react-router-dom';
import { LayoutApp } from '@shared/layouts/LayoutApp/LayoutApp';
import { Sidebar } from '@widgets/Sidebar/ui/Sidebar';
import { Header } from '@widgets/Header';

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
                path: '/',
                index: true,
                lazy: async () => {
                    const { MainPage } = await import('@pages/MainPage/MainPage.tsx');
                    return { Component: MainPage };
                },
            },
            {
                path: '/courses',
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
