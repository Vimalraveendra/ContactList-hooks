import React,{useState,useEffect} from 'react'
import SearchField from '../components/searchField/searchField.component';
import './App.css';
import ContactArray from '../components/contactArray/contactArray.component'

const App=() =>{
  console.log("parent rendered")
  const [dataList,setDataList] = useState([])


  useEffect(() => {
    const fetchedContactList = async ()=>{
      const response = await fetch(`https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json`)
      const data = await response.json();
      setDataList(data)

    }
    fetchedContactList()
  }, [])

  console.log('data',dataList)
  return (
    <div className="App">
      <header className="App-header">
        <h1>Contacts</h1>
      </header>
      <SearchField/>
      <ContactArray dataList={dataList}/>
    </div>
  );
}

export default App;
