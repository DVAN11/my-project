import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container } from 'react-bootstrap';
import './Rating.css';

const ratings = [
  {
    id: 1,
    name: 'Haruot Jiru',
    role: 'Food Vlogger',
    image: 'https://elementor.deverust.com/foodseas/wp-content/uploads/sites/19/2022/10/man-working-at-office-HZ2SC8X.jpg',
    content: 'Sed pulvinar vehicula varius. Mauris sit amet ex interdum, viverra tortor nec, luctus nibh. Nam tristique vehicula mi eget.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Matsuki Niro',
    role: 'Food Vlogger',
    image: 'https://elementor.deverust.com/foodseas/wp-content/uploads/sites/19/2022/10/young-adult-man-millennial-at-the-seaside-beach-NVHXJQ8.jpg',
    content: 'Pellentesque vulputate, diam ut consequat lobortis, leo nisl tempor turpis, sed maximus nunc lectus ut eros.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Sayko Takida',
    role: 'Food Vlogger',
    image: 'https://elementor.deverust.com/foodseas/wp-content/uploads/sites/19/2022/10/woman-LEKTAVD.jpg',
    content: 'Curabitur id condimentum justo. Nam egestas sodales urna et feugiat. Aliquam ullamcorper velit bibendum ipsum molestie',
    rating: 5,
  },
];

const Rating = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container>
      <Slider {...settings} className="rating-slider">
        {ratings.map((rating) => (
          <div key={rating.id} className="rating-item">
            <img
              className="rating-image"
              src={rating.image}
              alt={rating.name}
            />
            <div className="rating-text">
              <ul className="stars">
                {[...Array(rating.rating)].map((_, index) => (
                  <li key={index}><i class="fa-solid fa-star"></i></li>
                ))}
              </ul>
              <p>{rating.content}</p>
              <h5>{rating.name}</h5>
              <span>{rating.role}</span>
            </div>
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default Rating;
