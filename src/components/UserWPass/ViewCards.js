import React, { Component } from 'react'
import Header from '../Header';
import { getCards, getCardTemplates } from '../../api/api';
import CardComponent from './CardComponent';

class ViewCards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardIndex: 0,
            onFront: true,
            allCards: [],
            templates: []
        };
    }


    componentDidMount = () =>{
        this.getAllCards();
    }

    getAllCards = async () => {
        const lotsOfCards = await getCards();
        const lotsOfTemp = await getCardTemplates();
        this.setState({
            allCards: lotsOfCards,
            templates: lotsOfTemp
        });
    }

    getTemplate() {
         for (let i = 0; i < this.state.templates.length; i++) {
             const x = this.state.templates[i];
             if(x.id == this.state.allCards[this.state.cardIndex].templateID){
                 return x;
             }
         }
    }

    getCardData() {
        return JSON.parse(this.state.allCards[this.state.cardIndex].data);
    }

    displayCard () {
        const template = this.getTemplate();
        let html = this.state.onFront ? template.front : template.back;
        const cardData = this.getCardData();
        const fields = Object.keys(cardData);

        for (let x = 0; x < fields.length; x++) {
            const field = fields[x];
            const value = cardData[field];
            const pattern = `%%${field}%%`;
            html = html.replace(new RegExp(pattern, 'g'), value || pattern);
        }

        return html;
    }

    goToNextCard = (e) => {
        const nextIndex = this.state.cardIndex + 1 >= this.state.allCards.length ? 0 :
            this.state.cardIndex + 1;
        this.setState({
            cardIndex: nextIndex
        });
    }

    goToPreviousCard = (e) => {
        const previousIndex = this.state.cardIndex - 1 < 0 ? this.state.allCards.length - 1 :
            this.state.cardIndex - 1;
        this.setState({
            cardIndex: previousIndex
        });
    }

    flipCard = (e) => {
        this.setState({
            onFront: !this.state.onFront
        });
    };

    render() {
        return (
            <>
                <Header />
                <div>
                    <h1 id="VC">View Cards</h1>
                    <span style={{paddingRight: 8}}>Card #{this.state.cardIndex + 1}</span>
                    <span> </span>
                    <button onClick={this.flipCard}>Flip</button>
                    <span> </span>
                    <button onClick={this.goToPreviousCard}>Previous</button>
                    <span> </span>
                    <button onClick={this.goToNextCard}>Next</button>
                    {
                        this.state.allCards.length &&
                        (<CardComponent style={{display: 'center'}} html={this.displayCard()} />)
                    }
                </div>
            </>
        )
    }
}

export default ViewCards
