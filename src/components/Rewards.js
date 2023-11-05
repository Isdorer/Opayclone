import React from 'react'

function Rewards() {
  return (
    <div>
        <div className='rew-head flex justify-content-between '>
            <h2 className='text-2xl font-bold ml-2'>Rewards</h2>
              <p className='text-green-500 text-2xl mr-3'>Rules</p>
        </div>
        
        
        <div className='rew-green'>
         <div className='rew-white flex justify-content-between'>
          
         
          <div className='rews'>
            <p>Cashback</p>
            <div className='flex justify-content-between'>
            <p  className='font-bold text-green-500 text-xl '>₦71.00</p> 
            <ion-icon name="chevron-forward-outline"></ion-icon>
            </div>
            
            
          </div>

          <div className='rews'>
            <p>Voucher</p>
            <div className='flex justify-content-between'>
            <p className='font-bold text-green-500  text-xl'>0</p>
            <ion-icon name="chevron-forward-outline"></ion-icon>
            </div>
          </div>
         
         
          <div className='daily'>
                <p className='font-bold'>Daily Cashback</p>
                <p className='font-medium'>You've earned <span className='text-orange-500'>₦957</span> cashback</p>
            </div>
      
          

           <div className='months '>

          <div className='day'>
          <p> sep 18</p>
          </div>

          <div className='day'>
          <p> sep 18</p>
          </div>
          <div className='day'>
          <p> sep 18</p>
          </div>

        <div className='day'>
          <p> sep 18</p>
        </div>

        <div className='day'>
          <p> sep 18</p>
        </div>

        <div className='day'>
          <p> sep 18</p>
         </div>

         <div className='day'>
          <p> sep 18</p>
        </div>

         </div>
        
        <button className='sign-press'>You have signed in today</button>
         </div>

        
</div>

      
          
    </div>
  )
}

export default Rewards