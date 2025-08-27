import Image from 'next/image';
import { getCdnLogoUrl } from '../utils/cdn';
import { getDiscordUrl, supportUsername, telegramUsername, Service } from '../data/services';
import { useState } from 'react';

interface ServiceModalProps {
    service: Service;
    onClose: () => void;
    isClosing?: boolean;
    onShowToast?: (message: string) => void;
}

export default function ServiceModal({ service, onClose, isClosing = false, onShowToast }: ServiceModalProps) {
    const [imageError, setImageError] = useState(false);
    const logoUrl = !imageError ? getCdnLogoUrl(service.logo, 512, 156) : '';
    const discordUrl = getDiscordUrl();

    const handleImageError = () => {
        setImageError(true);
    };

    const handleDiscordClick = async () => {
        try {
            // Copy Discord username to clipboard
            await navigator.clipboard.writeText(supportUsername);
            // Show toast notification
            onShowToast?.(`${supportUsername} copied to clipboard!`);
        } catch {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = supportUsername;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            onShowToast?.(`${supportUsername} copied to clipboard!`);
        }
    };

    const handleTelegramClick = () => {
        // Open Telegram with the username
        window.open(`https://t.me/${telegramUsername.replace('@', '')}`, '_blank');
    };

    return (
        <div className={`
            fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-2 sm:p-4
            ${isClosing ? 'animate-fadeOut' : 'animate-fadeIn'}
        `}>
            <div className={`
                bg-white/90 backdrop-blur-md rounded-2xl sm:rounded-3xl shadow-2xl 
                max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto relative
                border border-white/20
                ${isClosing ? 'animate-slideOut' : 'animate-slideIn'}
            `}>
                {/* Close Button - Modern Design */}
                <button
                    onClick={onClose}
                    className="
                        absolute top-2 sm:top-4 right-2 sm:right-4 z-10 
                        w-7 h-7 sm:w-8 sm:h-8 bg-white/80 backdrop-blur-sm
                        rounded-full flex items-center justify-center
                        shadow-lg hover:shadow-xl hover:bg-white
                        transition-all duration-300 ease-out
                        border border-white/50
                        transform hover:scale-110
                    "
                    aria-label="Close modal"
                >
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Header with modern styling */}
                <div className="p-3 sm:p-4 border-b border-white/20">
                    <div className="flex items-center space-x-3 sm:space-x-4 mb-3">
                        <div className="
                            w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 
                            rounded-2xl bg-white/80 backdrop-blur-sm
                            flex items-center justify-center overflow-hidden 
                            shadow-lg border border-white/50 flex-shrink-0
                        ">
                            {logoUrl && !imageError ? (
                                <Image
                                    src={logoUrl}
                                    alt={`${service.name} logo`}
                                    width={80}
                                    height={80}
                                    className="object-contain w-full h-full p-2"
                                    onError={handleImageError}
                                    unoptimized={true}
                                />
                            ) : (
                                <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-700">
                                    {service.name.charAt(0)}
                                </span>
                            )}
                        </div>
                        <div className="flex-1 min-w-0">
                            <h2 className="text-lg sm:text-2xl font-bold text-gray-900 mb-1">{service.name}</h2>
                            <p className="text-gray-600 text-xs sm:text-sm">Premium Account Service</p>
                        </div>
                    </div>

                    {/* Pricing Section - Modern Design */}
                    <div className="
                        bg-gradient-to-r from-blue-50/80 via-indigo-50/80 to-purple-50/80
                        backdrop-blur-sm rounded-2xl p-2 sm:p-3 border border-white/50
                    ">
                        <h3 className="text-xs sm:text-sm font-semibold text-gray-700 uppercase tracking-wide mb-2 flex items-center">
                            <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                            </svg>
                            Pricing Information
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                            <div className="
                                text-center p-2 bg-white/60 backdrop-blur-sm
                                rounded-xl border border-white/50
                            ">
                                <div className="text-xs text-gray-600 mb-1">Single Account</div>
                                <div className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    {service.singlePrice}
                                </div>
                            </div>
                            <div className="
                                text-center p-2 bg-white/60 backdrop-blur-sm
                                rounded-xl border border-white/50
                            ">
                                <div className="text-xs text-gray-600 mb-1">Bulk Accounts (100+)</div>
                                <div className="text-lg sm:text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                                    {service.bulkPrice}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content - Enhanced Layout */}
                <div className="p-3 sm:p-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
                        {/* Left Column - Requirements and Information */}
                        <div className="flex flex-col h-full">
                            {/* Requirements Section */}
                            <div className="
                                p-2 sm:p-3 bg-white/60 backdrop-blur-sm
                                rounded-2xl border border-white/50
                                flex flex-col flex-1
                            ">
                                <h3 className="text-xs sm:text-sm font-semibold text-gray-700 uppercase tracking-wide mb-2 flex items-center flex-shrink-0">
                                    <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Requirements
                                </h3>
                                <ul className="space-y-1 overflow-y-auto pr-2 flex-1">
                                    {service.requirements.map((requirement, index) => (
                                        <li key={index} className="flex items-start space-x-2">
                                            <span className="
                                                w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500
                                                rounded-full mt-1.5 flex-shrink-0
                                            "></span>
                                            <span className="text-gray-700 text-xs sm:text-sm leading-relaxed">{requirement}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Information Section */}
                            <div className="
                                p-2 sm:p-3 bg-white/60 backdrop-blur-sm
                                rounded-2xl border border-white/50
                                flex flex-col flex-1 mt-3 sm:mt-4
                            ">
                                <h3 className="text-xs sm:text-sm font-semibold text-gray-700 uppercase tracking-wide mb-2 flex items-center flex-shrink-0">
                                    <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Information
                                </h3>
                                <ul className="space-y-1 overflow-y-auto pr-2 flex-1">
                                    {service.information.map((info, index) => (
                                        <li key={index} className="flex items-start space-x-2">
                                            <span className="
                                                w-1.5 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-500
                                                rounded-full mt-1.5 flex-shrink-0
                                            "></span>
                                            <span className="text-gray-700 text-xs sm:text-sm leading-relaxed">{info}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Right Column - Contact Information */}
                        <div className="space-y-2 sm:space-y-3">
                            {/* Discord Server Button */}
                            <div className="flex-shrink-0">
                                <a
                                    href={discordUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                        w-full inline-flex items-center justify-center px-3 sm:px-4 py-2 sm:py-3
                                        bg-gradient-to-r from-blue-600 to-indigo-600
                                        text-white font-semibold rounded-2xl text-sm sm:text-base
                                        shadow-lg hover:shadow-xl
                                        transform hover:scale-105
                                        transition-all duration-300 ease-out
                                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                                    "
                                >
                                    <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.019 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z" />
                                    </svg>
                                    <span className="hidden sm:inline">Join Discord Server</span>
                                    <span className="sm:hidden">Join Discord</span>
                                </a>
                            </div>

                            {/* Delivery ETA - Moved here */}
                            <div className="
                                p-2 sm:p-3 bg-white/60 backdrop-blur-sm
                                rounded-2xl border border-white/50
                            ">
                                <h3 className="text-xs sm:text-sm font-semibold text-gray-700 uppercase tracking-wide mb-2 sm:mb-3 flex items-center">
                                    <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Delivery ETA
                                </h3>
                                <p className="text-gray-700 font-medium text-xs sm:text-sm">{service.deliveryEta}</p>
                            </div>

                            {/* Support Information - Modern Layout */}
                            <div className="
                                p-2 sm:p-3 bg-white/60 backdrop-blur-sm
                                rounded-2xl border border-white/50 flex-1
                            ">
                                <h4 className="text-xs sm:text-sm font-semibold text-gray-700 uppercase tracking-wide mb-2 flex items-center">
                                    <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                    Support Contact
                                </h4>
                                <div className="space-y-0.5">
                                    <div className="
                                        flex items-center justify-between p-2
                                        bg-white/40 rounded-xl
                                    ">
                                        <span className="text-xs sm:text-sm font-medium text-gray-700">Discord:</span>
                                        <button
                                            onClick={handleDiscordClick}
                                            className="
                                                text-xs sm:text-sm text-blue-600 hover:text-blue-800 
                                                font-medium transition-colors cursor-pointer
                                                px-2 py-1 rounded-lg hover:bg-blue-50
                                                flex-shrink-0
                                            "
                                        >
                                            {supportUsername}
                                        </button>
                                    </div>
                                    <div className="
                                        flex items-center justify-between p-2
                                        bg-white/40 rounded-xl
                                    ">
                                        <span className="text-xs sm:text-sm font-medium text-gray-700">Telegram:</span>
                                        <button
                                            onClick={handleTelegramClick}
                                            className="
                                                text-xs sm:text-sm text-blue-600 hover:text-blue-800 
                                                font-medium transition-colors cursor-pointer
                                                px-2 py-1 rounded-lg hover:bg-blue-50
                                                flex-shrink-0
                                            "
                                        >
                                            {telegramUsername}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
