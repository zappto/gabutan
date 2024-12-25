import bgImage from "../assets/Image/Jumbotron.jpg";

const Jumbotron = () => {
    return (
        <div
            className="h-screen bg-cover bg-center flex flex-col justify-center items-center relative transition-transform duration-300 hover:scale-105"
            style={{
                backgroundImage: `url(${bgImage})`,
            }}
            id="home"
        >
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center">
                <h1 className="text-xl md:text-2xl lg:text-3xl text-white text-center mt-16 md:mt-24 italic font-bold tracking-wider hover:text-sky-300 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">My name Inas salwa</h1>
                <h2 className="text-sm md:text-lg lg:text-xl text-sky-300 text-center mt-2 md:mt-3 font-thin font-mono hover:text-white transition-all duration-300 transform hover:scale-105 animate-pulse">System Information Student</h2>
            </div>    
        </div>
    );
};

export default Jumbotron;