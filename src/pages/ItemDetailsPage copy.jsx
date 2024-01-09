import { Link, Navigate, useParams } from "react-router-dom";
import recipesData from "./../assets/recipes.json";

const ItemDetailsPage = () => {
  const { recipeId } = useParams();
  const recipeTest = recipesData.find((recipe) => recipe.id === recipeId);

  if (!recipeTest) return <Navigate to="/" />

  return (
    <>
      <div>
        <h1>Item Details</h1>
        <div>
          <img
            src={recipeTest.image} // or add a placeholder
            alt="recipe-photo"
            className=""
          />
          <h1>{recipeTest.name}</h1>
          <div>
            <li>Test Ingredient</li>
            <li>Test Ingredient</li>
            <li>Test Ingredient</li>
            <li>Test Ingredient</li>
            <li>Test Ingredient</li>
            <li>Test Ingredient</li>
            <li>Test Ingredient</li>
            <li>Test Ingredient</li>
            <li>Test Ingredient</li>
            <li>Test Ingredient</li>
          </div>
        </div>
      </div >
      <Link to="/">
        <button className="text-white px-4 py-2 rounded bg-red-500 hover:bg-green-600 transition duration-300 ease-in-out">
          Back
        </button>
      </Link>
    </>
  );
}

export default ItemDetailsPage;
