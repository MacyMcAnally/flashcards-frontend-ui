import React, { useState, useEffect } from 'react'
import { createCardTemplate, getCardTemplates, createCard } from '../../api/api';
import Header from '../Header';
import CardComponent from './CardComponent';


class CreateCards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chosenTemplate: 0,
            templates: [],
            cardData: {}
        };
    }

    componentDidMount = () => {
        this.fetchTemplates();
    }

    fetchTemplates = async () => {
        const temps = await getCardTemplates();
        this.setState({
            templates: temps
        });
    }

    getCardFrontHtml() {
        const template = this.state.templates[this.state.chosenTemplate];
        return template ? this.getCardSideHtml(template.front) : '';
    }

    getCardBackHtml() {
        const template = this.state.templates[this.state.chosenTemplate];
        return template ? this.getCardSideHtml(template.back) : '';
    }

    getCardSideHtml(html) {
        const fields = Object.keys(this.state.cardData);

        for (let x = 0; x < fields.length; x++) {
            const field = fields[x];
            const value = this.state.cardData[field];
            const pattern = `%%${field}%%`;
            html = html.replace(new RegExp(pattern, 'g'), value || pattern);
        }

        return html;
    }

    // returns fields in the currently selected card template
    // ie those strings surrounded with %%'s
    getFields(template = this.state.templates[this.state.chosenTemplate]) {
        if (!template) {
            return [];
        }

        const obj = {};

        (template.front + template.back)
            .match(new RegExp('%%([a-zA-Z_ 0-9]+)%%', 'g'))
            .forEach(dirtyString => {
                const field = dirtyString.substring(2, dirtyString.length - 2);
                obj[field] = true;
            });

        return Object.keys(obj);
    }

    onTemplateChange = (e) => {
        const nextTemplateIndex = Number(e.target.value);
        const fields = this.getFields(this.state.templates[nextTemplateIndex]);
        const cleanData = {};

        for (let i = 0; i < fields.length; i++) {
            const x = fields[i];
            // place x as a key in cleanData whose value is the value for x in cardData
            cleanData[x] = this.state.cardData[x]
        }
        
        this.setState({
            cardData: cleanData,
            chosenTemplate: nextTemplateIndex
        });
    }

    handleChange = (e) => {
        this.setState({
            cardData: {
                ...this.state.cardData,
                [e.target.name]: e.target.value
            }
        });
    }

    createANewCard = async (e) => {
        //now combine the cardtemplate that is chosen by the user + the Stringify carddata into a new card
        const x = JSON.stringify(this.state.cardData);
        const template = this.state.templates[this.state.chosenTemplate]
        await createCard(template.id, x);
    }

    /*
        {
            templateID: 1,
            data: '{"STATE":"California","CAPITOL":"Sacramento"}',
        }
    */
    render() {
        const fields = this.getFields();

        return (
            <>
                <Header />
                <div>
                    <h1 id="CAC">Create A New Cards</h1>
                    {
                        this.state.templates.length > 0 ?
                            (
                                <select name="cardTemplate" value={this.state.chosenTemplate} onChange={this.onTemplateChange}>
                                    {
                                        this.state.templates.map((t, i) => {
                                            return (
                                                <option value={i} key={i}>{t.description}</option>
                                            )
                                        })
                                    }
                                </select>
                            ) :
                            (<span>make a template!</span>)
                    }

                    <br></br>
                    {
                        fields.map((field, index) => {
                            <span> </span>
                            return (<input key={index} name={field} value={this.state.cardData[field] || ''} placeholder={field} onChange={this.handleChange}></input>);
                            <br></br>
                        })
                    }
                    <span> </span>
                    <button onClick={this.createANewCard}>Create</button>
                   <span> </span><CardComponent html={this.getCardFrontHtml()} />
                    <CardComponent html={this.getCardBackHtml()} />
                </div>
            </>
        );
    }
}

// function CreateCardsZ() {
//     const [state, setState] = useState({
//         templates: []
//     });

//     useEffect(() => {
//         async function fetchTemplates() {
//             const date = Date.now();
//             console.log(date + 'fetching templates');
//             const temps = await getCardTemplates();
//             await new Promise(res => {
//                 setTimeout(res, 2000);
//             });
//             console.log(date + 'about to set state');

//             setState(() => {
//                 return {
//                     templates: temps
//                 }}
//             );
//         }
//         fetchTemplates();
//     }, []);

//     return (
//         <>
//             <Header />
//         <div>
//             <h1>This is CreateCards Page!</h1>
//             {
//                 state.templates.map(t => t.description)
//             }
//         </div>
//         </>
//     )
// }


export default CreateCards;