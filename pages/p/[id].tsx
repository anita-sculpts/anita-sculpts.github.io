import { NextPage } from 'next';
import { useRouter } from 'next/router';

import SculptureData from '../../sculpture_data.json';

import Header from '../../components/Header';
import ImageCarousal from '../../components/ImageCarousal';
import NavSideBar from '../../components/NavSideBar';

const filterSculptures = (price: number | null) => {
    if (price !== null) {
        return SculptureData.filter(sculpture => sculpture.price !== null);
    }
    return SculptureData.filter(sculpture => sculpture.price === null);
}

const SculpturePage: NextPage = () => {
    const router = useRouter();
    let currentSculptureName = router.query.id;
    if (typeof currentSculptureName !== 'string')  {
        return <div />;
    }

    let currentSculpture: Sculpture;
    let sculptures: Array<Sculpture> = [];
    let expanded = false;
    if (currentSculptureName === '_forSale' || currentSculptureName === '_gallery') {
        if (currentSculptureName === '_forSale') {
            sculptures = filterSculptures(1)
        } else if (currentSculptureName === '_gallery') {
            sculptures = filterSculptures(null)
        }
        currentSculpture = sculptures[0];
        expanded = true
    } else {
        currentSculpture = SculptureData.filter(sculpture => sculpture.title === router.query.id)[0];
        sculptures = filterSculptures(currentSculpture.price);
    }

    let itemDescriptionElement = (<p>
        <b>Medium:</b> {currentSculpture.medium} | <b>Dimensions:</b> {currentSculpture.dimensions}
    </p>);

    let forSaleElement = null;
    if (currentSculpture.price !== null) {
        itemDescriptionElement = (<p>
            <b>Medium:</b> {currentSculpture.medium} | <b>Dimensions:</b> {currentSculpture.dimensions} | <b>Price:</b> {currentSculpture.price}
        </p>);
        forSaleElement = (
            <div>
                <p>To purchase, email anita-sculpts@protonmail(dot)com</p>
            </div>
        );
    }
    
    return (
        <div className="sculpture-page-container">
            <NavSideBar expanded={expanded} 
                currentSculpture={currentSculpture}
                sculptures={sculptures} />
            <div className="sculpture-container">
                <ImageCarousal images={currentSculpture.images} />
                <div className="sculpture-text-container">
                    <Header>{currentSculpture.title}</Header>
                    <div className="sculpture-body-text-container">
                        {itemDescriptionElement}
                        {forSaleElement}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SculpturePage;