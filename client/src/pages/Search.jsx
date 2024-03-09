import React from 'react'
import { useLocation } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import Product from '../components/Product'
import CategoryNav from '../components/CategoryNav'

const Search = () => {
	const location = useLocation()
	const searchParrams = new URLSearchParams(location.search)
	const searchTerms = searchParrams.get('query')
	console.log(searchTerms)
	// get products based on search term
	const { data } = useFetch(
		`/products?populate=*&filters[title][$contains]=${searchTerms}`
	)
	console.log(data)

	return (
		<div className='mb-[30px] pt-40 lg:pt-4 xl:pt-0 min-h-screen'>
			<div className='container mx-auto'>
				<div className='flex gap-x-[30px] items-center xl:justify-start justify-center '>
					{/*Category Nav */}
					<CategoryNav />
					{/*title */}
					<div className=''>
						<div className='py-3 text-xl uppercase text-center lg:text-left'>
							{data?.length > 0
								? `${data.length} results for ${searchTerms}`
								: `No results found for ${searchTerms}`}
						</div>
						{/* products grid */}
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[15px] md:gap-[30px]'>
							{data?.map((product) => {
								return (
									<Product
										product={product}
										key={product.id}
									/>
								)
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Search
