import React, { useEffect, useState, useCallback } from "react";
import ReactAce from "react-ace";
import CustomSidebar from "./Component/CustomSideBar";
import AppTerminal from "./Component/ShellTerminal";

function App() {
	function onChange(newValue) {
		console.log("change", newValue);
	}

	const [fileTree, setFileTree] = useState({});
	const [selectedFile, setSelectedFile] = useState("");
	const [selectedFileContent, setSelectedFileContent] = useState("");
	const [code, setCode] = useState("");
	const [saveFileContent, setsaveFileContent] = useState("");

	const isSaved = selectedFileContent === code;

	useEffect(() => {
		if (!isSaved && code) {
			// const timer = setTimeout(() => {
			// 	socket.emit("file:change", {
			// 		path: selectedFile,
			// 		content: code,
			// 	});
			// }, 5 * 1000);
			// return () => {
			// 	clearTimeout(timer);
			// };
		}
	}, [code, selectedFile, isSaved]);

	useEffect(() => {
		setCode("");
	}, [selectedFile]);

	useEffect(() => {
		setCode(selectedFileContent);
	}, [selectedFileContent]);

	const getFileTree = async () => {
		const response = await fetch("http://localhost:9001/files");
		const result = await response.json();
		setFileTree(result.tree);
	};

	const getFileContents = useCallback(async () => {
		if (!selectedFile) return;
		const response = await fetch(
			`http://localhost:9000/files/content?path=${selectedFile}`
		);
		const result = await response.json();
		setSelectedFileContent(result.content);
	}, [selectedFile]);

	useEffect(() => {
		if (selectedFile) getFileContents();
	}, [getFileContents, selectedFile]);

	useEffect(() => {
		getFileTree();
	}, []);

	return (
		<>
			<div id="code-editor" className="flex flex-row h-screen w-screen">
				<div id="side-bar" className="flex-none text-white">
					<CustomSidebar tree={fileTree} />
					{/* <AppSideBar /> */}
				</div>

				<div id="editor" className="flex-grow flex ">
					<div className="flex flex-grow flex-col">
						<div className="flex justify-between items-center p-4 bg-gray-700">
							<span className="text-white">{selectedFile || "No file selected"}</span>
							<button
								onClick={saveFileContent}
								className={`py-1 px-3 rounded text-white ${isSaved ? "bg-gray-500" : "bg-green-600 hover:bg-green-800"
									}`}
								disabled={isSaved}
							>
								Save
							</button>
						</div>
						<div className="flex-grow">

							<ReactAce
								name="ace-editor"
								mode="javascript"
								theme="dracula"
								showPrintMargin={true}
								setReadOnly={false}
								fontSize={20}
								placeholder={`/* Hello Lets start coding! */`}
								// value={editorCode}
								showGutter={true}
								style={{
									height: "100%", // Full height of the container
									width: "100%",  // Full width of the container
								}}
								highlightActiveLine={true}
								onChange={onChange}
							/>
						</div>
					</div>
				</div>

				<div className="flex-none bg-gray-900 text-white">
					<AppTerminal />
				</div>
			</div>
		</>

	);
}

export default App;