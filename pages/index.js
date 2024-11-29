import { useEffect, useState } from 'react';
import ProductList from '@/components/ProductList';
import SearchForm from '@/components/SearchForm';
import styles from '@/styles/Home.module.css';
import instance from '@/lib/axios';
import Head from 'next/head';

export async function getStaticProps() {
  const res = await instance.get('/products');
  const products = res.data.results;

  return {
    props: {
      products,
    }
  }
}

export default function Home( {products} ) {
  // const [products, setProducts] = useState([]);

  // async function getProducts() {
  //   const res = await instance.get('/products');
  //   const nextProducts = res.data.results;
  //   setProducts(nextProducts);
  // }

  // useEffect(() => {
  //   getProducts();
  // }, []);

  return (
    <>
      <Head>
        <title>Codeitmall</title>
      </Head>
      <SearchForm />
      <ProductList className={styles.products} products={products} />
    </>
  )
}
