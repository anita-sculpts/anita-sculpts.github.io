import React from 'react';

import Link from './Link';

interface Props {
    forSale: boolean;
}

export default class SculpturesSeeAll extends React.Component<Props> {
    render() {
        const { forSale } = this.props;

        return (
            <Link href="/p/[id]" as={`/p/${forSale ? "_forSale" : "_gallery"}`}>
                <a className="see-all">
                    See All
                </a>
            </Link>
        )
    }
}