import * as React from "react";
import { useParams } from "react-router-dom";

const Home = () => {
  const { discordId } : any = useParams();
  localStorage.setItem("discordId", discordId);

  return (
    <div className="d-flex flex-fill align-items-center container">
      <div className="row w-100">
        <div className="col-12 col-md-8 col-lg-5 mx-auto">
        </div>
      </div>
    </div>
  );
};

export default Home;
