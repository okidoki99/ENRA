import * as React from "react";
import * as Dapp from "@elrondnetwork/dapp";
import { useParams } from "react-router-dom";
import Denominate from "./../../components/Denominate";

const TopInfo = () => {
  const {
    address,
    account: { balance },
  } = Dapp.useContext();

  return (
    <div className="text-white" data-testid="topInfo">
      <div className="mb-1">
        <p className="opacity-6 mr-1">Your address:</p>
        <p data-testid="accountAddress">{address}</p>
        <p className="opacity-6 mr-1">Discord handle:</p>
        <p data-testid="discordId">{localStorage.getItem("discordId")}</p>
      </div>
    </div>
  );
};

export default TopInfo;
