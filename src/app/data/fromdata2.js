import { countries } from "./countries";
import { industries } from "./industries";

export const formData2 = [
    {
        "id": "firstname",
        "type": "text",
        "label": "First Name"
    },

    {
        "id": "lastname",
        "type": "text",
        "label": "Last Name"
    },
    {
        "id": "email",
        "type": "text",
        "label": "Email"
    },

    {
        "id": "phonumber",
        "type": "text",
        "label": "Phonenumber"
    },

    {
        "id": "address",
        "type": "text",
        "label": "Address"
    },

    {
        "id": "city",
        "type": "text",
        "label": "City"
    },

    {
        "id": "postcode",
        "type": "text",
        "label": "Postalcode"
    },
    {
        "id": "company name",
        "type": "text",
        "label": "Company Name"
    },
    {
        "id": "job title",
        "type": "text",
        "label": "Job Title"
    },

    {
        "id": "country",
        "type": "select",
        "label": "Country",
        "options": countries
    },

    {
        "id": "industry",
        "type": "select",
        "label": "Industry",
        "options": industries
    },
    {
        "id": "subscribe",
        "type": "checkbox",
        "label": "Subscribe to newsletter"
    },
]

