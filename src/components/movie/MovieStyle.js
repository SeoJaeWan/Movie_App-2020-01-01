import styled from "styled-components";

export const MovieStyle = styled.div`
  min-width: 480px;
  width: 40%;
  background-color: white;
  margin-bottom: 70px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  font-weight: 300;
  padding: 20px;
  color: #b2b3bc;
  border-radius: 5px;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);

  img {
    position: relative;
    top: -50px;
    max-width: 140px;
    margin-right: 30px;
    box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
      0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  }

  .Movie_title,
  .Movie_year {
    margin: 0;
    font-weight: 300;
  }

  .Movie_title,
  .Movie_synopsis {
    color: #2c2c2c;
  }

  .Movie_title {
    margin-bottom: 5px;
    font-size: 24px;
  }

  .Movie_sub {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    margin: 5px 0px;
    font-size: 14px;
  }

  .Movie_genres {
    margin-right: 20px;
  }

  a {
    padding: 2px;
    color: #b2b3bc;
    text-decoration: none;
    border: 1px solid;
    border-radius: 5px;
    transition: all 0.3s;
  }
  a:hover {
    background-color: #b2b3bc;
    color: white;
  }
`;
