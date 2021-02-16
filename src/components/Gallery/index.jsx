import "./index.scss";
import React from "react";
import blueCar from "../../assets/aleks-marinkovic-79Q6RniLjWo-unsplash.png";
import brickWall from "../../assets/P1080154.png";
import mountain from "../../assets/felipe-giacometti-ICvbF6rm9Q4-unsplash@2x.png";
import redCar from "../../assets/angus-gray-DXyCIg-Ii6o-unsplash@2x.png";
import fire from "../../assets/manuel-meurisse-EuCll-F5atI-unsplash@2x.png";
import cornField from "../../assets/corn-fields-under-white-clouds-with-blue-sky-during-daytime-158827@2x.png";
import redSky from "../../assets/spencer-watson-p0Yupww_SNM-unsplash@2x.png";

export const Gallery = () => {
  return (
    <div className="gallery">
      <img src={blueCar} alt="" width="460" height="217" />
      <img src={mountain} alt="" width="313" height="484" />
      <img src={redCar} alt="" width="423" height="268" />
      <img src={cornField} alt="" width="342" height="188" />
      <img src={brickWall} alt="" width="373" height="188" />
      <img src={fire} alt="" width="423" height="268" />
      <img src={redSky} alt="" width="342" height="351" />
    </div>
  );
};
