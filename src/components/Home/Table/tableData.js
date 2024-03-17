import images from '../../../assets/brands/index';

const col = ['Brand', 'Description', 'Members', 'Categories', 'Tags', 'Next Meeting'];

const Rowdata = [
    {
        icon: images.amazon,
        BrandName: "Amazon",
        description: "E-commerce website E-commerce website E-commerce website",
        members: ["Serena Chang", "Emma Rodriguez", "Emma Rodriguez"],
        categories: ["#Ecommerce", "#Cloud", "#Logistic"],
        tags: ['Innovation', 'Customer Service'],
        nextMeeting: "in 2 Hours"
    },
    {
        icon: images.castle,
        BrandName: "Castle",
        description: "Security Solutions",
        members: ["Ava Murphy", "William Garcia"],
        categories: ["#Security", "#Technology"],
        tags: ['Data Protection', 'Encryption'],
        nextMeeting: "in 1 Hour"
    },
    {
        icon: images.google,
        BrandName: "Google",
        description: "Search Engine",
        members: ["Sophia Cooper", "Amelia Stewart", "Alexander Wright"],
        categories: ["#Search", "#AI", "#Advertising"],
        tags: ['Innovation', 'Technology'],
        nextMeeting: "in 30 Minutes"
    },
    {
        icon: images.mailchimp,
        BrandName: "Mailchimp",
        description: "Email Marketing Platform",
        members: ["Evelyn Diaz", "Sophia Cooper", "avatar5", "Samuel Khan"],
        categories: ["#EmailMarketing", "#Automation", "#Analytics"],
        tags: ['Marketing', 'Campaigns'],
        nextMeeting: "in 1 Day"
    },
    {
        icon: images.microsoft,
        BrandName: "Microsoft",
        description: "Software Company",
        members:[ "Alexander Wright"],
        categories: ["#Productivity", "#Cloud", "#Development"],
        tags: ['Innovation', 'Technology'],
        nextMeeting: "in 3 Hours"
    },
    {
        icon: images.paypal,
        BrandName: "PayPal",
        description: "Online Payment System",
        members: ["Madison Patel", "Samuel Khan","Ava Murphy","Mason Santos", "Serena Chang"],
        categories: ["#Payments", "#FinancialServices"],
        tags: ['Security', 'Transactions'],
        nextMeeting: "in 6 Hours"
    },
    {
        icon: images.wix,
        BrandName: "Wix",
        description: "Website Maker",
        members: ["Liam", "Mason Santos"],
        categories: ["#Design", "#Development", "#SEO"],
        tags: ['Automation', 'Customer Support'],
        nextMeeting: "in 12 Hours"
    }
];

export { col, Rowdata };
