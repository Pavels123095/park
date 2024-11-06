import { Raleway, Russo_One } from "next/font/google";
import { Suspense } from "react";
import StoreProvider from "../shared/lib/store/StoreProvider";
import { Header } from "../widgets/header";
import { Footer } from "../widgets/footer/";
import Script from 'next/script';

import './_styles/global.scss';

export const metadata = {
    title: "ТРЦ Пушкино Парк",
    description: "ТРЦ Пушкино Парк",
    keywords: "ТРЦ Пушкино Парк"
};

export const fetchCache = 'force-no-store';

const raleway = Raleway({
    subsets: ['cyrillic'],
    display: "swap",
    weight: ['400', '600'],
    variable: '--family-raleway',
});

const russoOne = Russo_One({
    subsets: ['cyrillic'],
    display: "swap",
    weight: ['400'],
    variable: '--family-russo-one',
});

export const viewport = {
    width: 'device-width',
    initialScale: 1,
    viewportFit: 'cover'
}

export default function RootLayout({ children }) {
    return (
        <html lang="ru" className={`${raleway.variable} ${russoOne.variable}`}>
            <body>
                <StoreProvider>
                    <Header />
                    <div className={`header-fix header_fix`}></div>
                    <div className={'root-wrapper'}>
                        <div className={'main-outer'}>
                            {children}
                        </div>
                        <Footer />
                    </div>
                </StoreProvider>
                <script type="text/javascript" id="mapplic-script" src="https://mapplic.com/mapplic.js" defer></script>
            </body>
        </html>
    );
}
