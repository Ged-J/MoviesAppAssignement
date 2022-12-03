import React from "react";  // useState/useEffect redundant 
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import img from '../../images/shows.jpg';
import { getTvShowsGenres } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner';

const formControl = 
  {
    margin: 1,
    minWidth: 220,
    backgroundColor: "rgb(255, 255, 255)"
  };

  export default function FilterTvShowsCard(props) {
    const { data, error, isLoading, isError } = useQuery("tvgenres", getTvShowsGenres);

    if (isLoading) {
      return <Spinner />;
    }

    if (isError) {
      return <h1>{error.message}</h1>;
    }
    const genres = data.genres;
    if (genres[0].name !== "All"){
      genres.unshift({ id: "0", name: "All" });
    }

    const handleChange = (e, type, value) => {
      e.preventDefault();
      props.onUserInput(type, value); // NEW
    };

    const handleTextChange = (e, props) => {
      handleChange(e, "name", e.target.value);
    };

    const handleGenreChange = (e) => {
      handleChange(e, "genre", e.target.value);
    };

  return (
    <Card 
      sx={{
        maxWidth: 340,
        minHeight: 700,
        backgroundColor: "rgb(5, 193, 255)"
      }} 
      variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h1">
          <SearchIcon fontSize="medium" />
          Filter TV Shows.
        </Typography>
        <TextField
        sx={formControl}
        id="filled-search"
        label="Search field"
        type="search"
        variant="filled"
        value={props.titleFilter}
        onChange={handleTextChange}
        />
        <FormControl sx={formControl}>
          <InputLabel id="genre-label">Select Genre</InputLabel>
          <Select
            labelId="genre-label"
            id="genre-select"
            defaultValue=""
            value={props.genreFilter}
            onChange={handleGenreChange}
            >
            {genres.map((genre) => {
              return (
                <MenuItem key={genre.id} value={genre.id}>
                  {genre.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </CardContent>
      <CardMedia
        sx={{ height: 300 }}
        image={img}
        title="Filter"
      />
      <CardContent>
        <Typography variant="h5" component="h1">
          <br />
        </Typography>
      </CardContent>
    </Card>
  );
}