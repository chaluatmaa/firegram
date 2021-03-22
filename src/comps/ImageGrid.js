import React from "react";
import useFireStore from "../hooks/useFireStore";
import { motion } from "framer-motion";

export const ImageGrid = ({ setSelectedImage }) => {
	const { docs } = useFireStore("images");
	console.log(docs);
	return (
		<div className="image__grid">
			{docs &&
				docs.map((doc) => (
					<motion.div
						className="image__wrap"
						key={doc.id}
						layout
						whileHover={{ opacity: 1 }}
						onClick={() => setSelectedImage(doc.url)}
					>
						<motion.img
							src={doc.url}
							alt={doc.id}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 1 }}
						/>
					</motion.div>
				))}
		</div>
	);
};
