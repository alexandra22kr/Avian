import IRecord from './IRecord';
import IImage from './IImage';

export default interface IRootState {
    history: Array<IRecord>
    images: Array<IImage>
}