import { Navigate, useParams } from "react-router-dom";
import recipesData from "./../assets/recipes.json";

const ItemDetailsPage = () => {
  const { recipeId } = useParams();
  const recipeTest = recipesData.find((recipe) => recipe.id === recipeId);

  if (!recipeTest) return <Navigate to="/" />

  return (
    <>
      <div>

      </div >
    </>
  );
}

export default ItemDetailsPage;
