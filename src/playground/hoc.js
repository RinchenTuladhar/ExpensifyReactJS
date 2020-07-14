// A component (HOC) that rends another component
// Pros: Reuse code, render hijacking, prop manipulation, abstract state

import React from "react";
import ReactDOM from "react-dom";

const Info = (props) => {
  return (
    <div>
      <h1>Info</h1>
      <p>This info is {props.info}</p>
    </div>
  );
};

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info. Please don't share!</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

// requireAuthentication

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Nah G</p>}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(
//   <AdminInfo isAdmin={false} info="These are the details" />,
//   document.getElementById("app")
// );

ReactDOM.render(
  <AuthInfo isAuthenticated={false} info="These are the details" />,
  document.getElementById("app")
);
