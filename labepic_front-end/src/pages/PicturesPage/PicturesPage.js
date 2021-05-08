import React from "react";
import { AddImageButton, ImagesListContainer } from "./styled";
import ImageCard from "../../components/ImageCard/ImageCard";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";
import Add from "@material-ui/icons/Add"
import { goToAddPicturesPage, goToPicturesDetailPage } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";

export const PicturesPage = () => {
  useProtectedPage();
  const history = useHistory()
  const images = useRequestData([], `${BASE_URL}image/all`);

  const onClickCard = (id) => {
    goToPicturesDetailPage(history, id)
  }

  console.log(images);

  const cards = images.map((image) => {
    return (
      <ImageCard 
        key={image.id}
        image={image.file}
        subtitle={image.subtitle}
        onClick={() => onClickCard(image.id)}
      />
    );
  });

  return (
    <ImagesListContainer>
      {cards}
      <AddImageButton
        color="secondary"
        onClick={() => goToAddPicturesPage(history)}
      >
        <Add/>
      </AddImageButton>
    </ImagesListContainer>
  );
};
