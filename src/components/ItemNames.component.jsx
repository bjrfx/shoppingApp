import React from 'react'
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';

const ItemNames = () => {
    const categories = [
        {
            id: 1,
            title: "Hats",
            img: "https://img.huffingtonpost.com/asset/61cd06e52100000cf87029d6.jpg?ops=1200_630",
            description: "No outfit is complete without the perfect headwear! Whether it's a classic fedora from Stetson for a timeless look, a cozy beanie from Carhartt for winter chills, or a trendy bucket hat for summer vibes, hats add a touch of personality and functionality."
        },

        {
            id: 2,
            title: "Jackets",
            img: "https://media.gq.com/photos/6349b89fdb5964b0cd729daf/3:2/w_1686,h_1124,c_limit/varsity-jackets.jpg",
            description: " A good jacket can elevate any outfit and provide warmth in cooler weather. Leather jackets by Schott NYC are a timeless choice, while bomber jackets from Alpha Industries offer a cool, casual vibe. Puffer jackets by North Face are perfect for winter, while denim jackets by Levi's are a versatile option for all seasons."
        },

        {
            id: 3,
            title: "Sneakers",
            img: "https://media.gq.com/photos/653aa2f89a9de48ee4c9181f/master/pass/sneakers.jpg",
            description: "Sneakers are all the rage these days, not just for athletic activities. Stylish kicks by New Balance or limited-edition collaborations between Converse and fashion houses are must-haves for many."
        },

        {
            id: 4,
            title: "Womans",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlIkJnJ-9qgpG5Czrzn5VcNMBeuIh3V3KU9w&usqp=CAU",
            description: " The world of women's clothing is vast and ever-evolving. From flowy maxi dresses by Reformation for a touch of bohemian flair to sharp power suits by Armani for the office, there's something for every woman's taste and style.  Denim lovers can find their perfect fit with jeans from Levi's or Everlane, while athleisure enthusiasts can rock leggings and joggers from Lululemon or Girlfriend Collective."
        },

        {
            id: 5,
            title: "Mens",
            img: "https://hips.hearstapps.com/hmg-prod/images/index-online-65a1812dc7346.jpg?resize=2048:*",
            description: "Men's clothing offers a variety of options, from classic staples to trendy pieces. Timeless polos by Ralph Lauren or crisp button-down shirts by Calvin Klein are perfect for work or a dressed-up event.  For a casual look, comfortable t-shirts by Hanes or graphic tees from The North Face are great options. Denim is a must-have, with brands like Wrangler or Nudie Jeans offering a variety of washes and styles."
        },

        {
            id:6,
            title: "Footwear",
            description: " This category covers everything that goes on your feet! From comfy sandals by Birkenstock to sleek stilettos by Christian Louboutin, there's a perfect pair for every occasion. For the sporty crowd, brands like Nike and Adidas offer top-notch sneakers for running, training, or just looking cool."
        }

    ];

    return (
        <>
            {categories.map((items, index) => {
                return <Grid key={items.id} item xs={12} sm={6} md={4}>
                    <Box flex={1} p={2}>
                        <Card className= {items.title.toLocaleLowerCase() + "-" +items.id} sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={items.img}
                                    alt="No img detected"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {items.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    {console.log("Item Number: ", items.id, ". ", items.title)}
                                    {items.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    View
                                </Button>
                            </CardActions>
                        </Card>
                    </Box>
                </Grid>
            })}
            
        </>


    )
}

export default ItemNames;