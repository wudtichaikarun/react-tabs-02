import React, { Component } from 'react';
import Tabs from './Tabs'
import TabPane from './TabPane'

class App extends Component {
  render() {
    return (
      <div className='container mt-2' >
        <Tabs activeTab={0} >
          <TabPane title='Shade of You' >
            is simply dummy text of the printing 
            and typesetting industry. Lorem Ipsum 
            has been the industry's standard dummy 
            text ever since the 1500s, when an 
            unknown printer took a galley of type 
            and scrambled it to make a type specimen 
            book. It has survived not only five 
            centuries
          </TabPane>
          <TabPane title="I Don't Wanna Live Forever">
            It is a long established fact that a reader 
            will be distracted by the readable content 
            of a page when looking at its layout. 
            The point of using Lorem Ipsum is that it 
            has a more-or-less normal distribution of 
            letters, as opposed to using 'Content here, 
            content here', making it look like readable
            English. Many desktop publishing 
          </TabPane>
          <TabPane title='Chained To The Rhythm'>
            packages and web page editors now use Lorem 
            Ipsum as their default model text, and a 
            search for 'lorem ipsum' will uncover many 
            web sites still in their infancy. Various 
            versions have evolved over the years, 
            sometimes by accident, sometimes on purpose 
            (injected humour and the like).
          </TabPane>
        </Tabs>
      </div>
    )
  }
}

export default App;
