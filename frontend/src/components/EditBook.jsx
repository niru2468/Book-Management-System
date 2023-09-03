import axios from "axios";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const EditBook = () => {
	const [book_description, SetBook_Description] = useState("");
	const [book_img, setBook_Img] = useState("");
	const location = useLocation();
	const navigate = useNavigate();
	const path = location.pathname.split("/")[2];
	const updateBook = async (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append("book_description", book_description);
		formData.append("book_img", book_img);
		const res = await axios.put(
			`http://localhost:8085/api/v1/book/update/${path}`,
			formData
		);
		if (res.data.status === "success") {
			toast.success("Data Updated Successfully!!");
			navigate("/");
		} else {
			toast.error("Something went wrong!!");
		}
	};
	return (
		<div className="form">
			<form>
				<div className="mb-3">
					<label htmlFor="book_description" className="form-label">
						Book Description
					</label>
					<input
						type="text"
						className="form-control"
						id="book_description"
						placeholder="Enter Book Description"
						onChange={(e) => SetBook_Description(e.target.value)}
					/>
				</div>
				<div className="mb-3 mt-5">
					<label htmlFor="book_img" className="form-label">
						Book Image
					</label>
					<input
						type="file"
						className="form-control"
						id="book_img"
						onChange={(e) => setBook_Img(e.target.files[0])}
					/>
				</div>
				<div className="btn">
					<button
						onClick={updateBook}
						type="submit"
						className="btn btn-primary"
					>
						Update
					</button>
					<Link
						to="/"
						style={{
							marginLeft: "50px",
							color: "white"
						}}
						type="submit"
						className="btn btn-warning"
					>
						Back
					</Link>
				</div>
			</form>
		</div>
	);
};

export default EditBook;
