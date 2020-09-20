import Header from "./Header";

const IntroContainer = () => (
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
);

export default IntroContainer;