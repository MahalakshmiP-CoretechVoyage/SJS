import type { JSX } from "react";
import Header from "./Header/Header";
import HomePage from "./Home/HomePage";
import Tours from "./Tours/Tours";
import CorporateRental from "./CorporateRental/CorporateRental";
import Vehicles from "./Vehicles/Vehicles";
import AboutUs from "./AboutUs/AboutUs";
import ContactUsSection from "./ContactUsSection/ContactUsSection";
// import Footer from "./Footer/Footer";
// import Content from "./content";


export interface AppRoute {
  path: string;
  element: JSX.Element;
  roles?: string[];
}

export const protectedRoutes: AppRoute[] = [
  { path: "/header", element: < Header /> },
  { path: '/home', element: <HomePage /> },
  { path: '/tours', element: <Tours /> },
  { path: '/corporaterental', element: <CorporateRental /> },
  { path: '/vehicles', element: <Vehicles/> },
   { path: '/aboutus', element: <AboutUs/> },
    { path: '/contactus', element: <ContactUsSection/> },


];
