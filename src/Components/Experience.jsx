import { useState } from "react";
import gambar1 from "../assets/Image/exp2.jpg"
import gambar2 from "../assets/Image/exp3.jpg"
import gambar3 from "../assets/Image/exp1.jpeg"

const Experience = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const experienceData = [
        {
            image: gambar1,
            title: "Comission D MPK Senior High School 2 Pemalang",
            date: "2021 - 2022",
            description: "Have duties and responsibilities in terms of public relations, documentation.",
            location: "SMA Negeri 2 Pemalang"
        },
        {
            image: gambar3,
            title: "Vice Chairman MPK Senior High School 2 Pemalang",
            date: "2022 - 2023",
            description: "Assist the chairman in coordinating each existing commission and jointly implementing the work program.",
            location: "SMA Negeri 2 Pemalang"
        },
        {
            image: gambar2,
            title: "Leader PPMB Senior High School 2 Pemalang",
            date: "2022 - 2023",
            description: "Responsible for the running of the event, ensuring that all committee members carry out their respective duties",
            location: "SMA Negeri 2 Pemalang"
        }
    ];

    const handleImageClick = (data) => {
        setSelectedImage(data);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className="flex flex-col justify-start px-4 md:ml-14 mt-10 md:mt-20 pt-16" id="experience">
            <div className="text-3xl md:text-5xl text-white italic font-bold mb-8">
                <h1 className="text-center md:text-right md:mr-20 hover:text-yellow-200 transition-colors duration-300">EXPERIENCE</h1>
                <div className="mt-5 w-32 h-1 bg-yellow-200 mx-auto md:ml-auto md:mr-20 rounded animate-pulse"></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 items-center justify-items-center mt-12">
                    {experienceData.map((data, index) => (
                        <div key={index} className="w-full max-w-[288px] h-auto rounded-xl flex flex-col cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-yellow-200/20"
                            onClick={() => handleImageClick(data)}>
                            <img src={data.image} alt="" className="object-cover h-72 rounded-t-xl w-full transition-transform duration-300 hover:brightness-110"/>
                            <h1 className="bg-white w-full rounded-b-xl p-4 md:p-8 text-black text-xs italic text-center font-semibold hover:bg-yellow-50 transition-colors duration-300">
                                {data.title}
                            </h1>
                        </div>
                    ))}
                </div>
            </div>

            {selectedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex items-center justify-center p-4 z-50 transition-opacity duration-300" onClick={closeModal}>
                    <div className="bg-white rounded-xl p-6 max-w-4xl w-full flex flex-col md:flex-row relative shadow-2xl transform transition-all duration-300 hover:scale-[1.02]" onClick={e => e.stopPropagation()}>
                        <button 
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-gray-600 hover:text-red-500 text-2xl font-bold transition-colors duration-300"
                        >
                            ×
                        </button>
                        <img src={selectedImage.image} alt="" className="w-full md:w-1/2 h-auto max-h-[70vh] object-contain rounded-lg transition-transform duration-300 hover:scale-105"/>
                        <div className="w-full md:w-1/2 md:pl-8 mt-4 md:mt-0">
                            <h2 className="text-2xl font-bold text-gray-800 mb-3 hover:text-yellow-600 transition-colors duration-300">{selectedImage.title}</h2>
                            <div className="flex items-center text-gray-600 mb-4 space-x-4">
                                <span className="bg-yellow-50 px-3 py-1 rounded-full text-sm">{selectedImage.date}</span>
                                <span className="bg-gray-50 px-3 py-1 rounded-full text-sm">{selectedImage.location}</span>
                            </div>
                            <p className="text-gray-700 leading-relaxed hover:text-gray-900 transition-colors duration-300">{selectedImage.description}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Experience;