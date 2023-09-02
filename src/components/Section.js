import React from "react";

const Section = () => {
  return (
    <>
      <section>
        <div>
          <div class="rounded-tl-3xl text-2xl  ">
            <h1 class="font-bold pl-5">Analytics</h1>
          </div>

          <div class="flex flex-wrap">
            <div class="w-full md:w-1/2 xl:w-1/3 p-6">
              <div class="bg-gradient-to-b from-green-200 to-green-100 border-b-4 border-green-600 rounded-lg shadow-xl p-5">
                <div class="flex flex-row items-center">
                  <div class="flex-shrink pr-4">
                    <div class="rounded-full p-5 bg-green-600">
                      <i class="fa fa-wallet fa-2x fa-inverse"></i>
                    </div>
                  </div>
                  <div class="flex-1 text-right md:text-center">
                    <h2 class="font-bold uppercase text-gray-600">
                      Total Revenue
                    </h2>
                    <p class="font-bold text-3xl">
                      ₱3249{" "}
                      <span class="text-green-500">
                        <i class="fas fa-caret-up"></i>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/2 xl:w-1/3 p-6">
              <div class="bg-gradient-to-b from-pink-200 to-pink-100 border-b-4 border-pink-500 rounded-lg shadow-xl p-5">
                <div class="flex flex-row items-center">
                  <div class="flex-shrink pr-4">
                    <div class="rounded-full p-5 bg-pink-600">
                      <i class="fas fa-users fa-2x fa-inverse"></i>
                    </div>
                  </div>
                  <div class="flex-1 text-right md:text-center">
                    <h2 class="font-bold uppercase text-gray-600">
                      Total Users
                    </h2>
                    <p class="font-bold text-3xl">
                      249{" "}
                      <span class="text-pink-500">
                        <i class="fas fa-exchange-alt"></i>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/2 xl:w-1/3 p-6">
              <div class="bg-gradient-to-b from-yellow-200 to-yellow-100 border-b-4 border-yellow-600 rounded-lg shadow-xl p-5">
                <div class="flex flex-row items-center">
                  <div class="flex-shrink pr-4">
                    <div class="rounded-full p-5 bg-yellow-600">
                      <i class="fas fa-user-plus fa-2x fa-inverse"></i>
                    </div>
                  </div>
                  <div class="flex-1 text-right md:text-center">
                    <h2 class="font-bold uppercase text-gray-600">
                      New Orders
                    </h2>
                    <p class="font-bold text-3xl">
                      2{" "}
                      <span class="text-yellow-600">
                        <i class="fas fa-caret-up"></i>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/2 xl:w-1/3 p-6">
              <div class="bg-gradient-to-b from-blue-200 to-blue-100 border-b-4 border-blue-500 rounded-lg shadow-xl p-5">
                <div class="flex flex-row items-center">
                  <div class="flex-shrink pr-4">
                    <div class="rounded-full p-5 bg-blue-600">
                      <i class="fas fa-server fa-2x fa-inverse"></i>
                    </div>
                  </div>
                  <div class="flex-1 text-right md:text-center">
                    <h2 class="font-bold uppercase text-gray-600">
                      Complete Orders
                    </h2>
                    <p class="font-bold text-3xl">152 </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/2 xl:w-1/3 p-6">
              <div class="bg-gradient-to-b from-indigo-200 to-indigo-100 border-b-4 border-indigo-500 rounded-lg shadow-xl p-5">
                <div class="flex flex-row items-center">
                  <div class="flex-shrink pr-4">
                    <div class="rounded-full p-5 bg-indigo-600">
                      <i class="fas fa-tasks fa-2x fa-inverse"></i>
                    </div>
                  </div>
                  <div class="flex-1 text-right md:text-center">
                    <h2 class="font-bold uppercase text-gray-600">
                      To Do List
                    </h2>
                    <p class="font-bold text-3xl">7 tasks</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/2 xl:w-1/3 p-6">
              <div class="bg-gradient-to-b from-red-200 to-red-100 border-b-4 border-red-500 rounded-lg shadow-xl p-5">
                <div class="flex flex-row items-center">
                  <div class="flex-shrink pr-4">
                    <div class="rounded-full p-5 bg-red-600">
                      <i class="fas fa-inbox fa-2x fa-inverse"></i>
                    </div>
                  </div>
                  <div class="flex-1 text-right md:text-center">
                    <h2 class="font-bold uppercase text-gray-600">Issues</h2>
                    <p class="font-bold text-3xl">
                      3{" "}
                      <span class="text-red-500">
                        <i class="fas fa-caret-up"></i>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section;
