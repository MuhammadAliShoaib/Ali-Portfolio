import React, { type FC, type ReactNode } from "react";

interface ICardWrapper {
  children: ReactNode;
  title: string;
}

const CardWrapper: FC<ICardWrapper> = ({ children, title }) => {
  return (
    <div className="boxes">
      <div className="px-10 py-2 sm:px-5">
        <h1 className="text-2xl font-semibold">{title}</h1>
        {children}
      </div>
    </div>
  );
};

export default CardWrapper;
