import allProducts from './data/products.json';
import Head from 'next/head';
import Link from 'next/link';
import { grid } from '@chakra-ui/react';

//import styles from '../products-client/styles/Home.modulo.css';

export default function HomeProducts() {
	return (
		<>

			<div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px", maxWidth: "500px" }}>
				<h2>
					All Products <span>🌿</span>
				</h2>
				<div>
					{allProducts.map((product) => {
						return (
							<div key={product.id}>
								<Link href={`products/`}>
									<a>
										<div >
											<img src={product.image.url} alt={product.name} />
										</div>
									</a>
								</Link>
								<div>
									<h3>{product.name}</h3>
									<p>${product.price}</p>
									<button className="btn">Add to cart 🛒</button>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}
