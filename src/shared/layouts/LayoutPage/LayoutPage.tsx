import cls from './LayoutPage.module.scss';
import { Outlet } from 'react-router-dom';

export const LayoutPage = () => {
    return (
        <div className={cls.layout}>
            <div className={cls.layout__content}>
                <Outlet />
            </div>
        </div>
    );
};
