import { Rubik, Rajdhani } from 'next/font/google';

// We also have setup the tailwind font config accordingly.
// We have to pass the font.variable and the tailwind font variable
// in the body classname.
export const primary = Rubik({
  subsets: ['latin'],
  variable: '--font-primary',
});

export const secondary = Rajdhani({
  subsets: ['latin'],
  variable: '--font-secondary',
  weight: ['300', '400', '500', '600', '700'],
});
