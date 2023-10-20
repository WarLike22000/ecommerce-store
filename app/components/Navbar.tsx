import Link from "next/link";
import Container from "./Container";
import MainNav from "./MainNav";
import getCategories from "@/app/actions/getCategories";
import NavbarActions from "./NavbarActions";

const Navbar = async () => {

    const categories = await getCategories();
    
    return ( 
        <nav className="border-b">
            <Container>
                <div className="relative px-4 sm:px-6 lg:px-8 flex items-center h-16">
                    <Link href="/" className="ml-4 lg:ml-0 flex gap-x-2">
                        <p className="font-bold text-xl">STORE</p>
                    </Link>
                    <MainNav data={categories} />
                    <NavbarActions />
                </div>
            </Container>
        </nav>
     );
}
 
export default Navbar;