import "./css/App.css";
import Header from "./components/Header";
import Left from "./components/Left";
import Right from "./components/Right";
import { useCallback, useRef, useState } from "react";

const initialContacts = [
  {
    id: 1,
    img: "http://placeimg.com/100/100/any",
    name: "kibum1",
    birth: "1991-10-11",
    etc: "기타1",
  },
  {
    id: 2,
    img: "http://placeimg.com/100/100/any",
    name: "kibum2",
    birth: "1992-10-12",
    etc: "기타2",
  },
  {
    id: 3,
    img: "http://placeimg.com/100/100/any",
    name: "kibum3",
    birth: "1993-10-13",
    etc: "기타3",
  },
  {
    id: 4,
    img: "http://placeimg.com/100/100/any",
    name: "kibum4",
    birth: "1994-10-14",
    etc: "기타4",
  },
  {
    id: 5,
    img: "http://placeimg.com/100/100/any",
    name: "kibum5",
    birth: "1995-10-15",
    etc: "기타5",
  },
];

const App = () => {
  const nextId = useRef(6);
  const [selectedContact, setSelectedContact] = useState(null);
  const [rightStatus, setRightStatus] = useState(0);
  const [contacts, setContacts] = useState(initialContacts);

  const onInsert = useCallback(
    (newContact) => {
      if (!newContact.name) {
        alert("이름은 필수 입력사항 입니다.");
        return;
      }

      newContact = {
        id: nextId.current++,
        img: "http://placeimg.com/100/100/any",
        ...newContact,
      };

      setContacts(contacts.concat(newContact));
      alert("추가하였습니다.");
      setRightStatus(0);
    },
    [contacts]
  );

  const onRemove = useCallback(
    (id) => {
      const newContacts = contacts.filter((contact) => contact.id !== id);
      setContacts(newContacts);
      alert("삭제되었습니다.");
      setRightStatus(0);
      setSelectedContact(null);
    },
    [contacts]
  );

  const onToggle = useCallback(
    (modifyContact) => {
      if (!modifyContact.name) {
        alert("이름은 필수 입력사항 입니다.");
        return;
      }

      const newContact = {
        id: selectedContact.id,
        img: selectedContact.img,
        name: modifyContact.name,
        birth: modifyContact.birth,
        etc: modifyContact.etc,
      };

      const newContacts = contacts.map((contact) =>
        contact.id === newContact.id
          ? {
              ...contact,
              name: newContact.name,
              birth: newContact.birth,
              etc: newContact.etc,
            }
          : contact
      );

      setSelectedContact(newContact);
      setContacts(newContacts);
      alert("수정되었습니다.");
      setRightStatus(0);
    },
    [selectedContact, contacts]
  );

  return (
    <div id="__next">
      <div className="container">
        <Header />
        <div className="contact-wrap">
          <Left
            contacts={contacts}
            setSelectedContact={setSelectedContact}
            setRightStatus={setRightStatus}
          />
          <Right
            selectedContact={selectedContact}
            rightStatus={rightStatus}
            setRightStatus={setRightStatus}
            onInsert={onInsert}
            onRemove={onRemove}
            onToggle={onToggle}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
