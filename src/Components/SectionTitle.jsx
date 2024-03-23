import React from "react";


const SectionTitle = ({text, Icon}) => {
  return (
    <div class="max-w-3xl mx-auto text-center my-10">
      <h1 class="text-4xl font-bold text-gray-900 leading-tight mb-2 pb-4 relative flex items-center justify-center gap-2">
        <Icon className=" text-purple-500" />
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-500">
          {text}
        </span>
        <span class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-indigo-500"></span>
      </h1>
    </div>
  );
}

export default SectionTitle