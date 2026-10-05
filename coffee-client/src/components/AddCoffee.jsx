import Swal from 'sweetalert2';

const AddCoffee = () => {

    const handleAddCoffee = event =>{
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const newCoffee = Object.fromEntries(formData.entries());
        console.log(newCoffee);


        //send data or post data

        fetch('http://localhost:3000/coffees',{

                method: "POST",
                 headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newCoffee),
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                Swal.fire({
                position: "center",
                icon: "success",
                title: "Coffee Added Successfully",
                showConfirmButton: false,
                timer: 1500
                });
            }
        })

    }
    return (
        <div className='p-24 bg-[#bebcb5]'> 
                <div className='p-12 text-center space-y-4' style={{ color: '#331A15' }}>
                    <h1 className='text-4xl'>Add Coffee</h1>
                    <p className='text-xl'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                </div>

                <form onSubmit={handleAddCoffee}>
                
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        
                        <fieldset className="fieldset  border-base-300 rounded-box  border p-4" style={{ color: '#331A15' }}>
                            <label className="label text-xl">Name</label>
                            <input type="text" className="input w-full bg-[#bebcb5] border-2 " placeholder="Coffee Name" name='name' />
                        </fieldset>

                         <fieldset className="fieldset  border-base-300 rounded-box  border p-4" style={{ color: '#331A15' }}>
                            <label className="label text-xl">Quantity</label>
                            <input type="text" className="input w-full bg-[#bebcb5] border-2" placeholder="Coffee Quantity" name='quantity' />
                        </fieldset>


                         <fieldset className="fieldset  border-base-300 rounded-box  border p-4" style={{ color: '#331A15' }}>
                            <label className="label text-xl">Supplier</label>
                            <input type="text" className="input w-full bg-[#bebcb5] border-2" placeholder="Coffee Supplier" name='supplier' />
                        </fieldset>


                         <fieldset className="fieldset  border-base-300 rounded-box  border p-4" style={{ color: '#331A15' }}>
                            <label className="label text-xl">Taste</label>
                            <input type="text" className="input w-full bg-[#bebcb5] border-2" placeholder="Coffee Taste" name='taste' />
                        </fieldset>


                         <fieldset className="fieldset  border-base-300 rounded-box  border p-4" style={{ color: '#331A15' }}>
                            <label className="label text-xl">Price</label>
                            <input type="text" className="input w-full bg-[#bebcb5] border-2" placeholder="Coffee Price" name='price' />
                        </fieldset>


                         <fieldset className="fieldset  border-base-300 rounded-box  border p-4" style={{ color: '#331A15' }}>
                            <label className="label text-xl">Details</label>
                            <input type="text" className="input w-full bg-[#bebcb5] border-2" placeholder="Coffee Details" name='details' />
                        </fieldset>
                        

                    </div>


                     <fieldset className="fieldset  border-base-300 rounded-box  border p-4 my-6" style={{ color: '#331A15' }}>
                            <label className="label text-xl">Photo</label>
                            <input type="text" className="input w-full bg-[#bebcb5] border-2" placeholder="Coffee Photo URL" name='photo' />
                    </fieldset>

                    <input type="submit" value="Add Coffee" className="btn btn-primary w-full text-xl" />

                </form>

        </div>
    );
};

export default AddCoffee;