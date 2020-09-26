import React from 'react';
import SculptureThumbnail from './SculptureThumbnail';
import SculptureData from '../sculpture_data.json';

interface Props {
    forSale: boolean;
}

export default class SculpturesList extends React.Component<Props> {
    render() {
        const {forSale} = this.props;
        let sculptures: Array<Sculpture> = [];
        if (forSale) {
            sculptures = SculptureData.filter(sculpture => sculpture.price !== null); 
        } else {
            sculptures = SculptureData.filter(sculpture => sculpture.price === null);
        }

        return (
            <div className="sculptures-list-container">
                {sculptures.map((sculpture, i) => <SculptureThumbnail key={i}
                        imageName={sculpture.title}
                        imageUrl={sculpture.thumbnail}
                    />)}
            </div>
        );
    }
};