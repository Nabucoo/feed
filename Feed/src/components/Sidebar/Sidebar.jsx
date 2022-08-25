import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'
import { Avatar } from '../Avatar/Avatar'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>

            <img 
            className={styles.cover} 
            src="https://images.unsplash.com/photo-1540292821211-d55dde0bd68c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=40"/>

            <div className={styles.profile}>
                <Avatar src="https://scontent.fsjk2-1.fna.fbcdn.net/v/t39.30808-6/289545399_2102178693292643_2158944600201346745_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGNnumPqPtVLvixhAgnMeiEjRB2o1JYKYuNEHajUlgpi0RI89HE0WGTwTR1wc5iSqqlwIUQvnG0_ZnUsX50bh1m&_nc_ohc=CbyAAy2f1pQAX_mhsMG&_nc_ht=scontent.fsjk2-1.fna&oh=00_AT_ndU-ar6xDhjOirk-mHRsdXL4JPFyEORkBHItn7cWqog&oe=62F9C3DC"/>

                <strong>Lucas Henrique</strong>
                <span>Santista</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}