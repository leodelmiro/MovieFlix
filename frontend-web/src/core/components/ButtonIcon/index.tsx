import React from 'react';
import {ReactComponent as ArrowIcon} from '../../assets/images/arrow.svg';
import './styles.scss'

type Props = {
    title: string;
}

const ButtonIcon = ({title}: Props) => (
     <div className="d-flex">
         <button className="btn btn-primary btn-icon">
            <h5 className="btn-title">{title}</h5>
         </button>
         <div className="btn-icon-content">
            <ArrowIcon data-testid="arrow-icon"/>
        </div>
     </div>
);

export default ButtonIcon;

