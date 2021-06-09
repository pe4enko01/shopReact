import React from 'react';
import './singin.scss';
import FormInput from '../../components/forminput/forminput';
import Button from '../button/button';
import {singInWithGoogle} from '../../fierbase/fierbase.utils'

class SignIn extends React.Component {
    constructor(props){
        super(props);


        this.state = {
            email:'',
            password:''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({email:'', password:''})
    }

    handleChange = (e) => {
        const {value, name} = e.target;

        this.setState({[name]:value})
    }

    render(){
        return(
            <div className="sign-in">
                <h2>I alredy have an account</h2>
                <span>Sing in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput placeholder="email" name="email" type = "email" value={this.state.email} handleChange={this.handleChange} label="email" required />
    
                    <FormInput placeholder="password" name="password" type = "password" value={this.state.password} handleChange={this.handleChange} label="password" required />
                   
                    <Button type="summit">Sign in</Button>
                    <Button onClick={singInWithGoogle}>Sign in with Google</Button>
                </form>
            </div>
        )
    }
}

export default SignIn;