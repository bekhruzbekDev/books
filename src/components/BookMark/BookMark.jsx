import { BookProduct } from "../BookProduct/BookProduct";
import Arrow from "../../assets/icons/arrow.svg";
import { useState } from "react";
import { useEffect } from "react";
import PropTypes from "prop-types";
import "./bookMark.css";
export const BookMark = ({ bookMark, setBookMark }) => {
  const [btnArr, setBtnArr] = useState([]);
  const [isCount, setCount] = useState(0);
  const [isActive, setIsActive] = useState(0);
  const [isArr, setArr] = useState([]);
  const [data, isData] = useState();

  useEffect(() => {
    let number = bookMark.length / 9;
    let data = Math.ceil(number);
    isData(data);
    for (let i = 1; i <= data; i++) {
      setBtnArr([...btnArr, btnArr.push(i)]);
    }
  }, [bookMark]);
  useEffect(() => {
    if (bookMark.length > 9) {
      setCount(9 * isActive);
    }
  }, [isActive]);
  useEffect(() => {
    let arr = btnArr
      .join(" ")
      .slice(0, btnArr.join(" ").indexOf(String(data)) + 1)
      .split(" ");
    setArr(arr);
  }, [bookMark]);
  return (
    <aside className="bookmark-container">
      <h2 className="bookmark-title">Bookmarks</h2>
      <p>If you don’t like to read, you haven’t found the right book</p>
      <div className="products">
        {bookMark.map((item, i) => {
          if (i < 9 + isCount && i >= isCount) {
            return (
              <BookProduct
                key={i}
                title={item.volumeInfo.title}
                setBookMark={setBookMark}
                bookMark={bookMark}
                authors={item.volumeInfo.authors[0]}
                previewLink={item.volumeInfo.previewLink}
              />
            );
          }
        })}
      </div>
      {bookMark.length > 9 && (
        <div className="next-product">
          <div
            className="btn-left"
            onClick={() => (isActive > 0 ? setIsActive(isActive - 1) : "")}
          >
            <Arrow />
          </div>
          {isArr.map((item, i) => {
            console.log(item);
            return (
              <div
                className={isActive == i ? "tab-active" : "tab"}
                key={i}
                onClick={() => setIsActive(i)}
              >
                {item}
              </div>
            );
          })}
          <div
            className="btn-left right"
            onClick={() =>
              isActive < isArr.length - 1 ? setIsActive(isActive + 1) : ""
            }
          >
            <Arrow />
          </div>
        </div>
      )}
    </aside>
  );
};
BookMark.propTypes = {
  bookMark: PropTypes.array,
  setBookMark: PropTypes.func,
};
