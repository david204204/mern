import React, { useState, useContext } from "react";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import './Auth.css'
import Card from "../../shared/components/UIElements/Card";
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";
import { AuthContext } from '../../shared/context/auth-context'
const Auth = props => {

    const auth = useContext(AuthContext);
    const [isLogin, setLogin] = useState(true)
    const [formState, inputHandler, setFormData] = useForm({
        email: {
            value: '',
            isValid: false
        },
        password: {
            value: '',
            isValid: false
        }
    },
        false
    );

    const switchModeHandler = () => {
        if (!isLogin) {
            setFormData(
                {
                    ...formState.inputs,
                    name: undefined
                },
                formState.inputs.email.isValid && formState.inputs.password.isValid
            );
        } else {
            setFormData({
                ...formState.inputs,
                name: {
                    value: '',
                    isValid: false
                }
            },
                false
            );
        }
        setLogin(prevMode => !prevMode)
    };

    const authSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs)
        auth.login();

    }
    return (
        <Card className="authentication">
            <h2>Login Requierd</h2>
            <hr />
            <form onSubmit={authSubmitHandler}>
                {!isLogin && (
                    <Input
                        element="input"
                        id="name"
                        type="text"
                        label="Your name"
                        validators={[VALIDATOR_REQUIRE()]}
                        errorText="Please enter a name."
                        onInput={inputHandler} />)}
                <Input
                    element="input"
                    type="email"
                    label="E-Mail"
                    validators={[VALIDATOR_EMAIL()]}
                    errorText="Please enter a valid email address"
                    id="email"
                    onInput={inputHandler}
                />
                <Input
                    element="input"
                    type="password"
                    label="password"
                    validators={[VALIDATOR_MINLENGTH(5)]}
                    errorText="Please enter a valid password at least 5 charecters"
                    id="password"
                    onInput={inputHandler}
                />
                <Button type='submit' disabled={!formState.isValid}>
                    {isLogin ? 'LOGIN' : 'SIGNUP'}
                </Button>
            </form>
            <Button inverse onClick={switchModeHandler}>SWITCH TO {isLogin ? "SIGNUP" : "LOGIN"}</Button>
        </Card>
    )
}

export default Auth;