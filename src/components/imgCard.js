import React from "react";
import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";

const CardImg = styled.div`
  background-color: white;
  border-radius: 12px;
  margin-top: 1rem;
  /* margin-left: 10px; */
  width: 550px;
  height: 560px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Img = styled(LazyLoadImage)`
  object-fit: cover;
  border-radius: 6px;
`;

const ImgCard = ({ imgUrl, key }) => {
  return (
    <CardImg>
      <Img
        effect="blur"
        key={key}
        src={imgUrl}
        width="100%"
        height="100%"
        delayTime="400"
      />
    </CardImg>
  );
};

export default ImgCard;
