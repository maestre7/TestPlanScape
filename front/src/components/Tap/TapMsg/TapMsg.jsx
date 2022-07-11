
import React from "react";

/* MSG */
const msg = {
    hola: "HOLA!",
    que: "Que Tal?",
}

function TapMsg(props) {
    const { tap } = props;

    return (
        <div className="tap--msg">
            {tap === "1" ? msg.hola : msg.que}
        </div>
    )
}

export default TapMsg;