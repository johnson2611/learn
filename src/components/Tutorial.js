import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./vid.css"

const VideoList = () => {
  const [videos, setVideos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!searchQuery) return;
      setIsLoading(true);

      const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY; 

      const itProgrammingTopics = ['web development', 'cybersecurity', 'programming', 'physics', 'Tutorial on Biology'];
      const refinedSearchQuery = `${searchQuery} ${itProgrammingTopics.join(' ')}`;

      const options = {
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
          part: 'snippet',
          type: 'video',
          q: refinedSearchQuery,
          key: apiKey,
          maxResults: 8,
        },
      };

      try {
        const response = await axios.request(options);
        setVideos(response.data.items);
      } catch (error) {
        console.error('Error fetching videos:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [searchQuery]);

  const handleSearch = () => {
    setSearchQuery(document.getElementById('searchInput').value);
  };

  return (
    <div style={{ padding: '8rem' }} className='conner'>
      <h2 className='tube-title'>YouTube Videos</h2>
      <div className='youtube-container'>
        <input type="text" id="searchInput" placeholder="Search for any video..." className='youtube-search' />
        <button onClick={handleSearch} className='youtube-btn'>Search</button>
      </div>
      <div className="video-list">

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul className='videos'>
          {videos.map((video) => (
            <li key={video.id.videoId}>
              <iframe
                title={video.snippet.title}
                width="260"
                height="140"
                src={`https://www.youtube.com/embed/${video.id.videoId}`}
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <p>{video.snippet.title}</p>
            </li>
          ))}
        </ul>
      )}
      </div>
    </div>
  );
};

export default VideoList;
