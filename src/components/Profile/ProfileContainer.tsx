import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {ProfileType, setUserProfileThunk} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";


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

// let AuthRedirectComponent = WithAuthRedirect(WithUrlDataContainerComponent)

export default WithAuthRedirect(connect(mapStateToProps, {setUserProfileThunk})(WithUrlDataContainerComponent))


