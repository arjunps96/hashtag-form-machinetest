import "./FormInput.css";

const FormInput = (props) => {
  return (
    <div className="form-input">
      <input className="form-input" {...props} />
    </div>
  );
};
export default FormInput;
