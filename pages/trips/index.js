import Layout from "../../components/layout";
import TicketCard from "../../components/Form Components/TicketCard";
import SelectOrigin from "../../components/Form Components/SelectOrigin";
import ChosenEvents from "../../components/Form Components/ChosenEvents";
import FormHeader from "../../components/Form Components/FormHeader";

import tripStyle from "../../styles/Trip.module.css";

const Trips = () => {

  return (
    <Layout returnHome>
      <div className={tripStyle.container}>
        <FormHeader />
        <SelectOrigin />
        <ChosenEvents />
        <TicketCard />
      </div>
    </Layout>
  );
};

export default Trips;
