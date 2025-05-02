import { format } from 'date-fns';
import logo from '../assets/logo.svg'

const Header = () => {
    
    return (
        <div className='flex justify-center flex-col items-center'>
            <img src={logo} alt="" />
            <p className='mt-5  text-lg text-accent'>Journalism Without Fear or Favour</p>
            <p className='font-medium text-xl mt-2.5 text-accent'>{format(new Date(), "EEEE, MMMM, dd, yyyy")}</p>
        </div>
    );
};

export default Header;