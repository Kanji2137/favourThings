import React, { Component } from 'react';
import GeneralList  from '../../templateToList/GeneralList';
import {
  NavLink
} from "react-router-dom";

class ListOfInspirations extends Component {
  render() {
    var len = 80;
    var numb = new Array(0);
    var posX = new Array(0);
    var posY = new Array(0);
    var listItems;
    for (var i = 0; i < len; i++){
      numb.push(Math.floor((Math.random() * 2) ));
      posX.push(Math.floor((Math.random() * 90) + 1)+'%');
      posY.push(Math.floor((Math.random() * 1400) + 1));
    }
     listItems = numb.map((numb, x) =>
      <li className="numbers" style={{left: posX[x], top: posY[x]}}>{numb}</li>
    );
    return (
      <div>
       <div className="sizeListOfProjects" id="listOfProj">
          <ul>{listItems}</ul>
          <div className="containerForLists">
              {GeneralList.map((project) => {
                  const targetPath = `/${project.path}`
                return (
                  <div key={project.id} className="boxOfList" id={project.id}>
                    <div className="container">
                    <NavLink to={targetPath}>
                        <div className="imgAndText">
                          <img src={project.imgOfProject} className="imgList"/>
                          <div className="centered"><h1>{project.NameOfProject}</h1></div>
                        </div>
                    </NavLink>
                    </div>
                  </div>
                )
                })}
            </div>
        </div>
      </div>
    )
  }
}
    
export default ListOfInspirations;