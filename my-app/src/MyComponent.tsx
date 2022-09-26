import React from "react";
import { useData } from "./useData";

export const MyComponent: React.FC = () => {
  const { data } = useData();
  if (!data) {
    return "data not loaded";
  }
};
