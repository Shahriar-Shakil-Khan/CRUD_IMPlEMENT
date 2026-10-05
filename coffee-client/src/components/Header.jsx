import logo from '../../public/images/more/logo1.png'
import banner from '../../public/images/more/15.jpg'

const Header = () => {
    return (
        <div className="relative">
            <img className='h-24 w-full object-cover' src={banner} alt="" />
            <div className="absolute inset-0 flex items-center justify-center">
                <div className='flex items-center gap-4  px-6 py-4 rounded shadow'>
                    <div>
                        <img className='w-18 h-18' src={logo} alt="" />
                    </div>
                    <h1 className='text-4xl font-bold'>Espresso Emporium</h1>
                </div>
            </div>
        </div>
    );
};

export default Header;