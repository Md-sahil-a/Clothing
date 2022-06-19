

const Form = ({label, ...otherProps})=>{
    return (
        <div>
        <label>{label}</label>
        <input {...otherProps} />
        </div>
    )
}


export default Form;