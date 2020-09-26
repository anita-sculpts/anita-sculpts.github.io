import Header from "./Header";
import SculpturesList from "./SculpturesList";
import SculpturesSeeAll from "./SculpturesSeeAll";

const GalleryContainer = () => (
    <div className="container thumbnail-container gallery-container">
        <Header addBottomMargin={true} addTopMargin={true}>
            Gallery
        </Header>
        <SculpturesList forSale={false} />
        <SculpturesSeeAll forSale={false} />
    </div>
);

export default GalleryContainer;