import { ReactNode } from 'react';
import cls from './LayoutApp.module.scss';
import { LayoutPage } from '../LayoutPage/LayoutPage';

interface LayoutAppProps {
    header: ReactNode;
    sidebar: ReactNode;
}

export const LayoutApp = ({ header, sidebar }: LayoutAppProps) => {
    return (
        <div className={cls.layout}>
            <div className={cls.layout__header}>{header}</div>
            <div className={cls.content}>
                <div className={cls.content__sidebar}>{sidebar}</div>
                <main className={cls.content__main}>
                    <LayoutPage />
                </main>
            </div>
        </div>
    );
};
