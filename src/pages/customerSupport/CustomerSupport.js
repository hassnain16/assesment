import React from "react";
import Title from "../../components/UI/Title/Title";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import CarosalImage from "../../assets/carosal-image-large.png";
import "./styles.css";
function CustomerSupport() {
  const carosalList = [
    // {
    //   [
    {
      title: "Import customs clearance",
      description:
        "If you would like to import goods from a third country to within the European Union, Customs Support assists you in every step of the customs clearance process. Our customs experts take care of import documents, classification of import goods with the correct HS code, coordination of physical inspection and duty management.",
      image: CarosalImage,
    },
    {
      title: "Import customs clearance",
      description:
        "If you would like to import goods from a third country to within the European Union, Customs Support assists you in every step of the customs clearance process. Our customs experts take care of import documents, classification of import goods with the correct HS code, coordination of physical inspection and duty management.",
      image: CarosalImage,
    },
    {
      title: "Import customs clearance",
      description:
        "If you would like to import goods from a third country to within the European Union, Customs Support assists you in every step of the customs clearance process. Our customs experts take care of import documents, classification of import goods with the correct HS code, coordination of physical inspection and duty management.",
      image: CarosalImage,
    },
    //   ]
    // },
  ];

  return (
    <div className="customer-support-container">
      <Title alignment="center-align">
        <h2 className="customer-support-title">
          Customs Support is a full-service provider for customs services and is
          here to help
        </h2>
      </Title>
      <div className="customer-support-carosal">
        {/* <div class="slideshow-container"> */}
        <CarouselProvider
          // naturalSlideWidth={100}
          // naturalSlideHeight={450}
          // totalSlides={3}
          isIntrinsicHeight={true}
          visibleSlides={3}
          class="slideshow-container"
          isPlaying={true}
        >
          <Slider>
            {carosalList.map((item, i) => {
              return (
                <>
                  <Slide index={i} className="carosal-item">
                    <img id="carosal-image" src={item.image} alt="carosal" />
                    <h4 id="carosal-title">{item.title}</h4>
                    <p id="carosal-description">{item.description}</p>
                  </Slide>
                  {/*<Slide index={i} className="carosal-item">
                    <img id="carosal-image" src={CarosalImage} alt="carosal" />
                    <h4>Import customs clearance</h4>
                    <p>
                      If you would like to import goods from a third country to
                      within the European Union, Customs Support assists you in
                      every step of the customs clearance process. Our customs
                      experts take care of import documents, classification of
                      import goods with the correct HS code, coordination of
                      physical inspection and duty management.
                    </p>
                  </Slide>
                   <Slide index={2} className="carosal-item">
                <img id="carosal-image" src={CarosalImage} alt="carosal" />
                <h4>Import customs clearance</h4>
                <p>
                  If you would like to import goods from a third country to
                  within the European Union, Customs Support assists you in
                  every step of the customs clearance process. Our customs
                  experts take care of import documents, classification of
                  import goods with the correct HS code, coordination of
                  physical inspection and duty management.
                </p>
              </Slide>
              <Slide index={3} className="carosal-item">
                <img id="carosal-image" src={CarosalImage} alt="carosal" />
                <h4>Import customs clearance</h4>
                <p>
                  If you would like to import goods from a third country to
                  within the European Union, Customs Support assists you in
                  every step of the customs clearance process. Our customs
                  experts take care of import documents, classification of
                  import goods with the correct HS code, coordination of
                  physical inspection and duty management.
                </p>
              </Slide>
              <Slide index={4} className="carosal-item">
                <img id="carosal-image" src={CarosalImage} alt="carosal" />
                <h4>Import customs clearance</h4>
                <p>
                  If you would like to import goods from a third country to
                  within the European Union, Customs Support assists you in
                  every step of the customs clearance process. Our customs
                  experts take care of import documents, classification of
                  import goods with the correct HS code, coordination of
                  physical inspection and duty management.
                </p>
              </Slide> */}
                </>
              );
            })}
          </Slider>
        </CarouselProvider>
        {/* <Carousel swipeable={true} showStatus={false} legend={"none"}>
            {carosalList.map((item, i) => {
              return (
                <div className="carosal-item" >
                  <img id="carosal-image" src={item.image} alt="carosal" />
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              );
            })}
          </Carousel> */}
        {/* </div> */}
      </div>
    </div>
  );
}

export default CustomerSupport;
