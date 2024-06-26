import "./footer.css";
import Links from "./Links";
import CopyRights from "./Copyrights";
import FooterItems from "./Footeritems";
import Cta from "../CTA";

const Footer = () => {
  return (
    <footer className="bg-whitedark test:bg-black relative">
      <div className="grid  grid-cols-5 large:grid-cols-2 gap-28 small:gap-5 xLarge:gap-6 py-16 xLarge:px-6 px-20 medium:px-8 medium:pt-28 small:pt-48">
        <Links></Links>
        <FooterItems></FooterItems>
      </div>
      <Cta />
      <hr className="border-2 mb-7 mt-7" />
      <CopyRights />
    </footer>
  );
};

export default Footer;
