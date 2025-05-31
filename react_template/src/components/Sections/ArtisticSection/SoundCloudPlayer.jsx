import { useContext } from 'react';
import { ColorSchemeContext } from '../../../contexts/ColorSchemeContext';

const SoundCloudPlayer = () => {
  const { colors } = useContext(ColorSchemeContext);

  return (
    <div className="bg-black bg-opacity-30 p-6 rounded-xl">
      <h3 
        className="text-3xl font-bold mb-6 text-center"
        style={{ color: colors.accent }}
      >
        Latest Mixes
      </h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Featured Mix */}
        <div className="bg-black bg-opacity-70 rounded-lg overflow-hidden">
          <div className="aspect-w-16 aspect-h-9">
            <iframe 
              title="SoundCloud Player - Featured Mix"
              width="100%" 
              height="166" 
              scrolling="no" 
              frameBorder="no" 
              allow="autoplay" 
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1042923606&color=%2354c7ec&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
              className="h-full"
            ></iframe>
          </div>
          <div className="p-4">
            <h4 className="text-xl font-medium text-white mb-1">Latin Underground Sessions</h4>
            <p className="text-gray-400 text-sm">
              Recorded live at Diobar Barcelona, this mix explores the vibrant 
              intersection of Latin rhythms and underground house.
            </p>
            <div className="flex items-center mt-3">
              <div className="flex items-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-cyan-400 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
                <span className="text-gray-300 text-xs">2.4K</span>
              </div>
              <div className="flex items-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-cyan-400 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
                <span className="text-gray-300 text-xs">48</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-cyan-400 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                <span className="text-gray-300 text-xs">156</span>
              </div>
            </div>
          </div>
        </div>

        {/* Playlist */}
        <div>
          <div className="bg-black bg-opacity-70 rounded-lg overflow-hidden h-full">
            <iframe 
              title="SoundCloud Player - Playlist"
              width="100%" 
              height="450" 
              scrolling="no" 
              frameBorder="no" 
              allow="autoplay" 
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1175233826&color=%2354c7ec&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
              className="h-full"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        <a 
          href="https://soundcloud.com/sometimes-dj" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center text-cyan-300 hover:text-cyan-100 transition-colors"
        >
          <span>Follow on SoundCloud</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default SoundCloudPlayer;