// ----------------------------------------------------
// IMPORTS //
// ----------------------------------------------------

// ----------------------------------------------------
// GLOBAL VARIABLES //
// ----------------------------------------------------

// ----------------------------------------------------
// MAIN PROGRAM //
// ----------------------------------------------------

export function App() {
    return (
        <>
            <div className="flex items-center justify-center w-full h-24 gap-10 text-xl bg-blue-500">
                <button> About </button>
                <button> Home </button>
                <button> Login </button>
                <button> Register </button>
            </div>
            
            <div className="flex justify-center font-bold text-center text-blue-900 text-8xl">
                Recipe Outlet
            </div>
            
            <div className="flex items-center justify-center">
                <p>
                    Discover, share and create authentic recipes with Recipe Outlet, a delightful 
                    experience watiting to be discovered.
                </p>
            </div>

            <div className="flex items-center justify-center w-full h-auto">
                <img className="w-32" src="src/assets/Stock-Image.jpg" alt="Stock"/>
            </div>

            <div>
                <div className="flex justify-center item-center">
                    <img className="w-32 h-auto" src="src/assets/Stock-Image.jpg" alt="Stock"/>
                    <p className="w-1/3 py-10">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nobis praesentium nesciunt fugiat cupiditate modi sapiente at ratione. Vitae mollitia aliquid officia consectetur adipisci rem sed voluptate repudiandae accusamus natus.
                    </p>
                </div>

                <div className="flex items-center justify-center">
                    <p className="w-1/3 py-10">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nobis praesentium nesciunt fugiat cupiditate modi sapiente at ratione. Vitae mollitia aliquid officia consectetur adipisci rem sed voluptate repudiandae accusamus natus.
                    </p>
                    <img className="w-32 h-auto" src="src/assets/Stock-Image.jpg" alt="Stock"/>
                </div>
                
                
            </div>
        
            <div className="flex items-center justify-center w-full bg-black gap-80">
                <div className="flex flex-col gap-1 text-white">
                    <button className="bg-blue-600"> Copyright Info </button>
                    <button className="bg-blue-600"> Terms of Service </button>
                    <button className="bg-blue-600"> Privacy Policy </button>
                </div>

                <div className="flex flex-col gap-1 text-white">
                    <button className="bg-blue-600 "> Copyright Info </button>
                    <button className="bg-blue-600"> Terms of Service </button>
                    <button className="bg-blue-600"> Privacy Policy </button>
                </div>

                <div className="flex flex-col gap-1 text-white">
                    <button className="bg-blue-600"> Copyright Info </button>
                    <button className="bg-blue-600"> Terms of Service </button>
                    <button className="bg-blue-600"> Privacy Policy </button>
                </div>
                
            </div>
        </>
    )
}

// ----------------------------------------------------
// END //
// ----------------------------------------------------