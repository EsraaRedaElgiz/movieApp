import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Suspense } from 'react';
import Loader from '../componentes/loader'
import Header from '../componentes/header';
const MoviesList = React.lazy(() => import('../pages/moviesList'))
const MovieDetails = React.lazy(() => import('../pages/movieDetails'))
const NotFound = React.lazy(() => import('../pages/notFound'))
const FottorRouting = React.lazy(() => import('../componentes/fotterRouting'))
const WishList = React.lazy(() => import('../pages/movieWishList'))
const SearchList = React.lazy(() => import('../pages/searchPage'))

export default function Router() {
    return (
        <Suspense fallback={<Loader />}>
            <Routes>
                <Route element={<FottorRouting />}>
                    <Route element={<Header />}>
                        <Route path="" element={<MoviesList />} />
                    </Route>
                </Route>
                <Route element={<Header />}>
                    <Route path="/details/:id" element={<MovieDetails />} />
                </Route>
                <Route element={<Header />}>
                    <Route path='/wishlist' element={<WishList />} />
                </Route>
                <Route element={<Header />}>
                    <Route path='/searchList/:searchValue' element={<SearchList />} />
                </Route>
                <Route path='*' element={<NotFound />} />
            </Routes>
        </Suspense>
    )
}
