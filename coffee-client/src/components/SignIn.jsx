import { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';
import Swal from 'sweetalert2';

const SignIn = () => {
    const { signInUser } = use(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
            .then(() => {
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Sign In Failed',
                    text: error.code === 'auth/invalid-credential'
                        ? 'Email or password is incorrect'
                        : error.message,
                });
            });
    };

    return (
        <div>
            <legend className="fieldset-legend text-2xl flex justify-center p-6">Sign In</legend>
            <form onSubmit={handleSignIn}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <label className="label text-xl">Email</label>
                    <input type="email" className="input w-full" placeholder="Email" name="email" required />

                    <label className="label text-xl">Password</label>
                    <input type="password" className="input w-full" placeholder="Password" name="password" required />

                    <button className="btn btn-neutral mt-4 text-xl">Sign In</button>

                    <p className="mt-3 text-center">
                        New here? <Link to="/signup" className="link link-primary">Sign Up</Link>
                    </p>
                </fieldset>
            </form>
        </div>
    );
};

export default SignIn;