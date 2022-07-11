import styled from "styled-components";
import Contact from "../components/contact";
import ContactForm from "../components/contact-form";
import Hero from "../components/hero";
import Infotainer from "../components/infotainer";
import Pricing from "../components/pricing";

const StyledHome = styled.div`
  padding: 0 1rem;
  padding-bottom: 1;
`;

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <Infotainer></Infotainer>
      <Contact />
      <Pricing></Pricing>
    </>
  );
}
