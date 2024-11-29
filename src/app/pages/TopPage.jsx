import { useState } from "react";
import Button from "../components/Button";

export default function TopPage() {
  const [isAnimalModalOpen, setIsAnimalModalOpen] = useState(false);
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);

  const [newAnimal, setNewAnimal] = useState({
    name: "",
    image: null,
    category: "",
  });

  const [newCategory, setNewCategory] = useState({
    category: "",
  });

  const handleAnimalInputChange = (e) => {
    const { name, value } = e.target;
    setNewAnimal((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewAnimal((prev) => ({ ...prev, image: file }));
    }
  };

  const handleCategoryInputChange = (e) => {
    const { name, value } = e.target;
    setNewCategory((prev) => ({ ...prev, [name]: value }));
  };

  const handleAnimalSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted animal:", newAnimal);
    setIsAnimalModalOpen(false);
    setNewAnimal({ name: "", image: null, category: "" });
  };

  const handleCategorySubmit = (e) => {
    e.preventDefault();
    console.log("Submitted category:", newCategory);
    setIsCategoryModalOpen(false);
    setNewCategory({ category: "" });
  };

  return (
    <div className="min-h-20 bg-black text-white flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-4xl flex justify-between items-center">
        <div className="flex space-x-4">
          <Button variant="green">Land Animal</Button>
          <Button variant="red">Bird</Button>
          <Button variant="red">Fish</Button>
          <Button variant="red">Insect</Button>
        </div>

        <div className="flex space-x-4">
          <Button onClick={() => setIsAnimalModalOpen(true)}>Add Animal</Button>
          <Button onClick={() => setIsCategoryModalOpen(true)}>Add Category</Button>
        </div>
      </div>

      {isAnimalModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setIsAnimalModalOpen(false)}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl text-black font-bold mb-4">Add New Animal</h2>
            <form onSubmit={handleAnimalSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={newAnimal.name}
                  onChange={handleAnimalInputChange}
                  className="w-full px-3 py-2 border rounded-xl"
                  placeholder="Enter animal name"
                  required
                />
              </div>

              <div className="mb-4">
                <label className=" flex justify-end text-sm font-medium mb-1">Upload Image</label>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="w-full px-3 py-2 border rounded-xl"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Category</label>
                <input
                  type="text"
                  name="category"
                  value={newAnimal.category}
                  onChange={handleAnimalInputChange}
                  className="w-full px-3 py-2 border rounded-xl"
                  placeholder="Enter category"
                  required
                />
              </div>

              <div className="flex justify-center space-x-2">
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg w-full bg-black text-white"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isCategoryModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setIsCategoryModalOpen(false)}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl text-black font-bold mb-4">Add New Category</h2>
            <form onSubmit={handleCategorySubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Category Name</label>
                <input
                  type="text"
                  name="category"
                  value={newCategory.category}
                  onChange={handleCategoryInputChange}
                  className="w-full px-3 py-2 border rounded-xl"
                  placeholder="Enter category name"
                  required
                />
              </div>

              <div className="flex justify-center space-x-2">
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg w-full bg-black text-white"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
