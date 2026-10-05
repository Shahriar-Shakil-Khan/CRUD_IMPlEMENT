import { useLoaderData } from 'react-router'; // Correct import

const CoffeeDetails = () => {
  const {name, supplier, price, photo} = useLoaderData(); // Fetching the data using useLoaderData

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 sm:space-x-8">
        {/* Left Column: Coffee Details */}
        <div className="sm:w-1/2 w-full text-center sm:text-left">
          <h1 className="text-2xl sm:text-4xl font-bold">{name}</h1>
          <p className="text-lg sm:text-xl text-gray-200">Supplier: {supplier}</p>
          <p className="text-lg sm:text-xl text-gray-200">Price: {price} Taka</p>
        </div>

        {/* Right Column: Image */}
        <div className="sm:w-1/2 w-full flex justify-center">
          <img
            src={photo}
            alt={name}
            className="coffee-image"
          />
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
