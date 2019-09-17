import './App.css';
import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';


class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  // Default search terms
  componentDidMount() {
    this.onTermSubmit('cars');
  };

  // Reach out to youtube API and get videos
    onTermSubmit = async (term) => {
      const response = await youtube.get('/search',{
        params: {
          q: term
        }
      });

      // Update the state to the new list of searched videos
      this.setState({ 
        videos: response.data.items,
        selectedVideo: response.data.items[0]
      });

    };

    // get video data when clicked
    onVideoSelect = (video) => {
      this.setState({ selectedVideo: video });
    };

  render() {
    return (
      <div className="ui container">
        
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            
            <div className="five wide column">
              <VideoList 
                onVideoSelect={this.onVideoSelect} 
                videos={this.state.videos}
              />
            </div>
            
          </div>
        </div>
      </div>
    )
  }
}

export default App;