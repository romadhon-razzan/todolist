import React from 'react';
import { Form, Container, Input, Button, Row, Col, Card, CardBody, FormGroup, Label } from 'reactstrap';
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
            tempItem.splice(pos, 1);
            this.setState({listItem: tempItem});
            event.preventDefault()
        });
    }
    inputListener = (event) => { this.setState({ item: event.target.value }) }
    render(){
        const StyleItem = styled.div`
            height: 50px;
            background-color: #F3E5F5;
            border-bottom: 2px solid grey;
            border-radius: 10px;
            margin-top: 10px;
            padding-left: 10px;
            padding-right: 10px;
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
                                        <Input type="text" placeholder="Ketik sesuatu kemudian tekan ENTER" value={this.state.item} onChange={this.inputListener}/>
                                    </Form>
                                    <hr/>
                                    <div>
                                        { this.state.listItem.map((item, index) => 
                                                <StyleItem key={index}>
                                                    <Form onSubmit={this.removeItem(index)}>
                                                        <FormGroup>
                                                            <Label for="btnRemove">{item}</Label>
                                                            <Button id="btnRemove" close type="submit"/>
                                                        </FormGroup>
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