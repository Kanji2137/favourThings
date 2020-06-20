import React, { Component } from 'react';
import ListOfMusic  from '../../templateToList/ListOfMusic';
import ListRestOfGMusic from '../../templateToList/ListRestOfGMusic';
import { FaYoutube } from 'react-icons/fa';

class ListMusic extends Component {
    render() {
        var len = 70;
        var numb = new Array(0);
        var posX = new Array(0);
        var posY = new Array(0);
        var listItems;
        for (var i = 0; i < len; i++){
        numb.push(Math.floor((Math.random() * 2) ));
        posX.push(Math.floor((Math.random() * 90) + 1)+'%');
        posY.push(Math.floor((Math.random() * 1200) + 1));
        }
        listItems = numb.map((numb, x) =>
        <li className="numbers" style={{left: posX[x], top: posY[x]}}>{numb}</li>
        );
        return (
            <div className="background">
                <ul>{listItems}</ul>
                <h1 className="TextToSegmentMusic">My favourite albums</h1>
                <div className="ContainerForListsOfMusic">
                    {ListOfMusic.map((project) => {
                        return (
                        <div key={project.id} className="boxOfListOfMuisc" id={project.id}>
                            <div className="containerOfMuisc" >
                                <div className="imgAndTextOfMuisc" >
                                    <a href={project.linkToAlbum} target="_blank"><img src={project.imgOfProject} className="imgListOfMuisc"/></a>
                                    <div className="bottom-left" style={{color:project.color}}><h5 style={{fontFamily: project.fontFamily}}>{project.NameOfAlbum}</h5></div>
                                </div>
                            </div>
                        </div>
                        )
                        })}
                </div>
                <h1 className="TextToSegmentMusic">Rest of good music</h1>
                <div className="ContainerForListsOfMusic">
                    {ListRestOfGMusic.map((project) => {
                        return (
                        <a href={project.linkToSong} target="_blank">
                            <div key={project.id} className="barOfListOfMuisc" id={project.id}>
                                    <div className="TextOfMuiscBar" style={{color:"#fff"}}>
                                        <FaYoutube style={{fontSize:"50px", float: "left", marginLeft: "25px"}}/>
                                        <div className="titleSong">{project.NameOfProject}</div>
                                    </div>
                            </div>
                        </a>
                        )
                        })}
                </div>
            </div>
        );
    }
}

export default ListMusic;