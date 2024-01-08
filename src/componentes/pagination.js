import { useDispatch, useSelector } from 'react-redux';
import styles from '../styles/paginationItems.module.css'
import { setPage } from '../store/slices/pagination';
import { useTranslation } from 'react-i18next';
const PaginationFotter = () => {
    const dispatch = useDispatch()
    const page = useSelector(state => state.changePage.page)
    return (
        <nav >
            <ul className="pagination justify-content-center">
                <li className="page-item"  >
                    <span className={`page-link ${styles.eachItemStyle}`} onClick={() => page !== 1 ? dispatch(setPage(page - 1)) : null} >
                        <span >&lt;</span>
                    </span>
                </li>
                <li className="page-item">
                    <span className={`page-link ${styles.eachItemStyle}`} onClick={() => dispatch(setPage(1))}>
                        <span>1</span>
                    </span>
                </li>
                <li className="page-item">
                    <span className={`page-link ${styles.eachItemStyle}`} onClick={() => dispatch(setPage(2))}>
                        <span>2</span>
                    </span>
                </li>
                <li className="page-item">
                    <span className={`page-link ${styles.eachItemStyle}`} onClick={() => dispatch(setPage(3))} >
                        <span>3</span>
                    </span>
                </li>
                <li className="page-item">
                    <span className={`page-link ${styles.eachItemStyle}`} onClick={() => dispatch(setPage(4))} >
                        <span>4</span>
                    </span>
                </li>
                <li className="page-item">
                    <span className={`page-link ${styles.eachItemStyle}`} onClick={() => dispatch(setPage(5))} >
                        <span>5</span>
                    </span>
                </li>
                <li className="page-item">
                    <span className={`page-link ${styles.eachItemStyle}`} onClick={() => dispatch(setPage(page + 1))}>
                        <span>&gt;</span>
                    </span>
                </li>
            </ul>
        </nav>
    )
}
export default PaginationFotter;