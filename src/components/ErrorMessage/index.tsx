import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { ErrorMessageProps } from "./types";

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  const error = useSelector((state: RootState) => state.errorHandler);
  return <span className="searchbar__error">{error && message}</span>;
};

export default ErrorMessage;
