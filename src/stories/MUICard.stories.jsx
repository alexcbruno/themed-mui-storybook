import React from "react";

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default {
  title: "Material UI/Card",
  component: Card,
  argTypes: {
    variant: {
      control: { type: "select", options: ["outline", "elevation"] },
    },
  },
};


const Template = (args) => <Card {...args} style={{ maxWidth: 600 }}>
  {args.header && <CardHeader
    avatar={
      <Avatar sx={{bgcolor: red[500]}} aria-label="recipe">
        R
      </Avatar>
    }
    action={
      <IconButton aria-label="settings">
        <MoreVertIcon/>
      </IconButton>
    }
    title="Shrimp and Chorizo Paella"
    subheader="September 14, 2016"
  />}
  <CardMedia
    component="img"
    height="194"
    image={args.image}
    alt="Paella dish"
  />
  <CardContent>
    <Typography variant="body2" color="text.secondary">
      {args.content}
    </Typography>
  </CardContent>
  {args.footer && <CardActions disableSpacing>
    <IconButton aria-label="add to favorites">
      <FavoriteIcon/>
    </IconButton>
    <IconButton aria-label="share">
      <ShareIcon/>
    </IconButton>
  </CardActions>}
</Card>;

export const MuiCard = Template.bind({});

MuiCard.args = {
  content: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
  variant: "outline",
  footer: true,
  image: "https://images.unsplash.com/photo-1515443961218-a51367888e4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  header: true,
};