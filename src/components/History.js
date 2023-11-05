import React from 'react';

function History() {
  return (
    <div className='  p-4 '> 
      <div className=' bg-green-600 p-4 rounded-lg text-white sm:flex sm:flex-col '>
        <div className='his-p  flex justify-content-between text-2xl '>

          <div className=' board flex gap-4 relative '>
            <p >Total Balance</p>
            <span><ion-icon className=" eye " name="eye"></ion-icon></span>
          </div>

          <div className='flex gap-4 relative'>
            <p>Transaction</p>
            <span><ion-icon className=" chev" name="chevron-forward-outline"></ion-icon></span>
          </div>

        </div>

        
        <p className='price text-lg mb-4 sm:text-2xl font-bold  '> 
          
         ₦1,700
        </p>
        <div className='history flex justify-evenly '>
          <div className="text-center flex flex-col items-center "> 
           <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-plus-square" viewBox="0 0 16 16" className='p-2' >
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg>
            <p className='m-2 sm:m-1 md:m-2 lg:m-3 xl:m-4'>Add money</p>
          </div>

          <div className="text-center flex flex-col items-center"> 
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-arrow-left-right" viewBox="0 0 16 16"  className='p-2'>
  <path fill-rule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z"/>
</svg>
            <p className='m-2 sm:m-1 md:m-2 lg:m-3 xl:m-4'>Transfer</p>
          </div>

          <div className="text-center flex flex-col items-center"> 
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16"  className='p-2'>
  <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
  <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
</svg>
            <p className='m-2 sm:m-1 md:m-2 lg:m-3 xl:m-4'>Withdraw</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default History;
