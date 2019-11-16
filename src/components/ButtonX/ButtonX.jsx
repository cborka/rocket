import React from 'react';
import Button from '@material-ui/core/Button';
import styles from './ButtonX.module.css';

const ButtonX = ({caption, ...props}) => {

    return (
        <Button className={styles.buttonx}
            variant="outlined"
            color="primary"
            style={{
                textTransform: 'none'            }}
            {...props}
        >
            {caption}
        </Button>
    )
};

export default ButtonX;