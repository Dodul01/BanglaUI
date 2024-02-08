import { useState } from "react";
import CodeSnippet from "../CodeSnipat/CodeSnipat";

const ComponentBox = ({ children, title, previewCode }) => {
    const [isPreview, setisPreview] = useState(true);

    return (
        <div className="p-2">
            <h1 className="text-2xl">{title}</h1>
            <div>
                <div className="flex items-center gap-4 my-4">
                    <button onClick={() => setisPreview(true)}>Preview</button>
                    <button onClick={() => setisPreview(false)}>Code</button>
                </div>
                <div>
                    {isPreview ? children : <CodeSnippet codeString={previewCode} />}
                    {/* {children} */}
                </div>
            </div>
        </div>
    )
}

export default ComponentBox