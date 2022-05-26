import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const cryptoNewsHeaders = {
  'X-BingApis-SDK': 'true',
  'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
  'X-RapidAPI-Key': 'b2fdc4a102msh75cc9ed3334929fp154b44jsnc1c00f09d95d'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
    }),
  }),
});

export const { 
  useGetCryptoNewsQuery, 
} = cryptoNewsApi;