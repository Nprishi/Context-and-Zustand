import { useState } from "react"

const SignUpForm = () => {
    const [form, setForm] = useState({
        username: "",
        password: ""
    })

    const [errors, setError] = useState({})

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const validateForm = () => {
        let errors = {}

        if (form.username.length < 3) {
            errors={ ...errors, username: "Username must be at least 3 Character long" }
        }
        if (form.password.length < 8) {
            errors={ ...errors, password: "Password must be at least 8 character" }
        }
        return errors
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const errors = validateForm()
        setError(errors)
        if (Object.keys(errors).length > 0) {
            return
        }
        console.log(form)
    }

    return (
        <form noValidate onSubmit={handleSubmit}>
            <input type="text" name="username" placeholder="Enter User Name" onChange={handleChange} />
            <p style={{ color: "red" }}>{errors.username && <p> {errors.username}</p>}</p>
            <input type="text" name="password" placeholder="Enter Password" onChange={handleChange} />
            <p style={{ color: "red" }}>{errors.password && <p> {errors.password}</p>}</p>
            <input type="submit" name="Submit" value="Submit" onChange={handleSubmit} />
        </form>
    )

}

export default SignUpForm