import React, { Component } from 'react';
import StudyInfoCard from "../components/StudyInfoCard";
import HeaderSection from "../components/HeaderSection";
import { Container, Row, Col } from "reactstrap";
import StudyInfoCardList from "../components/StudyInfoCardList";

//const Home = () => {
class Promotion extends Component { 
 state = {
    information: [
      {
        title: 'Playground Project',
        subTitle: '개발자 스터디 모집 플랫폼',
        cardText: '개발자를 위한 스터디 모집 플랫폼 개발 프로젝트 참여자 모집',
        btnText: '등록하기',
        imgSrc: '/static/playground-card.jpg',
        imgAlt: 'Image Text'
      }
      //배열 형태로
    ]
  }

  render(){
    return ( 
    <div>
      <b>Coming Soon!</b>
    </div>
    );
  } 
}

export default Promotion;
