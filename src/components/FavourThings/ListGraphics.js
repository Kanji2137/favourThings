import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListGraphics extends Component {
    render() {
        var len = 70;
        var numb = new Array(0);
        var posX = new Array(0);
        var posY = new Array(0);
        var listItems;
        for (var i = 0; i < len; i++){
        numb.push(Math.floor((Math.random() * 2) ));
        posX.push(Math.floor((Math.random() * 90) + 1)+'%');
        posY.push(Math.floor((Math.random() * 1400) + 100));
        }
        listItems = numb.map((n, x) =>
        <li key={x} className="numbers" style={{left: posX[x], top: posY[x]}}>{n}</li>
        );
        return (
            <div className="backgroundGraphics">
                <ul>{listItems}</ul>
                <h1 className="TextToSegmentGraphics">My favourite graphics</h1>
                <div className="ContainerForListsOfGraphics">
                    {this.props.graphics.map((project) => {
                        return (
                        <div key={project.id} className="boxOfListOfGraphics" id={project.id}>
                            <div className="containerOfGraphics" >
                                <div className="imgAndTextOfGraphics" >
                                    <a href={project.linkToGraphic} target="_blank"><img src={project.imgOfProject} className="imgListOfGraphics"/></a>
                                    <div className="bottom-left" style={{color:project.color}}><h5 style={{fontFamily: project.fontFamily}}>{project.NameOfAlbum}</h5></div>
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

ListGraphics.propTypes = {
    graphics: PropTypes.array.isRequired
};

export default ListGraphics; 