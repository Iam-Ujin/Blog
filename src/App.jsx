import "./App.css";
import Modal from "./components/Modal";
import { useState } from "react";

function App() {
  let titArray = [
    "쯔쯔🐱 인생샷 모음집",
    "문성현 코로나ㅋ🦠",
    "날씨가 벌써 덥다🔥",
  ];
  let [title, setTitle] = useState(titArray);
  let [like, setLike] = useState(0);
  let [modal, setModal] = useState(false);

  function clickLike() {
    setLike(like + 1);
  }

  function changeTitle() {
    let newTitle = [...title];
    newTitle[0] = "제목 변경할꺼닷!";
    setTitle(newTitle);
  }

  function sortDesc() {
    let newTitle = [...title];
    setTitle(newTitle.sort());
  }

  function showModal() {
    modal == true ? setModal(false) : setModal(true);
  }
  return (
    <div className="App">
      <div className="black-nav">
        <h4>ujinlog</h4>
      </div>
      <button onClick={changeTitle}>change title</button>
      <button onClick={sortDesc}>글자순 정렬</button>
      {title.map((tit, idx) => {
        return (
          <div className="list" key={idx}>
            <h4 onClick={showModal}>
              {tit}
              <span onClick={clickLike}>🖤</span>
              {like}
            </h4>
            <p>6월 9일 발행</p>
          </div>
        );
      })}

      {modal == true ? <Modal /> : null}
    </div>
  );
}

export default App;
