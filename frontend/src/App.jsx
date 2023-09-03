import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import EditBook from "./components/EditBook";
import AddBook from "./components/AddBook";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BookInfo from "./components/BookInfo";
function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Dashboard />} />
				<Route path="/edit/:id" element={<EditBook />} />
				<Route path="/book/:id" element={<BookInfo />} />
				<Route path="/add" element={<AddBook />} />
			</Routes>
			<ToastContainer theme="dark" position="top-center" />
		</div>
	);
}

export default App;
