import React from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { ImageContainer, ScreenContainer, Image, TextContainer } from "./styled";

export const PicturesDetailPage = () => {
  useProtectedPage();
  const params = useParams();
  const image = useRequestData({}, `${BASE_URL}image/${params.id}`);
  console.log(image);

  return (
    <ScreenContainer>
      {image && (
        <ImageContainer color="secondary">
          <Image src={image.file} />
          <TextContainer>
            <h1 color="primary">{image && image.subtitle}</h1>
          </TextContainer>
        </ImageContainer>
      )}
    </ScreenContainer>
  );
};
