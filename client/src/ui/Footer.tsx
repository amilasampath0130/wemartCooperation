import React from "react";
import Container from "./Container";
import { payment } from "../assets";
import FooterTop from "./FooterTop";

const Footer = () => {
  return (
    <div className="mt-10">
      <FooterTop />
      <Container className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-between w-full px-4 md:space-x-4">
        <p className="whitespace-nowrap text-center md:text-left">
          @2024 E-commerce solutions. All rights reserved.
        </p>
        <img
          src={payment}
          alt="payment-img"
          className="object-cover w-auto max-w-[150px]"
        />
      </Container>
    </div>
  );
};

export default Footer;
