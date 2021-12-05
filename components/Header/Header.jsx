import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Header.module.scss'

const Header = () => (
  <header className={styles.header}>
    <div className={cn('content', styles.content)}>
      <Image
        priority
        src="/images/avatar.jpg"
        alt="Jessica Kelsall"
        className={styles.avatar}
        height={50}
        width={50}
      />
      <Link href="/">
        <a className={styles.title}>Lush Web Engineer Task: Jessica Kelsall</a>
      </Link>
    </div>
  </header>
)

export default Header
