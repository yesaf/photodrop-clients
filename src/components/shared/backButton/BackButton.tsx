import { Link } from 'react-router-dom';
import styled from 'styled-components';
import arrowBack from '../../../assets/images/icons/arrow-left.svg';
import { useCallback } from 'react';

interface IBackButtonProps {
    to: string;
    refresh?: boolean;
}

function BackButton({ to, refresh }: IBackButtonProps) {

    const handleClick = useCallback(() => {
        if (refresh) {
            window.location.reload();
        }
    }, []);

    return (
        <BackLink to={to} onClick={handleClick}>
            <svg>
                <image href={arrowBack}/>
            </svg>
        </BackLink>
    );
}

const BackLink = styled(Link)`
  & > svg {
    width: 8px;
    height: 16px;

    image {
      width: 8px;
      height: 16px;
    }
  }
`;

export default BackButton;
