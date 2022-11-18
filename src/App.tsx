import React, { useState } from 'react';
import axios from 'axios'
import { singleQuizModel } from './app/models/singleQuiz/singleQuizModel';
import AppRouters from './app/routes';
function App() {
  const [data, setData] = useState<singleQuizModel[]>([])
  const getData = async () => {
    const response = await axios.get("http://jservice.io/api/random?count=1")
    console.log(response.data);
    setData(response.data)
  }
  useState(() => {
    getData()
  })
  useState(() => {
    console.log(data);

  })

  return (
    <div className="App">
      
      <AppRouters />
      {data.map(e => <p key={e.id}>Вопрос номер {e.id}</p>)}
    </div>
  );
}

export default App;
