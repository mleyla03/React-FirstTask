import React from 'react'

export default function Contact() {
  return (
    <>
    
  
      <div className='contacts'>
         
       
        <form > 
            <h2>Contact</h2>
            <div class="contact">
                <div>
                    <label for="name">Name:</label>
                    <input type='name' id='name'  name="name" required/>
                </div>
                <div>
                    <label for="email">Email:</label>
                    <input type="email" name="email" id="email" required />
                </div>
            </div>
            <label for="message">Message:</label>
            <textarea name="message" id="message" rows="10" required ></textarea>
           <input type='submit' value="enter" className="cta"/>
        </form>
      </div>
  


    </>
  )
}
