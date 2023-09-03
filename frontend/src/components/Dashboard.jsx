import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
const Dashboard = () => {
	const [books, setBooks] = useState([]);
	useEffect(() => {
		getAllBooks();
	}, []);
	const getAllBooks = async () => {
		const res = await axios.get("http://localhost:8085/api/v1/book");
		if (res.data.status === "success") {
			setBooks(res.data.data);
		} else {
			toast.error("Check Your Connection!!!");
		}
	};
	const deleteBook = async (id) => {
		const res = await axios.delete(
			`http://localhost:8085/api/v1/book/delete/${id}`
		);
		if (res.data.status === "success") {
			toast.success("Book Delete Successfully");
			window.location.reload();
		} else {
			toast.info("Something went wrong!!");
		}
	};
	return (
		<>
			<div className="container">
				{books.map((book) => {
					return (
						<div key={book.id} className="card" style={{ width: "18rem" }}>
							<img
								src={`http://localhost:8085/${book.book_img}`}
								className="card-img-top"
								alt={`book.${book.id}`}
							/>
							<div className="card-body">
								<h5 className="card-title">{book.book_title}</h5>
								<Link
									to={`/book/${book.id}`}
									style={{ marginTop: "20px" }}
									className="btn btn-dark"
								>
									See More
								</Link>
								<Link
									onClick={() => deleteBook(book.id)}
									style={{ marginTop: "20px", marginLeft: "30px" }}
									className="btn btn-danger"
								>
									Delete
								</Link>
							</div>
						</div>
					);
				})}
			</div>
			<div
				className="button"
				style={{ textAlign: "center", marginTop: "30px" }}
			>
				<Link to="/add" style={{ marginLeft: "30px" }} className="btn btn-info">
					Add Book
				</Link>
			</div>
		</>
	);
};

export default Dashboard;
