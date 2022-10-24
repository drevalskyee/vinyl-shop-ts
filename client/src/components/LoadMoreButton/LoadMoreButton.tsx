import React, { FC } from "react";
import { Button } from "./LoadMoreButton.styles";

interface LoadMoreButtonProps {
  buttonText: string;
  loadMore: () => void;
}

const LoadMoreButton: FC<LoadMoreButtonProps> = ({ buttonText, loadMore }) => (
  <Button onClick={() => loadMore()}>{buttonText}</Button>
);

export { LoadMoreButton };
