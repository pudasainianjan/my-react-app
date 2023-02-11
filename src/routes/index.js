//this item selects which content to route on the screen according to address bar link

import React from "react";
import { Route, Routes } from "react-router-dom";
import { Content } from "antd/lib/layout/layout";

import Dashboard from "../dashboard";
import ShowJoke from "../fetchJokes";

const SiteContent = () => {
  return (
    <Content style={{ margin: "50px 16px 0", overflow: "initial" }}>
      {/* <Breadcrumb /><br/><br/> */}
      <div
        className="site-layout-background"
        style={{
          marginTop: "20px",
          padding: 24,
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <Routes>
          <Route exact path={"/"} isAuthed={true} element={<Dashboard />} />

          <Route
            exact
            path={"/showJoke"}
            isAuthed={true}
            element={<ShowJoke />}
          />

          <Route
            exact
            path={"/showJoke/:personName"}
            isAuthed={true}
            element={<ShowJoke />}
          />

          <Route path="*" element={NotFound} />
        </Routes>
      </div>
    </Content>
  );
};

function NotFound() {
  return <>You have landed on a page that doesn't exist</>;
}

export default SiteContent;
