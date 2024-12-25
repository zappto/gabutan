import { Icon } from '@iconify/react';

const Footer = () => {
    return (
        <div className="text-center bg-[rgb(23,37,84)] p-4 md:p-8 lg:p-10 mt-10 shadow-lg border-blue-400">
            <div className="flex flex-col items-center space-y-3">
                <p className="text-gray-300 text-xs md:text-sm">Follow me on</p>
                <a 
                    href="https://www.instagram.com/inassalwaa/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-300 transition-all duration-300 text-sm md:text-base lg:text-lg font-medium tracking-wider hover:tracking-widest transform hover:scale-105 flex items-center gap-2"
                >
                    <Icon icon="bi:instagram" width="16" height="16" />
                    Inas salwa
                </a>
                <p className="text-gray-400 text-xs mt-4">© 2024 All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer;