import { useParamsHook } from "@/hooks/useParamsHook";
import type { IGenre } from "@/types";
import React, { type FC } from "react";

interface Props {
  data: undefined | IGenre[];
}

const Genre: FC<Props> = ({ data }) => {
  const { setParam, getParam, removeParam} = useParamsHook();
  const genre = getParam("genre");

  const handleGenre = (id:number)=>{
    if(genre === id.toString()){
      removeParam("genre")
    }else{
      setParam("genre", id.toString())
    }
  }
  return (
    <div className="container mx-auto flex overflow-x-auto gap-3 py-3 px-2 scrollbar-hide">
    {data?.map((item: IGenre) => (
      <div
        key={item.id}
        onClick={() => handleGenre(item.id)}
        className={`whitespace-nowrap cursor-pointer select-none px-4 py-2 text-sm font-medium rounded-full border shadow-sm
          ${
            item.id.toString() === genre
              ? "bg-blue-600 text-white border-blue-600 shadow"
              : "bg-gray-100 text-gray-800 border-gray-300 dark:bg-[#2a2a2a] dark:text-white dark:border-gray-600"
          }`}
      >
        {item.name}
      </div>
    ))}
  </div>
  
  );
};

export default React.memo(Genre);
