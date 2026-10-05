
import homeCoffee from '../../public/images/more/3.png';
import icon1 from '../../public/images/icons/1.png';
import icon2 from '../../public/images/icons/2.png';
import icon3 from '../../public/images/icons/3.png';
import icon4 from '../../public/images/icons/4.png';

import cups1 from '../../public/images/cups/Rectangle 9.png';
import cups2 from '../../public/images/cups/Rectangle 10.png';
import cups3 from '../../public/images/cups/Rectangle 11.png';
import cups4 from '../../public/images/cups/Rectangle 12.png';
import cups5 from '../../public/images/cups/Rectangle 13.png';
import cups6 from '../../public/images/cups/Rectangle 14.png';
import cups7 from '../../public/images/cups/Rectangle 15.png';
import cups8 from '../../public/images/cups/Rectangle 16.png';
import { Link, useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
import { useState } from 'react';

const Home = () => {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

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
        fetch(`http://localhost:3000/coffees/${_id}`, {
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
               setCoffees(coffees.filter(coffee => coffee._id !== _id));
            }
          });
      }
    });
  };

  return (
    <div>
      {/* Banner */}
      <div className="relative">
        <img className="h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] w-full object-cover" src={homeCoffee} alt="Coffee" />
        <div className="absolute inset-0  from-black via-transparent to-transparent flex flex-col justify-center items-center text-center px-6 sm:px-8 md:px-10 py-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-4">
            Would you like a Cup of Delicious Coffee?
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white opacity-80 mb-6">
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.
          </p>
          <button className="bg-orange-500 text-white text-lg sm:text-xl px-6 sm:px-8 py-3 rounded-md hover:bg-orange-600 transition duration-300">
            Learn More
          </button>
        </div>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-2 py-8 mb-8">
        <div className='bg-[#ECEAE3] p-8 flex flex-col items-center text-center rounded'>
          <img src={icon1} alt="" />
          <h3 className='text-xl font-semibold mt-4 mb-2' style={{ color: '#331A15' }}>Awesome Aroma</h3>
          <h1 className='text-base' style={{ color: '#331A15' }}>
            You will definitely be a fan of the design & aroma of your coffee
          </h1>
        </div>
        <div className='bg-[#ECEAE3] p-8 flex flex-col items-center text-center rounded'>
          <img src={icon2} alt="" />
          <h3 className='text-xl font-semibold mt-4 mb-2' style={{ color: '#331A15' }}>High Quality</h3>
          <h1 className='text-base' style={{ color: '#331A15' }}>
            We served the coffee to you maintaining the best quality
          </h1>
        </div>
        <div className='bg-[#ECEAE3] p-8 flex flex-col items-center text-center rounded'>
          <img src={icon3} alt="" />
          <h3 className='text-xl font-semibold mt-4 mb-2' style={{ color: '#331A15' }}>Pure Grades</h3>
          <h1 className='text-base' style={{ color: '#331A15' }}>
            The coffee is made of the green coffee beans which you will love
          </h1>
        </div>
        <div className='bg-[#ECEAE3] p-8 flex flex-col items-center text-center rounded'>
          <img src={icon4} alt="" />
          <h3 className='text-xl font-semibold mt-4 mb-2' style={{ color: '#331A15' }}>Proper Roasting</h3>
          <h1 className='text-base' style={{ color: '#331A15' }}>
            Your coffee is brewed by first roasting the green coffee beans
          </h1>
        </div>
      </div>

      {/* Popular Products */}
      <div>
        <h1 className='text-4xl font-semibold mb-8 text-center text-white'>Our Popular Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {(coffees ?? []).map(coffee => (
            <div key={coffee._id} className="flex items-center space-x-4 p-6 rounded-lg shadow-lg">
              <div className="w-24 h-24">
                <img src={coffee.photo} alt={coffee.name} className="object-cover w-full h-full rounded-lg" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold">{coffee.name}</h2>
                <p className="text-sm text-gray-200">Supplier: {coffee.supplier}</p>
                <p className="font-bold text-lg text-gray-200">Price: {coffee.price} Taka</p>
              </div>
              <div className="flex flex-col space-y-2">
                <Link to={`/coffee/${coffee._id}`}><button className="btn btn-outline btn-primary">Details</button></Link>
                <Link to={`/update-coffee/${coffee._id}`}><button className="btn btn-outline btn-secondary">Update</button></Link>
                <button className="btn btn-outline btn-error" onClick={() => handleDelete(coffee._id)}>Delete</button>
              </div>
            </div>
          ))}
          {(!coffees || coffees.length === 0) && (
            <p className="text-center text-gray-500 col-span-full">No coffee found.</p>
          )}
        </div>
      </div>

      {/* Instagram Section */}
      <div className='bg-[#ECEAE3] p-16'>
        <h1 className='text-4xl font-semibold mb-8 text-center' style={{ color: '#331A15' }}>Follow on Instagram</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <img src={cups1} alt="" className="w-full h-auto" />
          <img src={cups2} alt="" className="w-full h-auto" />
          <img src={cups3} alt="" className="w-full h-auto" />
          <img src={cups4} alt="" className="w-full h-auto" />
          <img src={cups5} alt="" className="w-full h-auto" />
          <img src={cups6} alt="" className="w-full h-auto" />
          <img src={cups7} alt="" className="w-full h-auto" />
          <img src={cups8} alt="" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Home;