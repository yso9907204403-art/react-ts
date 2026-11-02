import type { ReactNode } from "react";
import React from "react";

const Box = ({children}: {children: ReactNode}) => {
    // 스타일의 객체 타입 - CSSProperties
    const boxStyle: React.CSSProperties = {
        width: '200px',
        border: '1px solid #000',
        padding: '20px',
        margin: '5px'
    }

    return(
        <>
            <div style={boxStyle}>{children}</div>
        </>
    )
}

export default Box;