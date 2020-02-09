import React from 'react';

const IMAGE_PATH = '../images/sculptures/';

interface Props {
    forSale: boolean;
    imageName: string;
}

export default class SculptureThumbnail extends React.Component<Props> {
    render() {
        const {forSale, imageName} = this.props;
        const imagePath = IMAGE_PATH+imageName;
        console.log(imagePath)

        return (
            <div className="sculpture-thumbnail">
            </div>
        );
    }
};