// import { useParams } from 'react-router-dom';
// import { products } from '../data/products';

// function ProductDetail() {
//   const { id } = useParams();
//   const product = products.find((p) => p.id === parseInt(id));

//   if (!product) return <p className="p-6">Product not found</p>;

//   return (
//     <div className="p-6 max-w-3xl mx-auto">
//       <img src={product.imageUrl} alt={product.name} className="w-full h-80 object-cover rounded mb-4" />
//       <h2 className="text-2xl font-bold">{product.name}</h2>
//       <p className="text-gray-700 mt-2">{product.description}</p>
//       <p className="font-semibold mt-4 text-lg">₹{product.price}</p>
//     </div>
//   );
// }

// export default ProductDetail;
