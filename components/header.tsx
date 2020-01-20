import React from 'react';

interface Props {
    children: string;
    addTopMargin?: boolean;
    color?: string;
    useSerif?: boolean;
}

export default class Header extends React.Component<Props> {
    render() {
        const { children, addTopMargin, color, useSerif } = this.props;
        const style = {
            marginTop: addTopMargin ? '0.5em' : '0em',
            color: color ?? '$333',
            fontFamily: useSerif ? "'Judson', serif" : "'Roboto', sans-serif"
        };

        return (
            <h1 className="header" style={style}>
                {children}
            </h1>
        )
    }
}