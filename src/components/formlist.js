import React from 'react';
import { Form, Container, Input, Button, Row, Col, Card, CardBody, FormGroup, Label, InputGroup, InputGroupAddon } from 'reactstrap';
import styled from 'styled-components';
class FormList extends React.Component{
    constructor(props){
        super(props)
        this.state = { item:'', listItem:[]}
    }
    submitItem = (event) => {
        event.preventDefault()
        if (this.state.item != '')
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
            padding-top: 10px;
            padding-left:10px;
            padding-right:10px;
        `;
        return(
                <Container>
                    <Row>
                        <Col/>
                        <Col lg="6"> 
                            <h3><u>TODO List</u></h3>
                            <Card>
                                <CardBody>
                                    <Form onSubmit={this.submitItem} >
                                            <FormGroup>
                                            <InputGroup>
                                                <Input placeholder="Ingin menambahkan sesuatu ?" value={this.state.item} onChange={this.inputListener}/>
                                                <InputGroupAddon addonType="append">
                                                <Button color="primary">Tambah</Button>
                                                </InputGroupAddon>
                                            </InputGroup>
                                            </FormGroup>
                                        </Form>    
                                    <hr/>
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
                                </CardBody>
                            </Card>
                        </Col>
                        <Col/>
                    </Row>
                </Container>
        );
    }
}
export default FormList