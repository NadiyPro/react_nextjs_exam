import React from "react";
import {Metadata} from "next";

export const metadata: Metadata = {
     title: 'Video'
 }

type Props = { children: React.ReactNode }

const VideoLayout= ({children}: Props) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default VideoLayout;