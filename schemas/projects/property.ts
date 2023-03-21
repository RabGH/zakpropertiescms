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
                    { title: 'House', value: 'house'},
                    { title: 'Villa', value: 'villa'},
                    { title: 'Townhouse', value: 'townhouse'},
                    { title: 'Apartment', value: 'apartment'},
                ],
                layout: 'radio'
            }
        },
        {
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'images',
            title: 'Images',
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
                    { title: 'Gated Community', value: 'gated-community'},
                    { title: 'Kids Area', value: 'kids-area'},
                    { title: 'Retail Area', value: 'retail-area'},
                    { title: 'Grocery Store', value: 'grocery-store'},
                    { title: 'Gym', value: 'gym'},
                    { title: 'Pool', value: 'pool'},
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
            type: 'number',
        }
        
    ]
}