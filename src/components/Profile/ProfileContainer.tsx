import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {ProfileType, setUserProfileThunk} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


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



export default compose<React.ComponentType>(
    connect(mapStateToProps, {setUserProfileThunk}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
