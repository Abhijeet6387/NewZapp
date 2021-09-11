// import React, { Component } from "react";
import React from "react";
import loading from "./loading.gif";
// converting class-based to functinal componenent
// export class Spinner extends Component {
// render() {
const Spinner = () => {
  return (
    <div className="text-center">
      <img src={loading} alt="loading" />
    </div>
  );
};
//   }
// }

export default Spinner;
