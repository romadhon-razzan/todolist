import React from 'react';
import Modal from 'react-modal';
import { Form, Container, Input, Button, Row, Col, Card, CardBody, FormGroup, Label, InputGroup, InputGroupAddon } from 'reactstrap';
import styled from 'styled-components';
class FormList extends React.Component {
    constructor(props) {
        super(props)
        this.state = { item: '', listItem: [], indexSelected: -1, editItem: '', modalShow: false }
    }
    submitItem(typeSubmit) {
        return ((event) => {
            event.preventDefault()
            if (typeSubmit === 'new'){
                if (this.state.item !== '')
                this.setState({ item: '', listItem: [...this.state.listItem, this.state.item] })
            } else {
                if (this.state.editItem !== ''){
                    var tempItem = [...this.state.listItem];
                    tempItem[this.state.indexSelected] = this.state.editItem;
                    this.setState({modalShow: false, indexSelected: -1, editItem: '', listItem: tempItem })
                }
            }
        });
    }

    removeItem(pos) {
        return ((event) => {
            var tempItem = [...this.state.listItem];
            tempItem.splice(pos, 1);
            this.setState({modalShow: false, indexSelected: -1, listItem: tempItem });
            event.preventDefault()
        });
    }

    editItem(pos) {
        return ((event) => {
            var tempItem = [...this.state.listItem];
            this.setState({indexSelected: pos, modalShow: true, editItem: tempItem[pos] })
        });
    }

    showModal = () => {
        console.log('show modal')
        this.setState({ modalShow: true })
    }

    dissmisModal = () => {
        this.setState({ modalShow: false })
    }

    inputListener = (event) => { this.setState({ item: event.target.value }) }
    editListener = (event) => { this.setState({ editItem: event.target.value }) }
    render() {
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

        const modalStyle = {
            content: {
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)'
            }
        };

        return (
            <div>
                <Container>
                    <Row>
                        <Col />
                        <Col lg="6">
                            <h3><u>TODO List</u></h3>
                            <Card>
                                <CardBody>
                                    <Form onSubmit={this.submitItem('new')} >
                                        <FormGroup>
                                            <InputGroup>
                                                <Input placeholder="Ingin menambahkan sesuatu ?" value={this.state.item} onChange={this.inputListener} />
                                                <InputGroupAddon addonType="append">
                                                    <Button color="primary">Tambah</Button>
                                                </InputGroupAddon>
                                            </InputGroup>
                                        </FormGroup>
                                    </Form>
                                    <hr />
                                    {this.state.listItem.map((item, index) =>
                                        <StyleItem key={index} >
                                            <Label for="btnRemove" onClick={this.editItem(index)}>{item}</Label>
                                            <Button id="btnRemove" close onClick={this.removeItem(index)} />
                                        </StyleItem>
                                    )}
                                </CardBody>
                            </Card>
                        </Col>
                        <Col />
                    </Row>
                </Container>

                <Modal
                    isOpen={this.state.modalShow}
                    onRequestClose={this.hideModal}
                    ariaHideApp={false}
                    style={modalStyle}
                    contentLabel="Example Modal">
                    <div>Ubah Item</div>
                    <hr />
                    <Form onSubmit={this.submitItem('edit')} >
                        <FormGroup>
                            <InputGroup>
                                <Input value={this.state.editItem} onChange={this.editListener} />
                                <InputGroupAddon addonType="append">
                                    <Button color="primary">Simpan</Button>
                                </InputGroupAddon>
                            </InputGroup>
                        </FormGroup>
                    </Form>
                </Modal>
            </div>

        );
    }
}
export default FormList