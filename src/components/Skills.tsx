
"use client";
import React from "react";

const skills = [
    { title: 'JavaScript', image: 'javascript.png' },
    { title: 'Node.js', image: 'nodejs.png' },
    { title: 'React.js', image: 'react.png' },
    { title: 'Vue.js', image: 'vue.png' },
    { title: 'Next.js', image: 'nextjs.png' },
    { title: 'Nest.js', image: 'nestjs.png' },
    { title: 'MongoDB', image: 'mongodb.png' },
    { title: 'MySQL', image: 'mysql.png' },
    { title: 'Devops', image: 'cicd.png' },
    { title: 'Docker', image: 'docker.png' },
    { title: 'Blockchain', image: 'blockchain.png' },
    { title: 'AWS', image: 'aws.png' },
    { title: 'Azure', image: 'azure.png' }
];

function Skills() {
    return (
        <div className="px-20 bg-black mx-auto" id="skills">
            <div className="pt-7">
                <div className="text-center">
                    <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Skills</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl mb-8">What I am good at</p>
                </div>
            </div>
            <div className="flex flex-wrap justify-center items-center">
                {skills.map((skill, index) => (
                    <div key={index} className="w-full md:w-1/5 px-2 py-4 flex flex-col items-center bg-gray-200 shadow-lg rounded-md mx-4 my-4">
                        <img src={`/logos/${skill.image}`} alt={skill.title} className="w-16 h-16 object-contain mb-2" />
                        <p className="text-center font-semibold text-gray-900">{skill.title}</p>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Skills