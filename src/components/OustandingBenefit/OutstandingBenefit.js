import React from 'react';
import BenefitsCard from '../BenefitsCard/BenefitsCard';
import { oustandingBenefit } from '../../helpers/outstandingBenefit';

const OutstandingBenefit = () => {
  return <BenefitsCard {...oustandingBenefit}/>;
};

export default OutstandingBenefit;
