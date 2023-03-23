export default {
    name: 'property',
    title: 'Property',
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
            name: 'propertyType',
            title: 'Property Type',
            type: 'string',
            options: {
                list: [
                    { title: 'House', value: 'House'},
                    { title: 'Villa', value: 'Villa'},
                    { title: 'Townhouse', value: 'Townhouse'},
                    { title: 'Apartment', value: 'Apartment'},
                ],
                layout: 'radio'
            }
        },
        {
            name: 'mainPropertyImage',
            title: 'Main Property Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'propertyImages',
            title: 'Property Images',
            type: 'array',
            of: [{type:'propertyImage'}]
        },
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
            name: 'plottedArea',
            title: 'Plotted Area',
            type: 'number',
        },
        {
            name: 'builtUpArea',
            title: 'Built Up Area',
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
            name: 'bedrooms',
            title: 'Bedrooms',
            type: 'number',
        },
        {
            name: 'bathrooms',
            title: 'Bathrooms',
            type: 'number',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
        },
        {
            name: 'projectId',
            title: 'Project ID',
            type: 'reference',
            to: [{ type: 'projects' }],
            weak: true, // Make the field optional
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