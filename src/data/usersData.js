const users = [
    {id: 1, firstName : 'Denys', lastName : 'Medko'},
    {id: 2, firstName : 'Oksana', lastName : 'Zhukova'},
    {id: 3, firstName : 'Nika', lastName : 'Medko'},
    {id: 4, firstName : 'Max', lastName : 'Kornev'},
    {id: 5, firstName : 'Ramzes', lastName : 'The Second'},
];
const userLikes = [
    {userId: 1, likes : 99},
    {userId: 2, likes : 199},
    {userId: 3, likes : 299},
    {userId: 4, likes : 0},
    {userId: 5, likes : 599},
];
const myLikes = [
    {userId: 1, myLike : false},
    {userId: 2, myLike : false},
    {userId: 3, myLike : false},
    {userId: 4, myLike : false},
    {userId: 5, myLike : false},
];

export const usersArray = users;
export const usersLikesArray = userLikes;
export const myLikesArray = myLikes;