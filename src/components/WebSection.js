import React from "react";
import { Section } from "../pages/Profile/Profile.style";

function WebSection({handleEditBtn,handleInputChange,editText,userData}) {
    return (
        <Section>
            <div className="sectionHead">
                <div className="section-topic">On the web</div>
                <div
                    className="edit-btn"
                    id="profiles"
                    onClick={(e) => handleEditBtn(e)}
                >
                    {editText && editText.profiles}
                </div>
            </div>
            <div className="profiles">
                <div className="profile-card">
                    <label className="label" htmlFor="linkedin">
                        Linkedin
                    </label>
                    <input
                        type="url"
                        name="linkedin"
                        placeholder="Linkedin"
                        id="profiles"
                        className="input"
                        value={userData.profiles?.linkedin}
                        onInput={(e) => handleInputChange(e)}
                        readOnly={editText.profiles === "edit"}
                    />
                </div>
                <div className="profile-card">
                    <label className="label" htmlFor="github">
                        Github
                    </label>
                    <input
                        type="url"
                        name="github"
                        placeholder="Github"
                        className="input"
                        id="profiles"
                        value={userData.profiles?.github}
                        onInput={(e) => handleInputChange(e)}
                        readOnly={editText.profiles === "edit"}
                    />
                </div>
                <div className="profile-card">
                    <label className="label" htmlFor="facebook">
                        facebook
                    </label>
                    <input
                        type="url"
                        name="facebook"
                        placeholder="Facebook"
                        className="input"
                        id="profiles"
                        value={userData.profiles?.facebook}
                        onInput={(e) => handleInputChange(e)}
                        readOnly={editText.profiles === "edit"}
                    />
                </div>
                <div className="profile-card">
                    <label className="label" htmlFor="twitter">
                        twitter
                    </label>
                    <input
                        type="url"
                        name="twitter"
                        placeholder="Twitter"
                        className="input"
                        id="profiles"
                        value={userData.profiles?.twitter}
                        onInput={(e) => handleInputChange(e)}
                        readOnly={editText.profiles === "edit"}
                    />
                </div>
                <div className="profile-card">
                    <label className="label" htmlFor="instagram">
                        instagram
                    </label>
                    <input
                        type="url"
                        name="instagram"
                        placeholder="Instagram"
                        className="input"
                        id="profiles"
                        value={userData.profiles?.instagram}
                        onInput={(e) => handleInputChange(e)}
                        readOnly={editText.profiles === "edit"}
                    />
                </div>
                <div className="profile-card">
                    <label className="label" htmlFor="otherWeb">
                        website
                    </label>
                    <input
                        type="url"
                        name="otherWeb"
                        placeholder="Your Website"
                        className="input"
                        id="profiles"
                        value={userData.profiles?.otherWeb}
                        onInput={(e) => handleInputChange(e)}
                        readOnly={editText.profiles === "edit"}
                    />
                </div>
            </div>
        </Section>
    );
}

export default WebSection;
