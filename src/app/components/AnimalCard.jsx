export default function AnimalCard({ name, image }) {
  return (
    <div className="bg-black text-white border border-gray-900 rounded-lg p-4 text-center w-64 hover:bg-gray-800">
      <img src={image} alt={name} className="w-full h-48 object-cover rounded-md mb-4" />
      <h3 className="text-lg font-semibold mb-2">{name}</h3>
    </div>
  );
}
