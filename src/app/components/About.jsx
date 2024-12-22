"use client";
import React,{useTransition, useState} from "react";
// import Link from "next/link";
import Image from "next/image";
import TabButton from "./TabButton";



const About = () => {

    const Tab_Data = [
        {
            title: "Skills",
            id: "skills",
            content: (
                <ul className="list-disc pl-2">
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Git</li>
                </ul>
            )
        },
        {
            title: "Education",
            id: "Education",
            content: (
                <ul className="list-disc pl-2">
                    <li>Full Stack Web Development</li>
                    <li>University of Karachi</li>
                    <li>Graduated: 2023</li>
                </ul>
            )
        },
        {
            title: "Certification",
            id: "Certification",
            content: (
                <ul className="list-disc pl-2">
                    <li>Full Stack Web Development</li>
                    <li>University of Karachi</li>
                    <li>Graduated: 2023</li>
                </ul>
            )
        }
    ]

    const [tab, setTab] =useState("skills")
    const [isPending, startTransition] = useTransition()

    const handleTabChange = (id) => {
        isPending(() => {
            setTab(id)
        })
        startTransition(() => {
            setTab(id)
        })
    }

    return(
            <section className="text-white">
                <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 xl:gap-16 sm:py-16">
                    <Image src="/about-image.png" alt="about-image" width={500} height={500} />
                   <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">About</h2>
                    <p className="text-base lg:text-lg">I am a full stack web developer with a passion for creating interactive and 
                    responsive web applications. I have experience working with JavaScript, React, 
                    Redux, Node.js, Express, PostgreSQL, Sequelize, HTML, CSS, and Git. I am a quick 
                    learner and I am always looking to expand my knowledge and skill set. I am a team 
                    player and I am excited to work with others to create amazing applications</p>
                    <div className="flex flex-row mt-8">
                        <TabButton selectTab={() => handleTabChange("skills") } active={tab === "skills"} >
                            {" "} Skills {" "}
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange("Education") } active={tab === "Education"} >
                            {" "} Education {" "}
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange("Certification") } active={tab === "Certification"} >
                            {" "} Certification {" "}
                        </TabButton>
                    </div>
                    <div className="mt-8">
                        {Tab_Data.find((t) => t.id === tab).content}
                    </div>

                   </div>
                </div>

            </section>
    )
}

export default About;