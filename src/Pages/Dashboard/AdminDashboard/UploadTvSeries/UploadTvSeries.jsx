import { useState } from "react";
import DashboardTop from "../../../../components/dashboardTop";

const UploadTvSeries = () => {

    const [selectedGenres, setSelectedGenres] = useState([]);
    const [selectedReasons, setSelectedReasons] = useState([]);
    const [selectedLanguages, setSelectedLanguages] = useState([]);
    const [directors, setDirectors] = useState(['']);
    const [writers, setWriters] = useState(['']);
    const [stars, setStars] = useState(['']);

    const handleGenreChange = (e) => {
        const genre = e.target.value;

        if (selectedGenres.includes(genre)) {
            setSelectedGenres(selectedGenres.filter((g) => g !== genre));
        } else {
            setSelectedGenres([...selectedGenres, genre]);
        }
    };

    const handleReasonChange = (e) => {
        const region = e.target.value;

        if (selectedReasons.includes(region)) {
            setSelectedReasons(selectedReasons.filter((g) => g !== region));
        } else {
            setSelectedReasons([...selectedReasons, region]);
        }
    };

    const handleLanguageChange = (e) => {
        const language = e.target.value;

        if (selectedLanguages.includes(language)) {
            setSelectedLanguages(selectedLanguages.filter((g) => g !== language));
        } else {
            setSelectedLanguages([...selectedLanguages, language]);
        }
    };

    const handleDirectorChange = (index, value) => {
        const updatedDirectors = [...directors];
        updatedDirectors[index] = value;
        setDirectors(updatedDirectors);
    };

    const handleAddDirectors = () => {
        setDirectors([...directors, '']);
    };

    const handleWriterChange = (index, value) => {
        const updatedWriters = [...writers];
        updatedWriters[index] = value;
        setWriters(updatedWriters);
    };

    const handleAddWriters = () => {
        setWriters([...writers, '']);
    };

    const handleStarsChange = (index, value) => {
        const updatedStars = [...stars];
        updatedStars[index] = value;
        setStars(updatedStars);
    };

    const handleAddStars = () => {
        setStars([...stars, '']);
    };


    const handelRegister = async (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const length = parseInt(form.length.value);
        const movie_url = form.movie_url.value;
        const trailer_url = form.trailer_url.value;
        const IMDb_rating = parseFloat(form.imdb_rating.value);
        const rating = form.rating.value;
        const release_year = parseInt(form.release_year.value);
        const release_month = form.release_month.value;
        const production_company = form.company.value;
        const description = form.description.value;
        const posterData = form.poster.files;
        const thumbnailData = form.thumbnail.files;
        let thumbnail;
        let poster;
        if (posterData.length > 0) {
            const formData = new FormData()
            formData.append('image', posterData[0])
            const api = import.meta.env.VITE_imgbbApiKey
            if (posterData[0]) {
                await fetch(`https://api.imgbb.com/1/upload?key=${api}`, { method: 'POST', body: formData }).then(res => res.json()).then(imgData => {
                    poster = imgData.data.display_url
                })
            }
        }

        if (thumbnailData.length > 0) {
            const formData = new FormData()
            formData.append('image', thumbnailData[0])
            const api = import.meta.env.VITE_imgbbApiKey
            if (thumbnailData[0]) {
                await fetch(`https://api.imgbb.com/1/upload?key=${api}`, { method: 'POST', body: formData }).then(res => res.json()).then(imgData => {
                    thumbnail = imgData.data.display_url
                })
            }
        }

        const movieData = {
            title,
            type: "Movie",
            description,
            release_year,
            release_month,
            poster,
            thumbnail,
            languages: selectedLanguages,
            Genres: selectedGenres,
            region: selectedReasons,
            length,
            IMDb_rating,
            rating,
            comments: [],
            likes: 0,
            views: 0,
            trailer_url,
            movie_url,
            cast: [
                {
                    directors,
                    writers,
                    stars
                }
            ],
            production_company
        }

        axios
            .post(`https://flex-flow-server.vercel.app/movies`, movieData, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then((res) => console.log(res.data))
    }
    const years = [1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023];

    const regionNames = ["DC, Marvel or Superhero", "Bollywood", "Hollywood", "Bangla", "Korean", "Spanish", "Chinese & Japanese"];
    const genresNames = ["Animation & Cartoon", "Biography", "Documentary", "Horror", "Fantasy", "Drama", "Crime", "Comedy", "Romance", "Sports", "Mystery", "Sci-Fi", "War", "Western", "Thriller", "Psychological"];
    const languages = ["English", "Bangla", "Hindi", "Spanish", "Chinese", "Korean", "Japanese", "Russian", "French", "Italian"]

    return (
        <div className="MyContainer">
        <DashboardTop />
        <div className="p-10">
            <form onSubmit={handelRegister}>
                {/* ********* */}
                <div className="grid grid-cols-2 gap-5">
                    {/* Title */}
                    <div className="form-control mb-3">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter movie title"
                            name="title"
                            className="input input-bordered rounded-lg" required
                        />
                    </div>
                    {/* length */}
                    <div className="form-control mb-3">
                        <label className="label">
                            <span className="label-text">Length</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Enter length"
                            name="length"
                            className="input input-bordered rounded-lg"
                            required
                        />
                    </div>

                </div>
                {/* ********** */}
                <div className="grid grid-cols-2 gap-5">
                    {/* Movie URL */}
                    <div className="form-control mb-3">
                        <label className="label">
                            <span className="label-text">Movie URL</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Movie url"
                            name="movie_url"
                            className="input input-bordered rounded-lg "
                            required
                        />
                    </div>
                    {/* Trailer URL */}
                    <div className="form-control mb-3">
                        <label className="label">
                            <span className="label-text">Trailer URL</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter trailer url"
                            name="trailer_url"
                            className="input input-bordered rounded-lg "
                            required
                        />
                    </div>

                </div>
                {/* ********* */}
                {/* ********** */}
                <div className="grid grid-cols-2 gap-5">
                    {/* IMDB Rating */}
                    <div className="form-control mb-3">
                        <label className="label">
                            <span className="label-text">IMDB Rating</span>
                        </label>
                        <input
                            type="number" step="0.01"
                            placeholder="Enter imdb rating"
                            name="imdb_rating"
                            className="input input-bordered rounded-lg"
                            required
                        />
                    </div>
                    {/* Rating */}
                    <div className="form-control mb-3">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <select
                            name="rating"
                            className="select select-bordered w-full rounded-lg"
                        >
                            <option disabled selected>Month</option>
                            <option>G</option>
                            <option>PG</option>
                            <option>PG-13</option>
                            <option>R</option>
                        </select>
                    </div>

                </div>
                {/* ********* */}
                {/* ********** */}
                <div className="grid grid-cols-2 gap-5">
                    {/* Release Month */}
                    <div className="form-control mb-3">
                        <label className="label">
                            <span className="label-text">Release Month</span>
                        </label>
                        <select
                            name="release_month"
                            className="select select-bordered w-full rounded-lg"
                        >
                            <option disabled selected>Month</option>
                            <option>January</option>
                            <option>February</option>
                            <option>March</option>
                            <option>April</option>
                            <option>May</option>
                            <option>June</option>
                            <option>July</option>
                            <option>August</option>
                            <option>September</option>
                            <option>October</option>
                            <option>November</option>
                            <option>December</option>
                        </select>
                    </div>
                    {/* Release Year */}
                    <div className="form-control mb-3">
                        <label className="label">
                            <span className="label-text">Release Year</span>
                        </label>
                        <select
                            name="release_year"
                            className="select select-bordered w-full rounded-lg"
                        >
                            <option disabled selected>Year</option>
                            {
                                years.map(year => <option>{year}</option>)
                            }
                        </select>
                    </div>
                </div>
                {/* *************** */}
                {/* Genres */}
                <div className="form-control mb-3">
                    <label className="label">
                        <span className="label-text">Genres:</span>
                    </label>
                    <div className="mx-5 grid grid-cols-4 gap-3">
                        {
                            genresNames.map(genres => <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    value={`${genres}`}
                                    checked={selectedGenres.includes(`${genres}`)}
                                    className="checkbox checkbox-xs rounded-full"
                                    onChange={handleGenreChange}
                                /> <span className="ms-1">{genres}</span>
                            </label>)
                        }

                    </div>
                </div>
                {/* Regions */}
                <div className="form-control mb-3">
                    <label className="label">
                        <span className="label-text">Region:</span>
                    </label>
                    <div className="mx-5 grid grid-cols-4 gap-3">
                        {
                            regionNames.map(region => <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    value={`${region}`}
                                    checked={selectedReasons.includes(`${region}`)}
                                    className="checkbox checkbox-xs rounded-full"
                                    onChange={handleReasonChange}
                                /> <span className="ms-1">{region}</span>
                            </label>)
                        }

                    </div>
                </div>
                {/* ********** */}
                {/* language */}
                <div className="form-control mb-3">
                    <label className="label">
                        <span className="label-text">Language:</span>
                    </label>
                    <div className="mx-5 grid grid-cols-4 gap-3">
                        {
                            languages.map(language => <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    value={`${language}`}
                                    checked={selectedLanguages.includes(`${language}`)}
                                    className="checkbox checkbox-xs rounded-full"
                                    onChange={handleLanguageChange}
                                /> <span className="ms-1">{language}</span>
                            </label>)
                        }
                    </div>
                </div>
                {/* ********** */}
                {/* Director */}
                <div className="form-control mb-3">
                    <label className="label">
                        <span className="label-text">Directors</span>
                    </label>
                    <div className="grid grid-cols-2">
                        {directors.map((director, index) => (
                            <div key={index} className="flex gap-1 align-middle items-center mb-1">
                                <input
                                    type="text"
                                    placeholder="Add director"
                                    value={director}
                                    onChange={(e) => handleDirectorChange(index, e.target.value)}
                                    className="input input-bordered rounded-lg w-[80%]"
                                />
                                {
                                    index === directors.length - 1 ?
                                        <span
                                            onClick={handleAddDirectors}
                                            className="btn btn-circle btn-sm"
                                        >
                                            <i className="fa-solid fa-plus"></i>
                                        </span> :
                                        ""
                                }
                            </div>
                        ))}
                    </div>
                </div>
                {/* Writers */}
                <div className="form-control mb-3">
                    <label className="label">
                        <span className="label-text">Writers</span>
                    </label>
                    <div className="grid grid-cols-2">
                        {writers.map((writer, index) => (
                            <div key={index} className="flex gap-1 align-middle items-center mb-1">
                                <input
                                    type="text"
                                    placeholder="Add Writer"
                                    value={writer}
                                    onChange={(e) => handleWriterChange(index, e.target.value)}
                                    className="input input-bordered rounded-lg w-[80%]"
                                />
                                {
                                    index === writers.length - 1 ?
                                        <span
                                            onClick={handleAddWriters}
                                            className="btn btn-circle btn-sm"
                                        >
                                            <i className="fa-solid fa-plus"></i>
                                        </span> :
                                        ""
                                }
                            </div>
                        ))}
                    </div>
                </div>
                {/* Stars */}
                <div className="form-control mb-3">
                    <label className="label">
                        <span className="label-text">Stars</span>
                    </label>
                    <div className="grid grid-cols-2">
                        {stars.map((star, index) => (
                            <div key={index} className="flex gap-1 align-middle items-center mb-1">
                                <input
                                    type="text"
                                    placeholder="Add Stars"
                                    value={star}
                                    onChange={(e) => handleStarsChange(index, e.target.value)}
                                    className="input input-bordered rounded-lg w-[80%]"
                                />
                                {
                                    index === stars.length - 1 ?
                                        <span
                                            onClick={handleAddStars}
                                            className="btn btn-circle btn-sm"
                                        >
                                            <i className="fa-solid fa-plus"></i>
                                        </span> :
                                        ""
                                }
                            </div>
                        ))}
                    </div>
                </div>
                {/* ********* */}
                {/* Company */}
                <div className="form-control mb-3">
                    <label className="label">
                        <span className="label-text">Production Company</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter production company name"
                        name="company"
                        className="input input-bordered rounded-lg"
                        required
                    />
                </div>
                {/* ********** */}
                {/* description */}
                <div className="form-control mb-3">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea name="description"
                        cols="30" rows="10"
                        placeholder="Enter movie description"
                        className="input input-bordered rounded-lg h-40 p-2"
                        required
                    ></textarea>
                </div>
                {/* **************** */}
                <div className="grid grid-cols-2 gap-5">
                    {/* Poster */}
                    <div className="form-control mb-3">
                        <label className="label">
                            <span className="label-text">Poster</span>
                        </label>
                        <input
                            name="poster"
                            type="file"
                            className="file-input file-input-bordered bg-purple-600 w-full max-w-xs rounded-lg"
                        />
                    </div>
                    {/* Thumbnail */}
                    <div className="form-control mb-3">
                        <label className="label">
                            <span className="label-text">Thumbnail</span>
                        </label>
                        <input
                            name="thumbnail"
                            type="file"
                            className="file-input file-input-bordered bg-purple-600 w-full max-w-xs rounded-lg"
                        />
                    </div>
                </div>
                {/* *************** */}
                {/* submit */}
                <div className="form-control mb-3 mt-6">
                    <button
                        type="submit"
                        className="btn text-white bg-purple-800 rounded-lg uppercase"
                    >Upload
                        <i className="fa-solid fa-cloud-arrow-up"></i>
                    </button>
                    <br />
                </div>
            </form>
        </div>
    </div>
    );
};

export default UploadTvSeries;