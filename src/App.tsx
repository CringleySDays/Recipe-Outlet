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
            
            <div>
                <p>
                    Discover, share and create authentic recipes with Recipe Outlet, a delightful 
                    experience watiting to be discovered.
                </p>
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