import { Link } from 'react-router-dom';
import styled from 'styled-components';
import arrowBack from '@/assets/images/icons/arrow-left.svg';
import { useCallback } from 'react';

interface IBackButtonProps {
    to: string;
    onClick?: () => void;
    refresh?: boolean;
}

function BackButton({ to, onClick, refresh }: IBackButtonProps) {

    const handleClick = useCallback(() => {
        onClick && onClick();
        refresh && window.location.reload();
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
  display: flex;
  align-items: center;
  justify-content: center;
  
  width: 30px;
  height: 30px;
  border-radius: 50%;

  & > svg {
    width: 8px;
    height: 16px;

    image {
      width: 8px;
      height: 16px;
    }
  }
  
  &:hover {
    background: #F0F0F0;
    
  }
`;

BackButton.defaultProps = {
    refresh: false,
};

export default BackButton;
