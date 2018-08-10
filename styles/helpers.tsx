import { css, ThemedCssFunction } from 'styled-components';

type MediaSizes = { [key in keyof Sizes<number>]: ThemedCssFunction<any> };

interface Sizes<T> {
  giant: T;
  desktop: T;
  tablet: T;
  phone: T;
}

const setMedia = (size: number) => (
  strings: TemplateStringsArray,
  ...args: string[]
) => css`
  @media (max-width: ${size}px) {
    ${css(strings, ...args)};
  }
`;

const sizes: Sizes<number> = {
  giant: 1170,
  desktop: 1024,
  tablet: 768,
  phone: 376
};

export const media: MediaSizes = Object.keys(sizes).reduce<MediaSizes>(
  (acc: MediaSizes, label: keyof Sizes<number>) => {
    acc[label] = setMedia(sizes[label]);
    return acc;
  },
  {} as MediaSizes
);

export const truncate = (width: string) => `
    width: ${width};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `;

export const renderFontFace = (
  name: string,
  url: string,
  fileName: string,
  fWeight: number
) => `
    @font-face {
      font-family: ${name};
      src: url('${url}/${fileName}.woff2') format('woff2'),
      url('${url}/${fileName}.woff') format('woff');
  
      font-weight: ${fWeight};
      font-style: normal;
    }
  `;

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const stretchBlock = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
