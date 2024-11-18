import localFont from 'next/font/local';
import { Inter, Poppins } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

export const popins = Poppins({ 
    weight: "400",
    subsets: ["latin"]
})
// export const PPNeueMontreal = localFont({
//     src: [
//         {
//             path: '../../public/fonts/PPNeueMontreal-Medium.otf',
//             weight: '500',
//         },
//     ],
// });