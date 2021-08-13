const RightDetail = ({ selectedContact, setRightStatus, onRemove }) => {
  return (
    <div className="details">
      {selectedContact ? (
        <>
          <ul className="info">
            <li>
              <div className="profile flex-column">
                <img
                  className="profile-img"
                  src={selectedContact.img}
                  alt="프로필이미지"
                />
                <div className="profile-name">{selectedContact.name}</div>
              </div>
            </li>
            <li>생일 : {selectedContact.birth}</li>
            <li>기타 : {selectedContact.etc}</li>
          </ul>
          <div className="details-buttons">
            <button
              className="remove-btn"
              onClick={() => onRemove(selectedContact.id)}
            >
              삭제
            </button>
            <button className="remove-btn" onClick={() => setRightStatus(2)}>
              수정
            </button>
          </div>
        </>
      ) : (
        "정보가 없습니다."
      )}
    </div>
  );
};

export default RightDetail;
