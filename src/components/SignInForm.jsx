import { useForm } from "react-hook-form";

export default function SignInForm() {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div>
            <h1>Sign In</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    placeholder="Username"
                    {...register("username")}
                />

                <input
                    type="password"
                    placeholder="Password"
                    {...register("password")}
                />

                <button type="submit">Sign In</button>
            </form>
        </div>
    );
}