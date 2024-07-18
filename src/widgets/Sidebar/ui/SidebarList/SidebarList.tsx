import cls from './SidebarList.module.scss';
import { ISidebarItem } from '@widgets/Sidebar/model/types/sidebar.types';
import { SidebarItem } from '../SidebarItem/SidebarItem';

interface SidebarListProps {
    list: ISidebarItem[];
}
export const SidebarList = ({ list }: SidebarListProps) => {
    return (
        <ul className={cls.list}>
            {list.map((item) => (
                <SidebarItem
                    key={item.text}
                    link={item.link}
                    text={item.text}
                    icon={item.icon}
                />
            ))}
        </ul>
    );
};
