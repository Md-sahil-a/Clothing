

const EmailLSignup = ()=>{
    return (
        <form>
        <label>Name</label>
        <input type="name" required ></input>
        <label>Email</label>
        <input type="email"  required></input>
        <label>PassWord</label>
        <input type="password" required ></input>
        <button type="onSubmit">Submit</button>
        </form>
    )
}

export default EmailLSignup