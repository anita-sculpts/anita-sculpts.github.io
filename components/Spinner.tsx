interface Props {
    areaWidth: string;
    areaHeight: string;
    show: boolean;
}

const Spinner = (props: Props) => {
    const style: Object = {
        minWidth: props.areaWidth,
        minHeight: props.areaHeight,
        display: props.show ? 'flex' : 'None'
    };
    return (
        <div className='spinner-container' style={style}>
            <div className='spinner'></div>
        </div>
    )
};

export default Spinner;