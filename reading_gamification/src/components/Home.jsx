import BookList from "./BookList";
import SearchField from "./SearchField";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";

const Home = () => {
  return (
    <>
      <div>
        <SearchField />
        <Tabs aria-label="Lists">
          <Tab key="allList" title="Všechny knihy">
            <BookList />
          </Tab>
          <Tab key="wishList" title="Seznam přání">
            <BookList />
          </Tab>
          <Tab key="boughtList" title="Koupené knihy">
            <BookList />
          </Tab>
          <Tab key="readList" title="Přečtené knihy">
            <BookList />
          </Tab>
        </Tabs>
      </div>
    </>
  );
};

export default Home;
