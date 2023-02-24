import React from 'react'

export default function ScoreImpactCard (props) {
  const { selectedProcedure, selectProcedure } = props
  return (
        <li className={selectedProcedure === 'scoreImpact' ? 'column card selected' : 'column card'}>
        <div className='h3-procedure'>Prioritize<div className='bold blue'> Score Impact</div></div>
        <p className='content'> Do I want to prioritize Best Practices that are not implemented yet ?</p>
        <div className='content results'>
          <p className='bold blue'>TOP RESULTS - </p><p className='blue'>Examples</p>
          <ul>
            <li className='card-example'>
              <div className='row'>
                <div className='column'>
                  <div className='compliance intermed-level'><p className='text-compliance line-height'>C</p></div>
                </div>
                <div className='column margin-top'>
                  <p className='light no-margin'>Externalize.js</p>
                  <p className='no-margin'>48 inline JavaScript found</p>
                </div>
              </div>
            </li>
            <li className='card-example'>
              <div className='row'>
                <div className='column'>
                  <div className='compliance bad-level'><p className='text-compliance line-height'>G</p></div>
                </div>
                <div className='column margin-top'>
                  <p className='light no-margin'>Minimize main-thread work</p>
                  <p className='no-margin'>8.23s on average</p>
                </div>
              </div>
            </li>
          </ul>
          <div className='padding-btn'>
            <button onClick={() => selectProcedure('scoreImpact')} aria-label='Select score impact procedure' className='select-procedure'>Select procedure</button>
          </div>
        </div>
      </li>
  )
}
