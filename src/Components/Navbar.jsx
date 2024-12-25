import {X, Menu} from "lucide-react";
import { useState } from "react";

const Navbar = () => {
        const [isOpen, setIsOpen] = useState(false);

        const handleNavigate = () => {
            setIsOpen(false);
        }

    const navItems = [
        {
            label: "Home",
            route:"/",
        },
        {
            label: "About",
            route:"/about",
        },
        {
            label: "Experience",
            route:"/experience",
        },
        {
            label: "Project",
            route:"/project",
        },
        {
            label: "Certificate",
            route:"/certificate",
        },
    ]

    return(
        <nav className="fixed top-0 left-0 w-full bg-opacity-90 backdrop-blur-sm text-white py-4 px-6 flex flex-wrap justify-between items-center z-50 shadow-lg">
            <div className="flex items-center">
                <h1 className="text-xl md:text-2xl text-white font-bold hover:scale-105 transition-transform duration-300"><a href="/" rel="noopener noreferrer">Inas Salwa</a></h1>
            </div>
            <div
                className="md:hidden cursor-pointer hover:scale-110 transition-transform"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? (
                    <X className="text-white hover:rotate-90 transition-transform duration-300" size={24}/>
                ) : (
                    <Menu className="text-white hover:rotate-180 transition-transform duration-300" size={24}/>
                )}
            </div>
            <div className="hidden md:flex space-x-6">
                {navItems.map((item, index) => (
                    <a
                        key={index}
                        className="text-white hover:text-blue-400 hover:scale-110 transition-all duration-300 font-medium"
                        href={item.route}
                    >
                        {item.label}
                    </a>
                ))}
            </div>
            <div className={`md:hidden fixed top-16 left-0 w-full bg-[rgb(23,37,84)] border-t border-gray-800 transition-all duration-300 ease-in-out backdrop-blur-md shadow-xl ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
                {navItems.map((item, index) => (
                    <a
                        key={index}
                        className="block text-white hover:bg-gray-800 hover:translate-x-2 px-6 py-3 transition-all duration-300"
                        href={item.route}
                        onClick={handleNavigate}
                    >
                        {item.label}
                    </a>
                ))}
            </div>
        </nav>
    )
}

export default Navbar;