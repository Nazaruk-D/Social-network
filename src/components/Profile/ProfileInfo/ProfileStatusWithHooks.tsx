import React, {useEffect, useState} from 'react';

type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}

const ProfileStatusWithHooks: React.FC<ProfileStatusType> = (props) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect( () => {
        setStatus(props.status)
    },[props.status])

    const deactivateEditMode= (e: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(e.currentTarget.value)
        props.updateStatus(status)
    }

    return (
        <div>
            {!editMode &&
                <div>
                        <span
                            onDoubleClick={() => setEditMode(true)}>{props.status ? props.status : "изменить статус"}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input
                        onChange={deactivateEditMode}
                        value={status}
                        onBlur={() => setEditMode(false)}
                        autoFocus>
                    </input>
                </div>
            }
        </div>
    );
}

export default ProfileStatusWithHooks;