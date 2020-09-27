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
        this.setState({showSpinner: true})
        const i = this.state.index;
        if (i === 0) {
            this.setState({index: this.state.images.length - 1});
        } else {
            this.setState({index: i - 1});
        }
    }

    moveRight() {
        this.setState({showSpinner: true})
        const i = this.state.index;
        if (i === this.state.images.length - 1) {
            this.setState({index: 0});
        } else {
            this.setState({index: i + 1});
        }
    }

    hideSpinner() {
        this.setState({showSpinner: false})
    }

    render() {
        const displayStyle = {display: this.state.showSpinner ? 'none' : 'flex'}
        const carousalControls = this.state.images.length < 2 ? null : (
            <div className="carousal-controls-container" style={displayStyle}>
                <div className="carousal-control" onClick={this.moveLeft}>&#8592;</div>
                <div className="carousal-control" onClick={this.moveRight}>&#8594;</div>
            </div>
        );
        const sculpturePhoto = (
            <img className='sculpture-photo'
                src={this.state.images[this.state.index]}
                style={displayStyle}
                onLoad={this.hideSpinner} />
        )
        return (
            <div className='carousel-container'>
                {sculpturePhoto}
                {carousalControls}
                <Spinner areaWidth='70vw' areaHeight={'70vh'} show={this.state.showSpinner} />
            </div>
        );
    }
};