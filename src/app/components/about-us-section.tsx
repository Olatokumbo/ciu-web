import Image from "next/image";

const AboutUsSection = () => {
    return (
        <div className="my-16 px-0 lg:px-14 text-[#042260] max-w-screen-2xl mx-auto">
            <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start">
                <div className="w-full lg:w-3/5 rounded-lg border-4 border-white">
                    <h1 className="text-3xl lg:text-4xl font-bold mb-4">About Us</h1>
                    <p className="text-lg lg:text-xl mb-6">
                        Crystal International University <b>(CIU)</b> is a leading institution
                        dedicated to academic excellence, innovative research, and the
                        holistic development of students from around the globe. At CIU, we
                        foster a vibrant learning environment that prepares students for the
                        challenges of a dynamic, interconnected world.
                    </p>
                    <div className="flex flex-col lg:flex-row lg:justify-between gap-6">
                        <div className="lg:w-1/2">
                            <h2 className="text-2xl font-semibold mb-2">Mission:</h2>
                            <p>
                                To empower students with knowledge, skills, and values that
                                will enable them to excel in their careers and contribute
                                meaningfully to society.
                            </p>
                        </div>
                        <div className="lg:w-1/2">
                            <h2 className="text-2xl font-semibold mb-2">Vision:</h2>
                            <p>
                                To be recognized as a premier international university that
                                cultivates leaders, innovators, and responsible global citizens.
                            </p>
                        </div>
                    </div>
                </div>
                <Image
                    src="/info.png"
                    alt="Background Image"
                    width={500}
                    height={300}
                    className="hidden lg:block w-full lg:w-1/3 h-auto mt-10 lg:mt-0 lg:ml-10"
                />
            </div>
        </div>
    );
};

export default AboutUsSection;