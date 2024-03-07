import React from 'react'

export const Ccpa = () => {
    return (
        <div className="">
            <div className="ccpa">
                <h1 style={{fontWeight:'bold'}}>California Consumer Privacy Act</h1>
                <p>The California Consumer Privacy Act (CCPA) is a comprehensive data privacy law that was enacted in
                    the state of California, United States, and became effective on January 1, 2020. The primary aim of
                    CCPA is to enhance consumer privacy rights and give Californian residents more control over their
                    personal information that is collected, stored, and shared by businesses. The law applies to
                    businesses that collect and process the personal information of California residents and meet
                    certain criteria regarding revenue or data handling. In this detailed explanation, we will explore
                    the key provisions and compliances of the California Consumer Privacy Act (CCPA).</p>
            </div>
            <div className="rights">
                <h3>Consumer Rights and Disclosures:</h3>
                <h3>CCPA grants California consumers specific rights regarding their personal information, including:
                </h3>
                <p><strong>a. Right to Know: </strong>Consumers have the right to know what personal information
                    businesses collect about them, the sources from which the data was obtained, the purposes for
                    collecting the information, and the categories of third parties with whom the data is shared.</p>
                <p><strong>b. Right to Delete: </strong>Consumers can request the deletion of their personal information
                    from a business's records. Once a valid deletion request is received, the business must promptly
                    delete the information, subject to certain exceptions.</p>
                <p><strong>c. Right to Opt-out: </strong>CCPA allows consumers to opt-out of the sale of their personal
                    information to third parties. Businesses must provide a clear and conspicuous "Do Not Sell My
                    Personal Information" link on their websites to facilitate this right.</p>
                <p><strong>d. Right to Non-discrimination: </strong>Businesses cannot discriminate against consumers who
                    exercise their privacy rights. This means that businesses cannot deny goods, services, or discounts,
                    nor charge different prices or provide different levels of service based on a consumer's exercise of
                    their privacy rights.</p>
            </div>
            <div className="datacollect">
                <h3>Data Collection and Sharing Practices:</h3>
                <h3>CCPA places specific requirements on businesses in terms of data collection and sharing practices:
                </h3>
                <p><strong>a. Notice at Collection: </strong>Businesses must inform consumers at or before the point of
                    data collection about the categories of personal information they will collect and the purposes for
                    which it will be used.</p>
                <p><strong>b. Verifiable Consumer Requests: </strong>Businesses are required to establish processes for
                    consumers to submit verifiable requests to exercise their rights under CCPA. Businesses must verify
                    the identity of the consumer making the request before responding.</p>
                <p><strong>c. Handling Data Requests: </strong>Businesses must respond to consumer requests within
                    specific time frames outlined in the CCPA, generally within 45 days of receiving the request, with
                    the possibility of a 45-day extension under certain circumstances.</p>
                <p><strong>d. Data Security Obligations: </strong>Businesses must implement and maintain reasonable
                    security procedures and practices to protect consumers' personal information from unauthorized
                    access, disclosure, or deletion.</p>
                <p><strong>e. Sale of Personal Information: </strong>If a business sells personal information to third
                    parties, it must provide a clear and conspicuous link on its website titled "Do Not Sell My Personal
                    Information" to enable consumers to opt-out of such sales.</p>
                <p><strong>f. Service Providers and Contractors: </strong>Businesses that share personal information
                    with service providers or contractors must ensure they have contractual agreements in place that
                    prohibit the recipient from using the data for any purpose other than providing the services to the
                    business.</p>
            </div>
            <div className="apply">
                <h3>Applicability and Business Obligations:</h3>
                <h3>CCPA applies to businesses that meet one or more of the following criteria:</h3>
                <p>a. Have an annual gross revenue of $25 million or more.</p>
                <p>b. Buy, sell, or share personal information of 50,000 or more consumers, households, or devices for
                    commercial purposes.</p>
                <p>Derive 50% or more of their annual revenue from selling consumers' personal information.</p>
                <p>Businesses covered by CCPA are obligated to comply with its requirements, even if they are not based
                    in California, as long as they collect personal information from California residents.</p>
            </div>
            <div className="privacy">
                <h3>Privacy Policy and Disclosures:</h3>
                <p>CCPA requires businesses to provide detailed information about their data collection and sharing
                    practices in their privacy policies. The privacy policy should explain the types of personal
                    information collected, the purposes for which the information is used, the categories of third
                    parties with whom the information is shared, and the rights available to consumers under CCPA.</p>
                <h3>Data Breach Notification:</h3>
                <p>CCPA requires businesses to implement reasonable security measures to safeguard consumers' personal
                    information. If a data breach occurs that exposes personal information, businesses must notify
                    affected consumers without unreasonable delay.</p>
                <h3>Record-Keeping and Training:</h3>
                <p>Businesses subject to CCPA must keep records of consumer requests and how they responded to those
                    requests for at least 24 months. Additionally, businesses should ensure that employees responsible
                    for handling consumer inquiries or requests receive adequate training on how to comply with CCPA.
                </p>
                <h3>Special Categories of Data:</h3>
                <p>CCPA imposes additional restrictions on the collection, use, and sharing of sensitive personal
                    information, including data such as Social Security numbers, driver's license numbers, financial
                    account information, and precise geolocation data.</p>
                <h3>California Privacy Rights and Do Not Sell My Personal Information Notices:</h3>
                <p>Businesses must make it easy for consumers to exercise their privacy rights by providing multiple
                    methods for submitting requests, including a toll-free phone number and a "Do Not Sell My Personal
                    Information" link on their website.</p>
                <h3>Penalties for Non-compliance:</h3>
                <p>CCPA grants the California Attorney General the authority to enforce the law. Businesses found to be
                    in violation of CCPA can face significant fines and penalties, with fines ranging from $2,500 to
                    $7,500 per violation, depending on the nature and severity of the violation.</p>
            </div>
            <div className="conclusion">
                <p>In conclusion, the California Consumer Privacy Act (CCPA) is a groundbreaking data privacy law that
                    grants California consumers significant control over their personal information. By providing
                    consumers with clear rights and disclosures, CCPA empowers individuals to make informed decisions
                    about their data and helps foster a culture of privacy and data protection in the business
                    community. To comply with CCPA, businesses must be transparent about their data collection and
                    sharing practices, respect consumers' choices, and implement robust data security measures to
                    protect personal information. Moreover, businesses must be prepared to respond to consumer requests
                    efficiently and train their staff to handle privacy inquiries effectively. By embracing the
                    principles of CCPA, businesses can build trust with their customers and demonstrate a commitment to
                    safeguarding consumer privacy in the digital age.</p>
            </div>
        </div>
    )
}
