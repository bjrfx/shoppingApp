import React from 'react'
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';

const ItemNames = () => {
    const categories = [
        {
            id: 1,
            title: "Hats",
            img: "https://img.huffingtonpost.com/asset/61cd06e52100000cf87029d6.jpg?ops=1200_630"
        },

        {
            id: 2,
            title: "Jackets",
            img: "https://media.gq.com/photos/6349b89fdb5964b0cd729daf/3:2/w_1686,h_1124,c_limit/varsity-jackets.jpg"
        },

        {
            id: 3,
            title: "Sneakers",
            img: "https://media.gq.com/photos/653aa2f89a9de48ee4c9181f/master/pass/sneakers.jpg"
        },

        {
            id: 4,
            title: "Womans",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlIkJnJ-9qgpG5Czrzn5VcNMBeuIh3V3KU9w&usqp=CAU"
        },

        {
            id: 5,
            title: "Mens",
            img: "https://hips.hearstapps.com/hmg-prod/images/index-online-65a1812dc7346.jpg?resize=2048:*"
        }

    ];

    return (
        <>
            {categories.map((items) => {
                return <Grid item xs={12} sm={6} md={4}>
                    <Box flex={1} p={2}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={items.img}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {items.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">

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