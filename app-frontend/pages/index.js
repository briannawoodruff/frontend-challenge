import Head from 'next/head';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Challenge from '../components/Challenge';

export default function Home({ randomuser }) {
	return (
		<div className='flex flex-col items-center justify-center min-h-screen py-2'>
			<Head>
				<title>Frontend Boilerplate React/NextJS</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
				<Hero />
				<Challenge randomuser={randomuser} />
			</main>
			<Footer />
		</div>
	);
}

export async function getStaticProps() {
	const res = await fetch('https://randomuser.me/api/?inc=name,picture,location&results=10&noinfo')
	const randomuser = await res.json()

	return {
		props: {
			randomuser,
		},
	}
}
