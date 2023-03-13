import React from 'react';

type ProfileStatusType = {
    status: string
}

class ProfileStatus extends React.Component<any, any> {
    state = {
        editMode: false,
        status: this.props.status
    }
    componentDidUpdate(prevSProps: any, prevState: any) {
        if (prevSProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    onStatusChange = (e: any) => {
        debugger
        this.setState({
            status: e.currentTarget.value
        })
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deActivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    render() {
        return (
            <div>
                {!this.state.editMode
                    ? <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || "Here your status"}</span>
                    </div>
                    : <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deActivateEditMode} value={this.state.status}/>
                    </div>
                }


            </div>
        );
    }


};

export default ProfileStatus;