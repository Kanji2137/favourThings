import React, { Component } from 'react';
import WordIns from '../elementsToHomeWebsite/WordIns'
import ListOfInspirations from '../elementsToHomeWebsite/ListOfInspirations'

class Home extends Component {
  render() {
    return (
      <div>
        <div className="WordInsParent">
          <div className="WordInsChild">
            <WordIns style={{zIndex: "3"}}/>
          </div>
        </div>
        <ListOfInspirations generalList={this.props.generalList}/>
      </div>
    )
  }
}
    
export default Home;