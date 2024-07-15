import cls from './HeaderLogo.module.scss';

interface HeaderLogoProps {
    title: string;
}
export const HeaderLogo = ({ title }: HeaderLogoProps) => {
    return <span className={cls.logo}>{title}</span>;
};
