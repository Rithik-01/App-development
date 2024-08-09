import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { useSpring, animated } from '@react-spring/web';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Testimonials.css';
import member1 from './member-1.jpg';
import member2 from './member-2.jpg';
import member3 from './member-3.jpeg';
import Avatar1 from './run.png';
import Avatar2 from './trainer.png';
import Avatar3 from './wait.png';

const testimonials = [
  {
    image: member1,
    avatar: Avatar1,
    quote: "This fitness program changed my life!",
    name: "Member 1"
  },
  {
    image: member2,
    avatar: Avatar2,
    quote: "The best workout routines I have ever tried.",
    name: "Member 2"
  },
  {
    image: member3,
    avatar: Avatar3,
    quote: "Great community and support.",
    name: "Member 3"
  }
];

const Testimonials = () => {
  const animationProps = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 500 } });

  return (
    <section className="testimonials">
      <h2>What Our Members Say</h2>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={5000}
        dynamicHeight={true}
      >
        {testimonials.map((test, index) => (
          <div key={index}>
            <img src={test.image} alt={`Member ${index + 1}`} />
            <animated.div style={animationProps} className="testimonial">
              <div className="testimonial-content">
                <img src={test.avatar} alt={`Avatar ${index + 1}`} className="avatar" />
                <p>"{test.quote}"</p>
                <p>- {test.name}</p>
              </div>
            </animated.div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Testimonials;
