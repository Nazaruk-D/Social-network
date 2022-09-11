import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {ProfileType, setUserProfile, setUserProfileThunk} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {usersAPI} from "../../api/api";


type PathParamType = {
    userId: string
}

type MapStatePropsType = {
    profile: ProfileType
}
type MapDispatchPropType = {
    setUserProfileThunk: (userId: string) => void
}

type ProfileContainerPropsType = RouteComponentProps<PathParamType> &  MapStatePropsType & MapDispatchPropType

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) {userId = "2"}
        this.props.setUserProfileThunk(userId)
    }

    render() {
        return (
            <Profile profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profile.profile
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfileThunk})(WithUrlDataContainerComponent)


