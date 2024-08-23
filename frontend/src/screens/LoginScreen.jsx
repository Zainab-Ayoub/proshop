import { useState } from "react";
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import FormContainer from "../components/FormConainer";

const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHanlder = (e) => {
        e.preventDefault()
        console.log('submit');
    }

    return (
        <div>LoginScreen</div>
    )
}

export default LoginScreen;
