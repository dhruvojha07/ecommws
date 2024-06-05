//This is going to be important throughout the application therfore we make it in a speparate folder
export const PRODUCT_CATEGORIES = [
    {
        label : "UI Kits",
        // 'as const' is important so TypeScript knows that this is a constant and not just any string
        value : "ui_kits" as const,
        featured : [
            {
                name : "Editor picks",
                href : "#",
                imageSrc : "/nav/ui-kits/mixed.jpg"
            },
            {
                name : "New Arrivals",
                href : "#",
                imageSrc : "/nav/ui-kits/blue.jpg"
            },
            {
                name : "Bestsellers",
                href : "#",
                imageSrc : "/nav/ui-kits/purple.jpg"
            },
        ],
    },
    {
        label : "Icons",
        value : "icons" as const,
        featured : [
            {
                name : "Favorites Icon picks",
                href : "#",
                imageSrc : "/nav/icons/picks.jpg"
            },
            {
                name : "New Arrivals",
                href : "#",
                imageSrc : "/nav/icons/new.jpg"
            },
            {
                name : "Bestselling Icons",
                href : "#",
                imageSrc : "/nav/icons/bestsellers.jpg"
            },
        ],
    },
]