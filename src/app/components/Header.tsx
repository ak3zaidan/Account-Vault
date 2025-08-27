import Image from 'next/image';

export default function Header() {
    return (
        <header className="
            bg-white/80 backdrop-blur-md shadow-lg border-b border-white/20
            sticky top-0 z-50
        ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 sm:h-20">
                    {/* Logo and Title */}
                    <div className="flex items-center space-x-2 sm:space-x-4">
                        <div className="
                            w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center
                        ">
                            <Image
                                src="/vault.png"
                                alt="Vault Logo"
                                width={48}
                                height={48}
                                className="object-contain w-full h-full"
                                priority
                            />
                        </div>
                        <div>
                            <h1 className="text-xl sm:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                                Account Vault
                            </h1>
                            <p className="text-xs sm:text-sm text-gray-500 -mt-1">Best Accounts | Quick Delivery</p>
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex items-center space-x-2 sm:space-x-4">
                        <a
                            href="https://theprofilebuilder.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                inline-flex items-center px-3 py-2 sm:px-6 sm:py-3
                                bg-gradient-to-r from-blue-600 to-indigo-600
                                text-white font-semibold rounded-xl text-xs sm:text-sm
                                shadow-lg hover:shadow-xl
                                transform hover:scale-105
                                transition-all duration-300 ease-out
                                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                            "
                        >
                            <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className="hidden sm:inline">Profile Builder</span>
                            <span className="sm:hidden">Builder</span>
                        </a>
                        <a
                            href="https://discord.gg/WkyxMBUkWt"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                inline-flex items-center px-3 py-2 sm:px-6 sm:py-3
                                bg-white/60 backdrop-blur-sm
                                text-gray-700 font-semibold rounded-xl text-xs sm:text-sm
                                border border-white/50 shadow-lg
                                hover:bg-white/80 hover:shadow-xl
                                transform hover:scale-105
                                transition-all duration-300 ease-out
                                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                            "
                        >
                            <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.019 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z" />
                            </svg>
                            <span className="hidden sm:inline">Support</span>
                            <span className="sm:hidden">Help</span>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}
