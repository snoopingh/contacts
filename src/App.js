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
          />
        </div>
      </div>
    </div>
  );
};

export default App;
