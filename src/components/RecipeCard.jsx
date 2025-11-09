import './RecipeCard.css'

function RecipeCard({ recipe, onClick }) {
  return (
    <div className="recipe-card" onClick={onClick}>
      <div className="recipe-card-image">
        <img src={recipe.image} alt={recipe.name} className="recipe-image" />
      </div>
      <div className="recipe-card-content">
        <div className="recipe-card-header">
          <h3 className="recipe-card-title">{recipe.name}</h3>
          <div className="recipe-badges">
            <span className="recipe-cuisine-badge">{recipe.cuisine}</span>
            <span className="recipe-category-badge">{recipe.category}</span>
          </div>
        </div>
        <p className="recipe-card-description">{recipe.description}</p>
        <div className="recipe-card-meta">
          <span className="meta-item">
            <span className="meta-icon">⏱️</span>
            {recipe.time}
          </span>
          <span className="meta-item">
            <span className="meta-icon">👥</span>
            {recipe.servings} servings
          </span>
          <span className="meta-item">
            <span className="meta-icon">📊</span>
            {recipe.difficulty}
          </span>
        </div>
      </div>
      <div className="recipe-card-overlay">
        <button className="view-recipe-btn">View Recipe →</button>
      </div>
    </div>
  )
}

export default RecipeCard


