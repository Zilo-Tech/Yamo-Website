import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pic from './../../../assets/hero.png'

// Team members data
const teamMembers = [
  {
    id: 1,
    name: "Nyudine Bill",
    designation: "Designation 1",
    image: {pic},
    socialLinks: [
      { icon: "fab fa-facebook-f", url: "#" },
      { icon: "fab fa-twitter", url: "#" },
      { icon: "fab fa-instagram", url: "#" },
    ],
  },
  {
    id: 2,
    name: " Hilarry Clinton",
    designation: "Designation 2",
    image: "img/team-2.jpg",
    socialLinks: [
      { icon: "fab fa-facebook-f", url: "#" },
      { icon: "fab fa-twitter", url: "#" },
      { icon: "fab fa-instagram", url: "#" },
    ],
  },
  {
    id: 3,
    name: "Computer Wizard",
    designation: "Designation 3",
    image: "img/team-3.jpg",
    socialLinks: [
      { icon: "fab fa-facebook-f", url: "#" },
      { icon: "fab fa-twitter", url: "#" },
      { icon: "fab fa-instagram", url: "#" },
    ],
  },
  {
    id: 4,
    name: "ZiloTech",
    designation: "Designation 4",
    image: "img/team-4.jpg",
    socialLinks: [
      { icon: "fab fa-facebook-f", url: "#" },
      { icon: "fab fa-twitter", url: "#" },
      { icon: "fab fa-instagram", url: "#" },
    ],
  },
];

// React Slick settings
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const TeamMembers = () => {
  return (
    <div className="mt-16">
      <div className="">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h5 className="section-title ff-secondary text-center text-2xl font-bold text-gray-800">
            Team Members
          </h5>
          <h1 className=" text-xl font-semibold text-gray-800">Our Master Chefs</h1>
        </div>

        {/* React Slick Carousel */}
        <Slider {...settings}>
          {teamMembers.map((member) => (
            <div key={member.id} className=" border rounded-lg  max-w-[90%] sm:max-w-[93%] mx-auto lg:w-full">
              <div className="team-item text-center rounded overflow-hidden">
                <div className="rounded-circle overflow-hidden m-4">
                  <img
                    className="img-fluid"
                    src={pic}
                    alt={member.name}
                  />
                </div>
                <h5 className="mb-0">{member.name}</h5>
                <small>{member.designation}</small>
                <div className="d-flex justify-content-center mt-3">
                  {member.socialLinks.map((link, index) => (
                    <a
                      key={index}
                      className="btn btn-square btn-primary mx-1"
                      href={link.url}
                    >
                      <i className={link.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TeamMembers;