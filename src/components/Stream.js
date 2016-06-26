import React from 'react';
import { connect } from 'react-redux';

function Stream({ tracks = [] }) {
    return (
        <div>
            {
             tracks.map((track, i) => {
                const key = i + 1;
                return <div className="track" key={key}>{key}. {track.title}</div>  
             })   
            }
        </div>
    ); 
}

function mapStateToProps(state) {
    const tracks = state.track;

    return {
        tracks    
    }
}

export default connect(mapStateToProps)(Stream);
