import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removePlaylist } from '../core/actions/MoviesActions';
import { BookmarkRemove } from './Icons';

const Playlist = () => {
  const dispatch = useDispatch();
  const moviesStore = useSelector(s => s.movies);
  const { playlist } = moviesStore;

  return (
    !playlist.length
      ? <h4 className="pa4 tc i"> Empty playlist </h4>
      : <>
        <main className="pa3" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gridGap: '1rem', alignItems: 'stretch' }}>
          {playlist.map((movie, index) => (
            <article key={index} className="card h-100 flex flex-column">
              <Link to={`/movies/${movie.id}`} className="pointer" style={{ flexGrow: '1' }}>
                <img src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <div className="card-body">
                  <h5 className="card-title"> {movie.title} </h5>
                </div>
              </Link>
              <button className="btn btn-outline-dark" onClick={() => dispatch(removePlaylist(index))}>
                Playlist <BookmarkRemove />
              </button>
            </article>
          ))}
        </main>
      </>
  );
};

export default Playlist;