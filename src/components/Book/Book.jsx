import PropTypes from "prop-types";
import "./book.css";
export function Book({ setIsModalActive ,title,imageLinks,authors,publishedDate,item,previewLink, setBookInfo,setBookMark,bookMark}) {
  return (
    <div className="book-container">
      <div className="photo">
        <img src={imageLinks} alt="photo" />
      </div>
      <div className="book-info">
        <div className="book-title">
        <h2>{title}</h2>
        </div>
        <p>{authors}</p>
        <p>{publishedDate}</p>
        <div className="btns">
          <button className="bookmark" onClick={()=>setBookMark([...bookMark,item])}>Bookmark</button>
          <button className="info" onClick={() =>{ setIsModalActive(true) ,setBookInfo(item)}}>
            More Info
          </button>
        </div>
        <a href={previewLink} target="_blank">
        <button className="read">Read</button>
        </a>
      </div>
    </div>
  );
}
Book.propTypes = {
  setIsModalActive: PropTypes.func,
  title:PropTypes.string,
  imageLinks:PropTypes.string,
  authors:PropTypes.string,
  publishedDate:PropTypes.string,
  item:PropTypes.object,
  previewLink:PropTypes.string,
  setBookInfo:PropTypes.func,
  setBookMark:PropTypes.func,
  bookMark:PropTypes.array
};
