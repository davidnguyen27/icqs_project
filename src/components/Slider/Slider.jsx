import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const spanStyle = {
  padding: "20px",
  background: "#efefef",
  color: "#000000",
};

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "400px",
};

const slideImages = [
  {
    url: "https://i.pinimg.com/originals/c2/14/c9/c214c919d31ea727d71b4a8c9fe732c4.jpg",
    caption: "Slide 1",
  },
  {
    url: "https://cafefcdn.com/2018/6/5/photo-3-15281941038171019386726.jpg",
    caption: "Slide 2",
  },
  {
    url: "https://noithatcuongnguyen.vn/wp-content/uploads/2020/07/thiet-ke-noi-that-nha-bep-sang-trong-noithatcuongnguyen.jpg",
    caption: "Slide 3",
  },
];

const Slider = () => {
  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div style={{ ...divStyle }}>
              <img
                style={{ width: "100%", objectFit: "cover" }}
                src={slideImage.url}
                alt=""
              />
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slider;
