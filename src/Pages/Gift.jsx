import React from 'react'
import UserSidebar from './UserSidebar'
import './Gift.css'
function Gift() {
  return (
    <div className='app'>
      <main>
      <UserSidebar/>
      <div className="gift-container ">
        <div className="codex-points-container ">
      <div className="codex-points ">
      <h2>Codex Points</h2>
      <div className="points-row">
        <div className="points-display">0 Points</div>
        <div className="points-dropdown ms-5 ">
          <select>
            <option>100 Points-99 Rs.</option>
          </select>
        </div>
        <button className="purchase-button ms-5">Purchase</button>
      </div>
    </div>
      </div>
    </div>
      </main>
    </div>
  )
}
export default Gift