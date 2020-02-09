import { NextPage } from 'next';
import IntroContainer from '../components/IntroContainer';
import ForSaleContainer from '../components/ForSaleContainer';
import GalleryContainer from '../components/GalleryContainer';
import AboutContainer from '../components/AboutContainer';

const Index: NextPage = () => {
    return (
        <div>
            <IntroContainer />
            <ForSaleContainer />
            <GalleryContainer />
            <AboutContainer />
        </div>
    );
};

export default Index;