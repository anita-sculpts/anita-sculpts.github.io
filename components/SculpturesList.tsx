import React from 'react';
import SculptureThumbnail from './SculptureThumbnail';
import SculptureData from '../sculpture_data.json';

interface Props {
    forSale: boolean;
}

export default class SculpturesList extends React.Component<Props> {
    render() {
        const {forSale} = this.props;
        const data = Array(40).fill(forSale ? SculptureData[0] : SculptureData[2]).map((x) => {
            return {...x, forSale: Math.random() > 0.5}
        });

        return (
            <div className="sculptures-list-container">
                {data.filter(sculpture => sculpture.forSale === forSale)
                    .map((sculpture, i) => <SculptureThumbnail key={i}
                        imageName={sculpture.name}
                        imageUrl={sculpture.images[0]}
                        />)}
            </div>
        );
    }
};