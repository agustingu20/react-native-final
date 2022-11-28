import React from 'react'

const BenefitTable = ({ benefit }) => {
  return (
            <tr>
                <td><b>{benefit.name}</b></td>
                <td>{benefit.type}</td>
                <td>{benefit.days}</td>
                <td>{benefit.shortDescription}</td>
                <td className='text-left'>{benefit.longDescription}</td>
                <td><img src={benefit.image} className='w-25' alt='benefit-image' /></td>
                <td><button className='btn btn-primary'>Edit</button></td>
            </tr>

  )
}

export default BenefitTable