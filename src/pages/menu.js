const menus = [
    {
        id: 1,
        name: 'Home',
        links: '/',
        namesub: [
            {
                id: 1,
                sub: 'Home',
                links: '/'
            },
        ]
    },
    {
        id: 2,
        name: 'About',
        links: '#',
        namesub: [
            {
                id: 1,
                sub: 'About',
                links: '/about-v1'
            },
            // {
            //     id: 3,
            //     sub: 'Coming Soon',
            //     links: '/coming-soon'
            // },
            {
                id: 4,
                sub: 'Team Details',
                links: '/team-details'
            },
            // {
            //     id: 5,
            //     sub: 'FAQ',
            //     links: '/faq'
            // },
            // {
            //     id: 6,
            //     sub: '404',
            //     links: '/404'
            // },

        ]
    },
    {
        id: 3,
        name: 'Road Map',
        links: '/road-map-v2',
        namesub: [
            {
                id: 1,
                sub: 'Road Map',
                links: '/road-map-v2'
            },
        ]
    },
    // {
    //     id: 4,
    //     name: 'Nft',
    //     links: '#',
    //     namesub: [
    //         {
    //             id: 1,
    //             sub: 'Nft Mint',
    //             links: '/nft-mint'
    //         },
    //         {
    //             id: 2,
    //             sub: 'Nft Staking',
    //             links: '/nft-staking'
    //         },
    //         {
    //             id: 3,
    //             sub: 'Nft Profile',
    //             links: '/nft-profile'
    //         },
    //         {
    //             id: 4,
    //             sub: 'Nft Item',
    //             links: '/nft-item'
    //         },
    //         {
    //             id: 5,
    //             sub: 'Nft Item Details',
    //             links: '/nft-item-details'
    //         },
    //         {
    //             id: 6,
    //             sub: 'Nft Marketplace',
    //             links: '/nft-marketplace'
    //         },
    //     ],
    // },
    {
        id: 5,
        name: 'Vault',
        links: '/vault'
    },
    {
        id: 6,
        name: 'IDO',
        links: '/ido'
    },
    
]

export default menus;