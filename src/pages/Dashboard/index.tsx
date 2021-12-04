import * as React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";
import TopInfo from "./TopInfo";

const Dashboard = () => {
  const ref = React.useRef(null);
  const match = useRouteMatch();
  /*const { apiAddress, address } = Dapp.useContext();
  const { transactionsFetched } = useContext();
  const dispatch = useDispatch();

  const fetchData = () => {
    getTransactions({
      apiAddress,
      address,
      timeout: 3000,
      contractAddress,
    }).then(({ data, success }) => {
      dispatch({
        type: "setTransactions",
        transactions: data,
        transactionsFetched: success,
      });
    });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(fetchData, []);

  if (transactionsFetched === undefined) {
    return <PageState svgComponent={<></>} spin />;
  }

  if (transactionsFetched === false) {
    return (
      <PageState
        svgComponent={
          <FontAwesomeIcon icon={faBan} className="text-secondary fa-3x" />
        }
        title="Unavailable"
        className="dapp-icon icon-medium"
      />
    );
  } */

  return (
    <Router>
      <div className="container py-4" ref={ref}>
        <div className="row">
          <div className="col-12 col-md-10 mx-auto">
            <div className="card shadow-sm rounded border-0">
              <div className="card-body p-1">
                <div className="card rounded border-0 bg-primary">
                  <div className="card-body text-center p-4">
                    <Switch>
                      <Route path={`${match.path}/:discordId`}>
                        <TopInfo />
                      </Route>
                      <Route path={match.path}>
                        <h3>Please provide a discord id.</h3>
                      </Route>
                    </Switch>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     </Router>
  );
};

export default Dashboard;
