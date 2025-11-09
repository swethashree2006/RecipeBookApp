import './RecipeDetail.css'

function RecipeDetail({ recipe, onBack }) {
  return (
    <div className="recipe-detail">
      <button className="back-button" onClick={onBack}>
        ← Back to Recipes
      </button>

      <div className="recipe-detail-header">
        <div className="recipe-detail-image">
          <img src={recipe.image} alt={recipe.name} className="recipe-detail-img" />
        </div>
        <div className="recipe-detail-info">
          <div className="recipe-detail-title-section">
            <h1 className="recipe-detail-title">{recipe.name}</h1>
            <div className="recipe-detail-badges">
              <span className="recipe-detail-cuisine">{recipe.cuisine}</span>
              <span className="recipe-detail-category">{recipe.category}</span>
            </div>
          </div>
          <p className="recipe-detail-description">{recipe.description}</p>
          <div className="recipe-detail-meta">
            <div className="meta-card">
              <span className="meta-card-icon">⏱️</span>
              <div>
                <div className="meta-card-label">Time</div>
                <div className="meta-card-value">{recipe.time}</div>
              </div>
            </div>
            <div className="meta-card">
              <span className="meta-card-icon">👥</span>
              <div>
                <div className="meta-card-label">Servings</div>
                <div className="meta-card-value">{recipe.servings}</div>
              </div>
            </div>
            <div className="meta-card">
              <span className="meta-card-icon">📊</span>
              <div>
                <div className="meta-card-label">Difficulty</div>
                <div className="meta-card-value">{recipe.difficulty}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="recipe-detail-content">
        <div className="ingredients-section">
          <h2 className="section-title">
            <span className="section-icon">🥘</span>
            Ingredients
          </h2>
          <ul className="ingredients-list">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="ingredient-item">
                <span className="ingredient-bullet">•</span>
                {ingredient}
              </li>
            ))}
          </ul>
        </div>

        <div className="instructions-section">
          <h2 className="section-title">
            <span className="section-icon">👨‍🍳</span>
            Instructions
          </h2>
          <ol className="instructions-list">
            {recipe.instructions.map((instruction, index) => (
              <li key={index} className="instruction-item">
                <span className="instruction-number">{index + 1}</span>
                <p>{instruction}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  )
}

export default RecipeDetail


