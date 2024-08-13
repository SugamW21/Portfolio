import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import {BsInfoCircleFill} from 'react-icons/bs';
import {Animate} from "react-simple-animate";
import {DiApple, DiAndroid} from 'react-icons/di';
import {FaDev, FaDatabase} from 'react-icons/fa';
import "./styles.scss"

const personalDetails =[
    {
        label: "Name",
        value: "Sugam Wosti",
    },
    {
        label: "Age",
        value: "21",
    },
    {
        label: "Address",
        value: "Nepal",
    },
    {
        label: "Email",
        value: "wostisugam@gmail.com",
    },
    {
        label: "Contact No",
        value: "+977 9824350685",
    },
];

const jobSummary = 'I am a software developer with a strong foundation in frontend development using React and backend development with Laravel, utilizing MySQL as the database within Laragon. I have gained practical experience through my role at Kyanite Software Company, Itahari-Nepal, where I have been working for the past three months. My portfolio includes over 15 projects, both academic and non-academic, showcasing my ability to deliver robust and scalable solutions.'

const About=()=>{
    return(
        <section id="about" className="about">
            <PageHeaderContent
                headerText = "About Me"
                icon={<BsInfoCircleFill size={40}/>}

                />
            <div className="about__content">
                <div className="about__content__personalWrapper">
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform:'translateX(-900px)',
                        }}
                        end={{
                            transform:'translateX(0px)',
                        }}
                    >
                        <h3>Software Developer</h3>
                        <p>{jobSummary}</p>
                    </Animate>

                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform:'translateX(500px)',
                        }}
                        end={{
                            transform:'translateX(0px)',
                        }}
                    >
                        <h3 className="PersonalInformationHeaderText">Personal Information</h3>
                        <ul>
                            {
                                personalDetails.map((item,i)=>(
                                    <li key={i}>
                                        <span className="title">{item.label}</span>
                                        <span className="value">{item.value}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </Animate>

                </div>


                <div className="about__content__servicesWrapper">
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform:'translateX(600px)',
                        }}
                        end={{
                            transform:'translateX(0px)',
                        }}
                    >
                    <div className="about__content__servicesWrapper__innerContent">
                        <div>
                            <FaDev size={60} color="var(--yellow-theme-main-color)"/>
                        </div>

                        <div>
                            <DiAndroid size={60} color="var(--yellow-theme-main-color)"/>
                        </div>

                        <div>
                            <FaDatabase size={60} color="var(--yellow-theme-main-color)"/>
                        </div>

                        <div>
                            <DiApple size={60} color="var(--yellow-theme-main-color)"/>
                        </div>
                    </div>
                    </Animate>

                </div>


            </div>
        </section>
    )
}
export default About;