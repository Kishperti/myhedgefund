import React from 'react'

const Join = () => {
  return (
    <div className='bg-gray-300' >
        <br />
        <br />
        <br />
         <h1 className="sm:text-3xl text-2xl title-font mb-2 text-gray-900 font-semibold text-center">
                Join Us
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-[24px]">
                Join the HedgeMyFunds Community Today and Empower Your Financial Future with Us
              </p>
              <br />
        <div className="flex justify-center bg-gray-300">


<form action="https://api.web3forms.com/submit" method="POST" class="bg-white p-8 rounded-lg  w-full max-w-2xl">
<input type="hidden" name="access_key" value="8a87fe47-9dc1-46ac-ab1c-4fd5e2f83b2b" />

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
<div>
<label for="first_name" class="block text-gray-700 font-bold mb-2">First Name</label>
<input type="text" name="first name" id="first_name" required placeholder="First Name" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black" />
</div>
<div>
<label for="last_name" class="block text-gray-700 font-bold mb-2">Last Name</label>
<input type="text" name="last name" id="last_name" required placeholder="Last Name" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black" />
</div>
</div>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
<div>
<label for="number" class="block text-gray-700 font-bold mb-2">Number</label>
<input type="number" name="number" id="number" required placeholder="Number" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black" />
</div>
<div>
<label for="email" class="block text-gray-700 font-bold mb-2">Email</label>
<input type="email" name="email" id="email" required placeholder="Email" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black" />
</div>
</div>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
<div>
<label for="service" class="block text-gray-700 font-bold mb-2">Service</label>
<select name="service" id="service" required class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black">
 <option value="" disabled>Select</option>
 <option value="Business Consulting">Business Consulting</option>
 <option value="Investment consultancy">Investment consultancy</option>
 <option value="Tag Regulatory and Finance Consulting">Tag Regulatory and Finance Consulting</option>
 <option value="ESG and Risk Consulting">ESG and Risk Consulting</option>
 <option value="Asset Evaluation & Portfolio Assessment">Asset Evaluation & Portfolio Assessment</option>
 <option value="Investment Management Services">Investment Management Services</option>
 <option value="Contractual Fund Management Services">Contractual Fund Management Services</option>
 <option value="Medium & Long Term Investment Plans">Medium & Long Term Investment Plans</option>
 <option value="B2B & B2C software, algorithm & portals">B2B & B2C software, algorithm & portals</option>
 <option value="Tactical Investment Plans for HNIs & UHNIs">Tactical Investment Plans for HNIs & UHNIs</option>
 <option value="Accounting Services">Accounting Services</option>
 <option value="Process Outsourcing">Process Outsourcing</option>
</select>
</div>
<div>
<label for="type" class="block text-gray-700 font-bold mb-2">Type</label>
<select name="type" id="type" required class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black">
 <option value="" disabled>Select</option>
 <option value="Stocks">Stocks</option>
 <option value="Bonds">Bonds</option>
 <option value="Real Estate">Real Estate</option>
</select>
</div>
</div>

<div class="mb-4">
<label for="investment_amount" class="block text-gray-700 font-bold mb-2">Amount</label>
<input type="number" name="name" id="investment_amount" required placeholder="Amount Of Investment" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black" />
</div>

<div class="mb-4">
<label for="message" class="block text-gray-700 font-bold mb-2">Query</label>
<textarea name="message" id="message" required placeholder="Query" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"></textarea>
</div>

<div class="mb-4">
<div class="h-captcha" data-captcha="true"></div>
</div>

<div class="flex justify-center">
<button type="submit" class="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-black">Submit Form</button>
</div>
</form>
</div>
    </div>
    
  )
}

export default Join
