import { axiosInstance } from "./config"
export const getMoviesList = (languageParam,pageParam) => {
    return axiosInstance.get(`/movie/popular?${languageParam}&${pageParam}`);
}

export const getMoviesDetails = (id,language) => {
    return axiosInstance.get(`/movie/${id}?language=${language}`);
}
export const searchForMovie = (movieNameParam,languageParam) => {
    return axiosInstance.get(`/search/movie?${movieNameParam}&${languageParam}`)
}