import AboutUs from "./AboutUs/AboutUs";
import ServiceList from "./ServiceSection/ServiceList";

const MainContent = () => {
  return (
    <div className="container max-w-6xl mx-auto px-4">
      <ServiceList />
      <AboutUs />
    </div>
  );
};

export default MainContent;
