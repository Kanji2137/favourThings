import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListBooks extends Component {
    render() {
        var len = 100;
        var numb = new Array(0);
        var posX = new Array(0);
        var posY = new Array(0);
        var listItems;
        for (var i = 0; i < len; i++){
        numb.push(Math.floor((Math.random() * 2) ));
        posX.push(Math.floor((Math.random() * 90) + 1)+'%');
        posY.push(Math.floor((Math.random() * 1400) + 1));
        }
        listItems = numb.map((n, x) =>
        <li key={x} className="numbers" style={{left: posX[x], bottom: posY[x]}}>{n}</li>
        );
        return (
            <div className="backgroundBooks">
                <ul>{listItems}</ul>
                <h1 className="TextToSegmentBooks">My favourite books</h1>
                <div className="ContainerForListsOfBooks">
                    {this.props.books.map((project) => {
                        return (
                        <div key={project.id} className="boxOfListOfBooks" id={project.id}>
                            <div className="containerOfBooks" >
                                <div className="imgAndTextOfBooks" >
                                    <a href={project.linkToBook} target="_blank"><img src={project.imgOfProject} className={project.className}/></a>
                                </div>
                            </div>
                        </div>
                        )
                        })}
                </div>
            </div>
        );
    }
}

ListBooks.propTypes = {
    books: PropTypes.array.isRequired
};

export default ListBooks;