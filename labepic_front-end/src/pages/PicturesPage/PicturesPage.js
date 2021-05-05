import React from "react";
import { Button } from "@material-ui/core";
import useProtectedPage from "../../hooks/useProtectedPage";

export const PicturesPage = () => {
  useProtectedPage()
  return (
    <div>
      <h1>PicturesPage</h1>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
    </div>
  );
};
