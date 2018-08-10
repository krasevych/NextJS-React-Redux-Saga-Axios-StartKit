import config from '../config';

const getFromCdn = (src: string) => `${config.cdnUrl}static/${src}`;

export default getFromCdn;
