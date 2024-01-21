    import React, { useState } from "react"

    export default function UploadSect() {
        const handleUpload = () => {
            const file = event.target.files;
            if (file[0].type==="image/png" || file[0].type==="image/jpg") renderButton();
            else resetButton();
            //subsequently render a upload button
        }
        function handleRequest(event) {
            event.preventDefault();
            resetButton();
            wait_text();
            //next should be api_call then a rendering of the web page
        }
        const renderButton = () => {
            const newButton = (
                <button key= {buttons.length} className="rounded-none h-10 w-40
                bg-blue-400 p-1 focus:outline-none
                text-slate-200 hover:text-white hover:bg-blue-600"
                onClick={(event) => handleRequest(event)}>Upload</button>
                )
                
                setButtons([newButton]);
            }
            const wait_text = () => {
                const text = (
                    <div key ={buttons.length}>
                <p>Please hold on as we process your document...</p>
                <p>In the meantime, feel free to grab a cup of coffee or tea!☕</p>
                </div>
            )
            setContent([]);
            setButtons([text]);
        }
        const resetButton = () => {
            setButtons([]);
        }
        const init_content = (
            <>
            <h2>Upload a file of the format ending in .jpg, .png</h2>
                <div id="innerDiv" className="flex justify-center items-center mt-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                    </svg>
                    <label className="block">
                        <input type="file" className="w-full text-sm text-slate-500
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-full file:border-0
                            file:text-sm file:font-semibold
                            file:bg-violet-50 file:text-violet-600
                            hover:file:bg-violet-100" 
                            onChange={handleUpload}
                            />
                    </label>
                </div>
                </>
        )
        const [buttons, setButtons] = useState([]);
        const [content, setContent] = useState([init_content]);
        return (
            <div>
                <form className="flex flex-col justify-center items-center bg-slate-300 h-screen">
                    <div id="initialContent">
                        {content.map(element => element)}
                    </div>
                    <div id="uploadButton" className="mt-10">
                        {buttons.map(button => button)}
                    </div>
                </form>
            </div>
        );
    }
    