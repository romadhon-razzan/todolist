import React from 'react';
import { Form, Container, Input, Button, Row, Col, Card, CardBody } from 'reactstrap';
import styled from 'styled-components';
class FormList extends React.Component{
    constructor(props){
        super(props)
        this.state = { item:'', listItem:[]}
    }
    submitItem = (event) => {
        event.preventDefault()
        this.setState({ item:'', listItem: [...this.state.listItem, this.state.item] })
    }
    removeItem (pos) {
        return((event)=>{
            var tempItem = [...this.state.listItem]; 
            if (pos !== -1) {
                tempItem.splice(pos, 1);
                this.setState({listItem: tempItem});
            }
            event.preventDefault()
        });
    }
    inputListener = (event) => { this.setState({ item: event.target.value }) }
    render(){
        const StyleForm = styled.div`
            width: 50%;
            margin: auto;
        `;
        const StyleItem = styled.div`
            height: 50px;
            background-color: #F1F8E9;
            border-bottom: 2px solid grey;
            border-radius: 10px;
            margin-top: 10px;
            padding-left: 10px;
            padding-top: 10px;
        `;
        return(
            <div>
                <Container>
                    <Row>
                        <Col/>
                        <Col lg="8"> 
                            <h3>
                                <u>TODO List</u>
                            </h3>
                            <Card>
                                <CardBody>
                                    <Form onSubmit={this.submitItem}>
                                        <Input value={this.state.item} onChange={this.inputListener}/>
                                    </Form>
                                    <hr/>
                                    <div>
                                        { this.state.listItem.map((item, index) => 
                                                <StyleItem key={index}>
                                                    {item}
                                                    <Form onSubmit={this.removeItem(index)}>
                                                        <Button value={item} close type="submit"/>
                                                    </Form>
                                                </StyleItem>
                                            )}
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col/>
                    </Row>
                </Container>
            </div>
        );
    }
}
export default FormList