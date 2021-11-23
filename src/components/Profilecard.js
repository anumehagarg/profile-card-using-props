import React from "react";

export default class Profilecard extends React.Component {
    render() {

        return (
                <div className="profileCardContainer">
                    <div className='back-img'></div>
                    <div className="profileAvatar">
                        <img className="avatar"
                            src={this.props.avatarUrl}
                            alt={this.props.altname}
                        />
                    </div>
                    <div className="profileDetails">
                            <div className="userName">{this.props.name}</div>
                            <div className="userEmail">{this.props.email}</div>
                    </div>
                </div>       
        );

    }

}