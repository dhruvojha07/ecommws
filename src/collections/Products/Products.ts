import { PRODUCT_CATEGORIES } from "../../config";
import { CollectionConfig } from "payload/types";

export const Products: CollectionConfig = {
    slug: "products",
    admin: {
        useAsTitle: "name"
    },
    access: {

    },
    fields: [
        {
            name: "user",
            type: "relationship",
            relationTo: "users",
            required: true,
            hasMany: false,
            admin: {
                condition: () => false
            }
        },
        {
            name: "name",
            label: "Name",
            type: "text",
            required: true,
        },
        {
            name: "description",
            type: "textarea",
            label: "Product details",
        },
        {
            name: "price",
            label: "Price in INR",
            min: 0,
            max: 10000,
            type: "number",
            required: true,
        },
        {
            name: "category",
            label: "Category",
            type: "select",
            options: PRODUCT_CATEGORIES.map(({label, value}) => ({label, value})),
            required: true,

        },
        // {
        //     name: "product_files",
        //     label: "Product File(s)",
        //     type: "relationship",
        //     required: true,
        //     relationTo: "product_files",
        //     hasMany: false,
        // },
        {
            name: "approvedForSale",
            label: "Product Status",
            type: "select",
            defaultValue: "pending",
            access: {
                //Only admins have access to change product status
                create: ({req}) => req.user.role ==="admin", 
                read: ({req}) => req.user.role ==="admin",
                update: ({req}) => req.user.role ==="admin", 
            },
            options: [
                {
                    label: "Pending verification",
                    value: "pending"
                },
                {
                    label: "Approved",
                    value: "approved"
                },
                {
                    label: "Denied",
                    value: "denied"
                },
            ]
        },
        {
            name: "priceId",
            access: {
                create: () => false, //Nothing can change price
                read: () => false,
                update: () => false,
            },
            type: 'text',
            admin: {
                hidden: true,
            },
        },
        {
            name: "stripeId",
            access: {
                create: () => false, //Nothing can change price
                read: () => false,
                update: () => false,
            },
            type: 'text',
            admin: {
                hidden: true,
            },
        },
        {
            name: "images",
            label: "Product images",
            type: "array",
            minRows:1,
            maxRows: 4,
            required: true,
            labels: {
                singular: "Images",
                plural: "Images"
            },
            fields: [
                {
                    name: "image",
                    type: "upload",
                    relationTo: "media",
                    required: true,
                }
            ]
        }
    ]
}