import Link from 'next/link';
import React from 'react';

interface Props {
    imageName: string;
    imageUrl: string;
}

export default class SculptureThumbnail extends React.Component<Props> {
    render() {
        const {imageName, imageUrl} = this.props;

        return (
            <Link href="/p/[id]" as={`/p/${imageName}`}>
                <a>
                    <img className="sculpture-thumbnail" src={imageUrl} />
                </a>
            </Link>
        );
    }
};