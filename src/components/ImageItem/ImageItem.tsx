import React from 'react'
import {
    GridListTile,
    GridListTileBar,
    IconButton
} from '@material-ui/core'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import IImageItem from './IImageItem'

const ImageItem = (props: IImageItem) => {

    return (
        <GridListTile>
            <img src={props.imgSrc} alt={props.title} />
            <GridListTileBar
                title={props.title}
                actionIcon={
                    <IconButton>
                        <FavoriteBorderIcon />
                    </IconButton>
                }
            />
        </GridListTile>
    )
}

export default ImageItem