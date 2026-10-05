import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const {_id, name, quantity, supplier, taste, price, details, photo} = useLoaderData();
    const handleUpdateCoffee = event =>{
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const updatedCoffee = Object.fromEntries(formData.entries());
        console.log(updatedCoffee);

        fetch(`http://localhost:3000/coffees/${_id}`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
                        body: JSON.stringify(updatedCoffee),
                })
                .then(res=>res.json())
                .then(data=>{
                    if(data.modifiedCount){
                        Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Coffee Updated Successfully",
                        showConfirmButton: false,
                        timer: 1500
                        });
                    }
                })
    }
    return (
        <div className='p-24 bg-[#bebcb5]'> 
                <div className='p-12 text-center space-y-4' style={{ color: '#331A15' }}>
                    <h1 className='text-4xl'>Update Coffee</h1>
                  
                </div>

                <form onSubmit={handleUpdateCoffee}>
                
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        
                        <fieldset className="fieldset  border-base-300 rounded-box  border p-4" style={{ color: '#331A15' }}>
                            <label className="label text-xl">Name</label>
                            <input type="text" className="input w-full bg-[#bebcb5] border-2 " placeholder="Coffee Name" name='name' defaultValue={name} />
                        </fieldset>

                         <fieldset className="fieldset  border-base-300 rounded-box  border p-4" style={{ color: '#331A15' }}>
                            <label className="label text-xl">Quantity</label>
                            <input type="text" className="input w-full bg-[#bebcb5] border-2" placeholder="Coffee Quantity" name='quantity' defaultValue={quantity} />
                        </fieldset>


                         <fieldset className="fieldset  border-base-300 rounded-box  border p-4" style={{ color: '#331A15' }}>
                            <label className="label text-xl">Supplier</label>
                            <input type="text" className="input w-full bg-[#bebcb5] border-2" placeholder="Coffee Supplier" name='supplier' defaultValue={supplier} />
                        </fieldset>


                         <fieldset className="fieldset  border-base-300 rounded-box  border p-4" style={{ color: '#331A15' }}>
                            <label className="label text-xl">Taste</label>
                            <input type="text" className="input w-full bg-[#bebcb5] border-2" placeholder="Coffee Taste" name='taste' defaultValue={taste} />
                        </fieldset>


                         <fieldset className="fieldset  border-base-300 rounded-box  border p-4" style={{ color: '#331A15' }}>
                            <label className="label text-xl">Price</label>
                            <input type="text" className="input w-full bg-[#bebcb5] border-2" placeholder="Coffee Price" name='price' defaultValue={price} />
                        </fieldset>


                         <fieldset className="fieldset  border-base-300 rounded-box  border p-4" style={{ color: '#331A15' }}>
                            <label className="label text-xl">Details</label>
                            <input type="text" className="input w-full bg-[#bebcb5] border-2" placeholder="Coffee Details" name='details' defaultValue={details} />
                        </fieldset>
                        

                    </div>


                     <fieldset className="fieldset  border-base-300 rounded-box  border p-4 my-6" style={{ color: '#331A15' }}>
                            <label className="label text-xl">Photo</label>
                            <input type="text" className="input w-full bg-[#bebcb5] border-2" placeholder="Coffee Photo URL" name='photo' defaultValue={photo} />
                    </fieldset>

                    <input type="submit" value="Update Coffee" className="btn btn-primary w-full text-xl" />

                </form>

        </div>
    );
};

export default UpdateCoffee;