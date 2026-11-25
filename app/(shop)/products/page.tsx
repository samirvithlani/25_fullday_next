import { products } from "@/lib/products";
import Link from "next/link";

export default function ProductsPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold0">PRODUCT PAGE</h1>
      <div className="mt-6 grid grid-cols-1 gap-4">
        {products.map((p) => (
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
