export function getCdnLogoUrl(domain: string, width: number = 512, height: number = 156): string {
    try {
        // Check if it's a local PNG file (starts with @)
        if (domain.startsWith('@')) {
            // Remove the @ symbol and return the path to the public directory
            const filename = domain.substring(1);
            return `/${filename}`;
        }

        const clientId = process.env.NEXT_PUBLIC_CDN_CLIENT_ID;

        if (!clientId) {
            console.warn('NEXT_PUBLIC_CDN_CLIENT_ID is not set. Using fallback logo.');
            return `https://cdn.brandfetch.io/${domain}/w/${width}/h/${height}/logo`;
        }

        return `https://cdn.brandfetch.io/${domain}/w/${width}/h/${height}/logo?client_id=${clientId}`;
    } catch (error) {
        console.error('Error generating CDN URL:', error);
        return '';
    }
}


