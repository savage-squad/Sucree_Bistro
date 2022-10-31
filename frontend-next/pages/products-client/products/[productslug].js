import Head from 'next/head';

//import styles from '../../styles/SingleProduct.module.css';

const singleproduct = () => {
	return (
		<>
			<Head>
				<title>Dracaena fragrans</title>
			</Head>
			<div >
				<div >
					<img src="/images/croton.png" alt="" />
				</div>
				<div>
					<h3>Dracaena fragrans</h3>
					<p >$50</p>
					<div >
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. At
							impedit voluptatum vitae labore molestiae, maiores, hic ad
							officiis laudantium in officia, nam vel quod! Nesciunt aperiam
							explicabo facere laboriosam eius.
						</p>
					</div>
					<button className="btn">Add to cart 🛒</button>
				</div>
			</div>
		</>
	);
};

export default singleproduct;
