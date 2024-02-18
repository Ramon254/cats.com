import './Button.css';

function Button(props) {

    return (
        <button onClick={props.incrementCatId}>Change</button>
    )
}

export default Button;
