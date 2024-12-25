import gambar1 from "../assets/Image/sertif2.jpg";
import gambar2 from "../assets/Image/Sertif1.png"

const Certificate = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[rgb(23,37,84)] to-[rgb(15,23,42)] py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
                    <h1 className="text-5xl md:text-7xl text-white italic font-bold tracking-wider hover:text-yellow-200 transition-colors duration-300">CERTIFICATE</h1>
                    <div className="mt-8 w-48 h-1.5 bg-yellow-200 rounded-full mx-auto animate-pulse"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
                    <div className="transform hover:scale-105 transition-transform duration-500 hover:rotate-1">
                        <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-2xl hover:shadow-yellow-200/20">
                            <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg">
                                <img 
                                    src={gambar1} 
                                    alt="Majelis Perwakilan Kelas Certificate" 
                                    className="object-cover w-full h-full hover:opacity-80 transition-all duration-500 hover:scale-110"
                                />
                            </div>
                            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl italic font-semibold text-center mt-8 hover:text-yellow-200 transition-colors duration-300">
                                Majelis Perwakilan Kelas
                            </h2>
                        </div>
                    </div>

                    <div className="transform hover:scale-105 transition-transform duration-500 hover:rotate-1">
                        <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-2xl hover:shadow-yellow-200/20">
                            <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg">
                                <img 
                                    src={gambar2} 
                                    alt="Biology Olimpiade Certificate" 
                                    className="object-cover w-full h-full hover:opacity-80 transition-all duration-500 hover:scale-110"
                                />
                            </div>
                            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl italic font-semibold text-center mt-8 hover:text-yellow-200 transition-colors duration-300">
                                Biology Olimpiade
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Certificate;