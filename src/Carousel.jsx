import { Component } from "react"; //class component-->details.jsx
//class component cannot have hooks u cannot use use uery ,usebreedlist any of those here
class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };
  //   componentDidMount{
  //     this function will only use once in the begining like we prev did with use Effect and provided an empty arrayin the end for the sake to run in the start only we can use this here by usinf componentDidMount
  //   }
  // componentDidUpdate{
  //     if u wanna run everytime use this func
  // }
  handleIndexClicks = (e) => {
    this.setState({
      active: +e.target.dataset.index,
    });
  };

  render() {
    //every class componenet has a render function
    const { active } = this.state;
    const { images } = this.props; //props  comes in class component by using this.props
    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            // eslint-disable-next-line
            <img
              onClick={this.handleIndexClicks}
              data-index={index}
              key={photo}
              src={photo}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
