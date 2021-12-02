import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './style.css';
import { Box, CompanyName, ContentButton, Img, Name, Section } from './style/contents';
import { Input, Button, Div } from './style/search';
import { A } from './style/sidebar';

const App = ()  => {
  const [ url, setUrl ] = useState([])

  useEffect(() => {
    async function FetchData () {
      const response = await axios.get("https://www.themuse.com/api/public/jobs?page=1")
      console.log(response.data)
      setUrl(response.data);
      return response.data;
    }
    FetchData()
  }, [url])
  
  return (
    <div className="container">
      <p><strong>Github</strong> Jobs</p>
      <header>
        <Div>
          <Input type="text" placeholder="Title, companies, expertise or benefits" />
          <Button>Search</Button>
        </Div>
      </header>

      <main>
        <aside>
          <p>category</p>
          <A href="/">category</A>
          <A href="/">category</A>
          <A href="/">category</A>
          <A href="/">category</A>
        </aside>
        <section>
          <Box>
              <Img src="https://picsum.photos/150/150" alt="" />
              <div>
                <CompanyName>Kasisto</CompanyName>
                <Name>Senior Engineer </Name>
                <ContentButton>Full time</ContentButton>
              </div>
          </Box>

          <Box>
              <Img src="https://picsum.photos/150/150" alt="" />
              <div>
                <CompanyName>Kasisto</CompanyName>
                <Name>Senior Engineer </Name>
                <ContentButton>Full time</ContentButton>
              </div>
          </Box>
        </section>
      </main>
    </div>
  )
}

export default App;


