import logo from "../assets/kevinRushLogo.png"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
export const Navbar = () => {
  return (
    <nav className="mb-20 flex items—center justify—between py—6">
    <div className="flex flex-shrink-0 items-center mt-10">
        <img className="mx-2 w-10" src={logo} alt="logo" />

    </div>
    <div className="ml-auto mt-10 flex items-center justify-end gap-4 text-2xl">
        <FaInstagram />
        <FaLinkedin />
        <FaSquareXTwitter />
        <FaGithub />
    </div>
   </nav>
  )
}
export default Navbar;

