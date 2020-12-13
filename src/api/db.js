module.exports = {
    users:[
  {
      id: 1,
      username: 'macy',
      admin: true,
      _password: 'pass'
  },
  {
      id: 2,
      username: 'vincent',
      admin: false,
      _password: 'pass'
  }
    ],
    lastuserid:2,
    cardTemplates: [
        {
            id: 1,
            userID: 2,
            description: 'this template is for X',
            front: '<div>%%FRONT%%</div>',
            back: '<div style="background-color:red">%%BACK%%</div>',
        },
        {
            id: 2,
            userID: 2,
            description: 'this template is for Y',
            front: '<div>%%FRONT%%</div>',
            back: '<div style="background-color:blue">%%BACK%%</div>',
        }
    ],
    lastcardtemplateid: 2,

    cards: [
        {
            id: 1,
            templateID: 1,
            data: "",
        },
        {
            id: 2,
            templateID: 1,
            data: "",
        },
        {
            id: 3,
            templateID: 2,
            data: "",
        }
    ],
    lastcardid: 3
}

