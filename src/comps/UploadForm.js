import React, { useState } from "react";
import Progressbar from "./Progressbar";

const UploadForm = () => {
	const [file, setFile] = useState(null);
	const [error, setError] = useState(null);
	const [caption, setCaption] = useState("");

	const types = ["image/png", "image/jpg", "image/jpeg", "image/gif"];

	const changeHandler = (e) => {
		let selectedFile = e.target.files[0];
		console.log("Selected ", selectedFile);
		if (selectedFile && types.includes(selectedFile.type)) {
			setFile(selectedFile);
			setError("");
		} else {
			setFile(null);
			setError("Please select a valid image file i.e. PNG/JPEG");
		}
	};

	const changeCaption = (e) => {
		setCaption(e.target.value);
		console.log(e.target.value);
	};

	return (
		<form>
			<label>
				+<input type="file" onChange={changeHandler} />
			</label>

			<div className="output">
				{error && <div className="error"> {error} </div>}
				{file && <div className="error"> {file.name} </div>}
				{file && <Progressbar file={file} setFile={setFile} />}
			</div>
		</form>
	);
};

export default UploadForm;
