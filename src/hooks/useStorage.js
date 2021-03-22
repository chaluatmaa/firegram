import { useState, useEffect } from "react";
import {
	projectStorage,
	projectFirestore,
	timestamp,
} from "../firebase/config";

const useStorage = (file) => {
	const [progress, setProgress] = useState(0);
	const [error, setError] = useState(null);
	const [url, setUrl] = useState(null);

	useEffect(() => {
		// references
		const storageReference = projectStorage.ref(file.name);
		const collectionReference = projectFirestore.collection("images");

		storageReference.put(file).on(
			"state_changed",
			(snapshot) => {
				let percentage =
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
				setProgress(percentage);
			},
			(err) => {
				setError(err);
			},
			async () => {
				const imageUrl = await storageReference.getDownloadURL();
				const createdAt = timestamp();
				collectionReference.add({ url: imageUrl, createdAt });
				setUrl(imageUrl);
			}
		);
	}, [file]);

	return { progress, url, error };
};

export default useStorage;
