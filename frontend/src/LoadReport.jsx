import React from "react";
import myText from "./control/uploads/output.txt?raw";
export default function LoadReport() {
    const lines = myText.split('\n');
    return (
        <div className="flex-col text-center w-full">
            {lines.map((item) => (
            <p>{item}</p>)
            )}
        </div>
    )
}

