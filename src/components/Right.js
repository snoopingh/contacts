import RightAdd from "./RightAdd";
import RightDetail from "./RightDetail";

const Right = ({ selectedContact, rightStatus, setRightStatus, onInsert }) => {
  const rightRender = (rightStatus) => {
    if (rightStatus === 0) {
      return <RightDetail selectedContact={selectedContact} />;
    } else if (rightStatus === 1) {
      return <RightAdd onInsert={onInsert} />;
    }
  };

  return <div className="col right">{rightRender(rightStatus)}</div>;
};

export default Right;
