import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.parent}>
        <a className={styles.a} href="https://axodouble.com/">
          <h1 className={styles.h1}>AXODOUBLE.COM</h1>
        </a>
        Welcome to axodouble.com, <a href='https://xdbl.dev/?l=0eSF3'>join</a> my <a href='https://xdbl.dev/?l=0eSF3'>discord</a>!<br />
        <h3 className={styles.h3}>Random Quote.</h3>
      </div>
    </main>
  );
}
