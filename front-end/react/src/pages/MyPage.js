import React, { Component } from 'react';
import StudyInfoCard from "../components/StudyInfoCard";
import HeaderSection from "../components/HeaderSection";
import { Container, Row, Col } from "reactstrap";
import StudyInfoCardList from "../components/StudyInfoCardList";

//const Home = () => {
class MyPage extends Component { 
 state = {
    information: [
      {
        title: 'Project',
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

export default MyPage;
