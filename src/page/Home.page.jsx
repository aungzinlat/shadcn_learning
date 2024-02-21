import { CardComponents } from "@/components";
import { api } from "@/service/Api.service";
import React, { useEffect, useState } from "react";
import { LoadingPage } from ".";

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get("/recipes");
        if (response.data) {
          setLoading(false);
          setRecipes(response.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    })();
  }, []);

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <div className=" grid grid-cols-3 gap-10">
          {recipes &&
            recipes.map((recipe) => (
              <CardComponents key={recipe.id} recipe={recipe} />
            ))}
        </div>
      )}
    </>
  );
};

export default HomePage;
