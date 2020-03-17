import React from 'react'
import {
    GridList,
    Grid,
    makeStyles,
    Theme
} from '@material-ui/core'
import { useSelector } from 'react-redux'

import ImageItem from '../ImageItem/ImageItem';
import IRootState from '../../reducers/interfaces/IRootState';


const useStyles = makeStyles((theme: Theme) => ({

}))

const ImagesList = () => {
    const classes = useStyles()
    const images = useSelector((state: IRootState) => state.images)

    return (
        <GridList cellHeight={180}>
            {images.map(image => <ImageItem imgSrc={image.imgSrc} title={image.title} />)}
        </GridList>
    )
}

export default ImagesList;