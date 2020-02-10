import React from 'react';
import Header from "./Header";
import Link from 'next/link';

interface Props {
    currentSculpture: Sculpture;
    sculptures: Array<Sculpture>;
}

export default class NavSideBar extends React.Component<Props> {
    render() {
        const { currentSculpture, sculptures } = this.props;
        const navHeaderText = currentSculpture.forSale ? "Available Sculptures" : "Gallery";

        const tmp = [];
        for (let i=0; i < 22; i++) {
            tmp.push(<li key={i}>
                <Link href="/p/[id]" as={`/p/${sculptures[i%2].name}`}>
                    <a>{sculptures[i%2].name}</a>
                </Link>
            </li>);
        }

        const sculptureLinks = <div className="sculpture-nav-list">
            {
                // sculptures.map((s, i) => (
                //     <li key={i}>
                //         <Link href="/p/[id]" as={`/p/${s.name}`}>
                //             <a>{s.name}</a>
                //         </Link>
                //     </li>
                // ))
                tmp
            }
        </div>;

        return (
            <nav role="navigation">
                <div id="menuToggle">
                    {/* Hidden; for using :checked CSS selector. */}
                    <input type="checkbox" id="menuCheckbox" />
                    {/* The hamburger bars. */}
                    <span></span>
                    <span></span>
                    <span></span>

                    <ul id="menu">
                        <li>
                            <Header color={"white"} fontSize="2.5em">{navHeaderText}</Header>
                        </li>
                        {sculptureLinks}
                        <hr></hr>
                        <li>
                            <Link href="/" as="/">
                                <a>Back to Home</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}