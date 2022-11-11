import React, { Component } from 'react';
import LikesDisplay from '../LikesDisplay';
import LikesBtn from '../LikesBtn';
import { usersLikesArray, myLikesArray } from '../../data/usersData';

class LikesSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            likes : usersLikesArray.filter(likes => likes.userId === this.props.userId)[0].likes || 0,
            myLike : myLikesArray.filter(myLikes => myLikes.userId === this.props.userId)[0].myLike || false, 
        };
    }
    componentDidUpdate() {
        console.log('componentDidUpdate LikesSection id = '+this.props.userId);
    }
    componentWillUnmount() {
        console.log('componentWillUnmount LikesSection id = '+this.props.userId); 
        this.setState({});
    }
    likeHandle = () => {
        this.setState({
            ...this.state, 
            likes : this.state.likes + 1,
            myLike : true,
        });
    };
    render() {
        const {likes, myLike} = this.state;
        return (
            <>
                <LikesDisplay likes={likes} />
                <LikesBtn likeHandle={this.likeHandle} myLike={myLike} /> 
            </>    
        );
    }
}

export default LikesSection;
