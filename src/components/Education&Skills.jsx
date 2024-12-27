export default function EducationSkills() {
    return (
        <>
            <div className="h-[90vh] bg-[#0e0e1a] text-[#d9d7d7] flex flex-col items-center py-10">

                <div className="w-[70%] ">

                    <div className="py-10 ">
                        <p class=" text-3xl py-2 [#2c2ebf] relative">EDUCATION & SKILLS. <span className='absolute bg-[#2c2ebf] bottom-0 left-0 h-[2px] w-[100px]'></span></p>
                    </div>

                    <div className="flex py-2 flex-col md:flex-row justify-between items-center w-[100%]">

                        {/* Education Section */}

                        <div className="w-[40%] flex justify-center">
                            meow
                        </div>

                        {/* Education Section */}


                        {/* My SKills Section */}

                        <div className="w-[60%] flex-col">
                            <p className="text-3xl font-bold">My skills</p>
                            <p className="py-4">I am a language-agnostic developer, primarily focused on logic. However, I am fluent in working with different technologies and frameworks, including C++, JavaScript/TypeScript, Python, and more.</p>
                            <div className="flex flex-row py-4 justify-between w-[100%]">
                                <div className="w-[50%] h-[100%]">
                                    <p className="text-xl font-bold">Databases</p>
                                    <ul className="list-disc pl-8 pt-2">
                                        <li>MySQL</li>
                                        <li>MongoDB</li>
                                    </ul>
                                    <p className="text-xl py-2 font-bold">Design</p>
                                    <ul className="list-disc pl-8 pt-2">
                                        <li>Adobe Photoshop</li>
                                        <li>Figma</li>
                                    </ul>
                                </div>
                                <div className="w-[50%]">
                                    <p className="text-xl font-bold">Frameworks</p>
                                    <ul className="list-disc pl-8 pt-2">
                                        <li>React</li>
                                        <li>Vue.js</li>
                                        <li>Node/Express</li>
                                        <li>SASS</li>
                                    </ul>
                                    <p className="text-xl py-2 font-bold">Tools</p>
                                    <ul className="list-disc pl-8 pt-2">
                                        <li>RESTful APIs</li>
                                        <li>Git/GitHub</li>
                                        <li>Redmine</li>
                                        <li>Slack</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* My SKills Section */}

                    </div>


                </div>

            </div>

            <div className="bg-[#2a2a33] h-[5px]"></div>

        </>)
}