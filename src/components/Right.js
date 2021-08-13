import RightAdd from "./RightAdd";
import RightDetail from "./RightDetail";
import RightModify from "./RightModify";

const Right = ({
  selectedContact,
  rightStatus,
  setRightStatus,
  onInsert,
  onRemove,
  onToggle,
}) => {
  const rightRender = (rightStatus) => {
    if (rightStatus === 0) {
      return (
        <RightDetail
          selectedContact={selectedContact}
          setRightStatus={setRightStatus}
          onRemove={onRemove}
        />
      );
    } else if (rightStatus === 1) {
      return <RightAdd onInsert={onInsert} />;
    } else if (rightStatus === 2) {
      return (
        <RightModify selectedContact={selectedContact} onToggle={onToggle} />
      );
    }
  };

  return <div className="col right">{rightRender(rightStatus)}</div>;
};

export default Right;
