import * as React from "react";
import * as Dapp from "@elrondnetwork/dapp";
import { GoogleSpreadsheet } from "google-spreadsheet";

// Config variables
const SPREADSHEET_ID = "1i8qjPCOtUfDd6VIoVXRyxsXz-kPCGirFG1ZzZfre_X4";
const SHEET_3_ID = "432853593";
const SHEET_4_ID = "60024855";
const SHEET_1_ID = "0";
const CLIENT_EMAIL = "enra-admin@coffee-shop-clwvwp.iam.gserviceaccount.com";
const PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCix+D/GAovXjWj\nbY9A4bXu6wZWl5pS4aKNXN5qjofHBDxlWudRICk5il/N/9KhubuaMr1DSLpe7+bA\nheTVFFzmQV4ZYeik6LnRpj7rXyU+Qh/2f31tDCQq6eftrSIVSGkve+OPRJejLwLf\nACGM00yA/nw6V3DD8JJSxSRzEmAH42L3KCd9+h/rohzoXJag/Yj2uTnihZC0xi83\n1qHyc2wOOwK0Zn3wzh6gJk17FS0m36cBN1TBouv5G7DXx5Z2asjXNzAI+UEB4rVS\nUZyL4brAs/4LWiIWHhZhYWi3KF2TZ16QmxSY3ZDIbv4aPNgw2TgSYtMXrOatKOjG\nel7uiDOJAgMBAAECggEADXgfjcwV76nKeMLp3chaGbJjJwrKr2f8ii5F4yhMY4iI\nsimi8VYJbeRIHXoOb5O4SmqUuZAM3SqEUVLi8UoK49dDK4jWoL/3EY9sLmVZkLy/\npfxnoFHRs6arf8GvNnae6YRv+xywYBrVkHvoysfN0UX9eTBfZCnbBF6hWk+KGFeI\n4Sc7KMThUDYlLnhbNuBlYg3wzJk919Vt9IJwu20OaKPqbpr2H/rB8ezR3xKXK7hV\nDRoNvNIXKRWZYxeeMSwbBKZ4trsOU1IJXfYjtXlenyZ/bqavNg1zQtU/0bfVIqKH\nhig2D72VOnd/5b8xXNf/MW2YUrQM5mX89K0bKHqvxwKBgQDkW36ZfooyKaj1W1ZB\n2+xJn143EbergDWGIbjpkl9LcHKnwtyevfgxtHPx/XxIJDlyO38Xua/S3KrManRb\naLExOkS8TE//8d3teYUeUvSy29oZSGu482N6JGnVbBubLiJtETQyTP63QEnkuIoi\nStizrSWDvIhblP2ww3pzatiaewKBgQC2fD+I6kM+H+kuAUmyIMFkHE6QG1HiGg+O\noRnMZdEFfnn2mjOIn00U3Ze53zeGXh8/9rVj0XTRcQBhuSYCB1R62fi0p2OgvCkZ\nI4dHRGLFOkyq5rmbfsTG0msqEYsoQ4AGNoyVtj0T9PzKQ/X18yfxGlKm23mpd5jH\ne/N1AszcywKBgQCDD/gzRKswazSrzYZOOlj9UFiUpriR1/3gRA6LEBVdiOZlXrOc\n8E84x+cb5m6kQRYvd/JTvaEqFrh4pkiuBgJczKKSqAHqVfkXyP0cEGSdGw2sISKi\nfh6EBc4wTeHySKI9kvgwPnya1G0Uts2hLO/+/8teNqDUX0jTYP4wrAwxbQKBgHca\n+4EKnd7zhwdu8cHgnTkRPLnUCwrPRa4rOiJtphK27TXmiZI3n2DqDPjVV3FNB4qB\nJP1EncGBxuUBqmwSirIwiKKoyl8D0LNGvCno2aqvFZFKTITQJfE7L5TipHggLnRf\nsDybGJxo/4Go/+WK0lwMeTvM7kiM9dvl7A5ISJwnAoGAeTR2Q+/Mf4dyjyKCikpp\nNriHmORcJlMHDtFJEcZSazMTHMamvPP1N4UjAWO1Wn73XPxF7Lw4NbRm/r244z0M\nQbOsTiOU3oeLHNd+EOyhYbqUulvsho2BG9j24qeNNdD9VjGOtwH0gkxL3ROJDNIK\n+BlQIZGztASYaX//LC5RUng=\n-----END PRIVATE KEY-----\n";

const TopInfo = () => {
  const {
    address,
  } = Dapp.useContext();

  const doc = new GoogleSpreadsheet(SPREADSHEET_ID);
  const [userFound, setUserFound] = React.useState(true);
  const [fetchData, setFetchData] = React.useState(true);

  const appendSpreadsheet = async (row:any, sheetId:any) => {
    try {
      await doc.useServiceAccountAuth({
        client_email: CLIENT_EMAIL,
        private_key: PRIVATE_KEY,
      });
      // loads document properties and worksheets
      await doc.loadInfo();
  
      const sheet = doc.sheetsById[sheetId];
      await sheet.addRow(row);
    } catch (e) {
      console.error("Error: ", e);
    }
  };

  const processUserData = async () => {
    try {
      await doc.useServiceAccountAuth({
        client_email: CLIENT_EMAIL,
        private_key: PRIVATE_KEY,
      });

      await doc.loadInfo();
      const sheet3 = doc.sheetsById[SHEET_3_ID];
      const sheet1 = doc.sheetsById[SHEET_1_ID];
      const result3 = await sheet3.getRows();
      const result1 = await sheet1.getRows();

      const existingUser = result3.filter(x=>x.userID === localStorage.getItem("discordId"));
      if(existingUser[0] != undefined){
        setUserFound(true);
        const serverId = existingUser[0].serverID;
        const sessions = result1.filter(x=>x.serverID === serverId);
        sessions.forEach(async (x,index) => {
          if(index == 0){
            existingUser[0].erd = address;
            existingUser[0].projectID = x.projectID;
            existingUser[0].min = x.min;
            existingUser[0].max = x.max;
            existingUser[0].roleID = x.roleID;
            await existingUser[0].save();
            const newInputRow = {userID: localStorage.getItem("discordId"), erd: existingUser[0].erd, serverID: x.serverID, projectID: x.projectID, min: x.min, max: x.max, roleID: x.roleID};
            appendSpreadsheet(newInputRow, SHEET_4_ID);
          }
          else if(existingUser.length <= sessions.length){ 
            const newInputRow = {userID: localStorage.getItem("discordId"), erd: existingUser[0].erd, serverID: x.serverID, projectID: x.projectID, min: x.min, max: x.max, roleID: x.roleID};
            
            if(result3.filter(y=>y.serverID == newInputRow.serverID && y.projectID == newInputRow.projectID && y.userID == localStorage.getItem("discordId") && y.min == newInputRow.min && y.max == newInputRow.max && y.roleID == newInputRow.roleID).length > 0)
            {
            }
            else
            {
              appendSpreadsheet(newInputRow, SHEET_3_ID);
              appendSpreadsheet(newInputRow, SHEET_4_ID);
            }
          }
        });
      }
      else {
        setUserFound(false);
      }
    } catch (e) {
      console.error("Error: ", e);
    }
  };
  if(fetchData){
    processUserData();
    setFetchData(false);
  }

  return (
    <div>
      <div style={{display: userFound === false ? "none" : "block" }} className="card rounded border-0 bg-custom">
        <div className="card-body text-center p-4">
          <div className="text-white" data-testid="topInfo">
            <div className="mb-1">
              <h3>You can now disconnect and return to discord!</h3>
              <p className="opacity-6 mr-1">Your address:</p>
              <p data-testid="accountAddress">{address}</p>
              <p className="opacity-6 mr-1">Discord handle:</p>
              <p data-testid="discordId">{localStorage.getItem("discordId")}</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{display: userFound === false ? "block" : "none" }} className="card rounded border-0 bg-danger">
      <div className="card-body text-center p-4">
        <div className="text-white" data-testid="topInfo">
          <div className="mb-1">
            <h3>Please use the link from the discord bot and retry the process.</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default TopInfo;
