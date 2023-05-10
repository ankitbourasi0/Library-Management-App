import React from "react";

const Login = () => {
  return (
   
      <div class="m-auto xl:container px-12 sm:px-0 mx-auto ">
        <div class="mx-auto h-full sm:w-max ">
          <div class="m-auto  py-12 ">
            
            <div class="mt-12 rounded-3xl border min-w-[450px] bg-gray-50   -mx-6 sm:-mx-10 p-8 sm:p-10">
              
            <div class="flex justify-center">
              <a href="">
                <img
                  src="log.png"
                  className="w-40 "
                  alt="tailus logo"
                />
              </a>
            </div>

              <h3 class="text-2xl text-center font-semibold ">
                Login to your account
              </h3>
             

              <form action="" class="mt-10 space-y-8 dark:text-white">
                <div>
                  <div class="relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                    <input
                      id=""
                      type="email"
                      placeholder="Username"
                      class="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition"
                    />
                  </div>
                </div>

                <div class="flex flex-col items-end">
                  <div class="w-full relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                    <input
                      id=""
                      type="Your password"
                      placeholder="Password"
                      class="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition"
                    />
                  </div>
                  {/* <button type="reset" class="-mr-3 w-max p-3">
                    <span class="text-sm tracking-wide text-sky-600 dark:text-sky-400">
                      Forgot password ?
                    </span>
                  </button> */}
                </div>

                <div>
                  <button class="w-full rounded-full bg-blue-600 hover:bg-blue-700 h-11 flex items-center justify-center px-6 py-3 transition focus:bg-blue-800 active:bg-blue-800">
                    <span class="text-base font-semibold text-white ">
                      Login
                    </span>
                  </button>
                  <button href="#" type="reset" class="-ml-3 w-max p-3">
                    <span class="text-sm tracking-wide text-sky-600 dark:text-sky-400">
                      Create new account
                    </span>
                  </button>
                </div>
              </form>
            </div>
            
          
          </div>
        </div>
      </div>
   
  );
};

export default Login;
