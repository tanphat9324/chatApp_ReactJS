import React from 'react';
import { Row, Col, Button, Typography  } from 'antd';
import firebase, { auth } from '../../firebase/config';
import { useHistory } from 'react-router-dom';

const { Title } = Typography;

const fbProvider = new firebase.auth.FacebookAuthProvider();

export default function Login() {
    const history = useHistory();

    const handleFBLogin = () => {
        auth.signInWithPopup(fbProvider);
    }

    auth.onAuthStateChanged((user)=>{
        console.log(user);
        if(user){
            history.push('/');
        }
    })
    return (
        <Row justify="center" style={{height:800}}>
            <Col span={8}>
                <Title style={{textAlign:'center'}} level={3}>Fun Chat</Title>
                <Button style={{width:'100%', marginBottom: 5}}>
                Dang nhap bang google
                </Button>
                <Button style={{width:'100%'}} onClick={handleFBLogin}>
                    Dang nhap bang Facebook
                </Button>
            </Col>
        </Row>
    )
}