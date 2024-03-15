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
            <Card>
              <CardBody>
                <BookList />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="wishList" title="Seznam přání">
            <Card>
              <CardBody>
                <BookList />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="boughtList" title="Koupené knihy">
            <Card>
              <CardBody>
                <BookList />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="readList" title="Přečtené knihy">
            <Card>
              <CardBody>
                <BookList />
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </>
  );
};

export default Home;
