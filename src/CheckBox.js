//Checkbox Component
const CheckBox = ({ onParamChange }) => {
  return (
    <label className="checkbox">
      <input type="checkbox" defaultChecked={true} onChange={onParamChange} />
      Show Second Hand
    </label>
  );
};

export default CheckBox;
