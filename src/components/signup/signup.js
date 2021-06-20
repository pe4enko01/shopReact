import React from "react";

import FormInput from "../forminput/forminput";
import Button from "../button/button";
import {auth, createUserProfileDocument} from "../../fierbase/fierbase.utils"

import './signup.scss';


class SignUp extends React.Component {
    constructor(){
        super();  

        this.state = {
            displayName: "",
            email:"",
            password:"",
            confirmPassword:""
        }
    }

    hanleSubmit = async event => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword } = this.state;

        if(password !== confirmPassword){
            alert("pass dont");

            return;
        }

        try{
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
             await createUserProfileDocument(user, {displayName});

            this.setState({
                displayName: "",
                email:"",
                password:"",
                confirmPassword:""
            });
        }catch(error){
            console.error(error)
        }

    }
    handleChange = event => {
        const {name, value} = event.target;

        this.setState({[name]: value})
    }

    render(){
        const {displyName, email, password, confirmPassword } = this.state;
        return(
            <div className="sign-up">
                <h2 className='title'> I do not a account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.hanleSubmit}>
                    <FormInput type='text'  placeholder="Name" name='displayName' value={displyName} onChange={this.handleChange} label="Display Name" required>  

                    </FormInput>

                    <FormInput type='email' placeholder="email" name='email' value={email} onChange={this.handleChange} label="Email" required>  
                        
                    </FormInput>
                    <FormInput type='password' placeholder ="password" name='password' value={password} onChange={this.handleChange} label="Password" required>  
                        
                    </FormInput>
                    <FormInput type='password' placeholder ="confirmPassword" name='confirmPassword' value={confirmPassword} onChange={this.handleChange} label="Confirm password" required/>  
                        
  
                    <Button type="submit">Sign up</Button>
                </form>
            </div>
        )
    }
}

export default SignUp;