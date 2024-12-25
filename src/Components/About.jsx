import img from "../assets/Image/About.jpg"

const About = () => {
    return (
        <>
        <div className="bg-rgb(21, 21, 82) flex items-start justify-center pt-24 min-h-screen" id="about">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12 px-8 max-w-7xl mx-auto">

                <img
                    src= {img} 
                    alt="Profile"
                    className="w-40 h-40 md:w-64 md:h-64 rounded-full object-cover shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 mt-10 border-4 border-blue-300"
                />
                <div className="text-white">
                    <h1 className="text-blue-300 text-5xl italic font-medium text-center md:text-left mb-4 hover:text-blue-200 transition-colors duration-300">
                        About Me!
                    </h1>
                    <div className="w-24 h-1 bg-yellow-200 mb-4 hover:w-32 transition-all duration-300"></div>
                    <p className="italic font-thin text-ms text-justify hover:text-blue-100 transition-colors duration-300">
                        Hi! My Name is Inas Salwa. I am a first-year student in the Information Systems program 
                        at Universitas Dian Nuswantoro. I am a graduate of senior high school 2 Pemalang.
                    </p>
                    <p className="italic font-thin text-ms text-justify mt-4 hover:text-blue-100 transition-colors duration-300">
                        I have basic computing skills that I learned self-taught since the age of 7, which have given me
                        expertise in content editing and poster design. I also have an interest in the fields of computing 
                        and business.
                    </p>

                <div className="border mt-5 p-6 rounded-lg backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300 shadow-lg">
                    <div className="flex flex-col items-start space-y-2">
                    <p className="text-white text-lg font-thin hover:translate-x-2 transition-transform duration-200">Name : Inas Salwa Nuraini</p>
                    <p className="text-white text-lg font-thin hover:translate-x-2 transition-transform duration-200">Age : 19</p>
                    <p className="text-white text-lg font-thin hover:translate-x-2 transition-transform duration-200">Phone: +6282328665788</p>
                    <p className="text-white text-lg font-thin hover:translate-x-2 transition-transform duration-200">Address: Semarang, Central Java</p>
                    <p className="text-white text-lg font-thin hover:translate-x-2 transition-transform duration-200">Instagram: @inassalwaa</p>
                    <p className="text-white text-lg font-thin hover:translate-x-2 transition-transform duration-200">Education : Dian Nuswantoro University</p>
                </div>
                </div>
                </div>
            </div>
        </div>         
        <div className="flex flex-col items-center text-center mt-14 mb-20">
            <div className="text-3xl md:text-5xl text-white italic font-bold mb-8 hover:text-blue-200 transition-colors duration-300">
                <h1 className="transform hover:scale-105 transition-transform duration-300">EDUCATION</h1>
                <h1 className="transform hover:scale-105 transition-transform duration-300">BACKGROUND</h1>
                <div className="mt-5 w-24 md:w-32 h-1 bg-yellow-200 rounded mx-auto hover:w-40 transition-all duration-300"></div>
            </div>
            <div className="flex flex-col md:flex-row flex-wrap justify-center gap-8 md:gap-16 mb-10 px-4">
                <div className="w-full md:w-auto border border-yellow-300 mt-3 p-4 md:p-5 rounded-full hover:bg-blue-300/50 transition-all duration-300 transform hover:scale-105 cursor-pointer backdrop-blur-sm">
                    <p className="text-white italic text-sm md:text-base text-center">Junior High School 2 Pemalang</p>
                </div>
                <div className="w-full md:w-auto border border-yellow-300 mt-3 p-4 md:p-5 rounded-full hover:bg-blue-300/50 transition-all duration-300 transform hover:scale-105 cursor-pointer backdrop-blur-sm">
                    <p className="text-white italic text-sm md:text-base text-center">Senior High School 2 Pemalang</p>
                </div>
                <div className="w-full md:w-auto border border-yellow-300 mt-3 p-4 md:p-5 rounded-full hover:bg-blue-300/50 transition-all duration-300 transform hover:scale-105 cursor-pointer backdrop-blur-sm">
                    <p className="text-white italic text-sm md:text-base text-center">Dian Nuswantoro University</p>
                </div>
            </div>
        </div>        
        </>
    )
}

export default About;