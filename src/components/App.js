import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  // Reach out to youtube API and get videos
    onTermSubmit = async (term) => {
      const response = await youtube.get('/search',{
        params: {
          q: term
        }
      });

      // Update the state to the new list of searched videos
      this.setState({ videos: response.data.items });

    };

    // get video data when clicked
    onVideoSelect = (video) => {
      this.setState({ selectedVideo: video });
    };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
          onVideoSelect={this.onVideoSelect} 
          videos={this.state.videos}

        />
      </div>
    )
  }
}

export default App;