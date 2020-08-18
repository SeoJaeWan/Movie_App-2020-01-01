import React from "react";
import { SelectBarContainer } from ".//SelectBarStyle";

const SelectBar = () => {
  return (
    <SelectBarContainer>
      <h1 className="select-title">오늘 뭐 보지??</h1>
      <ul className="select-menu">
        <li className="select-menu-item">
          <button>장르</button>
        </li>
        <li className="select-menu-item">
          <button>배우명</button>
        </li>
        <li className="select-menu-item">
          <button>감독명</button>
        </li>
        <li className="select-menu-item">
          <button>개봉일</button>
        </li>
        <li className="select-menu-item">
          <button>제목</button>
        </li>
      </ul>
      <button>검색</button>
    </SelectBarContainer>
  );
};

export default SelectBar;
