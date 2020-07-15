import React from 'react'
import ModalVideo from 'react-modal-video'
import 'react-modal-video/scss/modal-video.scss';
 
class VideoModal extends React.Component {
 
  constructor () {
    super()
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
  }
 
  openModal () {
    this.setState({isOpen: true})
  }
 
  render () {
    return (
      <div>
        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='nFtbf4prm78' onClose={() => this.setState({isOpen: false})} />
          <div className="video-btn">
              <ul>
                  <li>
                    <button className="wrap" onClick={this.openModal}><i className="fa fa-play" aria-hidden="true"></i></button> 
                  </li>
              </ul>
          </div>
      </div>
    )
  }
}

export default VideoModal;