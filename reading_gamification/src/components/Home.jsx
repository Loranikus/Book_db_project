import BookList from "./BookList";
import WishList from "./WishList";
import SearchField from "./SearchField";
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
           
          </Tab>
          <Tab key="readList" title="Přečtené knihy">
           
          </Tab>
        </Tabs>
      </div>
    </>
  );
};

export default Home;
