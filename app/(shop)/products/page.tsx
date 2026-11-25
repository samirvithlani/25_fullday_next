import { products } from "@/lib/products";
import Link from "next/link";

export default async function ProductsPage({searchParams}:{searchParams:Promise<{category?:string}>}) {
  const {category} = await searchParams;
  const filtered = category? products.filter((p)=>p.category === category) : products
  
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold0">PRODUCT PAGE</h1>
      <div className="mt-4 flex gap-2 text-sm">
        <Link href="/products">ALL</Link>
        <Link href="/products?category=Laptop">LAPTOP</Link>
        <Link href="/products?category=Mobile">PHONES</Link>
        <Link href="/products?category=Watch">WATCHES</Link>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-4">
        {filtered.map((p) => (
          <Link href={`/products/${p.id}`} className="rounded-lg border p-4 hover:shadow-md">
            <h2 className="font-semibold">{p.name}</h2>
            <p className="text-gray-500">{p.price}</p>
            <p className="text-xs uppercase text-gray-400">{p.category}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
