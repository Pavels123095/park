'use client';

import {BreadCrumbs} from "../bread-crumbs";
import {SinglePageHeader} from "../../shared/ui/single-page-header";
import {SingleRenterContacts} from "../../entities/single-renter/contacts";
import {Gallery} from "../../shared/ui/gallery";
import {SingleRenterStocks} from "../../entities/single-renter/stocks";
import {SingleRenterSimilarRenters} from "../../entities/single-renter/similar-renters";

import styles from './styles.module.scss';

import {RENTERS_BREAD_CRUMBS} from "./config";

export function SingleRenterWidget({data, renterType}) {
    const breadCrumbsLevels = [
        {
            levelName: 'Главная',
            levelLink: '/',
        },
        {
            levelName: RENTERS_BREAD_CRUMBS[renterType].levelName,
            levelLink: RENTERS_BREAD_CRUMBS[renterType].levelLink,
        },
        {
            levelName: data && data.header.heading,
            levelLink: '',
        },
    ]

    return (
        <>
            <BreadCrumbs levels={breadCrumbsLevels} />

            <main className={styles['single-renter']}>
                {
                    data &&
                        <>
                            {
                                data.header &&
                                    <SinglePageHeader data={data.header} renterType={renterType} />
                            }
                            {
                                data.contacts &&
                                    <SingleRenterContacts data={data.contacts} />
                            }
                            {
                                data.gallery &&
                                    data.gallery.length > 0 &&
                                        <Gallery data={data.gallery} />
                            }
                            {
                                data.stocks &&
                                    data.stocks.length > 0 &&
                                        <SingleRenterStocks data={data.stocks} />
                            }
                            {
                                data.similarStores &&
                                    data.similarStores.length > 0 &&
                                        <SingleRenterSimilarRenters data={data.similarStores} renterType={renterType} />
                            }
                        </>
                }
            </main>
        </>
    )
}
