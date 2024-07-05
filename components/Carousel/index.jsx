import React from 'react';
// import '../styles/Carousel.scss';

const testimonials = [
    {
        name: "Alex Patterson",
        title: "Senior UX Designer",
        testimonial: "Working with AY has been a pleasure. His keen eye for detail and user-centric approach consistently elevate our projects.",
        url: "/alex.png"
    },
    {
        name: "Jordan Bennett",
        title: "Lead UX Writer",
        testimonial: "His ability to seamlessly integrate UX writing with design ensures a cohesive and engaging user experience.",
        url: "/jordan.png"
    },
    {
        name: "Taylor Morgan",
        title: "Founder",
        testimonial: "AY played a pivotal role in transforming our product's user experience. His expertise in UXUI design helped us achieve more.",
        url: "/taylor.png"
    }
];

const Carousel = () => {
    return (
        <div className="carousel">
            <div className="carousel-track">
                {testimonials.map(({testimonial, name, url, title}, index) => (
                    <div key={index} className="card">
                        <div className="card-content">
                            <p>{testimonial}</p>
                            <div className="profile">
                                <img src={url} alt={name} className="profile-image" />
                                <div className="profile-info">
                                    <h3>{name}</h3>
                                    <h4>{title}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                {testimonials.map(({testimonial, name, url, title}, index) => (
                    <div key={index} className="card">
                        <div className="card-content">
                            <p>{testimonial}</p>
                            <div className="profile">
                                <img src={url} alt={name} className="profile-image" />
                                <div className="profile-info">
                                    <h3>{name}</h3>
                                    <h4>{title}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                {testimonials.map(({testimonial, name, url, title}, index) => (
                    <div key={index} className="card">
                        <div className="card-content">
                            <p>{testimonial}</p>
                            <div className="profile">
                                <img src={url} alt={name} className="profile-image" />
                                <div className="profile-info">
                                    <h3>{name}</h3>
                                    <h4>{title}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                {testimonials.map(({testimonial, name, url, title}, index) => (
                    <div key={index} className="card">
                        <div className="card-content">
                            <p>{testimonial}</p>
                            <div className="profile">
                                <img src={url} alt={name} className="profile-image" />
                                <div className="profile-info">
                                    <h3>{name}</h3>
                                    <h4>{title}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                {testimonials.map(({testimonial, name, url, title}, index) => (
                    <div key={index} className="card">
                        <div className="card-content">
                            <p>{testimonial}</p>
                            <div className="profile">
                                <img src={url} alt={name} className="profile-image" />
                                <div className="profile-info">
                                    <h3>{name}</h3>
                                    <h4>{title}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                {testimonials.map(({testimonial, name, url, title}, index) => (
                    <div key={index} className="card">
                        <div className="card-content">
                            <p>{testimonial}</p>
                            <div className="profile">
                                <img src={url} alt={name} className="profile-image" />
                                <div className="profile-info">
                                    <h3>{name}</h3>
                                    <h4>{title}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                {testimonials.map(({testimonial, name, url, title}, index) => (
                    <div key={index} className="card">
                        <div className="card-content">
                            <p>{testimonial}</p>
                            <div className="profile">
                                <img src={url} alt={name} className="profile-image" />
                                <div className="profile-info">
                                    <h3>{name}</h3>
                                    <h4>{title}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                {testimonials.map(({testimonial, name, url, title}, index) => (
                    <div key={index} className="card">
                        <div className="card-content">
                            <p>{testimonial}</p>
                            <div className="profile">
                                <img src={url} alt={name} className="profile-image" />
                                <div className="profile-info">
                                    <h3>{name}</h3>
                                    <h4>{title}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                {testimonials.map(({testimonial, name, url, title}, index) => (
                    <div key={index} className="card">
                        <div className="card-content">
                            <p>{testimonial}</p>
                            <div className="profile">
                                <img src={url} alt={name} className="profile-image" />
                                <div className="profile-info">
                                    <h3>{name}</h3>
                                    <h4>{title}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                
            </div>
        </div>
    );
};

export default Carousel;
