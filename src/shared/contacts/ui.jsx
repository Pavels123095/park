import styles from './styles.module.scss';

export function ContactBlock({heading = '', data}) {
    return (
        <div key={data.id} className={styles['contacts']}>
            <div className={styles['contacts__title']} dangerouslySetInnerHTML={{ __html: heading }} />
            {
                data.phoneNumbers &&
                    data.phoneNumbers.map((number, index) => {
                        number = number.replace(/\D/g, '');
                        number[0] === '7' ? number = number.slice(1, number.length) : null;
                        number[0] === '8' ? number = number.slice(1, number.length) : null;

                        return (
                            <div key={index} className={styles['contacts__num']}>
                                <div className={styles['contacts__num']}>
                                <pre>
                                    <a
                                        href={`tel:+7${number}`}
                                        className={styles['contacts__phone']}
                                    >+7 {number.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, '($1) $2-$3-$4')}</a>
                                </pre>
                                </div>
                            </div>
                        )
                    })
            }
            {
                data.phoneNumber &&
                    <div className={styles['contacts__num']}>
                        <div className={styles['contacts__num']}>
                            <pre>
                                <a
                                    href={`tel:+${data.phoneNumber.replace(/\D/g, '')}`}
                                    className={styles['contacts__phone']}
                                >{data.phoneNumber}</a> {data.managerName && <span>({data.managerName})</span>}
                            </pre>
                        </div>
                    </div>
            }
            {
                data.email &&
                    <div className={styles['contacts__email']}>
                        <a href={`mailto:${data.email}`}>{data.email}</a>
                    </div>
            }
            {
                data.managerEmail &&
                    <div className={styles['contacts__email']}>
                        <a href={`mailto:${data.managerEmail}`}>{data.managerEmail}</a>
                    </div>
            }
            {
                data.presentationLink &&
                    <a href={data.presentationLink} className={`${styles['contacts__btn']} btn btn_blue`}>Скачать презентацию</a>
            }
        </div>
    )
}
