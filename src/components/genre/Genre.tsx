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
  <div className="container mx-auto flex overflow-x-auto gap-3 py-3 px-2">
      {data?.map((item: IGenre) => (
        <div
          onClick={() => handleGenre(item.id)}
          className={`text-nowrap cursor-pointer select-none px-4 py-2 bg-gray-200 text-sm font-medium rounded-xl ${
            item.id.toString() === genre ? "dark:bg-red-500 bg-red-500 text-white" : "bg-gray-100 text-gray-800 dark:bg-[#2a2a2a] dark:text-white"
          }`}
          key={item.id}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default React.memo(Genre);
