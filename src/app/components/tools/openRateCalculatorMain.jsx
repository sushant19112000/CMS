
import React, { useEffect, useState } from 'react'

export const OpenRateCalculatorMain = () => {
    const [channel, setChannel] = useState('')
    const [industry, setIndustry] = useState('')
    const [country, setCountry] = useState('')
    const [opened, setOpened] = useState(0)
    const [delivered, setDelivered] = useState(0)
    const [openRate, setOpenRate] = useState(0)


    const calculate = () => {
        return opened / delivered * 100;
    }

    const handleChannelChange = (e) => {
        setChannel(e.target.value)
    }

    const handleIndustryChange = (e) => {
        setIndustry(e.target.value)
    }


    const handelCountryChange = (e) => {
        setCountry(e.target.value)
    }

    const handleOpenedChange = (e) => {
        setOpened(e.target.value)
    }

    const handleDeliveredChange = (e) => {
        setDelivered(e.target.value)
    }

    const handleOpenRate = () => {
        setOpenRate(calculate())
    }

    const handleReset=()=>{
        setChannel("")
        setIndustry("")
        setCountry("")
        setOpenRate(0)
        setDelivered(0)
        setOpened(0)
    }

    return (
        <div className='container mt-4 mb-4'>
            <div className="row">
                <div className="col-md-3" style={{ height: '700px', backgroundColor: 'grey' }}>
                    Advertise
                </div>
                <div className="col ms-2">
                    <div className='text-center'>
                        <h3 style={{ fontWeight: '600' }}>Email Open Rate Calculator</h3>

                    </div>

                    <div className="row justify-content-center mt-3 mb-3">
                        <div className="col-md-10" style={{}}>
                            <div className="m-2">
                                <div className='mt-2'>
                                    <div className="mt-4 row justify-content-center" style={{ color: 'white' }}>
                                        <div className="col-4 col-md-4" >
                                            <div className="d-flex">
                                                <div className="p-4" style={{ backgroundColor: 'rgb(66, 69, 74)' }}>
                                                    <span style={{ fontSize: '16px' }}>Number of emails opened</span>
                                                    <div className="col-md-6">
                                                        <input value={opened} type="number" onChange={handleOpenedChange}  className='form-control' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-4 col-md-4">
                                            <div className="d-flex">
                                                <div className="p-4" style={{ backgroundColor: 'rgb(66, 69, 74)' }}>
                                                    <span style={{ fontSize: '16px' }}>Number of emails sent</span>
                                                    <div className="col-md-6">
                                                        <input type="number" value={delivered} onChange={handleDeliveredChange}  className='form-control' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-4 col-md-4">
                                            <div className="d-flex">
                                                <div className="p-4" style={{ backgroundColor: 'rgb(66, 69, 74)' }}>
                                                    <span style={{ fontSize: '16px' }}>Open Rate</span>
                                                    <div className="col-md-6">
                                                        <input type="text"  value={openRate+'%'}  className='form-control' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="row mt-4">
                                        <div className="col-md-6 mb-2">
                                            <div className="d-flex">
                                                <div className="mx-auto">
                                                    <button onClick={handleOpenRate} className='btn' style={{ backgroundColor: 'rgb(66, 69, 74)', width: '200px', color: 'white' }}>Submit</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-2">
                                            <div className="d-flex">
                                                <div className="mx-auto">
                                                    <button className='btn' onClick={handleReset} style={{ backgroundColor: 'red', width: '200px', color: 'white' }}>Reset</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>


                            </div>
                        </div>
                    </div>

                    <div className="d-flex">
                        <div className="mx-auto">
                            <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                                Open Rate Calculator is a tool that offers a more insightful comparison between email campaigns of different sizes, avoiding the pitfalls of relying solely on raw open numbers. Let's dig deeper into an illustrative example:
                            </p>
                            <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                                Say Email ONE, reaching 18,000 recipients with 1,421 opens, and Email TWO, delivered to 9,000 recipients with 1,014 opens.

                            </p>
                            <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                                While Email ONE may seem superior due to its higher open count, it's crucial to account for the fact that it was presented to two times as many people, providing a larger opportunity for opens. Adjusting for this reveals that Email TWO actually outperforms.

                            </p>
                            <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                                Adopting Open Rate as the benchmark clarifies the picture. Email ONE registers an Open Rate of 7.89%, while Email TWO, with a smaller audience, boasts a higher Open Rate of 11.26%. This signifies that recipients of Email TWO were more receptive and engaged compared to those receiving Email ONE.
                            </p>

                            <p style={{ fontSize: '18px', textAlign: 'justify' }}>
                                Nevertheless, it's imperative not to view Open Rate in isolation. Complementary metrics like CTOR (Click-Through Rate) and Conversion Rate are essential for a comprehensive understanding of post-open engagement and the overall efficacy of an email marketing campaign.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


const industryOptions = [
    '(not set)',
    'Arts & Entertainment',
    'Beauty & Fashion',
    'Books & Literature',
    'Business & Brand',
    'Charity & Non-Profit',
    'eCommerce & Shopping',
    'Finance',
    'Food & Drink',
    'Games',
    'Housing & Real Estate',
    'Health & Fitness',
    'Hobbies & Leisure',
    'Home & Garden',
    'Jobs & Education',
    'Law & Government',
    'Marketing & Advertising',
    'News',
    'Online Communities',
    'Personal',
    'Pets & Animals',
    'Science & Technology',
    'Sports',
    'Travel',
    'Other (please specify)'
];



const countryList = [
    'None',
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cabo Verde',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombia',
    'Comoros',
    'Congo (Congo-Brazzaville)',
    'Costa Rica',
    'Cote d\'Ivoire',
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czechia (Czech Republic)',
    'Democratic Republic of the Congo',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Eswatini (fmr. "Swaziland")',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Holy See',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Montenegro',
    'Morocco',
    'Mozambique',
    'Myanmar (formerly Burma)',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'North Korea',
    'North Macedonia (formerly Macedonia)',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Palestine State',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent and the Grenadines',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'South Korea',
    'South Sudan',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Sweden',
    'Switzerland',
    'Syria',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Timor-Leste',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States of America',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
];


