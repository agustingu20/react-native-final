import React from 'react'

const BenefitTable = (benefit) => {
  return (

            <tr>
                <td><b>Benefit Name</b></td>
                <td>Type</td>
                <td>Days</td>
                <td>Short Description</td>
                <td>Long Description</td>
                <td><img src='https://static01.eu/catalogosyofertas.com.ar/images/store/216.png' className='w-25' alt='benefit-image' /></td>
                <td><button className='btn btn-primary'>Edit</button></td>
            </tr>

  )
}

export default BenefitTable