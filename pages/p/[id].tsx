import { NextPage } from 'next';
import { useRouter } from 'next/router';

import SculptureData from '../../sculpture_data.json';

import Header from '../../components/Header';
import ImageCarousal from '../../components/ImageCarousal';
import NavSideBar from '../../components/NavSideBar';

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
            sculptures = SculptureData.filter(sculpture => sculpture.forSale === true);
        } else if (currentSculptureName === '_gallery') {
            sculptures = SculptureData.filter(sculpture => sculpture.forSale === false);
        }
        currentSculpture = sculptures[0];
        expanded = true
    } else {
        currentSculpture = SculptureData.filter(sculpture => sculpture.name === router.query.id)[0];
        sculptures = SculptureData.filter(sculpture => sculpture.forSale === currentSculpture.forSale);
    }

    let forSaleText = null;
    if (currentSculpture.forSale) {
        forSaleText = <p>To purchase, email anita-sculpts@protonmail.com</p>;
    }
    
    return (
        <div className="sculpture-page-container">
            <NavSideBar expanded={expanded} 
                currentSculpture={currentSculpture}
                sculptures={sculptures} />
            <div className="sculpture-container">
                <ImageCarousal images={currentSculpture.images} />
                <div className="sculpture-text-container">
                    <Header>{currentSculpture.name}</Header>
                    <div className="sculpture-body-text-container">
                        <p>{currentSculpture.description}</p>
                        {forSaleText}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SculpturePage;