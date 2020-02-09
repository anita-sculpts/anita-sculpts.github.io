import React from 'react';
import SculptureThumbnail from './SculptureThumbnail';

const test = {name: "Sculpture", forSale: true, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore", images: ["1.jpg", "2.jpg", "3.jpg"]};

const IMAGE_PATH = '../images/sculptures';

interface Props {
    forSale: boolean;
}

export default class SculpturesList extends React.Component<Props> {
    render() {
        const {forSale} = this.props;
        const data = Array(20).fill(test);

        return (
            <div className="sculptures-list-container">
                {data.filter(sculpture => sculpture.forSale === forSale)
                    .map((sculpture, i) => <SculptureThumbnail key={i} forSale={sculpture.forSale} imageName={sculpture.images[0]} />)}
            </div>
        );
    }
};