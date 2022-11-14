import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getStatus, ProfileType, savePhoto, setUserProfileThunk, updateStatus} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


type PathParamType = {
    userId: string
}

type MapStatePropsType = {
    profile: ProfileType
    status: string
    authorizedUserId: string
    isAuth: boolean
    // photo: string | null
}
type MapDispatchPropType = {
    setUserProfileThunk: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
    savePhoto: (file: any) => void
}

type ProfileContainerPropsType = RouteComponentProps<PathParamType> &  MapStatePropsType & MapDispatchPropType

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    refreshProfile() {
        let userId = this.props.match.params.userId
        if(!userId) {
            // userId = "25415"
            userId = this.props.authorizedUserId
            if(!userId) {
                this.props.history.push("/login")
            }
        } // 25415
        this.props.setUserProfileThunk(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<ProfileContainerPropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if(this.props.match.params.userId !== prevProps.match.params.userId )
            this.refreshProfile()
    }

    render() {

        return (
            <Profile
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
                isOwner={!this.props.match.params.userId}
                savePhoto={this.props.savePhoto}
            />
        )
    }
}




let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profile.profile,
        status: state.profile.status,
        authorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth,

    }
}



export default compose<React.ComponentType>(
    connect(mapStateToProps, {setUserProfileThunk, getStatus, updateStatus, savePhoto}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
