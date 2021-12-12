import * as React from "react";
import * as Dapp from "@elrondnetwork/dapp";

const TopInfo = () => {
  const {
    address,
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
