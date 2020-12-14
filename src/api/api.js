import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';
import Axios from 'axios';

let currentUser = undefined;

if (Cookies.get('jwt')) {
    onjwtReceieved(Cookies.get('jwt'));
}

export async function getCards() {
    const jwt = Cookies.get('jwt');
    if (!currentUser || !jwt) {
        return [];
    }

    const resp = await Axios.get(geturl('/cards?userId=' + currentUser.id), {
        headers: {
            'Authorization': 'Bearer ' + jwt
        }
    });

    return resp.data.success;
}

// see cardtemplateinrequest.java
export async function createCard(templateID, data) {
    const jwt = Cookies.get('jwt');

    if (!currentUser || !jwt) {
        return;
    }

    await Axios.post(geturl('/cards'), {
        templateID: templateID,
        data: data
    }, {
        headers: {
            'Authorization': 'Bearer ' + jwt
        }
    });
}


export async function getCardTemplates() {
    const jwt = Cookies.get('jwt');
    if (!currentUser || !jwt) {
        return [];
    }

    const resp = await Axios.get(geturl('/card_templates?userId=' + currentUser.id), {
        headers: {
            'Authorization': 'Bearer ' + jwt
        }
    });

    return resp.data.success;
}

// see cardtemplateinrequest.java
export async function createCardTemplate(description, front, back) {
    const jwt = Cookies.get('jwt');

    if (!currentUser || !jwt) {
        return;
    }

    const t = {
        userID: currentUser.id,
        description: description,
        front: front,
        back: back
    };

    await Axios.post(geturl('/card_templates'), t, {
        headers: {
            'Authorization': 'Bearer ' + jwt
        }
    });
}

function geturl(path) {
    return `http://18.221.157.116:8080/api${path}`;
}

export async function login(username, password) {
    const resp = await Axios.post(geturl('/login'), {
        username: username,
        password: password
    });
    onjwtReceieved(resp.data.success);
}

function onjwtReceieved(jwt) {
    const auth = JSON.parse(jwt_decode(jwt).auth);
    currentUser = {
        id: auth.userID,
        admin: auth.admin
    };
    console.log('signed in with user ' + JSON.stringify(currentUser));
    Cookies.set('jwt', jwt);
}


//create a new User
export async function createUser(username, password) {
    const res = await Axios.post(geturl('/users'), {
        username: username,
        password: password
    });
    console.log(res.data.success);
}