import { use } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';
import Swal from 'sweetalert2';

const SignUp = () => {
    const { createUser } = use(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const { email, password, ...userProfile } = Object.fromEntries(formData.entries());

        createUser(email, password)
            .then(() => {
                fetch('http://localhost:3000/users', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, ...userProfile }),
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'Account Created Successfully',
                                showConfirmButton: false,
                                timer: 1500,
                            });
                        }
                    });
                form.reset();
                navigate('/');
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Sign Up Failed',
                    text: error.code === 'auth/weak-password'
                        ? 'Password must be at least 6 characters'
                        : error.code === 'auth/email-already-in-use'
                        ? 'This email is already registered'
                        : error.message,
                });
            });
    };

    return (
        <div>
            <legend className="fieldset-legend text-2xl flex justify-center p-6">Sign Up</legend>
            <form onSubmit={handleSubmit}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <label className="label text-xl">Name</label>
                    <input type="text" className="input w-full" placeholder="Name" name="name" />

                    <label className="label text-xl">Address</label>
                    <input type="text" className="input w-full" placeholder="Address" name="address" />

                    <label className="label text-xl">Phone</label>
                    <input type="tel" className="input w-full" placeholder="Phone" name="phone" />

                    <label className="label text-xl">Photo</label>
                    <input type="text" className="input w-full" placeholder="Photo URL" name="photo" />

                    <label className="label text-xl">Email</label>
                    <input type="email" className="input w-full" placeholder="Email" name="email" required />

                    <label className="label text-xl">Password</label>
                    <input type="password" className="input w-full" placeholder="Password" name="password" minLength={6} required />

                    <button className="btn btn-neutral mt-4 text-xl">Sign Up</button>
                </fieldset>
            </form>
        </div>
    );
};

export default SignUp;