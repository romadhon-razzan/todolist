import React from 'react';
import { Form, Container, Input } from 'reactstrap';
class FormList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            item:'',
            listItem:[]
        }
    }
    submitItem = (event) => {
        event.preventDefault()
        this.setState({
            item:'',
            listItem: [...this.state.listItem, this.state.item]
        })
    }
    inputListener = (event) => {
        this.setState({
            item: event.target.value
        })
    }

    render(){
        return(
            <div>
                <Form onSubmit={this.submitItem}>
                    <Input value={this.state.item} onChange={this.inputListener}/>
                </Form>

                <div>
                    {
                        this.state.listItem.map((item, index) => 
                            <div key={index}>{item}</div>
                        )
                    }
                </div>

            </div>
        );
    }
}
export default FormList