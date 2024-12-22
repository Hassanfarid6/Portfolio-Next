import Link from "next/link"
import NavLink from "./NavLink";

const MenuOverlay = ({ Links }) => {
    return(
        <ul className="flex flex-col py-4 items-center">
            
            {
            Links.map((link, index) =>(
            <li key={index}>

            <NavLink href={link.path} title={link.title}/>
            </li>
            ))}
        </ul>
        //     <Link className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">
        //    </Link>
    )
}

export default MenuOverlay;