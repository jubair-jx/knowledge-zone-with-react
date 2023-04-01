import React, { useEffect, useState } from "react";
import ShowCart from "../ShowCart/ShowCart";

const Card = ({ handleBookmarkbtn, markRead }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="">
      {blogs.map((blog) => (
        <ShowCart
          handleBookmarkbtn={handleBookmarkbtn}
          blog={blog}
          markRead={markRead}
          key={blog.id}
        ></ShowCart>
      ))}
    </div>
  );
};

export default Card;
