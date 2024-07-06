import React from 'react';
import './Profile.css';
import UserSidebar from '../Components/UserSidebar'
function Profile() {
    return (
        <div className="profile-app">
            <main>
                <UserSidebar />
                <section className="profile-info-section">
                    <div className="profile-card profile-info-card">
                        <div>
                            <h2><b>Profile Information</b> <span className="profile-edit-link">Edit</span></h2>
                        </div>
                        <form className='profile-mt-3'>
                            <div className="profile-form-row">
                                <div className="profile-form-group">
                                    <input type="text" placeholder="First Name" />
                                </div>
                                <div className="profile-form-group profile-full-width">
                                    <input type="text" placeholder="Last Name" />
                                </div>
                            </div>
                            <div className="profile-form-group profile-last-input">
                                <input style={{ width: "100%" }} type="email" placeholder="E-mail" />
                            </div>
                            <div className="profile-form-group profile-last-input">
                                <input style={{ width: "100%" }} type="tel" placeholder="Mobile Number" />
                            </div>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Profile;
