import BookIcon from "../../../src/assets/icons/book-open.svg";
import Delete from "../../../src/assets/icons/delete.svg";
import PropTypes from "prop-types";
import "./bookProduct.css";
export const BookProduct = ({
  title,
  bookMark,
  setBookMark,
  authors,
  previewLink,
}) => {
  function data(title) {
    let arr = bookMark.filter((itm) => itm.volumeInfo.title != title);
    setBookMark(arr);
  }
  return (
    <div className="product-container">
      <div className="product-info">
        <h5>{title.slice(0, title.indexOf(" "))}</h5>
        <p>{authors}</p>
      </div>
      <div className="btn">
        <a href={previewLink} target="_blank">
          <BookIcon />
        </a>
        <span onClick={() => data(title)}>
          <Delete />
        </span>
      </div>
    </div>
  );
};

BookProduct.propTypes = {
  title: PropTypes.string,
  bookMark: PropTypes.array,
  setBookMark: PropTypes.func,
  authors: PropTypes.string,
  previewLink: PropTypes.string,
};
