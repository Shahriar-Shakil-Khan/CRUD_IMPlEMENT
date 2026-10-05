
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);


    const handleDelete = (_id) => {
       
    
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`http://localhost:3000/users/${_id}`, {
              method: "DELETE"
            })
              .then(res => res.json())
              .then(data => {
                if (data.deletedCount) {
                  Swal.fire({
                    title: "Deleted!",
                    text: "Coffee has been deleted.",
                    icon: "success"
                  });
                   setUsers(users.filter(user => user._id !== _id));
                }
              });
          }
        });
      };

    return (
        <div className="overflow-x-auto p-6">
            <h1 className="text-5xl font-bold mb-6 text-center">All Users</h1>
            <table className="table w-full table-zebra">
                <thead>
                    <tr>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.length > 0 ? users.map(user => (
                        <tr key={user._id}>
                            <td>
                                <div className="avatar">
                                    <div className="w-12 rounded-full">
                                        <img src={user.photo} alt={user.name} />
                                    </div>
                                </div>
                            </td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.address}</td>
                            <td>{user.phone}</td>
                            <td>
                                <button className="btn btn-neutral">Edit</button>
                                <button className="btn btn-primary">Update</button>
                                 <button onClick={() => handleDelete(user._id)} className="btn btn-warning">Delete</button>
                            </td>
                            

                        </tr>
                    )) : (
                        <tr>
                            <td colSpan={5} className="text-center text-gray-400">No users found.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Users;