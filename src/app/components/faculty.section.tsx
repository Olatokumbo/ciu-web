import Image from "next/image";
import Chip from "./chip";

const FacultySection = () => {
    return (
        <div className="bg-[#012245] w-full py-10">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6 max-w-screen-2xl m-auto px-5 pb-5">
                <div className="flex flex-2 w-full">
                    <div className="relative w-full">
                        <Image
                            src="/reader.jpeg"
                            alt="Background Image"
                            width={800}
                            height={400}
                            className="hidden md:block w-full h-96 rounded-md object-cover"
                        />
                    </div>
                </div>
                <div className="flex flex-1 h-96 p-6 bg-[#073266] rounded-md text-white">
                    <div className="flex flex-col justify-between h-full">
                        <div>
                            <Chip title="Bachelor" />
                            <h2 className="text-2xl font-semibold mb-2">Bachelor’s Degree Programs</h2>
                            <p>Our bachelor’s degree programs are designed to provide a comprehensive education in various fields, preparing students for professional success.</p>
                        </div>
                        <div className="my-2 flex flex-row">
                            <Chip title="BSc Computer Studies" />
                            <Chip title="BSc Management Studies" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between items-center gap-6 max-w-screen-2xl m-auto px-5 pt-5">
                <div className="flex flex-1 h-96 p-6 bg-[#073266] rounded-md text-white">
                    <div className="flex flex-col justify-between h-full">
                        <div>
                            <Chip title="Advanced Diploma" />
                            <h2 className="text-2xl font-semibold mb-2">Advanced Diploma Programs</h2>
                            <p>Our advanced diploma programs offer specialized knowledge and skills in various disciplines, enhancing career opportunities for graduates.</p>
                        </div>
                        <div className="my-2 flex flex-row">
                            <Chip title="AD Computer Science" />
                            <Chip title="AD Management Studies" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-2 w-full">
                    <div className="relative w-full">
                        <Image
                            src="/computer-lab.jpeg"
                            alt="Background Image"
                            width={800}
                            height={400}
                            className="hidden md:block w-full h-96 rounded-md object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FacultySection;