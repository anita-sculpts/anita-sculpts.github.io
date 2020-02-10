import React from 'react';

interface Props {
    children: string;
    addTopMargin?: boolean;
    color?: string;
    fontSize?: string;
    useSerif?: boolean;
}

export default class Header extends React.Component<Props> {
    render() {
        const { children, addTopMargin, color, fontSize, useSerif } = this.props;
        let style: any = {
            marginTop: addTopMargin ? '0.5em' : '0em',
            color: color ?? '$333',
            fontFamily: useSerif ? "'Judson', serif" : "'Roboto', sans-serif"
        };
        if (typeof fontSize === 'string') {
            style['fontSize'] = fontSize;
        }

        return (
            <h1 className="header" style={style}>
                {children}
            </h1>
        )
    }
}