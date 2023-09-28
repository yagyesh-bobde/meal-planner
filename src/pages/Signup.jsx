import { NavLink } from "react-router-dom"


const Signup = () => {
    const { formData , setformData } = useState({
        email: '' ,
        username: '',
        password: ''
    })
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleChange = (e) => {

    }
  return (
      <div className="w-full h-full glass grid place-content-center ">

          <form onSubmit={handleSubmit} className="login flex flex-col gap-5 bg-white rounded-2xl p-5 min-w-[350px] shadow-xl">
              <h1 className="text-center text-2xl lg:text-3xl font-semibold">
                  Log In
              </h1>

              <div className="form-group flex flex-col">
                  <label htmlFor="username " className="block text-semibold text-gray-400">Username</label>
                  <input name="username" type="text" placeholder="" className="block border-b-2 border-black pb-2 focus:outline-none" value={formData.username} onChange={handleChange} />
              </div>

              <div className="form-group flex flex-col">
                  <label htmlFor="password " className="block text-semibold text-gray-400">Password</label>
                  <input name="password" type="password" placeholder="" className="block border-b-2 border-black pb-2 focus:outline-none" value={formData.password} onChange={handleChange} />
              </div>
              {/* { isSignUp ? <div className="subheading">
            Already have an account? <NavLink to="/" className="text-blue-500">Login</NavLink>
          </div> :  */}
              <div className="subheading">
                  Don't have an account?
                  <NavLink to="/" className="text-blue-500">Sign Up.</NavLink>
              </div>
              <button type="submit" className="bg-black py-2 text-white font-bold"
              >
                  Create Account
              </button>
          </form>
      </div>
  )
}

export default Signup