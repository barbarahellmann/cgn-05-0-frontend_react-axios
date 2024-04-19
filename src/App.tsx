import axios from "axios";

function App() {

  function fetchData() {
    axios.get("https://regres.in/api/users").then((response) =>{
      console.log(response.data)
    })
  }

  fetchData()

  return (
    <>
        hello world
    </>
  )
}

export default App
