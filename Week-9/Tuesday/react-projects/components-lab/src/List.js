import React, { Component } from 'react';
import Card from "./Card.js";

class List extends Component {
    render() {
        let casey = [
            {
                image: "https://secure.img1-fg.wfcdn.com/im/62945217/resize-h700-p1-w700%5Ecompr-r85/8470/84707680/Pokemon+Pikachu+Wall+Decal.jpg",
                name: "Johnny",
                description: "Good looking chap"
            },
            {
                image: "https://www.telegraph.co.uk/content/dam/films/spark/warnerhomevideo/gremlin.jpg?imwidth=450",
                name: "Mark",
                description: "Ugly looking chap"
            }
        ]

return (
            <div>
                {people.map((person, index) => {
                    return (
                    <Card
                        image={person.images}
                        name={person.name}
                        description={person.description}
                        index={index}
                    />
                    )
                })}
            </div>
        );
    }
}

export default List;