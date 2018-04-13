import React, { Component } from 'react';
import './App.css';

const sampleList = [ 
  { 
    title: 'Terminator 2 Judgement Day',
    url: 'http://www.imdb.com/title/tt0103064/',
    objectID: 0,
  }, 

  { 
    title: 'Primer',
    url: 'http://www.imdb.com/title/tt0390384/',
    objectID: 1,
  },

  {
    title: 'Avatar',
    url: 'http://www.imdb.com/title/tt0499549/?ref_=fn_al_tt_2',
    objectID: 2
  },
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sampleList,
    }

    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss(id){
      const isNotId = item => item.objectID !== id;
      const updatedList = this.state.sampleList.filter(isNotId); 

      this.setState({ sampleList: updatedList });
  }

  render() {
    const {sampleList} = this.state;
    let fakeArr = [];

    return ( 
      <div className="App">
        <h1>My Movie Catalog</h1>
        <Table
          list={sampleList}
          onDismiss={this.onDismiss}
        />
        <div>
            <img src='/popcorn.png' className="PopcornLarge"></img>
        </div>
      </div>
    );
  }
}
  
 const Button = ({onClick, className = '', children}) => 
      <button
      onClick={onClick}
      className={className}
      type="button"
      >
      {children}
    </button>

 const Table = ({list, onDismiss}) =>
     <div className="table"> 
        {list.map(item =>
          <div key={item.objectID}>
            <span><a href={item.url}>{item.title}</a></span>&nbsp;&nbsp;&nbsp;
          <span>
          <Button onClick={() => onDismiss(item.objectID)}>Dismiss</Button>
          </span>
          </div>
          )}
     </div>

export default App;