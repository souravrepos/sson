import React, { Fragment } from "react";
import loading from "../../img/refresh.png";

export default () => (
  <Fragment>
    <img
      scr={loading}
      style={{
        // width: "300px",
        marginTop: "20%",
        marginLeft: "40%",
        // display: "block",
      }}
      alt="Loading............"
    />
  </Fragment>
);
