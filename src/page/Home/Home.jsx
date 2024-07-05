import { useEffect, useState } from "react";
import { Book } from "../../components/Book/Book";
import { BookMark } from "../../components/BookMark/BookMark";
import { Header } from "../../components/Header/Header";
import { InfoModal } from "../../components/InfoModal/InfoModal";
import Arrow from "../../assets/icons/arrow.svg"
import "./home.css";
export function Home() {
  const [isModalActive, setIsModalActive] = useState(false);
  const [product, setProduct] = useState([]);
  const [bookInfo, setBookInfo] = useState([]);
  const [bookMark,setBookMark]=useState([])
  const [search, setSearch] = useState("");
  const [btnArr, setBtnArr] = useState([]);
  const [isActive, setIsActive] = useState(0);
  const [isArr,setIsArr] =useState([])
  const [isData,setIsData] =useState()
  useEffect(()=>{

    let number =product.length /6
    let data =Math.ceil(number)
    setIsData(data)
  },[product])
  useEffect(() => {
    for (let i = 1; i <= isData; i++) {
      setBtnArr([...btnArr, btnArr.push(i)]);
    }
  }, [isData]);
  useEffect(() => {
    let req = fetch(
      "https://www.googleapis.com/books/v1/volumes?q=$%7BsearchItem%7D&startIndex=0&maxResults=40&orderBy=newest"
    );
    req.then((data) => data.json()).then((json) => setProduct(json.items));
  }, []);
  useEffect(() => {
    
  }, [isData]);
  useEffect(()=>{
    let arr = btnArr
    .join(" ")
    .slice(0, btnArr.join(" ").indexOf(String(isData)) + 1)
    .split(" ");
    setIsArr(arr)
  },[isData])
  return (
    <>
      {isModalActive && (
        <InfoModal setIsModalActive={setIsModalActive} bookInfo={bookInfo} />
      )}
      <Header setSearch={setSearch} />
      <main className="home-wrapper">
        <div className="container home-wrapper--container">
          <BookMark bookMark={bookMark} setBookMark={setBookMark}/>
          <section className="books">
            <div className="books-container">
              {product.map((item, i) => {
                if (item.volumeInfo.title.toLowerCase().includes(search)) {
                  const {
                    title,
                    authors,
                    imageLinks,
                    publishedDate,
                    previewLink,
                  } = item.volumeInfo;
                  if (i < 6+isActive&&i>isActive-1) {
                    return (
                      <Book
                        setIsModalActive={setIsModalActive}
                        key={i}
                        title={title}
                        imageLinks={imageLinks.thumbnail}
                        authors={authors[0]}
                        publishedDate={publishedDate}
                        item={item}
                        previewLink={previewLink}
                        setBookInfo={setBookInfo}
                        setBookMark={setBookMark}
                        bookMark={bookMark}
                      />
                    );
                  }
                }
              })}
            </div>
            <div className="next-btns">
              <div className="btn-left"   onClick={() => (isActive > 0 ? setIsActive(isActive - 1) : "")}>
              <Arrow/>
              </div>
              {isArr.map((item,i)=>{ 

                return(
                  <div className={isActive==i?"tab-active":"tab"} key={i} onClick={()=>setIsActive(i)}>{item}</div>

                )
              })}
              <div className="btn-left right"   onClick={() =>
              isActive < isArr.length - 1 ? setIsActive(isActive + 1) : ""
            }>
              <Arrow/>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
