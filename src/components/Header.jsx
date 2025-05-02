import { format } from 'date-fns';
import logo from '../assets/logo.svg';

const Header = () => {
  return (
    <div className="flex flex-col items-center text-center px-4 py-6 sm:py-8">
      <img
        src={logo}
        alt="Logo"
        className="h-auto"
      />
      <p className="mt-4 sm:mt-5 text-base sm:text-lg text-accent">
        Journalism Without Fear or Favour
      </p>
      <p className="font-medium text-lg sm:text-xl mt-2 text-accent">
        {format(new Date(), 'EEEE, MMMM dd, yyyy')}
      </p>
    </div>
  );
};

export default Header;
