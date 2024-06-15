import { ItemTheme } from '@/types/City';

import thailandFlag from '@/assets/icons/flag-thailand.png';
import indiaFlag from '@/assets/icons/flag-india.png';
import singaporeFlag from '@/assets/icons/flag-singapore.png';

import thailand from '@/assets/images/image-thailand.jpg';
import india from '@/assets/images/image-india.jpg';
import singapore from '@/assets/images/image-singapore.jpg';

export const list: ItemTheme[] = [
    {
        id: 1,
        name: 'Thailand',
        flag: thailandFlag,
        title: 'Discover Thailand',
        info: `Discover Thailand's vibrant culture, stunning landscapes, and pristine beaches.`,
        photo: thailand,
        text: 'Begin your unforgettable journey in Thailand now.',
    },
    {
        id: 2,
        name: 'India',
        flag: indiaFlag,
        title: 'Explore India',
        info: `Immerse yourself in India's rich heritage, diverse cultures, and historic landmarks.`,
        photo: india,
        text: 'Embark on an incredible adventure in India today.',
    },
    {
        id: 3,
        name: 'Singapore',
        flag: singaporeFlag,
        title: 'Visit Singapore',
        info: `Experience Singapore's modern skyline, lush gardens, and world-class attractions.`,
        photo: singapore,
        text: 'Discover the unique charm of Singapore now.',
    },
];