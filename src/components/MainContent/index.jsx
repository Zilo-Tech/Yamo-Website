import AboutUs from "./AboutUs/AboutUs";
import ServiceList from "./ServiceSection/ServiceList";
import ContactForm from "./ContactForm";

const MainContent = () => {
  return (
    <div className="container max-w-6xl mx-auto px-4">
      <ServiceList />
      <AboutUs />
      <ContactForm />
    </div>
  );
};

export default MainContent;
