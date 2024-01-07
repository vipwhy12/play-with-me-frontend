import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useHeroBanner = () => {
  const navigate = useNavigate();

  const toLogin = () => {
    navigate("/login");
  };

  return { toLogin };
};
