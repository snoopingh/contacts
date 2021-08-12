import React from "react";

const LeftItem = ({ contact, setSelectedContact, setRightStatus }) => {
  const handleSelect = () => {
    setSelectedContact(contact);
    setRightStatus(0);
  };

  console.log("render");

  return (
    <li>
      <button type="button" onClick={handleSelect}>
        <div className="profile flex-row">
          <img className="profile-img" src={contact.img} alt="프로필이미지" />
          <div className="profile-name">{contact.name}</div>
        </div>
      </button>
    </li>
  );
};

export default React.memo(LeftItem);
