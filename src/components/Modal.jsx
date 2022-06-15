function Modal(props) {
  // console.log(props);
  return (
    <div className="modal">
      <h4>{props.title[props.titIndex]}</h4>
      <p>날짜</p>
      <p>상세 내용</p>
      <button>글 수정</button>
    </div>
  );
}

export default Modal;
