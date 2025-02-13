import AboutUs from "./AboutUs/AboutUs";
import Contact from "./Contact";
import CardList from "./RestauranCards/CardList";
import ServiceList from "./ServiceSection/ServiceList";
import YamoDownloadSection from "./YamoDownloadSection";


const MainContent = () => {
  return (
    <div className="">
      <ServiceList />
      <AboutUs />
      <CardList />
      <YamoDownloadSection />
      <Contact />
    </div>
  );
};

export default MainContent;
