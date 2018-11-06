import React, { Component } from 'react';
import StudyInfoCard from './StudyInfoCard';
import { Container, Row, Col } from 'reactstrap';

class StudyInfoCardList extends Component {
  static defaultProps = {
    data: []
  }

  render() {
    let columnCount = 0;
    const { data } = this.props;

    const list = data.map(
      info => (
        <StudyInfoCard title={info.title} subTitle={info.subTitle} 
                       cardText={info.cardText} btnText={info.btnText}
                       imgSrc={info.imgSrc} imgAlt={info.imgAlt} refUrl={info.refUrl}  />
    ));

/*    const list = data.map(
      info => (
        <Row>
          <Col sm='4'>
              <StudyInfoCard title={info.title} subTitle={info.subTitle} 
                              cardText={info.cardText} btnText={info.btnText}
                              imgSrc={info.imgSrc} imgAlt={info.imgAlt} />
          </Col>
          <Col sm='4'>
              <StudyInfoCard title={info.title} subTitle={info.subTitle} 
                              cardText={info.cardText} btnText={info.btnText}
                              imgSrc={info.imgSrc} imgAlt={info.imgAlt} />
          </Col>
          <Col sm='4'>
              <StudyInfoCard title={info.title} subTitle={info.subTitle} 
                              cardText={info.cardText} btnText={info.btnText}
                              imgSrc={info.imgSrc} imgAlt={info.imgAlt} />
          </Col>
        </Row>
    ));
*/
    return (
      <div>
      <Container>
        {list}    
      </Container>
      </div>
    );
  }
}

export default StudyInfoCardList;