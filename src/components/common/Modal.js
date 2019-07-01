import React from 'react'

const Modal = ({ handleClose, show }) => {
  console.log('showing modal', show)
  return(

    <main className={show ? 'block' : 'none'}>
      <div className="modal-main">
        <p>Let us find out which Beatles songs are loved the most!</p>
        <p>When you sign up you will be given 15 stars. You can give your stars in any way you like but remember you only have 15.
           The star totals of all songs will be tracked so we will discover which song is our very favourite!</p>
        <button
          className="close-modal"
          onClick={handleClose}>
          Got it
        </button>
        
      </div>
    </main>
  )
}

export default Modal
