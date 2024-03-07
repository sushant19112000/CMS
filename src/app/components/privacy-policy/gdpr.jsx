import React from 'react'

export const Gdpr = () => {
    return (
        <div className="">
            <div className="intro">
                <h1>General Data Protection Regulation</h1>
                <p>The General Data Protection Regulation (GDPR) is a comprehensive data protection law that was enacted
                    by the European Union (EU) and came into effect on May 25, 2018. The GDPR is designed to protect the
                    personal data and privacy rights of individuals within the EU and applies to businesses and
                    organizations that process personal data of EU residents, regardless of where the processing takes
                    place. In this detailed explanation, we will explore the key provisions and compliances of the
                    General Data Protection Regulation (GDPR).</p>
            </div>
            <div className="artricle">
                <h3>Lawful Basis for Data Processing:</h3>
                <p>One of the fundamental principles of the GDPR is that data processing must have a lawful basis. The
                    regulation provides six lawful bases for processing personal data, including the necessity of
                    processing for the performance of a contract, compliance with a legal obligation, consent of the
                    data subject, protection of vital interests, performance of a task carried out in the public
                    interest or in the exercise of official authority, and legitimate interests pursued by the data
                    controller or a third party.</p>
                <h3>Data Subject Rights:</h3>
                <p>The GDPR grants various rights to data subjects (individuals whose personal data is processed),
                    allowing them to have more control over their data. These rights include:</p>
                <p><strong>a. Right to Access: </strong>Data subjects have the right to obtain confirmation from the
                    data controller if their personal data is being processed and to access a copy of the data being
                    processed.</p>
                <p><strong>b. Right to Rectification: </strong>Data subjects can request the correction of inaccurate or
                    incomplete personal data.</p>
                <p><strong>c. Right to Erasure (Right to be Forgotten): </strong>Data subjects have the right to request
                    the erasure of their personal data under specific circumstances, such as when the data is no longer
                    necessary for the purpose for which it was collected or when the data processing is based on
                    consent, and the data subject withdraws that consent.</p>
                <p><strong>d. Right to Restriction of Processing: </strong>Data subjects can request the restriction of
                    processing their personal data in certain situations, such as when the accuracy of the data is
                    contested or the data processing is unlawful.</p>
                <p><strong>e. Right to Data Portability: </strong>Data subjects have the right to receive their personal
                    data in a structured, commonly used, and machine-readable format, and to transmit that data to
                    another data controller.</p>
                <p><strong>f. Right to Object: </strong>Data subjects can object to the processing of their personal
                    data based on legitimate interests or for direct marketing purposes.</p>
                <p><strong>g. Automated Decision-making and Profiling: </strong>Data subjects have the right not to be
                    subject to decisions based solely on automated processing, including profiling, that produce legal
                    effects concerning them or significantly affect them.</p>
            </div>
            <div className="other">
                <h3>Consent Requirements:</h3>
                <p>The GDPR sets high standards for obtaining consent for data processing. Consent must be freely given,
                    specific, informed, and unambiguous. Consent cannot be inferred from silence, pre-ticked boxes, or
                    inactivity. Data controllers must provide clear and easily accessible information about the purposes
                    and scope of data processing, and data subjects have the right to withdraw their consent at any
                    time.</p>
                <h3>Data Breach Notification:</h3>
                <p>The GDPR mandates data controllers to notify the relevant supervisory authority of a data breach
                    without undue delay and, where feasible, no later than 72 hours after becoming aware of it. If the
                    breach is likely to result in a high risk to the rights and freedoms of individuals, data subjects
                    must also be notified.</p>
                <h3>Data Protection Impact Assessments (DPIAs):</h3>
                <p>Data controllers must conduct Data Protection Impact Assessments (DPIAs) for high-risk data
                    processing activities that may result in a significant risk to data subjects' rights and freedoms.
                    DPIAs involve assessing the impact of the processing and implementing measures to mitigate risks.
                </p>
                <h3>Data Protection Officer (DPO):</h3>
                <p>Organizations engaged in large-scale data processing or processing sensitive data must appoint a Data
                    Protection Officer (DPO). The DPO is responsible for monitoring compliance with the GDPR, providing
                    advice to the organization, and acting as a point of contact for data subjects and supervisory
                    authorities.</p>
                <h3>Data Transfers Outside the EU:</h3>
                <p>The GDPR restricts the transfer of personal data outside the EU to countries that are not deemed to
                    have adequate data protection laws. Data transfers are permitted under specific conditions, such as
                    the use of EU-approved standard contractual clauses or binding corporate rules.</p>
                <h3>Accountability and Record-keeping:</h3>
                <p>The GDPR emphasizes the principle of accountability, requiring data controllers to demonstrate
                    compliance with the regulation. This includes maintaining records of data processing activities,
                    implementing data protection policies and procedures, and conducting regular internal audits.</p>
                <h3>Joint Data Controllers and Processors:</h3>
                <p>The GDPR introduces clear responsibilities for data controllers and data processors and outlines
                    their respective obligations in processing personal data. Organizations acting as joint data
                    controllers must have a clear agreement defining their roles and responsibilities.</p>
                <h3>Supervisory Authorities and Enforcement:</h3>
                <p>Each EU member state has a designated supervisory authority responsible for enforcing the GDPR within
                    its jurisdiction. Supervisory authorities have the power to investigate and impose fines for non-
                    compliance, including administrative fines of up to €20 million or 4% of the global annual turnover,
                    whichever is higher.</p>
            </div>
            <div className="conclude">
                <p>In conclusion, the General Data Protection Regulation (GDPR) is a robust data protection law that
                    sets high standards for the processing of personal data of EU residents. It grants individuals
                    significant control over their data and places significant responsibilities on businesses and
                    organizations that process personal information. To comply with the GDPR, businesses must establish
                    clear and lawful bases for data processing, respect data subject rights, implement data protection
                    measures, and be transparent about their data practices. By adhering to the principles of the GDPR,
                    organizations can build trust with their customers and ensure data privacy and security in an
                    increasingly digital world.</p>
            </div>
        </div>
    )
}
