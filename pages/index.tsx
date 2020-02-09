import { NextPage } from 'next';
import IntroContainer from '../components/IntroContainer';
import ForSaleContainer from '../components/ForSaleContainer';
import ContainerDivider from '../components/ContainerDivider';
import GalleryContainer from '../components/GalleryContainer';
import AboutContainer from '../components/AboutContainer';

const Index: NextPage = () => {
    return (
        <div>
            <IntroContainer />
            <ForSaleContainer />
            <ContainerDivider />
            <GalleryContainer />
            <AboutContainer />
        </div>
    );
};

export default Index;