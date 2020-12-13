import React, {useState} from 'react'
import { createCardTemplate, getCardTemplates } from '../../api/api';
import Header from '../Header';

function CreateCards() {

    const createNewTemp = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <Header />
        <div>
        <h1>This is CreateCards Page!</h1>
        <p>Please create a new or use an exiting card templates: </p>
        <button style={btnStyle} onClick={createNewTemp}> + </button>
        <form>
            <input type="text" />
        </form>
        </div>
        </>
    )
}

const btnStyle = {
    margin: '10px',
    fontSize: '20px',
    borderRadius: '8px',

}

export default CreateCards;
