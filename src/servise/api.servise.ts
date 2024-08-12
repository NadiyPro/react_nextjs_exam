const base:string = 'https://api.themoviedb.org/3'; // базова для всіх окрім малюнків
const baseImg:string = 'https://image.tmdb.org/t/p/w500'; // базова для малюнків

const movieService = async () => {
    let [movie] = await Promise.all([fetch(base + '/discover/movie')
        .then(response => response.json())])
    return movie;
}
