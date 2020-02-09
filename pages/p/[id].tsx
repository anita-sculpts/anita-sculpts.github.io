import { NextPage } from 'next';
import { useRouter } from 'next/router';
import SculptureData from '../../sculpture_data.json';

type Sculpture = {
    name: string,
    description: string,
    forSale: boolean,
    images: Array<string>
}

const SculpturePage: NextPage = () => {
    const router = useRouter();
    let currentSculptureName = router.query.id;
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
    
    return (
        <div>
            {currentSculpture.name}
            {currentSculpture.description}
            {currentSculpture.forSale}
            <img src={currentSculpture.images[0]} />
        </div>
    );
};

export default SculpturePage;