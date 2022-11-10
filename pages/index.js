import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import Card from '../components/Card';
import Wallpaper from '../components/Wallpaper';

export default function Home() {
  return (
    <div>
      <Wallpaper/>
      <Card/>
    </div>
  )
}
