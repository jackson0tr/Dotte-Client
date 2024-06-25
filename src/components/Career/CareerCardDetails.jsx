import React from 'react';
import styles from '../../styles/styles';
import {getAllCareers} from '../../redux/actions/career'

const CareerCardDetails = ()  => {

    useEffect(() => {
        dispatch(getAllCareers(data && data?.career._id));
      }, [data]);

    return(
        <div className=""></div>
    )   
}

export default CareerCardDetails;