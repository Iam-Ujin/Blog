import "./App.css";
import Modal from "./components/Modal";
import { useState } from "react";
import React from "react";

function App() {
  let titArray = [
    "쯔쯔🐱 인생샷 모음집",
    "문성현 코로나ㅋ🦠",
    "날씨가 벌써 덥다🔥",
  ];
  let likeArray = [0, 0, 0];

  let [title, setTitle] = useState(titArray);
  let [like, setLike] = useState(likeArray);
  let [modal, setModal] = useState(false);
  let [titIndex, setTitIndex] = useState(0);
  let [inputValue, setInputValue] = useState("");

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
            <h4
              onClick={() => {
                showModal();
                setTitIndex(idx);
              }}
            >
              {tit}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  let newLike = [...like];
                  newLike[idx] += 1;
                  setLike(newLike);
                }}
              >
                좋아요🖤
              </span>
              {like[idx]}
            </h4>
            <p>6월 9일 발행</p>
            <button
              onClick={() => {
                let copy = [...title];
                copy.splice(idx, 1);
                setTitle(copy);
                let copy2 = [...like];
                copy2.splice(idx, 1);
                setLike(copy2);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}

      <input
        type="text"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          if (inputValue === "") {
            alert("내용을 입력해주새요!👷🏻‍♀️");
          } else {
            let copy = [...title];
            copy.unshift(inputValue);
            setTitle(copy);
            let copy2 = [...like];
            copy2.unshift(0);
            setLike(copy2);
          }
          return setInputValue("");
        }}
      >
        입력
      </button>

      <Profile />

      {modal == true ? (
        <Modal title={title} titIndex={titIndex} changeTitle={changeTitle} />
      ) : null}
    </div>
  );
}

class Profile extends React.Component {
  constructor() {
    super();
    this.state = { name: "이름", name2: "ujin", age: 26 };
  }

  // 이벤트핸들러에 bind 제거하고 싶으면 함수만들 때 화살표함수로 작성 함수 = () => {}
  changeName() {
    this.setState({ name: "별명", name2: "전어" });
  }

  render() {
    return (
      <div>
        <h3>프로필</h3>
        <p>
          내 {this.state.name}은 {this.state.name2} , {this.state.age}인디.
        </p>
        <button onClick={this.changeName.bind(this)}>별명 버튼</button>
      </div>
    );
  }
}

export default App;
