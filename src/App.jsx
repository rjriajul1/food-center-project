
import { useEffect, useState} from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Categories from './components/Categories/Categories'
import ShowCategory from './components/ShowCategory/ShowCategory'

function App() {

  const [data, setData] = useState([])
  const [categoryName, setCategoryName] = useState("")
  const [activeButton, setActiveButton] = useState(null)
  


  useEffect(()=>{
 fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
 .then(res=>res.json())
 .then(data=>setData(data.categories
 ))
  },[])

  const handleButton = (itemName,element) =>{
    setCategoryName(itemName)
    handleActiveButton(element)

  }

  const handleActiveButton = (element) =>{
    setActiveButton(element)

  }


  return (
    <>
  
  <div>

<Navbar></Navbar>
<Banner></Banner>

<Categories activeButton={activeButton} handleButton={handleButton} data={data}></Categories>
<ShowCategory  categoryName={categoryName}></ShowCategory>


  </div>
    
    
    </>
  )
}

export default App
