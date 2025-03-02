import AboutUs from "./AboutUs/AboutUs";
import Contact from "./Contact";
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
      <Contact />
    </div>
  );
};

export default MainContent;
