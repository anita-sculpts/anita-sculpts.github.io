import Header from "./Header";
import SculpturesList from "./SculpturesList";
import SculpturesSeeAll from "./SculpturesSeeAll";

export default () => (
    <div className="container thumbnail-container gallery-container">
        <Header addTopMargin={true}>
            Gallery
        </Header>
        <SculpturesList forSale={false} />
        <SculpturesSeeAll forSale={false} />
    </div>
);