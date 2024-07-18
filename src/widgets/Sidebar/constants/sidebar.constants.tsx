import { RouterPaths } from '@shared/constants/router.constants';
import { HomeIcon, AcademicCapIcon } from '@heroicons/react/24/outline';
import { ISidebarItem } from '../model/types/sidebar.types';

export const SIDEBAR_ITEMS: ISidebarItem[] = [
    {
        text: 'Главная',
        icon: <HomeIcon />,
        link: RouterPaths.MAIN,
    },
    {
        text: 'Программы обучения',
        icon: <AcademicCapIcon />,
        link: RouterPaths.COURSES,
    },
];
