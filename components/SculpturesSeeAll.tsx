import React from 'react';

interface Props {
    forSale: boolean;
}

export default class SculpturesSeeAll extends React.Component<Props> {
    render() {
        const { forSale } = this.props;

        return (
            <a className="see-all" href="#">
                See All
            </a>
        )
    }
}