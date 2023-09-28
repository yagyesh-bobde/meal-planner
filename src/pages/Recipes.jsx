import { useContext, useEffect, useState } from 'react'
import mealContext from '../context/mealContext'
import RecipeFormModal from '../components/Modal/RecipeFormModal'
import Header from '../components/Header/Header'


const Recipes = () => {
    const { fetchRecipes, recipes } = useContext(mealContext)
    const [showForm, setshowForm] = useState(false)


    useEffect(() => {
        fetchRecipes()

    }, [])

    return (
        <>
        <div className="px-10">
        <Header />
        </div>
            {
                (recipes?.length > 0) ?
                    <ul className='relative flex flex-wrap justify-between p-5'>
                        {
                            recipes && recipes.map((recipe, index) => {
                                let tags = recipe.cuisine_path.toString().slice(1).split("/")
                                return (
                                    <li  key={index} className="w-full md:max-w-[30vw] rounded overflow-hidden my-5 shadow-lg duration-300 hover:scale-110">
                                        <div className="w-full h-[45%]">
                                            <img width={"100%"} className="w-full h-full" src={recipe?.img_src} alt={recipe?.recipe_name} />
                                        </div>
                                        <div className="px-6 py-4">
                                            <div className="font-bold text-xl mb-2">
                                                {recipe?.recipe_name.toString().slice(0, 23)}
                                            </div>
                                            <p className="text-gray-700 text-base">
                                                {recipe?.ingredients.toString().slice(0, 100)}
                                            </p>
                                        </div>
                                        <div className="px-6 pt-4 pb-2">
                                            {
                                                tags.map((tag, index) => {
                                                    return(
                                                        <span className="" >
                                                            {
                                                            tag &&
                                                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{tag}</span>
                                                            }
                                                        </span>
                                                    )
                                                })
                                            }
                                        </div>
                                    </li>
                                )
                            }
                            )}

                        <div className="cursor-pointer flex items-center justify-center fixed left-[50%] bottom-10 bg-black text-white text-5xl w-[75px] h-[75px]  rounded-full " onClick={() => setshowForm((prev) => {
                            return !prev
                        })}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plus" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M12 5l0 14"></path>
                                <path d="M5 12l14 0"></path>
                            </svg>
                        </div>

                        {
                            showForm && <RecipeFormModal setshowForm={setshowForm} />
                        }

                    </ul>
                    :
                    <div className="grid bg-black min-w-screen min-h-screen place-content-center text-white text-3xl">
                        <span className="w-[75px] h-[75px] bg-transparent border-4 rounded-full border-gray-800 border-t-white animate-spin inline-block">
                            
                        </span>
                    </div>
            }
        </>
    )
}

export default Recipes