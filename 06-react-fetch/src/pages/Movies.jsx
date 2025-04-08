import React, { useState, useEffect } from 'react';
import { getMovieNews } from '../api/movieRequest';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const data = await getMovieNews(page, pageSize);
        setMovies(data.newslist);
        setTotalPages(Math.ceil(data.total / pageSize));
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchMovies();
  }, [page]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  if (loading) return <div>加载中...</div>;
  if (error) return <div>错误: {error}</div>;

  return (
    <div style={{ 
      padding: '0 200px',
      maxWidth: '1200px',
      margin: '0 auto',
      background: 'linear-gradient(135deg,rgb(167, 195, 250) 0%,rgb(255, 205, 212) 100%)',
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(10px)',
      borderRadius: '20px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.2)'
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>影视资讯</h2>
      <div style={{ display: 'grid', gap: '20px' }}>
        {movies.map((movie) => (
          <div
            key={movie.id}
            style={{
              padding: '20px',
              borderRadius: '15px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
            }}
          >
            <div style={{ display: 'flex', gap: '20px' }}>
              <img 
                src={movie.picUrl} 
                alt={movie.title}
                style={{
                  width: '200px',
                  height: '120px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
              <div style={{ flex: 1 }}>
                <h3 style={{ margin: '0 0 10px 0' }}>{movie.title}</h3>
                <p style={{ 
                  margin: '0 0 10px 0',
                  color: '#333',
                  display: '-webkit-box',
                  WebkitLineClamp: '3',
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}>{movie.description}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#666' }}>
                  <span>{movie.source}</span>
                  <span>{movie.ctime}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
          marginTop: '20px',
        }}
      >
        <button
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
          style={{
            padding: '5px 15px',
            borderRadius: '5px',
            border: 'none',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            cursor: page === 1 ? 'not-allowed' : 'pointer',
          }}
        >
          上一页
        </button>
        <span style={{ margin: '0 10px' }}>第 {page} 页</span>
        <button
          onClick={() => handlePageChange(page + 1)}
          disabled={page === totalPages}
          style={{
            padding: '5px 15px',
            borderRadius: '5px',
            border: 'none',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            cursor: page === totalPages ? 'not-allowed' : 'pointer',
          }}
        >
          下一页
        </button>
      </div>
    </div>
  );
};

export default Movies;