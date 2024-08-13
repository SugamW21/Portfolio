import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { MdConnectWithoutContact } from "react-icons/md";
import { Animate } from "react-simple-animate";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles.scss";

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        // Trigger success toast
        toast.success("Submitted successfully");
    };

    return (
        <section id="contact" className="contact">
            <PageHeaderContent
                headerText="My Contact"
                icon={<MdConnectWithoutContact size={40} />}
            />
            <div className="contact__content">
                <Animate
                    play
                    duration={1}
                    delay={0}
                    start={{
                        transform: "translateX(-200px)",
                    }}
                    end={{
                        transform: "translateX(0px)",
                    }}
                >
                    <h3 className="contact__content__header-text">Let's Talk</h3>
                </Animate>
                <Animate
                    play
                    duration={1}
                    delay={0}
                    start={{
                        transform: "translateX(200px)",
                    }}
                    end={{
                        transform: "translateX(0px)",
                    }}
                >
                    <div className="contact__content__form">
                        <form
                            className="contact__content__form__controlswrapper"
                            onSubmit={handleSubmit}
                        >
                            <div>
                                <input
                                    required
                                    name="name"
                                    className="inputName"
                                    type={"text"}
                                />
                                <label htmlFor="name" className="nameLabel">
                                    Name
                                </label>
                            </div>
                            <div>
                                <input
                                    required
                                    name="email"
                                    className="inputEmail"
                                    type={"text"}
                                />
                                <label htmlFor="email" className="emailLabel">
                                    Email
                                </label>
                            </div>
                            <div>
                                <textarea
                                    required
                                    name="description"
                                    className="inputDescription"
                                    rows="5"
                                />
                                <label htmlFor="description" className="descriptionLabel">
                                    Description
                                </label>
                            </div>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </Animate>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </section>
    );
};

export default Contact;
