import Header from "./Header";

const IntroContainer = () => (
    <div className="container intro-container fixed-background">
        <div className="header-container intro-header-container">
            <Header useSerif={true}>
                Sculptures<br/>by Anita
            </Header>
        </div>
    </div>
);

export default IntroContainer;