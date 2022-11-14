import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import Wallpaper from '../components/home/Wallpaper';
import CardLayout from '../components/home/CardLayout';
import InfosLayout from '../components/home/InfosLayout';
import LayoutBeneficios from '../components/home/LayoutBeneficios';

export default function Home() {
  return (
    <div>
      <Wallpaper/>
      <CardLayout/>
      <InfosLayout/>
      <LayoutBeneficios/>
    </div>
  )
}
