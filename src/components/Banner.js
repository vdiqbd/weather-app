import DateAndTime from "./DateAndTime";

const Banner = (props) => {
  return (
    <div className="banner">
      <div className="img">
        <img alt="Img" src={props.image} />
        <p>{props.weather}</p>
      </div>
      <div className="temp-con">
        <p id="dark">{props.temp}</p>
        <p id="light">Feels Like {props.feelsLike}</p>
      </div>
      <DateAndTime />
      <div className="place">{props.place}</div>
    </div>
  );
};

export default Banner;
