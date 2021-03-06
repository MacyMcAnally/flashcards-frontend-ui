import React, { useState } from 'react'
import { createCardTemplate } from '../../api/api';
import Header from '../Header';
import CardComponent from './CardComponent';

function CreateCardTemp() {

    const [formData, setFormData] = useState({
        description: '',
        front: '<div>what is the capital of %%STATE%% ?</div>',
        back: '<div>%%STATE_CAPITOL%%</div>'
    });

    const onCreateCardTemplate = async (e) => {
        e.preventDefault();
        try {
            await createCardTemplate(formData.description, formData.front, formData.back);
        } catch (e) {
            console.log(e);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <>
            <Header />
            <h1 id="CANCT">Create A NEW Card Tempelate</h1>
            <form onSubmit={onCreateCardTemplate}>
                <p>Please eneter a descrption for this card template: </p>
                <br></br>
                <input type="text" name="description" value={formData["description"]} onChange={handleChange}></input>
                <span></span>
                <br></br>
                <br></br>
                <textarea id="Input HTML-F" name="front" rows="10" cols="80" value={formData["front"]} onChange={handleChange}></textarea>
                <span> </span> <span> </span>
                <textarea id="Input HTML-B" name="back" rows="10" cols="80" value={formData["back"]} onChange={handleChange}></textarea>
                <br></br>
                <input type="submit" value="Submit"></input>
                <CardComponent html={formData['front']}/>
                <br></br>
                <CardComponent html={formData['back']}/>
            </form>
        </>
    )
}

export default CreateCardTemp;