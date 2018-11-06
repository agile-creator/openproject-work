// import React from 'react';
import React,{ Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Alert } from 'reactstrap';
import { Link } from 'react-router-dom';

// const StudyInfoCard = (props) => {
class StudyInfoCard extends Component {

  onButtonClick(){
     //alert('모집중 입니다.');
     //window.open('https://docs.google.com/forms/d/e/1FAIpQLSeL1Ko8lAg6tRlfeUXCrg3wG-pTStnymBNKBKpThPuxLARq9w/viewform','window_name','width=430,height=500,location=no,status=no,scrollbars=yes');       
     //location.href='address'
     //parent.location.href='https://docs.google.com/forms/d/e/1FAIpQLSeL1Ko8lAg6tRlfeUXCrg3wG-pTStnymBNKBKpThPuxLARq9w/viewform';
     //this.props.history.push('https://docs.google.com/forms/d/e/1FAIpQLSeL1Ko8lAg6tRlfeUXCrg3wG-pTStnymBNKBKpThPuxLARq9w/viewform');
     window.location='/answer?refUrl='+this.props.refUrl;
    }

  render(){
    return (
      <Card> 
        <CardImg top width='100%' src={this.props.imgSrc} alt={this.props.imgAlt} />
        <CardBody>
          <CardTitle>{this.props.title}</CardTitle>
          <CardSubtitle>{this.props.subTitle}</CardSubtitle>
          <CardText>{this.props.cardText}</CardText>
          <Button onClick={() => this.onButtonClick()} >{this.props.btnText}</Button>
        </CardBody>
      </Card>
    );
  };
}
StudyInfoCard.defaultProps = {
  title: 'Card title',
  subTitle: 'Card subtitle',
  cardText: 'Card Text',
  btnText: 'Button',
  refUrl:'',
  imgSrc: '',
  imgAlt: 'Image Text'
};

export default StudyInfoCard;