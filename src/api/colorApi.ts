import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constant/url";

interface ColorData {
    id: number;
    name: string;
    year: number;
    color: string;
    pantone_value: string;
  }

export const colorApi = createApi({
    reducerPath: 'colorApi',
    baseQuery: fetchBaseQuery({baseUrl : `${BASE_URL}`}),
    endpoints: builder => ({
        getColors: builder.query<{data:ColorData[]},void>({
            query: () =>'colors?per_page=12',
        })
    })
})

export const {useGetColorsQuery} = colorApi;