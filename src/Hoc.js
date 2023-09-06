// Hoc.js
import React, { useState } from "react";

const withHoc = (WrappedComponent) => {
  const HocComponent = () => {
    const [value, setValue] = useState(0);

    const changeNum = () => {
      setValue(value + 1);
    };

    return <WrappedComponent changeNum={changeNum} value={value} />;
  };

  return HocComponent;
};

export default withHoc;