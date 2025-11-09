import { useState } from 'react'
import { recipes } from './data/recipes'
import RecipeCard from './components/RecipeCard'
import RecipeDetail from './components/RecipeDetail'
import './App.css'

function App() {
  const [selectedRecipe, setSelectedRecipe] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedCuisine, setSelectedCuisine] = useState('All')

  const categories = ['All', ...new Set(recipes.map(recipe => recipe.category))]
  const cuisines = ['All', ...new Set(recipes.map(recipe => recipe.cuisine))]

  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         recipe.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || recipe.category === selectedCategory
    const matchesCuisine = selectedCuisine === 'All' || recipe.cuisine === selectedCuisine
    return matchesSearch && matchesCategory && matchesCuisine
  })

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleBackClick = () => {
    setSelectedRecipe(null)
  }

  if (selectedRecipe) {
    return <RecipeDetail recipe={selectedRecipe} onBack={handleBackClick} />
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1 className="app-title">
            <span className="title-icon">🍽️</span>
            Recipe Book
          </h1>
          <p className="app-subtitle">Discover authentic flavors from around the world</p>
        </div>
      </header>

      <main className="app-main">
        <div className="filters">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search recipes..."
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <span className="search-icon">🔍</span>
          </div>

          <div className="filter-section">
            <div className="filter-group">
              <h3 className="filter-label">Cuisine</h3>
              <div className="category-filter">
                {cuisines.map(cuisine => (
                  <button
                    key={cuisine}
                    className={`category-btn ${selectedCuisine === cuisine ? 'active' : ''}`}
                    onClick={() => setSelectedCuisine(cuisine)}
                  >
                    {cuisine}
                  </button>
                ))}
              </div>
            </div>
            <div className="filter-group">
              <h3 className="filter-label">Category</h3>
              <div className="category-filter">
                {categories.map(category => (
                  <button
                    key={category}
                    className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="recipes-grid">
          {filteredRecipes.length > 0 ? (
            filteredRecipes.map(recipe => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                onClick={() => handleRecipeClick(recipe)}
              />
            ))
          ) : (
            <div className="no-results">
              <p>No recipes found. Try a different search term or category.</p>
            </div>
          )}
        </div>
      </main>

      <footer className="app-footer">
        <p>Made with ❤️ for food lovers</p>
      </footer>
    </div>
  )
}

export default App


