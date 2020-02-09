import Header from "./Header";
import SculpturesList from "./SculpturesList";
import SculpturesSeeAll from "./SculpturesSeeAll";

export default () => (
    <div className="container for-sale-container">
        <Header addTopMargin={true}>
            Available for Purchase
        </Header>
        <SculpturesList forSale={true} />
        <SculpturesSeeAll forSale={true} />
    </div>
);