import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card/Card";
import SideCart from "./components/SideCart/SideCart";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Blog from "./components/Blog/Blog";
import { ThemeProvider } from "daisyui";

function App() {
  const [Blogtitle, setTitle] = useState([]);
  const [bookmark, setBookmark] = useState(0);
  const [markToRead, setMarkToRead] = useState(0);
  const bookmarkBtn = (title) => {
    const isBookmarked = Blogtitle.find((blogtitle) => blogtitle === title);
    if (isBookmarked) {
      toast.error("No Bruh... You Have Already Bookmarked This Blog !!!!");
    } else {
      let bookmarkNumbar = bookmark + 1;
      setBookmark(bookmarkNumbar);

      let newBlog = [...Blogtitle, title];
      setTitle(newBlog);
    }
  };
  const markToCart = (time) => {
    setMarkToRead(markToRead + time);
  };
  return (
    <div className="App">
      <Navbar className="container"></Navbar>
      <div className="md:grid-cols-2 lg:grid-cols-2 grid grid-cols-1 gap-4 container mx-auto sm:mx-auto md:px-20  mt-12">
        <Card markRead={markToCart} handleBookmarkbtn={bookmarkBtn}></Card>
        <SideCart
          markAsRead={markToRead}
          title={Blogtitle}
          bookmark={bookmark}
        ></SideCart>
      </div>
      <div className="container  md:px-28">
        <Blog></Blog>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
