import React from "react";

function PageInfo({ title }) {
  return (
    <div>
      <div className="d-flex align-items-center justify-content-center flex-column top-bg">
        <div className="small">{title}</div>
      </div>
    </div>
  );
}

export default PageInfo;
