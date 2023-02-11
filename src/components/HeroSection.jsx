import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { useGlobalContext } from "../context"
import Services from "../Services"

const HeroSection = () => {
  const { name, image , query, searchPost} = useGlobalContext();

  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
          <p className="hero-top-data">it's join with</p>
          <h1 className="hero-heading">Rainbow House</h1>
          <p className="hero-para">
          “The light is what guides you home, the warmth is what keeps you there.” 
          </p>
          <form >
            <div>
            <input type="text" placeholder="search here "
            value = {query}
            onChange={(e) => searchPost(e.target.value)}
            />
            </div>
          </form>
           <Button className="btn hireme-btn" style={{ margin: '4rem' }}>
            <NavLink to="/Services"> Apply now </NavLink>
          </Button> 
        </div>

        {/* for image  */}
        <div className="section-hero-image">
          <picture>
            <img src="./images/Home.jpg" alt="home image" className="home-img " />
          </picture>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
   //padding: 2rem 0;

  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .btn {
    max-width: 16rem;
  }

  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
  }

  .hero-heading {
    text-transform: uppercase;
    font-size: 6.4rem;
  }

  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }

  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .btn hireme-btn{
    margin:5rem;
  }

  picture {
    text-align: center;
  }

  .home-img {
    max-width: 120%;
    
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
  }
`;

export default HeroSection;