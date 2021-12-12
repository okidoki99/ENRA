import React from "react";
import * as Dapp from "@elrondnetwork/dapp";
import { dAppName } from "config";
import withPageTitle from "./components/PageTitle";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
//import Transaction from "./pages/Transaction";

type RouteType = Dapp.RouteType & { title: string };

export const routeNames = {
  home: "/id/:discordId",
  dashboard: "/dashboard",
  transaction: "/transaction",
  unlock: "/unlock",
  ledger: "/ledger",
  walletconnect: "/walletconnect",
};

const routes: RouteType[] = [
  {
    path: "/id/:discordId",
    title: "Home",
    component: Home,
  },
  {
    path: "/dashboard",
    title: "Dashboard",
    component: Dashboard,
    authenticatedRoute: true,
  },
  /*{
    path: "/transaction",
    title: "Transaction",
    component: Transaction,
  },*/
];

const wrappedRoutes = () =>
  routes.map((route) => {
    const title = route.title
      ? `${route.title} • Elrond ${dAppName}`
      : `Elrond ${dAppName}`;
    return {
      path: route.path,
      authenticatedRoute: Boolean(route.authenticatedRoute),
      component: withPageTitle(
        title,
        route.component,
      ) as any as React.ComponentClass<any, any>,
    };
  });

export default wrappedRoutes();
