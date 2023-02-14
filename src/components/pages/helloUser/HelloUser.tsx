import { Navigate, useNavigate } from 'react-router-dom';

import { useState } from 'react';
import { useSelector } from 'react-redux';
import { accountSelector } from '@/store/selectors/authSelectors';

import accountService from '@/api/services/account';

import { Container } from './HelloUser.styles';

function HelloUser() {
    const account = useSelector(accountSelector)
    const [name, setName] = useState('');
    const navigate = useNavigate();


    if (account.user?.fullName) {
        return <Navigate to="/"/>
    }

    const handleSubmit = () => {
        accountService.updateName(name)
            .then(() => {
                navigate('/')
            });
    }

    return (
        <Container>
            <h2>Let’s get to know you</h2>
            <input
                type="text"
                value={name}
                placeholder="What’s your name?"
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={handleSubmit} disabled={!name}>
                See your photos!
            </button>
        </Container>
    );
}


export default HelloUser;
