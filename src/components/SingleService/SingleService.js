import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React from 'react'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const SingleService = (props) => {
    console.log(props);
    const { img, title, icon } = props;

    return (
        // <Box>
        //     <Paper elevation={0} sx={{ maxWidth: '300px' }}>
        //         <Box>
        //             <Box sx={{ mb: 3 }}>
        //                 <img className='services-img' src={props.img} alt=''></img>
        //             </Box>

        //             <Stack direction='row' spacing={2} mb={5}>
        //                 <Box>
        //                     <DirectionsBusIcon fontSize='medium' sx={{ color: 'white', backgroundColor: '#CA1533', borderRadius: '50%', p: 1 }} />
        //                 </Box>
        //                 <Box>
        //                     <Typography
        //                         variant='h6'>
        //                         Fast Delivery
        //                     </Typography>
        //                     <Typography variant='caption'>
        //                         Lorem ipsum dolor sit<br /> amet consectetur  adipisi<br /> elit.Blanditiis, ex.  Lorem <br /> ipsum dolor sit<br /> amet.
        //                     </Typography>
        //                     <Stack direction='row' spacing={2} mt={1}>
        //                         <Typography sx={{ color: '#1484CD' }}>
        //                             See More
        //                         </Typography>
        //                         <ArrowCircleRightIcon sx={{ color: 'lightgreen' }} />

        //                     </Stack>
        //                 </Box>
        //                 <Box>

        //                 </Box>
        //             </Stack>
        //         </Box>
        //     </Paper>
        // </Box>
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