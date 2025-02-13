import AboutUs from "./AboutUs/AboutUs";
import CardList from "./RestauranCards/CardList";
import ServiceList from "./ServiceSection/ServiceList";


const MainContent = () => {
  return (
    <div className="container max-w-6xl mx-auto px-4">
      <ServiceList />
      <AboutUs />
      <CardList />
    </div>
  );
};

export default MainContent;
