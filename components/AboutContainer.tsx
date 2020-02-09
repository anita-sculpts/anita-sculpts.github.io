import Header from "./Header";

export default () => (
    <div className="container about-container">
        <Header color="white" addTopMargin={true}>
            About
        </Header>
        <div className="about-text-container">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Email: anita-sculpts@protonmail.com</p>
        </div>
    </div>
);