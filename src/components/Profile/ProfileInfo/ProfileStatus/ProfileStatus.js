import React from 'react';
import s from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editMode: false
        }

        this.inputValueRef = React.createRef();

        this.enableEditMode = this.enableEditMode.bind(this);
        this.disableEditMode = this.disableEditMode.bind(this);
    }

    enableEditMode () {
        this.setState({
            editMode: true
        })
    }

    disableEditMode () {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div className={s.profile__status__wrapper}>
                {!this.state.editMode &&
                    <span className={s.status__text} data-title={'double click here to change'}
                    onDoubleClick={this.enableEditMode} ref={this.inputValueRef}>
                        Hello world!!!
                    </span>
                }
                {this.state.editMode &&
                    <div className={s.input__wrapper} onMouseOut={this.disableEditMode}>
                        <input className={s.input} value={this.inputValueRef.current.value} />
                    </div>
                }

            </div>
        )
    }

}

export default ProfileStatus;