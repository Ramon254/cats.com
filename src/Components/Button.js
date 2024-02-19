import './Button.css';

function Button(props) {

    return (
        <button className='change-button' onClick={props.incrementCatId}>Change</button>
    )
}

export default Button;
