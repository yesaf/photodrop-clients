import { useState } from 'react';
import { Container } from './ChangeName.styles'
import accountService from '@/api/services/account';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { accountSelector } from '@/store/selectors/authSelectors';
import { setAccountAction } from '@/store/actions/authActions';

function ChangeName() {
    const account = useSelector(accountSelector);
    const [name, setName] = useState(account.user?.fullName || '');
    const [isSaving, setIsSaving] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleNameChange = () => {
        if (name && name !== account.user?.fullName)
        {
            setIsSaving(true);
            accountService.updateName(name)
                .then((res) => {
                    const accountData = res.data;
                    dispatch(setAccountAction({ isLoaded: true, ...accountData }));
                    setIsSaving(false);
                    navigate('/me');
                });
        }


    }

    return (
        <Container>
            <h2>Your name</h2>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={handleNameChange} disabled={isSaving}>
                {isSaving ? 'Saving...' : 'Save'}
            </button>
        </Container>
    );
}

export default ChangeName;
