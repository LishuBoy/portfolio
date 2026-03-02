import { createRoot } from "react-dom/client";
import MySwiper from "./pages/home/hero/index";
import Cards from "./pages/home/cards/index";
import Aboutme from "./pages/home/aboutMe";
import Projects from "./pages/home/projects";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/header";
import Stripe from "./components/stripe";
import Contact from "./pages/home/contact";
import Footer from "./components/footer";
// import AnimatedCursor from "react-animated-cursor";


const cardData = [
  { id: 1, svg: "images/card-icons/icon5.svg", name: "Web Development", texto: "I create modern, functional websites using the latest technologies to deliver high-quality solutions tailored to your needs." },
  { id: 2, svg: "images/card-icons/icon4.svg", name: "Maintenance", texto: "I provide regular website updates, fix issues, and ensure smooth performance to keep your platform running efficiently." },
  { id: 3, svg: "images/card-icons/icon3.svg", name: "Optimization", texto: "I improve website performance by enhancing speed, SEO, and usability to maximize user satisfaction and visibility." },
  { id: 4, svg: "images/card-icons/icon2.svg", name: "Responsive layout", texto: "I design layouts that adapt seamlessly to all devices, offering a consistent user experience on desktops, tablets, and smartphones." },
  { id: 5, svg: "images/card-icons/icon6.svg", name: "Dynamic interfaces", texto: "I develop interactive, engaging interfaces that enhance user engagement through animations and real-time updates." },
  { id: 6, svg: "images/card-icons/icon7.svg", name: "e-commerce platforms", texto: "I build e-commerce solutions with secure payment systems and intuitive designs to help you grow your online business." },
  { id: 7, svg: "images/card-icons/icon8.svg", name: "Multiple languages", texto: "I create multilingual websites to reach diverse audiences, providing a global presence for your brand." },
  { id: 8, svg: "images/card-icons/icon9.svg", name: "UX/UI", texto: "I focus on user-centered design, crafting intuitive interfaces and workflows to improve overall usability and satisfaction." },
];



createRoot(document.getElementById("root")).render(
  <>
    {/* <AnimatedCursor
      innerSize={10}
      outerSize={40}
      color='193, 11, 111'
      outerAlpha={1}
      innerScale={0.7}
      outerScale={2}
      outerStyle={{
        background: '#ffffff00',
        backgroundSize: '300%',
        border: '2px solid #fff',
        animation: 'textogradiente 12s infinite linear',
      }}
      innerStyle={{
        backgroundColor: '#ec0090',
      }}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    /> */}
    <Header/>
    <MySwiper />
    <Cards data={cardData} />
    <Stripe text1="GOOD WORK FOR A" text2=" GOOD PRICE"/>
    <Aboutme/>
    <Projects/>
    <Contact/>    
    <Footer/>
  </>
);
