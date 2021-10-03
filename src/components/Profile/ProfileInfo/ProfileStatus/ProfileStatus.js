import React from 'react';
import s from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            status: this.props.status,
            editMode: false
        }

        this.inputValueRef = React.createRef();

        this.enableEditMode = this.enableEditMode.bind(this);
        this.disableEditMode = this.disableEditMode.bind(this);
        this.onChangeStatus = this.onChangeStatus.bind(this);
    }

    enableEditMode() {
        this.setState({
            editMode: true
        })
    }

    disableEditMode() {
        this.setState({
            editMode: false
        })
        this.props.updateUserStatus(this.state.status);
    }


    onChangeStatus(e) {
        this.setState({
            status: e.currentTarget.value
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status != this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div className={s.profile__status__wrapper}>
                {!this.state.editMode &&
                <span className={s.status__text} data-title={'double click here to change'}
                      onDoubleClick={this.enableEditMode} ref={this.inputValueRef}>
                    {this.props.status}
                </span>
                }
                {this.state.editMode &&
                <div className={s.input__wrapper}>
                    <input className={s.input} onChange={this.onChangeStatus} autoFocus={true} onBlur={this.disableEditMode} value={this.state.status}/>
                </div>
                }

            </div>
        )
    }
}

export default ProfileStatus;