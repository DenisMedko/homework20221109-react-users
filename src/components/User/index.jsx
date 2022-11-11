import { Component } from 'react';
import UserInfo from '../UserInfo';
import LikesSection from '../LikesSection';
import DeleteBtn from '../DeleteBtn';

class User extends Component {
    componentDidUpdate() {
        console.log('componentDidUpdate User id = '+this.props.user.id);
    }
    render() {
        const {
            user : {
                id, 
                firstName = 'no first name', 
                lastName = 'no last name',
            },
            deleteHandle = () => {}
        } = this.props;
        
        
        return (
            <div>
                <UserInfo firstName={firstName} lastName={lastName} />
                <LikesSection userId={id} />
                <DeleteBtn userId={id} deleteHandle={deleteHandle} />    
            </div>
        );
    }
}

export default User;

// const User = (props) => {
//     const {
//         user : {
//             id, 
//             firstName = 'no first name', 
//             lastName = 'no last name',
//         },
//         deleteHandle = () => {}
//     } = props;
//     return (
//         <div>
//             <UserInfo firstName={firstName} lastName={lastName} />
//             <LikesSection userId={id} />
//             <DeleteBtn userId={id} deleteHandle={deleteHandle} />  
//         </div>
//     );
// }

// export default User;
