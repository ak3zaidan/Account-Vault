import Image from 'next/image';
import { getCdnLogoUrl } from '../utils/cdn';
import { Service } from '../data/services';
import { useState } from 'react';

interface ServiceCardProps {
    service: Service;
    onClick: () => void;
}

export default function ServiceCard({ service, onClick }: ServiceCardProps) {
    const [imageError, setImageError] = useState(false);
    const logoUrl = !imageError ? getCdnLogoUrl(service.logo, 512, 156) : '';

    const handleImageError = () => {
        setImageError(true);
    };

    return (
        <div
            onClick={onClick}
            className={`
                group relative overflow-hidden rounded-2xl cursor-pointer
                bg-gradient-to-br ${service.brandColor}
                border border-white/20 backdrop-blur-sm
                shadow-lg hover:shadow-2xl transition-all duration-300 ease-out
                transform hover:scale-[1.02] hover:-translate-y-1
                before:absolute before:inset-0 before:bg-gradient-to-br 
                before:from-white/10 before:to-transparent before:opacity-0 
                before:group-hover:opacity-100 before:transition-opacity before:duration-300
            `}
        >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/5 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/5 to-transparent rounded-full translate-y-12 -translate-x-12"></div>

            <div className="relative p-4 sm:p-6">
                {/* Logo container with enhanced styling */}
                <div className="flex items-center justify-center mb-4 sm:mb-6">
                    <div className="
                        w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 
                        rounded-2xl bg-white/80 backdrop-blur-sm
                        flex items-center justify-center overflow-hidden 
                        shadow-lg border border-white/50
                        group-hover:bg-white/90 group-hover:shadow-xl
                        transition-all duration-300 ease-out
                        transform group-hover:scale-110
                    ">
                        {logoUrl && !imageError ? (
                            <Image
                                src={logoUrl}
                                alt={`${service.name} logo`}
                                width={96}
                                height={96}
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
                </div>

                {/* Service Name with enhanced typography */}
                <h3 className="
                    text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 text-center mb-2 sm:mb-3
                    group-hover:text-gray-800 transition-colors duration-300
                    leading-tight
                ">
                    {service.name}
                </h3>

                {/* Price with modern styling */}
                <div className="text-center">
                    <div className="
                        inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 
                        bg-gradient-to-r from-blue-600 to-indigo-600
                        text-white font-bold text-sm sm:text-lg rounded-xl
                        shadow-lg group-hover:shadow-xl
                        transform group-hover:scale-105
                        transition-all duration-300 ease-out
                    ">
                        From {service.price}
                    </div>
                </div>

                {/* Delivery ETA badge */}
                {service.deliveryEta && (
                    <div className="mt-3 sm:mt-4 text-center">
                        <span className="
                            inline-flex items-center px-2 sm:px-3 py-1
                            bg-white/60 backdrop-blur-sm
                            text-gray-700 text-xs sm:text-sm font-medium
                            rounded-full border border-white/50
                            group-hover:bg-white/80
                            transition-all duration-300
                        ">
                            <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-1.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="hidden sm:inline">{service.deliveryEta}</span>
                            <span className="sm:hidden">ETA</span>
                        </span>
                    </div>
                )}

                {/* Hover indicator */}
                <div className="
                    absolute bottom-3 sm:bottom-4 right-3 sm:right-4 
                    w-6 h-6 sm:w-8 sm:h-8 bg-white/20 backdrop-blur-sm
                    rounded-full flex items-center justify-center
                    opacity-0 group-hover:opacity-100
                    transform translate-y-2 group-hover:translate-y-0
                    transition-all duration-300 ease-out
                ">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </div>
        </div>
    );
}
