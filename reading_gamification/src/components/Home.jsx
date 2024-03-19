import BookList from "./BookList";
import WishList from "./WishList";
import BoughtList from "./BoughtList";
import SearchField from "./SearchField";
import ReadList from "./ReadList";
import HorizontalTimeline from "./HorizontalTimeline";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";

const Home = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <SearchField />
        
        <Tabs aria-label="Lists" >
          <Tab key="allList" title="Všechny knihy">
            <BookList />
          </Tab>
          <Tab key="wishList" title="Seznam přání">
            <WishList />
          </Tab>
          <Tab key="boughtList" title="Koupené knihy">
           <BoughtList />
          </Tab>
          <Tab key="readList" title="Přečtené knihy">
           <ReadList />
          </Tab>
        </Tabs>
      </div>
    </>
  );
};

export default Home;
