import servicesData from './services.json';

export interface Service {
    id: string;
    name: string;
    logo: string;
    price: string;
    singlePrice: string;
    bulkPrice: string;
    category: 'accounts' | 'mail';
    deliveryEta: string;
    requirements: string[];
    information: string[];
    brandColor: string;
}

export const accountsData: Service[] = servicesData.accounts as Service[];
export const mailData: Service[] = servicesData.mail as Service[];

// Get the global configuration values
export const discordServerUrl = servicesData.discordServer as string;
export const supportUsername = servicesData.supportUsername as string;
export const telegramUsername = servicesData.telegramUsername as string;

// Utility function to get Discord URL
export function getDiscordUrl(): string {
    return discordServerUrl;
}
