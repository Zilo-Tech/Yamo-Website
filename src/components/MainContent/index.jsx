import AboutUs from "./AboutUs/AboutUs";
import Contact from "./Contact";
import ContactForm from "./ContactForm";
import YamoApp from "./Feature";
import CardList from "./RestauranCards/CardList";
import ServiceList from "./ServiceSection/ServiceList";
import YamoDownloadSection from "./YamoDownloadSection";


const MainContent = () => {
  return (
    <div className="">
      <ServiceList />
      <AboutUs />
      <CardList />
      <YamoApp />
      <YamoDownloadSection />
      {/* <ContactForm /> */}
    </div>
  );
};

export default MainContent;
