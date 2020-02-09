import React from 'react';
import SculptureThumbnail from './SculptureThumbnail';

const test = {
    name: "Sculpture", forSale: true, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore", images: ["https://images.pexels.com/photos/3683187/pexels-photo-3683187.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", "https://images.pexels.com/photos/1021754/pexels-photo-1021754.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"],
};

interface Props {
    forSale: boolean;
}

export default class SculpturesList extends React.Component<Props> {
    render() {
        const {forSale} = this.props;
        const data = Array(40).fill(test).map((x) => {
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