
export const BASE_URL = "http://strangers-things.herokuapp.com/api/2110-FTB-PT-WEB-PT";

export const fetchPosts = async (token) => {  
    try {
        const response = await fetch(`${BASE_URL}/posts`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        const { data: { posts } } = await response.json();
        return posts;
    } catch (error) {
        console.error(error);
    }console.log('fetchPosts: ', fetchPosts);
}

export const login = async (username, password) => {

        const response = await fetch(`${BASE_URL}/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json',
            },
            body: JSON.stringify({
                user: {
                    username,
                    password,
                }
            })
        })
        const { data: { token } } = await response.json();
        console.log('token', username);
        return token;
}

export const register = async (username, password) => {

    const response = await fetch(`${BASE_URL}/users/register` , {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: {
                username,
                password,
            }
        })
    })

    const {data: { token } } = await response.json();
    return token;
}

export const getUser = async (token) => {
    const response = await fetch(`${BASE_URL}/users/me` , {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    })
    const { data: userObject } = await response.json();
    return userObject;
}