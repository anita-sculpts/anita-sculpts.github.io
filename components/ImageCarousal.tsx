import React from 'react';

import Spinner from './Spinner'

interface Props {
    images: Array<string>;
}

interface State extends Props {
    index: number;
    showSpinner: boolean;
}

export default class ImageCarousal extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {images: props.images, index: 0, showSpinner: true};
    
        this.moveLeft = this.moveLeft.bind(this);
        this.moveRight = this.moveRight.bind(this);
        this.hideSpinner = this.hideSpinner.bind(this)
    }

    moveLeft() {
        const i = this.state.index;
        if (i === 0) {
            this.setState({index: this.state.images.length - 1});
        } else {
            this.setState({index: i - 1});
        }
    }

    moveRight() {
        const i = this.state.index;
        if (i === this.state.images.length - 1) {
            this.setState({index: 0});
        } else {
            this.setState({index: i + 1});
        }
    }

    hideSpinner() {
        console.log('hiding')
        this.setState({showSpinner: false})
    }

    render() {
        const carousalControls = this.state.images.length < 2 ? null : (
            <div className="carousal-controls-container">
                <div className="carousal-control" onClick={this.moveLeft}>&#8592;</div>
                <div className="carousal-control" onClick={this.moveRight}>&#8594;</div>
            </div>
        );
        return (
            <div className='carousel-container'>
                <img className='sculpture-photo' src={this.state.images[this.state.index]} onLoad={this.hideSpinner} />
                <Spinner areaWidth='70vw' areaHeight={'70vh'} show={this.state.showSpinner} />
                {carousalControls}
            </div>
        );
    }
};