import { RouterPaths } from '@shared/constants/router.constants';
import { ReactNode } from 'react';

export interface ISidebarItem {
    text: string;
    icon: ReactNode;
    link: RouterPaths;
}
