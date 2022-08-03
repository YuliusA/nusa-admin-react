import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
// import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Divider from '@mui/material/Divider';
// import { menuItems } from '../../../data/sidebar';

function Dashboard() {
    // const items = JSON.stringify(menuItems, null, '\t');
    return (
        <>
        {/* <Toolbar /> */}
        <Typography variant='h4' sx={{ mb: 3 }}>Dashboard</Typography>

        <Divider sx={{ my: 3 }}/>

        <Grid container spacing={3}>
            <Grid item lg={3} md={6}>
                <Card variant='outlined'>
                    <CardHeader
                        action={<IconButton aria-label="settings"><MoreVertIcon /></IconButton>}
                        title="Shrimp and Chorizo Paella"
                        subheader="September 14, 2016"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item lg={3} md={6}>
                <Card variant='outlined'>
                    <CardHeader
                        action={<IconButton aria-label="settings"><MoreVertIcon /></IconButton>}
                        title="Shrimp and Chorizo Paella"
                        subheader="September 14, 2016"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item lg={3} md={6}>
                <Card variant='outlined'>
                    <CardHeader
                        action={<IconButton aria-label="settings"><MoreVertIcon /></IconButton>}
                        title="Shrimp and Chorizo Paella"
                        subheader="September 14, 2016"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item lg={3} md={6}>
                <Card variant='outlined'>
                    <CardHeader
                        action={<IconButton aria-label="settings"><MoreVertIcon /></IconButton>}
                        title="Shrimp and Chorizo Paella"
                        subheader="September 14, 2016"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>

        <Divider sx={{ my: 3 }}/>
            
            <Typography paragraph>
            Morbi facilisis aliquet sapien in sodales. Integer semper turpis ac ligula egestas venenatis eu id risus. Nullam vestibulum justo a erat gravida luctus eget eget tellus. Etiam non arcu non sem imperdiet tristique. Praesent tempus consequat nibh, ut dignissim enim tincidunt in. Sed ac mi a quam cursus lobortis. Morbi eu nulla et nisl efficitur vulputate. Donec eget sem aliquam, posuere diam eu, dignissim enim. Aenean neque elit, tempus id lorem accumsan, cursus sollicitudin risus. Aenean maximus ipsum id ligula facilisis, in pretium purus finibus. Donec porta maximus elit vitae efficitur. Sed mattis velit risus, ac luctus nibh efficitur mattis. Donec id mi vitae nulla ullamcorper congue. Proin eget velit augue. Integer dolor mi, tempor sed ornare eu, consequat sit amet augue.
            </Typography>

            <Typography paragraph>
            Phasellus sit amet enim lectus. Vestibulum tempus vel magna vel eleifend. Pellentesque mattis et urna interdum scelerisque. Curabitur id ligula pellentesque, vestibulum ex vel, semper purus. Nulla facilisi. Donec a ipsum eleifend, accumsan risus eget, imperdiet diam. Etiam aliquam nibh volutpat commodo interdum. Cras dolor ante, lobortis sit amet cursus non, varius in urna. Aenean venenatis accumsan odio, vitae dapibus nibh sagittis nec.
            </Typography>

            <Typography paragraph>
            Nunc varius ornare porta. Nulla aliquam velit eu mauris scelerisque, eget tristique felis mattis. Nulla consequat augue at nunc malesuada, in vehicula nisl finibus. Maecenas pulvinar ac sem in ultrices. Nulla luctus sodales eros. Aenean ut porta nisi, a laoreet mi. Duis in posuere libero, id scelerisque risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in dictum enim, a faucibus turpis. Sed quis erat ut nisi mattis pellentesque. Ut lacinia dolor eget sem rutrum, at consequat arcu vestibulum. Sed bibendum nibh ut felis fermentum euismod. Etiam ornare tellus nisl, ac tristique sapien commodo sed.
            </Typography>

            <Typography paragraph>
            Cras felis lacus, pulvinar tempus mi ut, faucibus fringilla lorem. Praesent quam lacus, tempus et commodo vitae, tristique ac dolor. Quisque eleifend felis ligula, eu efficitur mauris dapibus ut. Proin tincidunt nec leo sed auctor. Phasellus sit amet massa faucibus, dapibus ligula id, placerat augue. Vivamus lobortis magna sit amet velit pulvinar, ut consectetur urna aliquam. Aliquam erat volutpat.
            </Typography>

            <Typography paragraph>
            Etiam lacus eros, vulputate sed arcu a, ullamcorper faucibus sapien. Phasellus et sodales neque, eu egestas urna. Donec non sem erat. Donec mattis turpis ac tincidunt dictum. Donec quis condimentum leo. Pellentesque cursus viverra ligula vitae viverra. Curabitur eu erat vel velit blandit euismod eu vel nunc. Duis volutpat, diam vel tempor sagittis, turpis turpis euismod nisi, ac placerat est leo sed magna. Nullam efficitur tincidunt nisl et ultrices. Donec sapien lorem, rutrum lacinia gravida nec, pellentesque sit amet dolor. Donec lectus massa, eleifend lacinia iaculis eu, placerat a tortor. Nam condimentum, lorem non pretium pretium, tellus diam commodo ligula, eu molestie est eros et lorem. Nulla lorem sem, ultrices in ultrices ut, placerat a nibh. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam laoreet sapien a egestas iaculis. Etiam viverra urna sed nulla auctor fringilla.
            </Typography>

            <Typography paragraph>
            In viverra nulla id pellentesque posuere. Sed accumsan et ex id efficitur. Curabitur ullamcorper vehicula nisi, vitae dapibus ante hendrerit et. Mauris viverra viverra blandit. Maecenas ultricies quam vel cursus ultrices. Aenean suscipit, neque eget bibendum molestie, elit est tincidunt augue, in fermentum justo dui quis odio. Suspendisse ac dapibus arcu, sed iaculis velit. Donec efficitur tellus sed laoreet convallis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent tempor ipsum eget lacus ultricies, at malesuada leo rutrum. Mauris a dignissim leo, non fringilla erat. Nam at lacinia urna.
            </Typography>

            <Typography paragraph>
            Quisque vitae bibendum arcu. Mauris euismod porta nulla. Vivamus sed velit sit amet elit malesuada suscipit eu imperdiet ex. Praesent vitae tincidunt justo. Cras vitae augue eu metus condimentum ultrices ultrices vitae ligula. Donec suscipit fermentum semper. Cras a nunc eleifend, interdum quam ut, faucibus leo. Praesent eu maximus est, id bibendum velit. Proin sagittis, ante nec consectetur lacinia, lorem lorem ultrices magna, sit amet auctor orci nisi nec nunc. Nulla ullamcorper massa at pretium vestibulum. Nulla facilisi. Etiam suscipit id neque quis accumsan. Nulla libero neque, vulputate vitae purus nec, feugiat fermentum metus. Proin et tellus lectus. Nullam lectus arcu, aliquet sit amet dapibus et, blandit vitae odio.
            </Typography>

            <Typography paragraph>
            Fusce a felis nibh. Nunc porttitor purus lectus, id pretium magna gravida nec. Sed consequat, arcu vitae pretium posuere, neque massa dictum dui, non fermentum diam justo euismod metus. Donec commodo gravida mi sed faucibus. Morbi semper ex eu nisi vehicula, quis cursus orci lacinia. Morbi imperdiet quam neque, id maximus odio posuere viverra. Aliquam facilisis viverra metus scelerisque ultricies. Vivamus a tristique nisl, ut consequat nulla. Praesent ornare turpis dolor, a molestie turpis ultrices a. Phasellus in luctus purus. Curabitur ac lacus nisi. Duis neque tellus, blandit vel mollis quis, fermentum nec ligula.
            </Typography>

            <Typography paragraph>
            Donec sit amet bibendum magna. Nunc nec augue facilisis, maximus metus a, vehicula arcu. Cras venenatis urna at interdum porttitor. Suspendisse potenti. Nullam vel dignissim odio. Cras finibus augue interdum ipsum cursus vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque turpis nulla, egestas ut eros sed, luctus aliquet lacus. Ut eu erat orci. Aliquam magna ante, cursus eu convallis et, accumsan fermentum libero.
            </Typography>

            <Typography paragraph>
            Aliquam posuere est sit amet lobortis molestie. Vestibulum id justo at dolor bibendum fringilla. Vestibulum sollicitudin felis sit amet sollicitudin ultricies. Vestibulum feugiat, tortor sed posuere suscipit, orci augue pellentesque lectus, at fermentum leo nulla non lorem. Nullam scelerisque nunc ante, non semper ante pretium sed. Aenean nec dolor ac augue interdum commodo. Donec vulputate massa a enim porta mollis. Aenean lacinia purus in metus pulvinar, eu placerat eros laoreet. Nullam sed sapien et metus pellentesque sagittis. Curabitur sodales a nisi sed tincidunt. Aenean eget molestie arcu.
            </Typography>
        </>
    )
}

export default Dashboard;