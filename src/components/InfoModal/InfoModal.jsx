import Cross from "../../../src/assets/icons/cross.svg";
import PropTypes from "prop-types";
import "./infoModal.css";
export const InfoModal = ({ setIsModalActive, bookInfo }) => {
  return (
    <div className="infoModal">
      <div className="modal">
        <div className="modalHeader">
          <p>{bookInfo.volumeInfo.title}</p>
          <span onClick={() => setIsModalActive(false)}>
            <Cross />
          </span>
        </div>
        <div className="bookINfo">
          <img src={bookInfo.volumeInfo.imageLinks.thumbnail} alt="" />
          <p className="description">{bookInfo.volumeInfo.description}</p>
          <div>
            <h5>Author : </h5>
            {bookInfo.volumeInfo.authors.map((item, i) => {
              if (i < 2) {
                return (
                  <span className="box" key={i}>
                    <p>{item}</p>
                  </span>
                );
              }
            })}
          </div>
          <div>
            <h5>Published : </h5>
            <span className="box">
              <p>{bookInfo.volumeInfo.publishedDate}</p>
            </span>
          </div>
          <div>
            <h5>Publishers: </h5>
            <span className="box">
              <p>{bookInfo.volumeInfo.publisher}</p>
            </span>
          </div>
          <div>
            <h5>Categories: </h5>
            {bookInfo.volumeInfo.categories.map((item,i)=>{
              return(

            <span className="box" key={i}>
              <p>{item}</p>
            </span>
              )
            })}
          </div>
          <div>
            <h5>Pages Count: </h5>
            <span className="box">
              <p>{bookInfo.volumeInfo.pageCount}</p>
            </span>
          </div>
        </div>
        <footer className="modalFooter">
        <a href={bookInfo.volumeInfo.previewLink} target="_blank">
          <button>Read</button>
        </a>
        </footer>
      </div>
    </div>
  );
};
InfoModal.propTypes = {
  setIsModalActive: PropTypes.func,
  bookInfo:PropTypes.object
};
