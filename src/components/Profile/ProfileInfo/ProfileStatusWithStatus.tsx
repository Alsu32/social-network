import React, {ChangeEvent, useEffect, useState} from 'react';

//component
export const ProfileStatusWithHook = (props:ProfileStatusType) => {

    let [editMode, setEditMode] = useState<boolean>(false)
    let [status, setStatus] = useState<string>(props.status)

    useEffect(()=> {setStatus(props.status)}, [props.status])
    const activateEditMode = () => {setEditMode(true)}
    const deActivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e:ChangeEvent<HTMLInputElement>) => {setStatus(e.currentTarget.value)}

    return (
        <div>
            {!editMode
                ? <div>
                    <span onDoubleClick={activateEditMode}>{props.status || "Here your status"}</span>
                </div>
                : <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deActivateEditMode}
                           value={status}/>
                </div>
            }
        </div>
    );
}
//types
type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}
