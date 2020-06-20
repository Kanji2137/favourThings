import React, { Component } from 'react';
import WordIns from './elementsComp/WordIns'
import ListOfInspirations from './elementsComp/ListOfInspirations'

class Home extends Component {
  render() {
    return (
      <div>
        <div className="WordInsParent">
          <div className="WordInsChild">
            <WordIns style={{zIndex: "3"}}/>
          </div>
        </div>
        <ListOfInspirations/>
      </div>
    )
  }
}
    
export default Home;