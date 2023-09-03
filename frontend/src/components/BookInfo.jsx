import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const BookInfo = () => {
	const [singleBook, setSingleBook] = useState({});
	const location = useLocation();
	const path = location.pathname.split("/")[2];
	useEffect(() => {
		getSingleBook();
	}, []);
	const getSingleBook = async () => {
		const res = await axios.get(`http://localhost:8085/api/v1/book/${path}`);
		if (res.data.status === "success") {
			setSingleBook(res.data.data[0]);
		} else {
			toast.error("Something went wrong");
		}
	};
	return (
		<>
			<div className="wrapper">
				<div className="img">
					<img
						className="single-img"
						src={`http://localhost:8085/${singleBook.book_img}`}
						alt={`${singleBook.book_img}`}
					/>
				</div>
				<div className="book-info">
					<h2>{singleBook.book_title}</h2>
					<p>{singleBook.book_description}</p>
					<Link
						to={`/edit/${path}`}
						style={{ marginTop: "50px" }}
						className="btn btn-dark"
					>
						Edit
					</Link>
				</div>
			</div>
		</>
	);
};

export default BookInfo;
