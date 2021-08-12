import useInputs from "../hooks/useInputs";

const RightAdd = ({ onInsert }) => {
  const [state, onChange] = useInputs({
    name: "",
    birth: "",
    etc: "",
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
      <button className="add-btn" onClick={() => onInsert(state)}>
        추가하기
      </button>
    </div>
  );
};

export default RightAdd;
