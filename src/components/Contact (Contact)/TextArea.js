
function TextAreaField(props) {

    const { handleChange, label, name, value } = props;

    return (
        <div>
            <label className="text-slate-200 text-md" htmlFor={name}>{label}</label>
            <textarea onChange={handleChange} name={name} rows="4" className="w-full border-b-2 outline-none bg-gray-100 p-2" value={value}></textarea>
        </div>
    )
}

export default TextAreaField;