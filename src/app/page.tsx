import About from "@/components/About";
import Contact from "@/components/Contact";
import Cta from "@/components/Cta";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import HeroArea from "@/components/HeroArea";
import Screens from "@/components/Screens";
import Testimonials from "@/components/Testimonials";
import WorkProcess from "@/components/WorkProcess";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kaamhai",
  description: "Simplified workforce hiring & Management solution",
};


export default function Home() {
  return (
    <>
    <HeroArea/>
    <Features/>
    <About/>
    <WorkProcess/>
    <Screens/>
    <Cta/>
    <Testimonials/>
    <Faq/>
    <Contact/>
    <Footer/>
    </>
  );
}
