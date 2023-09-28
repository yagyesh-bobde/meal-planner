import { useContext,  useState } from "react"
import mealContext from "../context/mealContext"
import { Link } from "react-router-dom"
import Header from "../components/Header/Header"

const Planner = () => {
    const { getMealPlan } = useContext(mealContext)
    const [formData, setformData] = useState({
        targetCal: 1000,
        timeframe: "day",
        diet: "vegetarian"
    })

    const [ weekPlan, setweekPlan ] = useState({})
    const [mealPlan, setmealPlan] = useState([])

    const showMealPlan = async(e) => {
        e.preventDefault()
        const data = await getMealPlan(formData)
        if(formData.timeframe === 'day'){
            setmealPlan(data.meals)
        } else{ 
            setweekPlan(data.week)
        }
    }

 
    const updateFormData = (e) => {
        setformData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }    

    
  return (
    <div className="min-h-screen">
        <h2 className="text-center mt-5">
            Meal Planner
        </h2>
          <form className="flex-center flex-col shadow-xl border-0 " onSubmit={(e) => showMealPlan(e)}>
                <div className="w-1/2 my-2">
                    <label htmlFor="targetCal" className=" block w-full font-semibold text-xl mx-5">
                        Target Calories
                    </label>
                  <input value={formData.targetCal} onChange={updateFormData} type="number" step={100} min={500} name="targetCal" id="targetCal" className="text-gray-500 font-semibold border-2 border-gray-300 shadow-xl bg-transparent mx-5 w-full px-5 py-3 rounded-xl" placeholder="Enter Calorie target" />
                </div>
                <div className="w-1/2 my-2">
                    <label htmlFor="timeframe" className="block w-full font-semibold text-xl mx-5">
                        Time Frame
                    </label>
                  <select value={formData.timeframe} onChange={updateFormData} name="timeframe" id="timeframe" className="text-gray-500 font-semibold border-2 border-gray-300 shadow-xl bg-transparent mx-5 w-full  py-3 rounded-xl  px-5">
                        <option value="day">Day</option>
                        <option value="week">Week</option>
                    </select>
                </div>
                <div className="w-1/2 my-2">
                    <label htmlFor="diet" className=" block w-full font-semibold text-xl mx-5">
                        Diet
                    </label>
                  <select value={formData.diet} onChange={updateFormData} name="diet" id="diet" className="text-gray-500 font-semibold border-2 border-gray-300 shadow-xl bg-transparent mx-5 w-full  py-3 rounded-xl  px-5">
                        <option value="vegetarian">Vegetarian</option>
                        <option value="vegan">Vegan</option>
                        <option value="gluten free">Gluten Free</option>
                        <option value="dairy free">Dairy Free</option>
                        <option value="ketogenic">Ketogenic</option>
                    </select>
                </div>
            <button type="submit" className="rounded-full px-5 py-4 text-center bg-green-300 text-black my-5 font-semibold"  >
                    Generate Meal Plan
                </button>
              </form>

              {
                  (formData.timeframe === 'week' ) ? 
                <div className="flex flex-col gap-5 text-black">
                    {
                        Object.keys(weekPlan).map(day => {
                            console.log(weekPlan[day].meals)
                            return(
                                <div className="mt-10 px-10 border-b-2 ">
                                    <h3>{ day.charAt(0).toUpperCase() + day.slice(1)}</h3>
                                <ul className='relative flex mx-auto flex-wrap justify-center p-5'>
                                    {
                                        weekPlan[day].meals.map((recipe, index) => {
                                            return (
                                                <li key={index} className=" w-full max-h-[35vh] md:max-w-[25vw] rounded overflow-hidden m-5 shadow-lg">
                                                    <div className="w-full h-[45%]">
                                                        <img width={"100%"} className="w-full h-full" src={`https://spoonacular.com/recipeImages/${recipe.id}-556x370.jpg`} alt={recipe?.title} />
                                                    </div>
                                                    <div className="px-6 py-2">
                                                        <div className="font-bold text-xl mb-2">
                                                            {recipe?.title.toString().slice(0, 23)}
                                                        </div>
                                                    </div>
                                                    <div className="px-6 pt-4 pb-2">
                                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Time: {recipe.readyInMinutes} min</span>
                                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Servings: {recipe.servings}</span>
                                                        <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                                            <Link to={recipe.sourceUrl} target="_blank">
                                                                Visit Page
                                                            </Link>
                                                        </span>
                                                    </div>
                                                </li>
                                            )
                                        }
                                        )}
                                </ul>
                            </div>
                            )
                        })
                    }
                </div>
                   : 
                  <ul className='relative flex mx-auto flex-wrap justify-center p-5'>
                      {
                          mealPlan && mealPlan.map((recipe, index) => {
                              return (
                                  <li key={index} className=" w-full max-h-[35vh] md:max-w-[25vw] rounded overflow-hidden m-5 shadow-lg">
                                      <div className="w-full h-[45%]">
                                          <img width={"100%"} className="w-full h-full" src={`https://spoonacular.com/recipeImages/${recipe.id}-556x370.jpg`} alt={recipe?.title} />
                                      </div>
                                      <div className="px-6 py-2">
                                          <div className="font-bold text-xl mb-2">
                                              {recipe?.title.toString().slice(0, 23)}
                                          </div>
                                      </div>
                                      <div className="px-6 pt-4 pb-2">
                                          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Time: {recipe.readyInMinutes} min</span>
                                          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Servings: {recipe.servings}</span>
                                          <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                              <Link to={recipe.sourceUrl} target="_blank">
                                                  Visit Page
                                              </Link>
                                          </span>
                                      </div>
                                  </li>
                              )
                          }
                          )}
                  </ul>
              }

    </div>
  )
}

export default Planner