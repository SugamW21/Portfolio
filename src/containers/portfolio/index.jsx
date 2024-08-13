import React, { useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { FaFilePowerpoint } from "react-icons/fa";
import ImageOne from '../../images/image1.jpg';
import ImageTwo from '../../images/image2.jpg';
import ImageThree from '../../images/image3.jpg';
import ImageFour from '../../images/image4.jpg';
import ImageFive from '../../images/image5.jpg';
import './styles.scss';

const portfolioData = [
    { id: 1, name: "Running Club", image: ImageOne, link: "#" },
    { id: 2, name: "Edumart Online", image: ImageTwo, link: "#" },
    { id: 3, name: "Ecommerce", image: ImageThree, link: "#" },
    { id: 4, name: "Notes App", image: ImageFour, link: "#" },
    { id: 5, name: "BlogPage", image: ImageFive, link: "#" },
];

const filterData = [
    { filterId: 1, label: 'All' },
    { filterId: 2, label: 'Development' },
    { filterId: 3, label: 'Design' },
];

const Portfolio = () => {
    const [filteredValue, setFilteredValue] = useState(1);
    const [hoveredValue, setHoveredValue] = useState(null);

    function handleFilter(currentId) {
        setFilteredValue(currentId);
    }

    function handleHover(itemId) {
        setHoveredValue(itemId);
    }

    const filteredItems = filteredValue === 1 ? portfolioData :
        portfolioData.filter(item => item.id === filteredValue);

    return (
        <section id="portfolio" className="portfolio">
            <PageHeaderContent
                headerText="My Portfolio"
                icon={<FaFilePowerpoint size={40} />}
            />
            <div className="portfolio__content">

                <ul className="portfolio__content__filter">
                    {filterData.map(item => (
                        <li
                            className={item.filterId === filteredValue ? 'active' : ''}
                            onClick={() => handleFilter(item.filterId)}
                            key={item.filterId}
                        >
                            {item.label}
                        </li>
                    ))}
                </ul>
                <div className="portfolio__content__cards">
                    {filteredItems.map(item => (
                        <div className="portfolio__content__cards__item" key={item.id}
                             onMouseEnter={() => handleHover(item.id)}
                             onMouseLeave={() => handleHover(null)}
                        >
                            <div className="portfolio__content__cards__item__img-wrapper">
                                <a href={item.link}>
                                    <img alt={item.name} src={item.image} />
                                </a>
                            </div>
                            <div className="portfolio__content__cards__item__overlay">
                                {hoveredValue === item.id && (
                                    <div>
                                        <p>{item.name}</p>
                                        <button>Visit</button>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Portfolio;

