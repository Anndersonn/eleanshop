import React, { useEffect } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

import LikeHeart from '../../../assets/img/like.svg';
import './index.css'
import axios from 'axios';
import { useSelector } from 'react-redux';

import { setLoaded, setProduct } from '../../../redux/actions/productActions';
import { useDispatch } from 'react-redux';

import { setPage } from '../../../redux/actions/pagination';



import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Loader from '../../../loader/skeletonLoader';
import SideLoader from '../../../loader/skeletonLoaderSideProducts';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function ListingProducts() {

    let products = useSelector(state => state.allProducts.products)
    const dispatch = useDispatch()


    let currentPage = useSelector(state => state.page.currentPage)
    let pageSize = useSelector(state => state.page.pageSize)
    let totalProductsCount = useSelector(state => state.page.totalCount)

    const pages = []

    let pagesCount = Math.ceil(totalProductsCount / pageSize);

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const { isLoaded } = useSelector(state => {
        return {
            isLoaded: state.allProducts.isLoaded,
        }
    });

    console.log(products)

    useEffect(() => {
        dispatch(setLoaded(false))
        axios.get(`https://jsonplaceholder.typicode.com/photos?_page=${currentPage}&max_limit=${pageSize}`).then((response) => {
            dispatch(setProduct(response.data))
        })
    }, [currentPage])

    return (
        <>
            <Container>
                <Container className='d-flex m-0 p-0'>
                    <Row xs={6} style={{ height: 'fit-content' }} className='pr-3 m-0'>
                        {isLoaded ? products && products.map(item => {
                            return (
                                <Col className=' h-100 py-3 pl-5' md={4} >
                                    <Image className='w-100' rounded fluid src={item.url} />
                                    <div className='info'>
                                        <div className='desc d-flex '>
                                            <Link to={`/product/${item.id}`}>
                                                <p className="font-weight-bold">/ Классический комплект с смокингом и жилетом</p>
                                            </Link>
                                            <Image src={LikeHeart} />
                                        </div>
                                        <div className='secondary__info d-flex '>
                                            <div className="price font-weight-bold">65 300 ₽</div>
                                            <div className="speciality">Мировая классика</div>
                                        </div>
                                    </div>
                                </Col>
                            )
                        }) : Array(10).fill(0).map((_, index) => <Col className=' h-100 py-3 pl-5' md={4} ><SkeletonTheme baseColor="#202020" highlightColor="#444"><Loader /></SkeletonTheme></Col>)}
                    </Row>
                    <Row xs={2} className=' m-0 pr-3' >
                        {isLoaded ? products && products.slice(0, 2).map(item => {
                            return (
                                <Col md={12} className='d-flex flex-column p-0 py-3'>

                                    <Image className='h-100' style={{ objectFit: 'cover' }} rounded fluid src={item.url} />
                                    <div className='info'>
                                        <div className='desc d-flex'>
                                            <p className='font-weight-bold'>/ Классический комплект с смокингом и жилетом</p>
                                            <Image src={LikeHeart} />
                                        </div>
                                        <div className='secondary__info d-flex'>
                                            <div className="price font-weight-bold">65 300 ₽</div>
                                            <div className="speciality">Мировая классика</div>
                                        </div>
                                    </div>
                                </Col>
                            )
                        }) : Array(2).fill(0).map((_, index) => <Col className=' h-100 py-3 pl-5' md={4} ><SideLoader /></Col>)}
                    </Row>
                </Container >
            </Container>
            <div className='pagination__container d-flex justify-content-center'>
                {pages.map((page, index) => <span key={index} onClick={() => dispatch(setPage(page))} className={currentPage === page ? 'active__pagination p-2 border m-1 my-5' : 'p-2 border m-1 my-5'}>{page}</span>)}
            </div>

        </>
    );
}

export default ListingProducts;