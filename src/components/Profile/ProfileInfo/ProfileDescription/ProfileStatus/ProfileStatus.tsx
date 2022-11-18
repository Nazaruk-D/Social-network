import React from 'react';
import {RiEdit2Line} from "react-icons/ri";

type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}

class ProfileStatus extends React.Component<ProfileStatusType> {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditeMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditeMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusType>, prevState: Readonly<{}>, snapshot?: any) {
        if ( prevProps.status !== this.props.status ) {  this.setState({ status: this.props.status })  }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span
                            onDoubleClick={this.activateEditeMode}>{this.props.status ? this.props.status : "изменить статус"}
                        </span>
                        <RiEdit2Line style={{fontSize:20, marginLeft: 15, position: "absolute"}}/>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} value={this.state.status}
                               onBlur={this.deactivateEditeMode} autoFocus></input>
                    </div>
                }
            </div>
        );
    }
}

export default ProfileStatus;