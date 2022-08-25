import { Header } from './components/Header/Header'
import { Post } from './components/Post/Post'
import { Sidebar } from './components/Sidebar/Sidebar'

import styles from './App.module.css'
import './global.css'

const posts = [
  {
    id: 1,
    author: {
      name: "Santos",
      role: "Time de futebol",
      avatarUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Santos_logo.svg/1200px-Santos_logo.svg.png",
    },
    content: [
      { type: 'paragraph', content: 'O MEU 🔟 VOLTOU!', },
      { type: 'paragraph', content: 'A camisa 10 reencontrará um velho amigo: o meia Yeferson Soteldo acertou seu retorno ao Peixão!', },
      { type: 'paragraph', content: 'O venezuelano volta ao Alçapão em contrato de empréstimo junto ao Tigres até julho de 2023, com opção de compra e passe fixado.', },
      { type: 'link', content: '#OPequenoGiganteEstáDeVolta', link: '#',},
      { type: 'link', content: 'Clique aqui para saber mais', link: 'https://bit.ly/SoteldoVoltou',}
    ],
    publishedAt: new Date('2022-08-16 21:43:10')
  },

  {
    id: 2,
    author: {
      name: "Lucas Henrique",
      role: "Santista",
      avatarUrl: "https://scontent.fsjk2-1.fna.fbcdn.net/v/t39.30808-6/289545399_2102178693292643_2158944600201346745_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGNnumPqPtVLvixhAgnMeiEjRB2o1JYKYuNEHajUlgpi0RI89HE0WGTwTR1wc5iSqqlwIUQvnG0_ZnUsX50bh1m&_nc_ohc=CbyAAy2f1pQAX_mhsMG&_nc_ht=scontent.fsjk2-1.fna&oh=00_AT_ndU-ar6xDhjOirk-mHRsdXL4JPFyEORkBHItn7cWqog&oe=62F9C3DC",
    },
    content: [
      { type: 'paragraph', content: 'Soteldo de volta pro meu SANTOS. Que felicidade!', },
      { type: 'paragraph', content: 'O MEU 🔟 VOLTOU!', },
    ],
    publishedAt: new Date('2022-08-16 23:21:45')
  },
  

];

export function App() {
  return (
    <div>
    <Header />

    <div className={styles.wrapper}>
      <Sidebar />
      <main>
          {posts.map( post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
      </main> 
    </div>
    </div>
  )
}


