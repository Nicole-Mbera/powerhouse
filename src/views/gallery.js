import React, { useState } from 'react';
import styled from 'styled-components';
import Homelayout from '../components/homelayout';
import tyres from "../assets/images/uncroppedstairs.jpg";
import work from "../assets/images/serena.jpg";
import help from "../assets/images/groupic.jpg";
import present from "../assets/images/best.jpg";
import chal6 from "../assets/images/6.jpg";
import cindy from "../assets/images/cindy.jpg";
import denzel from "../assets/images/faces.JPG";
import nicole from "../assets/images/selfie2.jpg";
import sarah from "../assets/images/sarah.jpg";
import naomi from "../assets/images/elevator.jpg";
import jump from "../assets/images/jump.jpg";
import  sit from "../assets/images/sit.jpg";
import stand from "../assets/images/stand.jpg";
import green from "../assets/images/green.jpg"

// Gallery container with masonry effect
const GalleryContainer = styled.div`
  column-count: 3;
  column-gap: 10px; // No gap between columns
  width: 100%;
  padding: 10px;

  @media (max-width: 768px) {
    column-count: 2; // 2 columns on smaller screens
  }

  @media (max-width: 480px) {
    column-count: 1; // 1 column on very small screens
  }
`;

// Styling for images in the masonry layout
const MasonryImage = styled.img`
  width: 100%;
  margin-bottom: 20px;
  display: block;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

// Lightbox overlay styling
const LightboxOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

// Full-size image styling in lightbox
const LightboxImage = styled.img`
  max-width: 90%;
  max-height: 90%;
  animation: fadeIn 0.3s ease;
`;

// Close button styling
const CloseButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  background: transparent;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
`;

// Array with imported images
const images = [work, present, help, chal6, tyres,denzel, naomi, jump, sit, stand, green];

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openLightbox = (image) => {
    setCurrentImage(image);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImage(null);
  };

  return (
    <>
    <Homelayout>
      <GalleryContainer>
        {images.map((image, index) => (
          <MasonryImage
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            onClick={() => openLightbox(image)}
          />
        ))}
      </GalleryContainer>

      {lightboxOpen && (
        <LightboxOverlay onClick={closeLightbox}>
          <CloseButton onClick={closeLightbox}>&times;</CloseButton>
          <LightboxImage src={currentImage} alt="Full-size" />
        </LightboxOverlay>
      )}
      </Homelayout>
    </>
  );
};

export default Gallery;
