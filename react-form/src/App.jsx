import { useState } from 'react'

const originalarticles = [
  'Come fare la pasta',
  'Come fare la spesa',
];

function App() {

  const [articles, setArticles] = useState(originalarticles)
  const [newPost, setNewPost] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    setArticles([...articles, newPost]);
    setNewPost("");
  }


  return (
    <>
      <div>
        {
          articles.map((article, i) => <h2 key={i}> {article} </h2>)
        }
        <form onSubmit={handleSubmit}>
          <input type='text' value={newPost} onChange={(e) => setNewPost(e.target.value)}> </input>
          <input type='submit' value="aggiungi nuovo post"></input>
        </form>
      </div>
    </>
  )
}

export default App
