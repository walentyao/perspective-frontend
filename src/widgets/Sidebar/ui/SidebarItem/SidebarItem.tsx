import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
    icon: ReactNode;
    text: string;
    link: string;
}
export const SidebarItem = ({ icon, text, link }: SidebarItemProps) => {
    return (
        <li className={cls.item}>
            <Link
                to={link}
                className={cls.link}
            >
                <div className={cls.icon}>{icon}</div>
                <span className={cls.text}>{text}</span>
            </Link>
        </li>
    );
};
