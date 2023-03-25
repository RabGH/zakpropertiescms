export default {
    name: 'projects',
    title: 'Projects',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'location',
            title: 'Location',
            type: 'geopoint',
        },
        {
            // Property Types
            name: 'development',
            title: 'Development',
            type: 'array',
            of: [{type: 'string'}],
            options: {
                list: [
                    { title: 'House', value: 'House'},
                    { title: 'Villa', value: 'Villa'},
                    { title: 'Townhouse', value: 'Townhouse'},
                    { title: 'Apartment', value: 'Apartment'},
                ],
                layout: 'checkbox'
            }
        },
        // Unit type(1-3 bedrooms) or 1-4 or 1-5 
        {
            name: 'mainProjectImage',
            title: 'Main Project Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        // Developer
        {
            name: 'projectImages',
            title: 'Project Images',
            type: 'array',
            of: [{type:'developmentImage'}]
        },
        // Off-plan or Not offplan 
        // if off-plan complition date calender date Month / Year
        {
            name: 'totalPrice',
            title: 'Price',
            type: 'number',
        },
        {
            name: 'squareFootage',
            title: 'Square Footage',
            type: 'number',
        },
        {
            name: 'amenities',
            title: 'Amenity Types',
            type: 'array',
            of: [{type: 'string'}],
            options: {
                list: [
                    { title: 'Gated Community', value: 'Gated Community'},
                    { title: 'Kids Area', value: 'Kids Area'},
                    { title: 'Retail Area', value: 'Retail Area'},
                    { title: 'Grocery Store', value: 'Grocery Store'},
                    { title: 'Gym', value: 'Gym'},
                    { title: 'Pool', value: 'Pool'},
                ],
                layout: 'checkbox'
            }
        },
        {
            name: 'properties',
            title: 'Properties',
            type: 'array',
            of: [{type: 'reference', to: [{ type: 'property' }] }],
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 100,
            },
        },
        {
            name: 'id',
            title: 'ID',
            type: 'string',
        }
        
    ]
}