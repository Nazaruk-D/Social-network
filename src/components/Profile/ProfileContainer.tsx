import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import {
    getStatus,
    ProfileType,
    savePhoto,
    setUserProfileThunk,
    updateProfileDataThunk,
    updateStatus
} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {ProfileDataTypeServer} from "../../api/api";


type PathParamType = {
    userId: number | null
}

type MapStatePropsType = {
    profile: ProfileType
    status: string
    authorizedUserId: number | null
    isAuth: boolean
    authId: number | null
}
type MapDispatchPropType = {
    setUserProfileThunk: (userId: number | null) => void
    getStatus: (userId: number | null) => void
    updateStatus: (status: string) => void
    savePhoto: (file: any) => void
    updateProfileDataThunk: (data: ProfileDataTypeServer, userId: string) => void
}

// type ProfileContainerPropsType = RouteComponentProps<PathParamType> & MapStatePropsType & MapDispatchPropType
type ProfileContainerPropsType = RouteComponentProps<any> & MapStatePropsType & MapDispatchPropType

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    refreshProfile() {
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = this.props.authorizedUserId
            if(!userId) {
                this.props.history.push("/login")
            }
        }
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
                authId={this.props.authId}
                updateProfileData={this.props.updateProfileDataThunk}
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
        authId: state.auth.id
    }
}



export default compose<React.ComponentType>(
    connect(mapStateToProps, {setUserProfileThunk, getStatus, updateStatus, savePhoto, updateProfileDataThunk}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
