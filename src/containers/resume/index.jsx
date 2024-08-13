import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { MdInsertInvitation } from "react-icons/md";
import {VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { data } from "./utils";
import 'react-vertical-timeline-component/style.min.css';
import {MdWork} from 'react-icons/md';
import "./styles.scss";
const Resume=()=>{
    return (
        <section id="resume" className="resume">
            <PageHeaderContent
                headerText="My Resume"
                icon={<MdInsertInvitation size={40}/>}
            />
            <div className="timeline">
                <div className="timeline__certificate">
                    <h3 className="timeline__certificate__header-text">Training & Certificate</h3>
                    <VerticalTimeline
                    layout={'1-column'}
                    lineColor="var(--yellow-theme-main-color)"
                    >
                        {
                            data.certificate.map((item,i)=>(
                                <VerticalTimelineElement
                                    key={i}
                                    className="timeline__certificate__vertical-timeline-element"
                                    contentStyle={{
                                        background: 'none',
                                        color: 'var(--yellow-theme-sub-text-color)',
                                        border: '1.5px solid var(--yellow-theme-main-color)'
                                    }}
                                    date="2022 - Present"
                                    icon={<MdWork/>}
                                    iconStyle={{
                                        background: "#181818",
                                        color: "var(--yellow-theme-main-color)"
                                    }}
                                >
                                    <div className="vertical-timeline-element-title-wrapper">
                                        <h3>
                                            {item.title}
                                        </h3>
                                        <h4>
                                            {item.subTitle}
                                        </h4>
                                    </div>
                                    <p className="vertical-timeline-element-title-wrapper-description">{item.description}</p>

                                </VerticalTimelineElement>
                            ))
                        }

                    </VerticalTimeline>
                </div>
                <div className="timeline__education">
                    <h3 className="timeline__education__header-text">Education</h3>
                    <VerticalTimeline
                        layout={'1-column'}
                        lineColor="var(--yellow-theme-main-color)"
                    >
                    {data.education.map((item,i)=>(
                        <VerticalTimelineElement
                            key={i}
                            className="timeline__certificate__vertical-timeline-element"

                            contentStyle={{
                                background: 'none',
                                color: 'var(--yellow-theme-sub-text-color)',
                                border: '1.5px solid var(--yellow-theme-main-color)'
                            }}
                            date="2022 - Present"
                            icon={<MdWork/>}
                            iconStyle={{
                                background: "#181818",
                                color: "var(--yellow-theme-main-color)"
                            }}


                        >
                            <div className="vertical-timeline-element-title-wrapper">
                                <h3>
                                    {item.title}
                                </h3>
                                <h4>
                                    {item.subTitle}
                                </h4>
                            </div>
                            <p className="vertical-timeline-element-title-wrapper-description">{item.description}</p>

                        </VerticalTimelineElement>
                    ))
                    }
                    </VerticalTimeline>
                </div>

            </div>
        </section>
    )
}
export default Resume;