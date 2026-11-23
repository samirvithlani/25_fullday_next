import Link from "next/link";

export default function Navbar(){
    return (
        <nav className="flex gap-6 bg-gray-600 p-4 text-white">
            <Link href="/home">HOME</Link>
            <Link href="/about">ABOUT</Link>
            <Link href="/products">PRODUCTS</Link>
        </nav>
    )
}