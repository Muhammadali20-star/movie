import type { IGenre } from "@/types";
import React, { type FC } from "react";

interface Props {
  data: undefined | IGenre[];
}

const Genre: FC<Props> = ({ data }) => {
  return (
    <div className="container mx-auto flex overflow-auto gap-4 py-4 px-2">
      {data?.map((item: IGenre) => (
        <div key={item.id} className="whitespace-nowrap px-4 py-2 border border-gray-300 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800 text-sm font-medium">{item.name}</div>
      ))}
  </div>
  );
};

export default React.memo(Genre);
