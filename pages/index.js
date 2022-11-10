import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import Card from '../components/Card';
import Wallpaper from '../components/Wallpaper';
import GridLayout from '../components/GridLayout';

export default function Home() {
  return (
    <div>
      <Wallpaper/>
      <GridLayout/>
    </div>
  )
}
