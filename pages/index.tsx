import { NextPage } from 'next';
import Header from '../components/header';

const Index: NextPage = () => {
    return (
        <div>
            <div className="container intro-container">
                <div className="header-container intro-header-container">
                    <Header useSerif={true}>
                        Sculptures
                    </Header>
                    <Header useSerif={true}>
                        by Anita
                    </Header>
                </div>
            </div>
            <div className="container sculptures-container for-sale-container">
                <Header addTopMargin={true}>
                    Available for Purchase
                </Header>
            </div>
            <div className="container sculptures-container gallery-container">
                    <Header addTopMargin={true}>
                        Gallery
                    </Header>
            </div>
            <div className="container biography-container">
                <Header color="white" addTopMargin={true}>
                    About
                </Header>
                <div className="biography-text-container">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Email: anita_sculpts@protonmail.com</p>
                </div>
            </div>
        </div>
    );
};

export default Index;