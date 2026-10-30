export default function Formulario({ label, type = "text", id, name, value, onChange, placeholder, required = false }) {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input 
        type={type} 
        id={id} 
        name={name} 
        value={value} 
        onChange={onChange} 
        placeholder={placeholder}
        required={required} 
      />
    </div>
  );
}