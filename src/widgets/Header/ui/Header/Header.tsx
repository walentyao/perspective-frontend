import { Avatar } from 'primereact/avatar';
import cls from './Header.module.scss';
import { HeaderLogo } from '../HeaderLogo/HeaderLogo';

export const Header = () => {
    return (
        <header className={cls.header}>
            <HeaderLogo title="Перспектива" />
            <div>
                <Avatar
                    label="WM"
                    shape="circle"
                    size="large"
                    style={{ backgroundColor: '#2196F3', color: '#ffffff' }}
                />
            </div>
        </header>
    );
};
