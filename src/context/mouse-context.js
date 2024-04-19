import React, { createContext, useState } from "react";

export const MouseContext = createContext({
    cursorType: "",
    cursorChangeHandler: () => {},
});

const MouseContextProvider = (props) => {
    const [cursorType, setCursorType] = useState("");
    const [active, setActive] = useState("#home");
    const cursorChangeHandler = (cursorType) => {
        setCursorType(cursorType);
    };
    const [cursor, setCursor] = useState({ active: false });
    return (
        <MouseContext.Provider
            value={{
                cursorType: cursorType,
                cursorChangeHandler: cursorChangeHandler,
                active,
                setActive,
                cursor,
                setCursor,
            }}
        >
            {props.children}
        </MouseContext.Provider>
    );
};

export default MouseContextProvider;
