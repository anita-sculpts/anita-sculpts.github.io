import React from 'react';
import Header from "./Header";

interface Props {
    currentSculptureName: string;
}

export default class NavSideBar extends React.Component<Props> {
    render() {
        const { currentSculptureName } = this.props;

        return (
            <nav role="navigation">
                <div id="menuToggle">
                    {/* Hidden; for using :checked CSS selector. */}
                    <input type="checkbox" />
                    {/* The hamburger bars. */}
                    <span></span>
                    <span></span>
                    <span></span>

                    <ul id="menu">
                        <a href="#"><li>Home</li></a>
                        <a href="#"><li>About</li></a>
                        <a href="#"><li>Info</li></a>
                        <a href="#"><li>Contact</li></a>
                        <a href="https://erikterwan.com/" target="_blank"><li>Show me more</li></a>
                    </ul>
                </div>
            </nav>
        );
        // return (
        //     <div className="nav-container">
        //         <Header useSerif={true}>Home</Header>
        //     </div>
        // )
    }
}