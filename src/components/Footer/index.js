import * as React from "react";
import { Link } from "react-router-dom";
import MasterCardLogo from "../../images/payments/mastercard.png";
import NetellerLogo from "../../images/payments/neteller.png";
import VisaLogo from "../../images/payments/visa.png";
import PaysafeLogo from "../../images/payments/paysafe.png";
import NeosurfLogo from "../../images/payments/neosurf.png";
import IdealLogo from "../../images/payments/ideal.png";
import SofortLogo from "../../images/payments/sofort.png";
import GiropayLogo from "../../images/payments/giropay.png";
import providersImg from "../../images/providers.png";
import BestCasinos from "../../images/featured/the-best-casinos.png";
import NonStop from "../../images/featured/nonstop.png";
import British from "../../images/featured/british.png";
import Curacao from "../../images/curacao.png";

const paymentLogos = [
  { src: MasterCardLogo, description: "Mastercard" },
  { src: VisaLogo, description: "Visa" },
  { src: GiropayLogo, description: "Giropay" },
  { src: PaysafeLogo, description: "Paysafe" },
  { src: NeosurfLogo, description: "Neosurf" },
  { src: IdealLogo, description: "Ideal" },
  { src: SofortLogo, description: "Sofort" },
  { src: NetellerLogo, description: "Neteller" },
];

const featuredIn = [
  { src: BestCasinos, description: "The Best Casinos" },
  { src: NonStop, description: "Non Stop" },
  { src: British, description: "British" },
];

const aboutLinks = [
  { name: "About Us", link: "/about" },
  { name: "Contact Us", link: "/contact" },
  { name: "Payments", link: "/" },
  { name: "Promotions", link: "/promotions" },
];

const helpLinks = [
  { name: "Terms & Conditions", link: "/" },
  { name: "Responsible Gaming", link: "/" },
  { name: "Privacy Policy", link: "/privacy" },
  { name: "Help", link: "/help" },
  { name: "FAQ", link: "/faq" },
];

export default function Footer() {
  return (
    <div
      className="bg-bg-primary text-bd-primary flex-shrink-0"
      data-component="Footer"
    >
      <div className="w-full lg:w-3/5 grid grid-cols-4 mx-auto border-b border-bd-primary p-4">
        {paymentLogos.map(({ src, description }) => (
          <img
            key={description}
            src={src}
            alt={description}
            className="w-full xl:p-10"
          />
        ))}
      </div>
      <div className="w-full lg:w-3/5 mx-auto border-b border-bd-primary p-4">
        <img src={providersImg} alt="Providers Logos Grid" className="w-full" />
      </div>
      <div className="w-full lg:w-3/5 mx-auto p-8 space-y-4">
        <h2 className="font-black italic text-xl uppercase text-center text-white">
          Featured In
        </h2>
        <div className="flex space-x-4 justify-center">
          {featuredIn.map(({ src, description }) => (
            <img key={description} src={src} alt={description} />
          ))}
        </div>
      </div>
      <div className="bg-bg-secondary">
        <div className="grid grid-cols-2 border-b border-bd-primary p-6 xl:w-3/5 mx-auto">
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl text-text-secondary italic font-black uppercase">
              About
            </h3>
            <div className="flex flex-col space-y-2 text-white text-thin">
              {aboutLinks.map(({ name, link }) => (
                <Link key={name} to={link}>
                  {name}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl text-text-secondary italic font-black uppercase">
              Help
            </h3>
            <div className="flex flex-col space-y-2 text-white text-thin">
              {helpLinks.map(({ name, link }) => (
                <Link key={name} to={link}>
                  {name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="text-sm text-text-secondary p-6 space-y-6 xl:w-3/5 mx-auto">
          <p>
            JupiterCasino 24 is operated and controlled by GTX TECHNOLOGIES B.V
            having its registered address at DR M.J Hugnafasf bearing company
            registration number 14501
          </p>
          <p> Responsible Gaming | 18+</p>
          <img src={Curacao} alt="Curacao Flag" className="mx-auto" />
        </div>
      </div>
    </div>
  );
}
