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
            return {...x, price: Math.random() > 0.5 ? null : 1}
        });
        let sculptures: Array<Sculpture> = [];
        if (forSale) {
            sculptures = data.filter(sculpture => sculpture.price !== null); 
        } else {
            sculptures = data.filter(sculptures => sculptures.price === null);
        }

        return (
            <div className="sculptures-list-container">
                {sculptures.map((sculpture, i) => <SculptureThumbnail key={i}
                        imageName={sculpture.title}
                        imageUrl={sculpture.images[0]}
                    />)}
            </div>
        );
    }
};