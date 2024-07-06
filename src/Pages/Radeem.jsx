import React from 'react'
import UserSidebar from './UserSidebar'
function Redeem() {
  return (
    <div className='app'>
      <main>
      <UserSidebar/>
      <div className="gift-container ">
        <div className="codex-points-container ">
      <div className="codex-points ">
      <h2>Codex Points</h2>
      <div className="points-row">
        <img style={{width:"10%"}} src="https://i.postimg.cc/wBcFvZJd/1efcc4259a9b3d597c94454bb37c240a.png" alt="" />
        <div className="points-display">0 Points</div>
        <div className="points-dropdown ms-5 ">
          <input type="" placeholder='Type-code' />
        </div>
        <button className="purchase-button ms-5">Redeem</button>
      </div>
    </div>
      </div>
    </div>
      </main>
    </div>
  )
}
export default Redeem