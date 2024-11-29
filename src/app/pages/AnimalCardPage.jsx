import { Fragment, useEffect, useState } from "react";
import TopPage from "./TopPage";
import { fetchAllAnimals } from "../api_req/animal";
import AnimalCard from "../components/AnimalCard";

export default function AnimalCardPage({ id, name, category }) {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAllAnimals({ id, name, category });
        setAnimals(data);
      } catch (error) {
        console.error("Error fetching animals:", error);
      }
    };

    fetchData();
  }, [id, name, category]); 

  return (
    
    <div className="bg-black min-h-screen">
      <TopPage />
      <div className="flex flex-wrap justify-center gap-6 p-6 bg-black min-h-content">
        {animals.map((animal) => (
          <AnimalCard
            key={animal._id}
            name={animal.name}
            image={animal.image}
            category={animal.category}
          />
        ))}
        
      </div>
    </div>
  );
}
