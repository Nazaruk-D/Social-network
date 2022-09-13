import React from 'react';

type ProfileStatusType = {
    status:string
}

class ProfileStatus extends React.Component<ProfileStatusType> {

    state = {
        editMode: false
    }

    activateEditeMode = () => {
        this.setState({
            editMode: true
        })
        // this.state.editMode = true
        // this.forceUpdate()
    }

    deactivateEditeMode = () => {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditeMode}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input value={this.props.status} onBlur={this.deactivateEditeMode} autoFocus></input>
                    </div>
                }
            </div>
        );
    }
}

export default ProfileStatus;