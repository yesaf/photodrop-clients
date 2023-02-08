import { useState } from 'react';
import { Container } from './ChangeName.styles';

function ChangeName() {
    const user = {
        id: '12412',
        name: 'Some Name',
        // name: '',
    };
    const [name, setName] = useState(user.name);
    const [isSaving, setIsSaving] = useState(false);

    return (
        <Container>
            <h2>Your name</h2>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={() => {
            }} disabled={isSaving}>
                {isSaving ? 'Saving...' : 'Save'}
            </button>
        </Container>
    );
}

export default ChangeName;
