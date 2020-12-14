import { cards, cardTemplates, users, lastcardid, lastcardtemplateid, lastuserid, newUser}
    from './db';

let currentUser = users[1];

export async function getCards() {
    if (!currentUser) {
        return [];
    }

    const thisUsersTemplates = cardTemplates.filter(t => {
        return t.userID == currentUser.id;
    }).map(t => t.id);

    return cards.filter(t => {
        return thisUsersTemplates.indexOf(t.templateID) !== -1;
    });
}

// t has same fields as a card template in cardTemplates.
export async function editCard(t) {
    for (let n = 0; n < cards.length; n++) {
        const w = cards[n];
        if (w.id == t.id) {
            w = {
                ...w,
                ...t
            };
        }
    }
}

// see cardtemplateinrequest.java
export async function createCard(templateID, data) {
    const c = {
        id: ++lastcardid,
        templateID: templateID,
        data: data
    };
    cards.push(c);
}


export async function getCardTemplates() {
    if (!currentUser) {
        return [];
    }

    return cardTemplates.filter(t => {
        return t.userID === currentUser.id;
    });
}

// t has same fields as a card template in cardTemplates.
export async function editCardTemplate(t) {
    for (let n = 0; n < cardTemplates.length; n++) {
        const w = cardTemplates[n];
        if (w.id == t.id) {
            w = {
                ...w,
                ...t
            };
        }
    }
}

// see cardtemplateinrequest.java
export async function createCardTemplate(description, front, back) {
    const t = {
        id: ++lastcardtemplateid,
        userID: currentUser.id,
        description: description,
        front: front,
        back: back
    };
    cardTemplates.push(t);
}

export function getCurrentUser() {
    return currentUser;
}

export async function login(username, password) {
    for (let i = 0; i < users.length; i++) {
        const u = users[i];
        if (u.username == username && u._password == password) {
            currentUser = u;
            return;
        }
    }

    throw new Error('couldnt login!');
}


//create a new User
export async function createUser(username, password) {
    const u = {
        id: ++lastuserid,
        username: username,
        admin: false,
        _password: password        
    };
    users.push(u);
 }

