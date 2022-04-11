import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export let token ;

export const loginsApi = createApi({
    reducerPath:'loginsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'api/v1/auth/', 
    // mode:'cors'
     }),
    endpoints: (build) => ({  // endpoints - это действия с сервером получить или мутировать тд и тп 
        getlogins: build.mutation({
            query: (body) => ({
                url: 'sign-in',
                method:'POST',
                body,
            }),
            // transformResponse: (response) => response.data
            transformResponse: (response) =>
            {
                token=response
                localStorage.setItem('token',JSON.stringify(response))
                // console.log(JSON.stringify(token))
                // console.log(JSON.parse(localStorage.getItem('token')))
               
            }
            

        //     onSettled: (body) => ({
        //        body
        //   })
        }),
    })
});

export const {useGetloginsMutation} = loginsApi;

