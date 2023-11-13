import React from "react";

const Clear = ({ handleSettings }) => {
    return (
        <button onClick={handleSettings} className="settings">
            Clear
        </button>
    );
};

export default Clear;