import AboutUs from "./AboutUs/AboutUs";
import Contact from "./Contact";
import ContactForm from "./ContactForm";
import YamoApp from "./Feature";
import Img from "./Img";
import CardList from "./RestauranCards/CardList";
import ServiceList from "./ServiceSection/ServiceList";
import YamoDownloadSection from "./YamoDownloadSection";


const MainContent = () => {
  return (
    <div className="w-full bg-white">
      <ServiceList />
      <AboutUs />
      <CardList />
      <YamoApp />
      <YamoDownloadSection />
      <Img />
      {/* <ContactForm /> */}
    </div>
  );
};

export default MainContent;
