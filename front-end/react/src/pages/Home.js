// import React from "react";
import React, { Component } from 'react';
import StudyInfoCard from "../components/StudyInfoCard";
import HeaderSection from "../components/HeaderSection";
import { Container, Row, Col } from "reactstrap";
import StudyInfoCardList from "../components/StudyInfoCardList";

//const Home = () => {
class Home extends Component { 
 state = {
    information: [
      {
        title: 'OpenProject Platform 개발',
        subTitle: '개발자 스터디 모집 플랫폼',
        cardText: '개발자를 위한 스터디 모집 플랫폼 개발 프로젝트 참여자 모집 1)개발언어: react, java 2)개발환경: 온라인을 통한 개발',
        btnText: '등록하기',
        refUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeL1Ko8lAg6tRlfeUXCrg3wG-pTStnymBNKBKpThPuxLARq9w/viewform',
        imgSrc: '/static/playground-card.jpg',
        imgAlt: 'Image Text'
      }
      //배열 형태로
    ]
  }

  render(){
    return ( 
    <div>
      <header>
        <HeaderSection />
      </header>
      <div>
        <h1 class="my-4">Welcome to this openproject.work.</h1>
        <StudyInfoCardList data={this.state.information} />
      </div>
    </div>
    );
  } 
}

export default Home;
