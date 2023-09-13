import {headerLogo} from '../assets/images';
import {hamburger} from '../assets/icons';
import { navLinks } from '../constants';
const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href="/">
          <img src={headerLogo} alt="Logo"  width={130} height={29}/>
        </a>
     
        {/* List of Links */} 

        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {
            navLinks.map((linkItem)=>(
              <li key={linkItem.label}>
                <a href={linkItem.href}
                  className='font-montserrat leading-normal text-lg text-slate-gray'
                >
                  {linkItem.label}
                </a>
              </li>
            ))
          }
        </ul>
        {/* Hamburger */}
        <div className='hidden max-lg:block'>
          <img 
          src={hamburger} 
          alt="Hamburger Menu"  
          width={25}
          height={25}
          />
        </div>
      </nav>
    </header>
  )
}

export default Nav