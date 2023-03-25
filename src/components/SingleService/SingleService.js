import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React from 'react'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const SingleService = (props) => {
    // console.log(props);
    const { img, title, icon } = props;

    return (
        <Box>
            <Card elevation={0} sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 300 }}
                    image={img}
                />
                <CardContent>

                    <Stack direction='row' spacing={2} mb={5}>
                        <Box>
                            {icon}
                        </Box>
                        <Box>
                            <Typography
                                gutterBottom variant="h5" component="div">
                                {title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lorem ipsum dolor sit amet consectetur  adipisi elit.Blanditiis, ex.  Loremipsum dolor sit amet dolor.
                            </Typography>

                            <Stack sx={{ cursor: 'pointer' }} direction='row' spacing={2} mt={1}>
                                <Typography sx={{ color: '#1484CD' }}>
                                    See More
                                </Typography>
                                <ArrowCircleRightIcon sx={{ color: 'lightgreen' }} />
                            </Stack>
                        </Box>
                    </Stack>

                </CardContent>
            </Card>
        </Box>
    )
}

export default SingleService