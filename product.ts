3. Sanity Schema Example (Product Schema)
Here’s an example schema for a product in Sanity CMS (you’ve already linked to this in your GitHub repo):

ts

// schema/product.ts
export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'imageUrl',
      title: 'Image URL',
      type: 'url',
    },
  ],
};
