import { PureComponent } from 'react';
import UserInfo from '../UserInfo';
import LikesSection from '../LikesSection';
import DeleteBtn from '../DeleteBtn';

class User extends PureComponent {
    // при удалении юзера из списка все элементы ререндерились
    // решение - PureComponent вместо Component
    componentDidUpdate() {
        console.log('componentDidUpdate User id = '+this.props.user.id);
    }
    //shouldComponentUpdate(nextProps, nextState) {
        //return false;
    //}
    render() {
        const {
            user : {
                id, 
                firstName = 'no first name', 
                lastName = 'no last name',
            },
            deleteHandle = () => {}
        } = this.props;
        
        console.log('render User id = '+this.props.user.id);
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
