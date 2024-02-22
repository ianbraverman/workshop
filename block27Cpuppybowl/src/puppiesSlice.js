import api from "./api";

const puppyApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPuppies: builder.query({
      query: () => "/players",
      providesTags: ["Puppies"],
    }),
  }),
});

export const { useGetPuppiesQuery } = puppyApi;
