import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const ShowCart = (props) => {
  const { handleBookmarkbtn } = props;
  const { markRead } = props;
  const { img, authorName, authorImg, date, time, title, hashtag } = props.blog;
  return (
    <div className="">
      <div className=" bg-white border border-gray-200 mt-8 rounded-lg shadow md:w-[800] w-[550] lg:w-[800]  dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg" src={img} alt="" />
        </a>
        <div className="flex justify-between px-2 mt-4">
          <div className="flex ">
            <div>
              <img className="w-10" src={authorImg} alt="" />
            </div>
            <div className="pl-4">
              <h2>{authorName}</h2>
              <h3>{date}</h3>
            </div>
          </div>
          <div>
            <h2>
              {time} min read{" "}
              <span
                onClick={() => {
                  handleBookmarkbtn(title);
                }}
                className="pl-2 cursor-pointer"
              >
                <FontAwesomeIcon icon={faBookmark} />{" "}
              </span>
            </h2>
          </div>
        </div>

        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </a>

          <div className="py-4 ">
            <h5 className="gap-x-3 text-zinc-500">{hashtag}</h5>
          </div>

          <div>
            <a
              onClick={() => {
                markRead(parseInt(time));
              }}
              className="text-lg underline cursor-pointer text-blue-700"
            >
              Mark as Read
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCart;
