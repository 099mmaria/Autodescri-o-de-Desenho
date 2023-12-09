import Head from 'next/head';
import Rodape from '../components/Footer';
import Topo from '../components/Navbar';
import styles from '../styles/Page.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title> DesignWeb </title>
      </Head>

      <Topo />

      <div className={styles.home}>
          <h2 >Explicação do porque criamos esse site:</h2>
          <p>A Audiodescrição (AD) é uma tecnologia assistiva pensada, inicialmente, para pessoas com Deficiência Visual (DV). Entretanto, já está sendo utilizada também para outros públicos, a exemplo das pessoas com Síndrome de Down ou disléxicos.</p>
          <p >A Audiodescrição é um recurso de acessibilidade que amplia o entendimento das pessoas com deficiência visual em eventos culturais, gravados ou ao vivo, como peças de teatro, programas de TV, exposições, mostras, músicas, óperas, desfiles e espetáculos de dança; eventos turísticos, esportivos, pedagógicos e científicos, tais como aulas, seminários, congressos, palestras, feiras e outros, por meio de informação sonora. É uma atividade de mediação linguística, uma modalidade de tradução intersemiótica, que transforma o visual em verbal, abrindo possibilidades maiores de acesso à cultura e à informação, contribuindo para a inclusão cultural, social e escolar. Além das pessoas com deficiência visual, a audiodescrição amplia também o entendimento de pessoas com deficiência intelectual, idosos e disléxicos (MOTTA & ROMEU FILHO, 2010, p.11).
             A disponibilidade do recurso pode ser feita mixada ao áudio original em filmes, distribuída em fones receptores em teatros, acessada através de texto pelos softwares leitores de tela em livros digitais, disponibilizada em audioguias, entre outros.</p>
          <p>Por isso o DesignWeb foi criado, um site onde qualquer pessoa vai poder acessar e utilizar as nossas autodescrições de objetos cadastrados por pessoas no nosso banco de dados</p>
      </div>
 
        <button className={styles.botao1}><a href="\objetos">Todos os Dessenhos</a></button>
        <button className={styles.botao2}><a href="https://www.youtube.com/watch?v=73a411Dvjh4">Saiba mais sobre autodescrição</a></button>

      <Rodape />
    </div>
  )
}