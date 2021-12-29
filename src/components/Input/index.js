import "./input.css";
 
 const Input = ({className, type, value, placeholder, onChange}) => {
    return (
        <div className="input">
            <label>
                <input className={className} type={type} value={value} placeholder={placeholder} onChange={onChange} />
            </label>
        </div>
    )
}

export default Input