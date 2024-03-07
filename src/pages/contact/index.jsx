import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { redirect } from 'next/navigation'
const ContactForm = () => {

    const router = useRouter();

    const [formData, setFormData] = useState({
        fullName: '',
        businessEmail: '',
        phoneNumber: '',
        companyName: '',
        jobTitle: '',
        services: '',
        country: '',
        optIn: '',
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.status==200) {
                router.push('/contact-us-thank-you');
                 console.log(response.status,'contact');

            } else {
                // Handle errors if the response is not okay
                console.error('Form submission failed:', response.statusText);
            }

            // Reset form data after submission
            setFormData({
                fullName: '',
                businessEmail: '',
                phoneNumber: '',
                companyName: '',
                jobTitle: '',
                services: '',
                country: '',
                optIn: '',
            });
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };
    return (
        <div style={{ backgroundColor: '#f8f9fA' }}>

            <div className="container pt-4">
                <div className="row justify-content-center pt-4 pb-5">
                    <div className="col-md-5 mb-4">
                        <img src="contact/contact-us.jpg" className='img-fluid' />
                    </div>
                    <div className="col-md-7">
                        <div className="mb-4">
                            {/* Title and description */}
                            <div className="mb-1">
                                <h1 style={{ fontWeight: 700 }}>Let's work together</h1>
                            </div>
                            <div>
                                <h6 style={{ fontWeight: 700 }}>
                                    Let us help you become even greater at what you do
                                </h6>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <div className="mb-1">
                                    <h6 style={{ fontWeight: 600 }}>Full Name</h6>
                                </div>
                                <div>
                                    <input
                                        className="form-control h-80"
                                        name="fullName"
                                        type="text"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="mb-1">
                                    <h6 style={{ fontWeight: 600 }}>Business Email</h6>
                                </div>
                                <div>
                                    <input
                                        className="form-control h-80"
                                        name="businessEmail"
                                        type="email"

                                        value={formData.businessEmail}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="mb-1">
                                    <h6 style={{ fontWeight: 600 }}>Phone Number</h6>
                                </div>
                                <div>
                                    <input
                                        className="form-control h-80"
                                        name="phoneNumber"
                                        type="text"

                                        value={formData.phoneNumber}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="mb-1">
                                    <h6 style={{ fontWeight: 600 }}>Company Name</h6>
                                </div>
                                <div>
                                    <input
                                        className="form-control h-80"
                                        name="companyName"
                                        type="text"

                                        value={formData.companyName}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="mb-1">
                                    <h6 style={{ fontWeight: 600 }}>Job Title</h6>
                                </div>
                                <div>
                                    <input
                                        className="form-control h-80"
                                        name="jobTitle"
                                        type="text"
                                        value={formData.jobTitle}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>

                            <div className="mb-3">
                                <div className="mb-1">
                                    <h6 style={{ fontWeight: 600 }}>What services are you looking for?</h6>
                                </div>
                                <div>
                                    <select className='form-select' value={formData.services}
                                        onChange={handleInputChange}
                                        name="services"
                                    >
                                        <option value=""  >Choose from a list here</option>
                                        <option value="demand-generation">Demand Generation</option>
                                        <option value="lead-generation">Lead Generation</option>
                                        <option value="surveys">Surveys</option>
                                        <option value="account-based-marketing">Account Based Marketing</option>
                                        <option value="content-marketing">Content Marketing</option>
                                        <option value="advertising">Advertising</option>
                                        <option value="brand-enhancement">Brand Enhancement</option>
                                        <option value="intent-based-marketing">Intent Based Marketing</option>
                                        <option value="other">Other</option>
                                    </select>

                                </div>
                            </div>

                            <div className="mb-3">
                                <div className="mb-1">
                                    <h6 style={{ fontWeight: 600 }}>Opt In To Revvknew Media:</h6>
                                </div>
                                <div>
                                    <select className='form-select' value={formData.optIn}
                                        onChange={handleInputChange}
                                        name="optIn"
                                    >
                                        <option value="" disabled="" >Select an option</option>
                                        <option value="no-thank-you">No, Thank You</option>
                                        <option value="yes-please">Yes, Please</option>
                                    </select>

                                </div>
                            </div>


                            <div className="mb-3">
                                <div className="mb-1">
                                    <h6 style={{ fontWeight: 600 }}>Country</h6>
                                </div>
                                <div>
                                    <select className='form-select' value={formData.country}
                                        onChange={handleInputChange}
                                        name="country"
                                    >
                                        <option value="">Select Country</option>
                                        {countries.map((country, index) => (
                                            <option key={index} value={country}>
                                                {country}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                            </div>

                            <div className="mb-3">
                                <button className="btn btn-dark" style={{ borderRadius: '25px', width: '150px' }}>
                                    Submit
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;


const countries = [
    'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan',
    'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi',
    'Cabo Verde', 'Cambodia', 'Cameroon', 'Canada', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo (Congo-Brazzaville)', 'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czechia (Czech Republic)',
    'DR Congo (Congo-Kinshasa)',
    'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic',
    'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Eswatini (fmr. "Swaziland")', 'Ethiopia',
    'Fiji', 'Finland', 'France',
    'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana',
    'Haiti', 'Holy See', 'Honduras', 'Hungary',
    'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy',
    'Jamaica', 'Japan', 'Jordan',
    'Kazakhstan', 'Kenya', 'Kiribati', 'Kuwait', 'Kyrgyzstan',
    'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg',
    'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar (formerly Burma)',
    'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Korea', 'North Macedonia (formerly Macedonia)', 'Norway',
    'Oman',
    'Pakistan', 'Palau', 'Palestine State', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal',
    'Qatar',
    'Romania', 'Russia', 'Rwanda',
    'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Korea', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Sweden', 'Switzerland', 'Syria',
    'Tajikistan', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu',
    'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States of America', 'Uruguay', 'Uzbekistan',
    'Vanuatu', 'Venezuela', 'Vietnam',
    'Yemen',
    'Zambia', 'Zimbabwe'
];
