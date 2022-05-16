import React from "react";
import { useParams } from 'react-router-dom'

export const DetailPage : React.FC = (props): JSX.Element => {
    const params = useParams();
    console.log("params=", params);
    return <h1>旅游详情页{params.touristRouteId}</h1>
}