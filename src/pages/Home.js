import React from 'react'
import { Button } from '@mui/material'

const Home = () => {
  return (
    <div className='form-container'>
        <div className='header'>
       <h3> Patient Referral Form</h3>
       <p>
Hayes Valley Health San Francisco
</p>
        </div>
        <form>
            <div className='input-div'>
                <div>
                <input type="text" name='first_name' />
                </div>
                <div>
                <input type="text" name='last_name' />
                </div>
               
            </div>
            <div>
                <div>
                <input type="date" name='date_of_birth' />
                </div>
                <div>
                <input type="text" name='contact_language' />
                </div>
               
            </div>
            <div>
                <div>
                <input type="number" name='phone' />
                </div>
                <div>
                <input type="email" name='email' />
                </div>
               
            </div>
            <div>
                <div>
                <input type="text" name='address' />
                </div>
               
               
            </div>
            <div>
                <div>
                <textarea name='message'></textarea>
                </div>
               
               
            </div>
            <Button 
            style={{
                width: 8
            }}
            color='primary'
            variant='contained' >Send a referal </Button>
        </form>
    </div>
  )
}

export default Home