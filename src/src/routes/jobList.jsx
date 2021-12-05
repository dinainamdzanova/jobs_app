import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, CompanyName, ContentButton, Img, Name, Pag, PrevNextButton } from "../style/contents";
import { Input, Button, Div } from "../style/search";
import { A } from "../style/sidebar";

const JobList = () => {
  const [url, setUrl] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setFetching(true);
    axios
      .get("https://www.themuse.com/api/public/jobs?page=" + page)
      .then((res) => {
        console.log(res.data);
        setUrl(res.data);
        setFetching(false);
      });
  }, [page]);


  return (
    <div>
      <header>
        <Div>
          <Input
            type="text"
            placeholder="Title, companies, expertise or benefits"
          />
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
          {fetching === false
            ? url?.results?.map((result, id) => (
                <Box>
                  <Img src="https://picsum.photos/150/150" alt="" />
                  <div>
                    <CompanyName>{result.company.name}</CompanyName>
                    <Name>{result.name}</Name>
                   <Link to={`/jobdetail/${id}`}> <ContentButton>Full time</ContentButton></Link>
                  </div>
                </Box>
              ))
            : null}
             
        <Pag>
        <PrevNextButton onClick={() => setPage(page - 1)}>Prev</PrevNextButton>      
        <PrevNextButton onClick={() => setPage(page + 1)}>Next</PrevNextButton> 
        </Pag>
        </section>
      </main>
    </div>
  );
};

export default JobList;


// https://www.themuse.com/api/public/jobs?category=Product&level=Mid%20Level&page=1