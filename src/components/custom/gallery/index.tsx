import React, { useState } from 'react';
import { TGalleryProps } from 'components/custom/gallery/types';
import {
  SGallery,
  SFullScreenGallery,
  SExit,
  SplideItem,
  SplideMain,
  ImageContainer,
} from 'components/custom/gallery/styles';
import Image from 'next/image';

// import { Image } from 'components/custom';
import '@splidejs/react-splide/dist/css/splide.min.css';
import { CancelIcon } from 'components/svg';
import Project from 'constants/project';

const Gallery = ({ thumbnail, images, ...props }: TGalleryProps) => {
  const [fullscreen, setFullscreen] = useState(false);

  const handleFullScreen = () => {
    setFullscreen(!fullscreen);
  };

  const [startIndex, setStartIndex] = useState(0);

  const handleStartIndex = (value: any) => {
    setStartIndex(value);
  };

  return (
    <SGallery {...props}>
      <ImageContainer>
        <Image
          alt="Supercars thumbnail"
          src={`${Project.apis.v1}/public/images/${thumbnail?.key}`}
          width={1000}
          height={1000}
          priority={true}
          style={{
            height: '100%',
            width: '100%',
            objectFit: 'cover',
          }}
        />
      </ImageContainer>
      {fullscreen && (
        <SFullScreenGallery>
          <SExit onClick={handleFullScreen}>
            <CancelIcon />
          </SExit>
          <SplideMain
            options={{
              type: 'loop',
              perPage: 1,
              drag: true,
              width: '100vw',
              height: '100vh',
              start: startIndex,
            }}
            aria-label="My Favorite Images"
          >
            {images.map((image: any, index: number) => (
              <SplideItem key={image + index}>
                <ImageContainer>
                  <Image
                    alt="house photo"
                    src={`${Project.apis.v1}/public/images/${image?.key}`}
                    width={1300}
                    priority={true}
                    height={900}
                    style={{
                      objectFit: 'cover',
                    }}
                  />
                </ImageContainer>
              </SplideItem>
            ))}
          </SplideMain>
        </SFullScreenGallery>
      )}
      <SplideMain
        options={{
          type: 'loop',
          perPage: 3,
          perMove: 1,
          drag: true,
          pagination: false,
          gap: '16px',
          height: '750px',
          direction: 'ttb',
          breakpoints: {
            1536: {
              direction: 'ltr',
              height: '200px',
            },
            768: {
              direction: 'ltr',
              height: '200px',
              perPage: 2,
            },
            480: {
              direction: 'ltr',
              height: '200px',
              perPage: 1,
              padding: { right: 50, left: 0 },
            },
          },
        }}
        aria-label="My Favorite Images"
      >
        {images.map((image: any, index: any) => (
          <SplideItem
            key={image + index + index}
            onClick={() => {
              handleFullScreen();
              handleStartIndex(index);
            }}
          >
            <Image
              alt="house photo"
              src={`${Project.apis.v1}/public/images/${image?.key}`}
              width={250}
              height={250}
              priority={true}
              style={{
                height: `${fullscreen ? '70%' : '200px'}`,
                width: `${fullscreen ? '70%' : '100%'}`,
                objectFit: 'cover',
              }}
            />
          </SplideItem>
        ))}
      </SplideMain>
    </SGallery>
  );
};

export default Gallery;
