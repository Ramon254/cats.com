import './Picture.css';
import data from '../Database/Data';

function Picture(props) {
  const image = data.filter(e => e.id === props.id)[0];

  return (
      <div className="image-container">
        <img src={image.path} className="image" alt="displayed cat" />
        <span>Image desc: {image.desc} </span>
      </div>
  );
}

export default Picture;
