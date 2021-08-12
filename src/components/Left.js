import { useState } from "react";
import LeftItem from "./LeftItem";

const filterContact = (contacts, keyword) => {
  return contacts.filter((contact) => {
    return contact.name.includes(keyword);
  });
};

const Left = ({ contacts, setSelectedContact, setRightStatus }) => {
  const [keyword, setKeyword] = useState("");

  const handleChangeKeyword = (e) => {
    setKeyword(e.target.value);
  };
  return (
    <div className="col left">
      <div className="search-box">
        <input
          type="text"
          className="inp-sch"
          placeholder="검색어를 입력하세요."
          onChange={handleChangeKeyword}
        />
      </div>
      <div className="contact-list">
        <button className="addTap-button" onClick={() => setRightStatus(1)}>
          +
        </button>
        <ul>
          {filterContact(contacts, keyword).map((contact, index) => (
            <LeftItem
              key={contact.id}
              contact={contact}
              setSelectedContact={setSelectedContact}
              setRightStatus={setRightStatus}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Left;
