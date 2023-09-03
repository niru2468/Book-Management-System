import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddBook = () => {
	const [book_title, SetBook_Title] = useState("");
	const [book_description, SetBook_Description] = useState("");
	const [book_img, setBook_Img] = useState("");
	const navigate = useNavigate();
	const addBook = async (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append("book_title", book_title);
		formData.append("book_description", book_description);
		formData.append("book_img", book_img);
		const res = await axios.post(
			`http://localhost:8085/api/v1/book/add`,
			formData
		);
		if (res.data.status === "success") {
			toast.success("Book Added Successfully");
			navigate("/");
		} else {
			toast.error("Something went wrong!!!");
		}
	};
	return (
		<div className="form">
			<form>
				<div className="mb-3">
					<label htmlFor="book_title" className="form-label">
						Book Title
					</label>
					<input
						type="text"
						className="form-control"
						id="book_title"
						name="book_title"
						placeholder="Enter Book Title"
						onChange={(e) => SetBook_Title(e.target.value)}
					/>
				</div>
				<div className="mb-3 mt-5">
					<label htmlFor="book_description" className="form-label">
						Book Description
					</label>
					<input
						type="text"
						name="book_description"
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
						name="book_img"
						className="form-control"
						id="book_img"
						onChange={(e) => setBook_Img(e.target.files[0])}
					/>
				</div>
				<div className="btn">
					<button onClick={addBook} type="submit" className="btn btn-primary">
						Add
					</button>
					<Link to="/" style={{ marginLeft: "30px" }} className="btn btn-info">
						Back
					</Link>
				</div>
			</form>
		</div>
	);
};

export default AddBook;
