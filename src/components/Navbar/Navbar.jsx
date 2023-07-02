import logo from '../../assets/images/logo.png'
import { Link } from 'react-scroll';
// import './navbar.css'

const Navbar = () => {
    const navOptions = <>

{/* TODO :Add Active class  */}
        <li><Link to="home">HOME</Link></li>
        <li><Link to="about">ABOUT</Link></li>
        <li><Link to="skills">SKILLS</Link></li>
        <li><Link to="projects" >PROJECTS</Link></li>
        <li><Link to="contact">CONTACT</Link></li>
    </>
    return (

        <div className='sticky top-0 z-50 bg-black bg-opacity-60 text-yellow-50'>
            <div className="navbar border-b-[1px] border-b-gray-600 font-bold max-w-screen-xl mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown ">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 bg-black bg-opacity-40 text-white">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl"><strong><em>Rabeya Akter</em></strong></a>

                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1 ">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* <a className="btn">Button</a> */}
                    <img className="rounded-full h-20 w-20 " src={logo} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;