import React from 'react'
import styles from "@/css/JoinUs.module.css";
const Joinn = () => {
  return (
    <div>
      <form action="https://api.web3forms.com/submit" method="POST" className={`${styles.form}`} >
        <input type="hidden" name="access_key" value="8a87fe47-9dc1-46ac-ab1c-4fd5e2f83b2b" />
        <section className="text-gray-600 body-font relative">
          <div className="container px-5 py-24 mx-auto">
            <div id="join" className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-2xl title-font mb-2 text-gray-900 font-semibold">
                Join Us
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-[24px]">
                Join the HedgeMyFunds Community Today and Empower Your Financial Future with Us
              </p>
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="first-name" className="leading-7 text-sm text-gray-600">
                      First Name
                    </label>
                    <input
                      type="text"

                      id="first-name"
                      name="f-name"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-black focus:bg-white focus:ring-2 focus:ring-black text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      required
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="last-name" className="leading-7 text-sm text-gray-600">
                      Last Name
                    </label>
                    <input
                      type="text"

                      id="last-name"
                      name="l-name"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-black focus:bg-white focus:ring-2 focus:ring-black text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      required
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="contact" className="leading-7 text-sm text-gray-600">
                      Contact
                    </label>
                    <input
                      type="number"

                      id="contact"
                      name="contact"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-black focus:bg-white focus:ring-2 focus:ring-black text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      required
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                      Email
                    </label>
                    <input
                      type="email"

                      id="email"
                      name="email"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-black focus:bg-white focus:ring-2 focus:ring-black text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      required
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="type" className="leading-7 text-sm text-gray-600">
                      Type of Investment
                    </label>
                    <input
                      type="text"
                      id="type"
                      name="type"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-black focus:bg-white focus:ring-2 focus:ring-black text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      required
                    />
                  </div>
                </div>

                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="service" className="leading-7 text-sm text-gray-600">
                      Service Type
                    </label>
                    <select

                      id="service"
                      name="service"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-black focus:bg-white focus:ring-2 focus:ring-black text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      required
                    >
                      <option value="" disabled>Select</option>
                      <option value="Business Consulting">Business Consulting</option>
                      <option value="Investment  Consulting">Investment  Consulting</option>
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
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="type" className="leading-7 text-sm text-gray-600">
                      Currency
                    </label>
                    <select

                      id="type"
                      name="currency"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-black focus:bg-white focus:ring-2 focus:ring-black text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      required
                    >
                      <option value="" disabled>Select</option>
                      <option value="USD">USD</option>
                      <option value="INR">INR</option>
                      <option value="GBP">GBP</option>
                      <option value="SGD">SGD</option>
                      <option value="EUR">EUR</option>
                      <option value="JPY">JPY</option>
                      <option value="AUD">AUD</option>
                      <option value="CAD">CAD</option>
                      <option value="CHF">CHF</option>
                      <option value="CNY">CNY</option>
                      <option value="HKD">HKD</option>
                      <option value="NZD">NZD</option>
                      <option value="ZAR">ZAR</option>
                      <option value="BRL">BRL</option>
                      <option value="MXN">MXN</option>
                    </select>
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="service" className="leading-7 text-sm text-gray-600">
                      Amount
                    </label>
                    {/* <select
                      
                      id="service"
                      name="service"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-black focus:bg-white focus:ring-2 focus:ring-black text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      required
                    >
                      <option value="" disabled>Select</option>
                      <option value="Business Consulting">Business Consulting</option>
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
                    </select> */}
                    <input
                      type="number"

                      id="contact"
                      name="amount"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-black focus:bg-white focus:ring-2 focus:ring-black text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      required
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label htmlFor="amount" className="leading-7 text-sm text-gray-600">
                      Country
                    </label>

                    <select
                      id="currency"
                      name="region"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-black focus:bg-white focus:ring-2 focus:ring-black text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      required
                    >
                      <option value="" selected disabled>Select</option>
                      <option value="AED United Arab Emirates">AED United Arab Emirates</option>
                      <option value="AFN Afghanistan">AFN Afghanistan</option>
                      <option value="ALL Albania">ALL Albania</option>
                      <option value="AMD Armenia">AMD Armenia</option>
                      <option value="ANG Netherlands Antilles">ANG Netherlands Antilles</option>
                      <option value="AOA Angola">AOA Angola</option>
                      <option value="ARS Argentina">ARS Argentina</option>
                      <option value="AUD Australia">AUD Australia</option>
                      <option value="AWG Aruba">AWG Aruba</option>
                      <option value="AZN Azerbaijan">AZN Azerbaijan</option>
                      <option value="BAM Bosnia and Herzegovina">BAM Bosnia and Herzegovina</option>
                      <option value="BBD Barbados">BBD Barbados</option>
                      <option value="BDT Bangladesh">BDT Bangladesh</option>
                      <option value="BGN Bulgaria">BGN Bulgaria</option>
                      <option value="BHD Bahrain">BHD Bahrain</option>
                      <option value="BIF Burundi">BIF Burundi</option>
                      <option value="BMD Bermuda">BMD Bermuda</option>
                      <option value="BND Brunei">BND Brunei</option>
                      <option value="BOB Bolivia">BOB Bolivia</option>
                      <option value="BRL Brazil">BRL Brazil</option>
                      <option value="BSD Bahamas">BSD Bahamas</option>
                      <option value="BTN Bhutan">BTN Bhutan</option>
                      <option value="BWP Botswana">BWP Botswana</option>
                      <option value="BYN Belarus">BYN Belarus</option>
                      <option value="BZD Belize">BZD Belize</option>
                      <option value="CAD Canada">CAD Canada</option>
                      <option value="CDF Democratic Republic of the Congo">CDF Democratic Republic of the Congo</option>
                      <option value="CHF Switzerland">CHF Switzerland</option>
                      <option value="CLP Chile">CLP Chile</option>
                      <option value="CNY China">CNY China</option>
                      <option value="COP Colombia">COP Colombia</option>
                      <option value="CRC Costa Rica">CRC Costa Rica</option>
                      <option value="CUP Cuba">CUP Cuba</option>
                      <option value="CVE Cape Verde">CVE Cape Verde</option>
                      <option value="CZK Czech Republic">CZK Czech Republic</option>
                      <option value="DJF Djibouti">DJF Djibouti</option>
                      <option value="DKK Denmark">DKK Denmark</option>
                      <option value="DOP Dominican Republic">DOP Dominican Republic</option>
                      <option value="DZD Algeria">DZD Algeria</option>
                      <option value="EGP Egypt">EGP Egypt</option>
                      <option value="ERN Eritrea">ERN Eritrea</option>
                      <option value="ETB Ethiopia">ETB Ethiopia</option>
                      <option value="EUR European Union">EUR European Union</option>
                      <option value="FJD Fiji">FJD Fiji</option>
                      <option value="FKP Falkland Islands">FKP Falkland Islands</option>
                      <option value="FOK Faroe Islands">FOK Faroe Islands</option>
                      <option value="GBP United Kingdom">GBP United Kingdom</option>
                      <option value="GEL Georgia">GEL Georgia</option>
                      <option value="GGP Guernsey">GGP Guernsey</option>
                      <option value="GHS Ghana">GHS Ghana</option>
                      <option value="GIP Gibraltar">GIP Gibraltar</option>
                      <option value="GMD Gambia">GMD Gambia</option>
                      <option value="GNF Guinea">GNF Guinea</option>
                      <option value="GTQ Guatemala">GTQ Guatemala</option>
                      <option value="GYD Guyana">GYD Guyana</option>
                      <option value="HKD Hong Kong">HKD Hong Kong</option>
                      <option value="HNL Honduras">HNL Honduras</option>
                      <option value="HRK Croatia">HRK Croatia</option>
                      <option value="HTG Haiti">HTG Haiti</option>
                      <option value="HUF Hungary">HUF Hungary</option>
                      <option value="IDR Indonesia">IDR Indonesia</option>
                      <option value="ILS Israel">ILS Israel</option>
                      <option value="IMP Isle of Man">IMP Isle of Man</option>
                      <option value="INR India">INR India</option>
                      <option value="IQD Iraq">IQD Iraq</option>
                      <option value="IRR Iran">IRR Iran</option>
                      <option value="ISK Iceland">ISK Iceland</option>
                      <option value="JEP Jersey">JEP Jersey</option>
                      <option value="JMD Jamaica">JMD Jamaica</option>
                      <option value="JOD Jordan">JOD Jordan</option>
                      <option value="JPY Japan">JPY Japan</option>
                      <option value="KES Kenya">KES Kenya</option>
                      <option value="KGS Kyrgyzstan">KGS Kyrgyzstan</option>
                      <option value="KHR Cambodia">KHR Cambodia</option>
                      <option value="KID Kiribati">KID Kiribati</option>
                      <option value="KMF Comoros">KMF Comoros</option>
                      <option value="KRW South Korea">KRW South Korea</option>
                      <option value="KWD Kuwait">KWD Kuwait</option>
                      <option value="KYD Cayman Islands">KYD Cayman Islands</option>
                      <option value="KZT Kazakhstan">KZT Kazakhstan</option>
                      <option value="LAK Laos">LAK Laos</option>
                      <option value="LBP Lebanon">LBP Lebanon</option>
                      <option value="LKR Sri Lanka">LKR Sri Lanka</option>
                      <option value="LRD Liberia">LRD Liberia</option>
                      <option value="LSL Lesotho">LSL Lesotho</option>
                      <option value="LYD Libya">LYD Libya</option>
                      <option value="MAD Morocco">MAD Morocco</option>
                      <option value="MDL Moldova">MDL Moldova</option>
                      <option value="MGA Madagascar">MGA Madagascar</option>
                      <option value="MKD North Macedonia">MKD North Macedonia</option>
                      <option value="MMK Myanmar">MMK Myanmar</option>
                      <option value="MNT Mongolia">MNT Mongolia</option>
                      <option value="MOP Macau">MOP Macau</option>
                      <option value="MRU Mauritania">MRU Mauritania</option>
                      <option value="MUR Mauritius">MUR Mauritius</option>
                      <option value="MVR Maldives">MVR Maldives</option>
                      <option value="MWK Malawi">MWK Malawi</option>
                      <option value="MXN Mexico">MXN Mexico</option>
                      <option value="MYR Malaysia">MYR Malaysia</option>
                      <option value="MZN Mozambique">MZN Mozambique</option>
                      <option value="NAD Namibia">NAD Namibia</option>
                      <option value="NGN Nigeria">NGN Nigeria</option>
                      <option value="NIO Nicaragua">NIO Nicaragua</option>
                      <option value="NOK Norway">NOK Norway</option>
                      <option value="NPR Nepal">NPR Nepal</option>
                      <option value="NZD New Zealand">NZD New Zealand</option>
                      <option value="OMR Oman">OMR Oman</option>
                      <option value="PAB Panama">PAB Panama</option>
                      <option value="PEN Peru">PEN Peru</option>
                      <option value="PGK Papua New Guinea">PGK Papua New Guinea</option>
                      <option value="PHP Philippines">PHP Philippines</option>
                      <option value="PKR Pakistan">PKR Pakistan</option>
                      <option value="PLN Poland">PLN Poland</option>
                      <option value="PYG Paraguay">PYG Paraguay</option>
                      <option value="QAR Qatar">QAR Qatar</option>
                      <option value="RON Romania">RON Romania</option>
                      <option value="RSD Serbia">RSD Serbia</option>
                      <option value="RUB Russia">RUB Russia</option>
                      <option value="RWF Rwanda">RWF Rwanda</option>
                      <option value="SAR Saudi Arabia">SAR Saudi Arabia</option>
                      <option value="SBD Solomon Islands">SBD Solomon Islands</option>
                      <option value="SCR Seychelles">SCR Seychelles</option>
                      <option value="SDG Sudan">SDG Sudan</option>
                      <option value="SEK Sweden">SEK Sweden</option>
                      <option value="SGD Singapore">SGD Singapore</option>
                      <option value="SHP Saint Helena">SHP Saint Helena</option>
                      <option value="SLL Sierra Leone">SLL Sierra Leone</option>
                      <option value="SOS Somalia">SOS Somalia</option>
                      <option value="SRD Suriname">SRD Suriname</option>
                      <option value="SSP South Sudan">SSP South Sudan</option>
                      <option value="STN São Tomé and Príncipe">STN São Tomé and Príncipe</option>
                      <option value="SYP Syria">SYP Syria</option>
                      <option value="SZL Eswatini">SZL Eswatini</option>
                      <option value="THB Thailand">THB Thailand</option>
                      <option value="TJS Tajikistan">TJS Tajikistan</option>
                      <option value="TMT Turkmenistan">TMT Turkmenistan</option>
                      <option value="TND Tunisia">TND Tunisia</option>
                      <option value="TOP Tonga">TOP Tonga</option>
                      <option value="TRY Turkey">TRY Turkey</option>
                      <option value="TTD Trinidad and Tobago">TTD Trinidad and Tobago</option>
                      <option value="TVD Tuvalu">TVD Tuvalu</option>
                      <option value="TWD Taiwan">TWD Taiwan</option>
                      <option value="TZS Tanzania">TZS Tanzania</option>
                      <option value="UAH Ukraine">UAH Ukraine</option>
                      <option value="UGX Uganda">UGX Uganda</option>
                      <option value="USD United States">USD United States</option>
                      <option value="UYU Uruguay">UYU Uruguay</option>
                      <option value="UZS Uzbekistan">UZS Uzbekistan</option>
                      <option value="VES Venezuela">VES Venezuela</option>
                      <option value="VND Vietnam">VND Vietnam</option>
                      <option value="VUV Vanuatu">VUV Vanuatu</option>
                      <option value="WST Samoa">WST Samoa</option>
                      <option value="XAF Central African CFA Franc">XAF Central African CFA Franc</option>
                      <option value="XCD East Caribbean Dollar">XCD East Caribbean Dollar</option>
                      <option value="XOF West African CFA Franc">XOF West African CFA Franc</option>
                      <option value="XPF CFP Franc">XPF CFP Franc</option>
                      <option value="YER Yemen">YER Yemen</option>
                      <option value="ZAR South Africa">ZAR South Africa</option>
                      <option value="ZMW Zambia">ZMW Zambia</option>
                      <option value="ZWL Zimbabwe">ZWL Zimbabwe</option>
                    </select>





                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label htmlFor="query" className="leading-7 text-sm text-gray-600">
                      Query
                    </label>
                    <textarea
                      id="query"
                      name="query"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-black focus:bg-white focus:ring-2 focus:ring-black h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button className="flex mx-auto text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-[grey] rounded text-lg">
                    Submit
                  </button>
                </div>
                <input type="hidden" name="redirect" value="https://www.hedgemyfunds.co.in/confirmation" />
              </div>
            </div>
          </div>
        </section>
      </form>
    </div>
  )
}

export default Joinn
