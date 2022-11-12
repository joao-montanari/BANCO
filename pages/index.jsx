import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import Wallpaper from '../components/Wallpaper';
import CardLayout from '../components/CardLayout';
import InfosLayout from '../components/InfosLayout';

export default function Home() {
  return (
    <div>
      <Wallpaper/>
      <CardLayout/>
      <InfosLayout/>
    </div>
  )
}
