import img1 from  "../assets/Image/idc.png";
import img2 from "../assets/Image/banner.png";
import img3 from "../assets/Image/poster.png";



const Project = () => {
    return (
        <div className="flex flex-col justify-start px-4 sm:px-6 lg:px-8 pt-24 md:pt-32" id="project">
            <div className="text-3xl md:text-5xl text-white italic font-bold mb-8">
                <h1 className="text-center lg:text-left lg:ml-14 tracking-wider transform hover:scale-105 transition-all duration-300">PROJECT</h1>
                <div className="mt-5 w-24 md:w-32 h-1 bg-yellow-200 mx-auto lg:ml-14 lg:mr-auto rounded transform hover:w-40 transition-all duration-500"></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                    
                    {/* Gambar 1 */}
                    <div className="w-full max-w-sm mx-auto group hover:scale-105 transition-all duration-500 ease-in-out">
                        <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                            <img src={img1} alt="ID Card" className="object-cover w-full h-full transform transition-transform group-hover:scale-110 duration-700" />
                            <div
                                style={{
                                    background: "linear-gradient(to top, rgba(23, 37, 84, 0.9), transparent)",
                                }}
                                className="absolute inset-0 opacity-80 group-hover:opacity-60 transition-opacity duration-300"
                            ></div>
                        </div>
                        <h1 className="text-white text-xl md:text-2xl italic text-center mt-4 group-hover:text-yellow-200 transition-all duration-300 transform group-hover:translate-y-[-4px]">
                            ID Card
                        </h1>
                    </div>

                    {/* Gambar 2 */}
                    <div className="w-full max-w-sm mx-auto group hover:scale-105 transition-all duration-500 ease-in-out">
                        <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                            <img src={img2} alt="Banner" className="object-cover w-full h-full transform transition-transform group-hover:scale-110 duration-700" />
                            <div
                                style={{
                                    background: "linear-gradient(to top, rgba(23, 37, 84, 0.9), transparent)",
                                }}
                                className="absolute inset-0 opacity-80 group-hover:opacity-60 transition-opacity duration-300"
                            ></div>
                        </div>
                        <h1 className="text-white text-xl md:text-2xl italic text-center mt-4 group-hover:text-yellow-200 transition-all duration-300 transform group-hover:translate-y-[-4px]">
                            Banner
                        </h1>
                    </div>

                    {/* Gambar 3 */}
                    <div className="w-full max-w-sm mx-auto sm:col-span-2 lg:col-span-1 group hover:scale-105 transition-all duration-500 ease-in-out">
                        <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                            <img src={img3} alt="Poster" className="object-cover w-full h-full transform transition-transform group-hover:scale-110 duration-700" />
                            <div
                                style={{
                                    background: "linear-gradient(to top, rgba(23, 37, 84, 0.9), transparent)",
                                }}
                                className="absolute inset-0 opacity-80 group-hover:opacity-60 transition-opacity duration-300"
                            ></div>
                        </div>
                        <h1 className="text-white text-xl md:text-2xl italic text-center mt-4 group-hover:text-yellow-200 transition-all duration-300 transform group-hover:translate-y-[-4px]">
                            Poster
                        </h1>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Project;