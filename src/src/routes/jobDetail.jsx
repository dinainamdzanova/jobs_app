import React from "react";
import { Link } from "react-router-dom";
import { ApplyText, Desc, JobTitle } from "../style/jobDetailStyle";
import { Box, CompanyName, ContentButton, Img, Name } from "../style/contents";

const JobDetail = () => {

  return (
    <div>
      <main>
        <aside>
          <Link to="/" className="back">
            Back to homepage
          </Link>
          <p>how to apply</p>
          <ApplyText>
            Please email a copy of your resume and online portfolio to
            wes@kasisto.com & CC eric@kasisto.com
          </ApplyText>
        </aside>

        <section>
          <JobTitle>
            <Name></Name>
            <ContentButton margin="0 15px">Full time</ContentButton>
          </JobTitle>
          <Box>
            <Img src="https://picsum.photos/150/150" alt="" />
            <div>
              <CompanyName>Kasisto</CompanyName>
            </div>
          </Box>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, iusto. Animi odit doloribus fugit repudiandae rem
            voluptatum porro inventore corporis, accusamus ipsum est cumque
            aspernatur.
          </Desc>
        </section>
      </main>
    </div>
  );
};

export default JobDetail;