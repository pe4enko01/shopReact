import React from 'react';
import './singin.scss';
import FormInput from '../../components/forminput/forminput';
import Button from '../button/button';
import {auth,singInWithGoogle} from '../../fierbase/fierbase.utils'

class SignIn extends React.Component {
    constructor(props){
        super(props);


        this.state = {
            email:'',
            password:''
        }
    }

    handleSubmit = async e => {
        e.preventDefault();
        const {email, password} = this.state;
        this.setState({email:'', password:''})
        try{
            await auth.signInWithEmailAndPassword(email, password); 
        }catch(error){
            console.error(error);
        }
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
                   <div className="buttons">
                    <Button type="submit">Sign in</Button>
                    <Button onClick={singInWithGoogle} isGoogleSignIn>Sign in with Google</Button>
                   </div>
                </form>
            </div>
        )
    }
}

export default SignIn;