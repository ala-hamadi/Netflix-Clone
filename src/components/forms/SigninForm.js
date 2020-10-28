import React, { useState, useContext } from 'react'
import FirebaseContext from '../../firebase/FirebaseContext'
import {useHistory} from 'react-router-dom'
import * as styles from './StylesSignForm'

const SignInForm =()=> {
    const history=useHistory()
    const {firebase}=useContext(FirebaseContext)
    const [emailAddress,setEmailAddress]=useState({data:'',touched:false,rules:{required:true,email:true} });
    const [password,setPassword]=useState({data:'',touched:false,rules:{required:true,minLen:4,maxLen:60} });
    const [emailAddressError,setEmailAddressError]=useState(false)
    const [passwordError,setPasswordError]=useState(false)
    const [error,setError]=useState('');
    const [learnMore,setLearnMore]=useState(false);

    

    const checkValidity=(value,rules)=>{
        let isValid=true
        if (rules.required)
            isValid=value.trim()!=='' && isValid;
        if (rules.minLen)
            isValid=value.length>=rules.minLen && isValid;
        if (rules.maxLen)
            isValid=value.length<=rules.maxLen && isValid;
        if (rules.email){
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }
        return isValid
    }
    

    const handleChangeEmail=e=>{
        setEmailAddress({data:e.target.value,touched:true,rules:{required:true,email:true} })
        setEmailAddressError(checkValidity(emailAddress.data,emailAddress.rules))
    }
    const handleChangePw=e=>{
        setPassword({data:e.target.value,touched:true,rules:{required:true,minLen:4,maxLen:60} })
        setPasswordError(checkValidity(password.data,password.rules))
    }
    const handleSignin=(e)=>{

        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(emailAddress.data,password.data)
        .then(()=>{
            history.push('/browse')
        })
        .catch((err)=>{
            setEmailAddress('');
            setPassword('');
            setError(err.message)
        })
    }

    const handleClickLM=()=>{
        setLearnMore(!learnMore);
    }

    const isInvalid= !passwordError || !emailAddressError;
    
    return (
        <styles.Container>
            <styles.Title>Sign In</styles.Title>
            {error && <styles.Error>{error}</styles.Error>}
            <styles.Base onSubmit={handleSignin} method="POST">
                <styles.Input
                    placeholder="Email address"
                    value={emailAddress.data}
                    onChange={handleChangeEmail}
                    margin={!emailAddressError}
                    touched={emailAddress.touched}
                /> 
                {!emailAddressError && emailAddress.touched ?<styles.ErrorValidation>Please enter a valid email.</styles.ErrorValidation>:null}
                <styles.Input
                    type="password"
                    autoComplete="off"
                    placeholder="Password"
                    value={password.data}
                    onChange={handleChangePw}
                    margin={!passwordError}
                    touched={password.touched}
                /> 
                {!passwordError && password.touched ?<styles.ErrorValidation>Your password must contain between 4 and 60 characters.</styles.ErrorValidation>:null}
                <styles.Submit disabled={isInvalid} type="submit" >
                    Sign In
                </styles.Submit>
            </styles.Base>
            <styles.Text>
                New to Netflix? <styles.ButtonLink to="/signup">Sign up now.</styles.ButtonLink>
            </styles.Text>
            <styles.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a bot.
            <styles.LearnMore onClick={handleClickLM}>Learn more.</styles.LearnMore>
            </styles.TextSmall>
            {learnMore ?<styles.TextSmall>The information collected by Google reCAPTCHA is subject to the Google <styles.LearnMore href="https://policies.google.com/privacy" target="_blank">Privacy Policy</styles.LearnMore> and <styles.LearnMore href="https://policies.google.com/terms" target="_blank">Terms of Service</styles.LearnMore>, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalized advertising by Google).</styles.TextSmall>:null}
            
        </styles.Container>
    )
}

export default SignInForm
