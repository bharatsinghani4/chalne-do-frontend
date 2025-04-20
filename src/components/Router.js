import React, { lazy } from "react";
import {
  createHashRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import { NothingFoundBackground } from "./NothingFoundBackground";
import Suspense from "../hoc/Suspense";

const LazyFullSync = lazy(() => import("./FullSync"));

const routes = createRoutesFromElements(
  <Route>
    <Route
      index
      element={
        <Suspense>
          <LazyFullSync />
        </Suspense>
      }
    />
    <Route
      path={"*"}
      element={<NothingFoundBackground />}
    />
  </Route>
);

const router = createHashRouter(routes);

export const Router = () => {
  return <RouterProvider router={router} />;
};
