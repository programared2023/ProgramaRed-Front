const FormSignUp = () => {
    return(
        <div>
        <h1>Create your user!</h1>
        <form>
            <div>
                <label>Username: </label>
                <input placeholder="Your username..." type="text" name="username"/>
            </div>

            <div>
                <label>Email: </label>
                <input placeholder="Your email..." type="text" name="email"/>
            </div>

            <div>
                <label>Password: </label>
                <input placeholder="Your password..." type="password" name="password"/>
            </div>

            <div>
                <button>Sign Up</button>
            </div>
        </form>
    </div>
    )
}

export default FormSignUp;