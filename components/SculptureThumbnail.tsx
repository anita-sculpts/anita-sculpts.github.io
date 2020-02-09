import React from 'react';

interface Props {
    forSale: boolean;
    imageName: string;
    imageUrl: string;
}

export default class SculptureThumbnail extends React.Component<Props> {
    render() {
        const {forSale, imageName, imageUrl} = this.props;

        return (
            <img className="sculpture-thumbnail" src={imageUrl}>
            </img>
        );
    }
};