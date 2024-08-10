import trainer1 from "../assets/trainer1.png";
import trainer2 from "../assets/trainer2.png";
import trainer3 from "../assets/trainer3.png";
import trainer4 from "../assets/trainer4.png";
import fullStars from "../assets/fullStars.png";
import Stars4 from "../assets/Stars4.png";
// import "./trainers.css";
import '../Css/trainers.css'
function Trainers() {
  return (
    <>
      <div id="trainers_compo">
        <div className="container">
          <h2>المدربين</h2>
          <div className="grid">
            <div className="ele">
              <img src={trainer3} alt="trainer3" />
              <h3>Daniel Reed</h3>
              <img src={fullStars} alt="trainer3" />
            </div>
            <div className="ele">
              <img src={trainer2} alt="trainer2" />
              <h3>James Carter</h3>
              <img src={Stars4} alt="trainer3" />
            </div>
            <div className="ele">
              <img src={trainer4} alt="trainer4" />
              <h3>Salam Ahmed</h3>
              <img src={fullStars} alt="trainer3" />
            </div>
            <div className="ele">
              <img src={trainer1} alt="trainer1" />
              <h3>Khaled Selim</h3>
              <img src={Stars4} alt="trainer3" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Trainers;
