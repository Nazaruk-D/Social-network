import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {ProfileType, setUserProfileThunk} from "../../redux/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";


type PathParamType = {
    userId: string
}

type MapStatePropsType = {
    profile: ProfileType
    isAuth: boolean
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
        if (!this.props.isAuth) return <Redirect to={"/login"}/>
        return (
            <Profile profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profile.profile,
        isAuth: state.auth.isAuth
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfileThunk})(WithUrlDataContainerComponent)


