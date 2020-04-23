import React from 'react';
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        height: '100%'
    },
    title: {
        padding: '8px'
    }
})
);


const WidgetNumber = ({title, value, isPercentage}) => {
    const classes = useStyles(); 

    return (
        <Paper className={classes.paper} variant='outlined'>
            <Typography className={classes.title} variant='subtitle2' gutterBottom>{title}</Typography>
            <Typography variant='h5' gutterBottom>{value}{isPercentage ? '%' :''}</Typography>
      </Paper>
    );
};

WidgetNumber.propTypes = {
    title: PropTypes.string,
    value: PropTypes.number
}

WidgetNumber.defaultProps = { 
    title: 'Untitled',
    value: 'N/A'
}

export default WidgetNumber;