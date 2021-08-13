import useInputs from "../hooks/useInputs";

const RightModify = ({ selectedContact, onToggle }) => {
  const [state, onChange] = useInputs({
    name: selectedContact.name,
    birth: selectedContact.birth,
    etc: selectedContact.etc,
  });

  const { name, birth, etc } = state;

  return (
    <div className="add-container">
      <div className="add-inputs">
        <div>
          <span>name</span>
          <input name="name" value={name} onChange={onChange} />
        </div>
        <div>
          <span>birth</span>
          <input name="birth" value={birth} onChange={onChange} />
        </div>
        <div>
          <span>etc</span>
          <input name="etc" value={etc} onChange={onChange} />
        </div>
      </div>
      <button className="add-btn" onClick={() => onToggle(state)}>
        수정하기
      </button>
    </div>
  );
};

export default RightModify;
