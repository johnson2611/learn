import React, { useState, useEffect } from 'react';
import axios from 'axios';


const VideoList = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const apiKey = 'AIzaSyBVdMqKGSgwtMPPPXanTaMn0mIZEK3SNCo'; 
    const channelId = 'UC_x5XG1OV2P6uZZ5FSM9Ttw'; // Replace with the channel ID you want to fetch videos from

    // Fetch videos from the YouTube API
    axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        part: 'snippet',
        channelId: channelId,
        maxResults: 5,
        key: apiKey,
        type: 'video',
      },
    })
    .then(response => setVideos(response.data.items))
    .catch(error => console.error('Error fetching videos:', error));
  }, []);

  return (
    <div className='container'>
      <h2 className='title'>YouTube Videos</h2>
      <ul className='video'>
        {videos.map(video => (
          <li key={video.id.videoId}>
            <iframe
              title={video.snippet.title}
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <p>{video.snippet.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VideoList;



// import axios from 'axios';

// const options = {
//   method: 'GET',
//   url: 'https://youtube138.p.rapidapi.com/auto-complete/',
//   params: {
//     q: 'desp',
//     hl: 'en',
//     gl: 'US'
//   },
//   headers: {
//     'X-RapidAPI-Key': '71561669fdmsh8976a3e8b59100fp1d414djsn3ba92700b26b',
//     'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }