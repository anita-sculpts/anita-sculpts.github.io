import { NextPage } from 'next';
import { useRouter } from 'next/router';

import SculptureData from '../../sculpture_data.json';

import Header from '../../components/Header';
import ImageCarousal from '../../components/ImageCarousal';

type Sculpture = {
    name: string,
    description: string,
    forSale: boolean,
    images: Array<string>
}

const SculpturePage: NextPage = () => {
    const router = useRouter();
    let currentSculptureName = router.query.id;
    if (currentSculptureName === undefined) {
        return <div />;
    }

    let currentSculpture: Sculpture;
    let sculptures = [];
    if (currentSculptureName === '_forSale') {
        sculptures = SculptureData.filter(sculpture => sculpture.forSale === true);
        currentSculpture = sculptures[0];
    } else if (currentSculptureName === '_notForSale') {
        sculptures = SculptureData.filter(sculpture => sculpture.forSale === false);
        currentSculpture = sculptures[0];
    } else {
        currentSculpture = SculptureData.filter(sculpture => sculpture.name === router.query.id)[0];
        sculptures = SculptureData.filter(sculpture => sculpture.forSale === currentSculpture.forSale);
    }

    let forSaleText = null;
    if (currentSculpture.forSale) {
        forSaleText = <p>To purchase, email anita-sculpts@protonmail.com</p>;
    }
    
    return (
        <div className='sculpture-container'>
            <ImageCarousal images={currentSculpture.images} />
            <div className='sculpture-text-container'>
                <Header>{currentSculpture.name}</Header>
                <p>{currentSculpture.description}</p>
                {forSaleText}
            </div>
        </div>
    );
};

export default SculpturePage;