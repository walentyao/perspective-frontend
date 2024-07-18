import { SIDEBAR_ITEMS } from '../../constants/sidebar.constants';
import { SidebarList } from '../SidebarList/SidebarList';
import cls from './Sidebar.module.scss';

export const Sidebar = () => {
    return (
        <aside className={cls.sidebar}>
            <SidebarList list={SIDEBAR_ITEMS} />
        </aside>
    );
};
