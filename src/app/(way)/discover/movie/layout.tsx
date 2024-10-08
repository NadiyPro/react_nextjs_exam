import React from "react";
import {Metadata} from "next";

export const metadata: Metadata = {
     title: 'Movie'
 }

type Props = { children: React.ReactNode }

const allMoviesLayout= ({children}: Props) => {
    return (
        <div>
                {children}
        </div>
    );
};

export default allMoviesLayout;