import Profile from './Profile'
import withAuthRedirect from '../../hoc/withAuthRedirect'

debugger;

const ProfileContainer = withAuthRedirect(Profile);

export default ProfileContainer;