import findById from "@/lib/products"

export default async function ProductDetailPage({params}:{params:Promise<{id:string}>}){
    const {id} = await params
    const product = findById(id)
    return<main>
        <h1>Product Detail {id}</h1>
        {product?.name}
    </main>
}