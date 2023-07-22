import { useState } from "react";
const initialUserForm = {
    username: 'jo',
    password: '',
    email: ''
}
export const UserForm = () => {

    const [userForm, setUserForm] = useState(initialUserForm);
    const onInputChange = ({ target }) => {
        // console.log(target.name);
        const { name, value } = target;
        setUserForm({
            ...userForm,
            [name]: value,
        })

    }

    const { username, password, email } = userForm;

    return (
        <form>
            <input
                className="form-control my-3 w-75"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />
            <input
                className="form-control my-3 w-75"
                placeholder="Password"
                name="password"
                type="password"
                value={password}
                onChange={onInputChange}
            />
            <input
                className="form-control my-3 w-75"
                placeholder="Email"
                name="email"
                value={email}
                onChange={onInputChange}
            />
            <button
                className="btn btn-primary"
                type="submit"
            >Crear</button>
        </form>
    )
}