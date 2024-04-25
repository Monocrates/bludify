import { Flex } from '@radix-ui/themes';
import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Log-in application</h1>
      <Flex gap="2">
        <Link href="/login">Log-in</Link>
        <Link href="/singup">Sign-up</Link>
      </Flex>
    </main>
  );
}
